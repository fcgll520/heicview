const dropzone = document.querySelector("[data-dropzone]");
const fileInput = document.querySelector("[data-file-input]");
const previewGrid = document.querySelector("[data-preview-grid]");
const outputGrid = document.querySelector("[data-output-grid]");
const outputHint = document.querySelector("[data-output-hint]");
const fileCount = document.querySelector("[data-file-count]");
const formatSelect = document.querySelector("[data-format]");
const qualityInput = document.querySelector("[data-quality]");
const qualityValue = document.querySelector("[data-quality-value]");
const convertButton = document.querySelector("[data-convert]");
const clearButton = document.querySelector("[data-clear]");

const state = {
  files: []
};

const formatExtension = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp"
};

function formatBytes(bytes) {
  if (!Number.isFinite(bytes)) return "0 B";
  if (bytes < 1024) return `${bytes} B`;
  const units = ["KB", "MB", "GB"];
  let size = bytes / 1024;
  let index = 0;
  while (size >= 1024 && index < units.length - 1) {
    size /= 1024;
    index += 1;
  }
  return `${size.toFixed(1)} ${units[index]}`;
}

function isHeic(file) {
  const name = file.name.toLowerCase();
  const type = file.type.toLowerCase();
  return name.endsWith(".heic") || name.endsWith(".heif") || type.includes("heic") || type.includes("heif");
}

function updateQualityValue() {
  if (!qualityValue || !qualityInput) return;
  qualityValue.textContent = Number(qualityInput.value).toFixed(2);
}

function createPlaceholder(text) {
  const placeholder = document.createElement("div");
  placeholder.className = "thumb__placeholder";
  placeholder.textContent = text;
  return placeholder;
}

function createThumb(file, sourceUrl) {
  const card = document.createElement("div");
  card.className = "thumb";

  const img = document.createElement("img");
  img.className = "thumb__img";
  img.alt = file.name;

  if (sourceUrl) {
    img.src = sourceUrl;
  }

  img.addEventListener("load", () => {
    if (sourceUrl) URL.revokeObjectURL(sourceUrl);
  });

  img.addEventListener("error", () => {
    card.classList.add("thumb--error");
    img.remove();
    card.prepend(createPlaceholder("Preview unavailable"));
  });

  const meta = document.createElement("div");
  meta.className = "thumb__meta";

  const name = document.createElement("div");
  name.className = "thumb__name";
  name.textContent = file.name;

  const size = document.createElement("div");
  size.className = "thumb__status";
  size.textContent = formatBytes(file.size);

  meta.append(name, size);
  card.append(img, meta);
  return card;
}

function createOutputThumb(fileName, blob, statusText, isError) {
  const card = document.createElement("div");
  card.className = `thumb${isError ? " thumb--error" : ""}`;

  if (!isError && blob) {
    const url = URL.createObjectURL(blob);
    const img = document.createElement("img");
    img.className = "thumb__img";
    img.alt = fileName;
    img.src = url;
    img.addEventListener("load", () => URL.revokeObjectURL(url));
    card.appendChild(img);
  } else {
    card.appendChild(createPlaceholder("Conversion failed"));
  }

  const meta = document.createElement("div");
  meta.className = "thumb__meta";

  const name = document.createElement("div");
  name.className = "thumb__name";
  name.textContent = fileName;

  const status = document.createElement("div");
  status.className = "thumb__status";
  status.textContent = statusText;

  meta.append(name, status);

  if (!isError && blob) {
    const link = document.createElement("a");
    link.className = "thumb__link";
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.textContent = "Download";
    meta.appendChild(link);
  }

  card.appendChild(meta);
  return card;
}

function renderPreview() {
  if (!previewGrid || !fileCount) return;
  previewGrid.innerHTML = "";
  const files = state.files;
  fileCount.textContent = String(files.length);

  if (!files.length) {
    previewGrid.appendChild(createPlaceholder("No previews yet"));
    return;
  }

  files.forEach((file) => {
    const url = URL.createObjectURL(file);
    previewGrid.appendChild(createThumb(file, url));
  });
}

function addFiles(files) {
  if (!files.length) return;
  state.files.push(...files);
  renderPreview();
}

function normalizeFiles(fileList) {
  return Array.from(fileList).filter((file) => isHeic(file) || file.type.startsWith("image/"));
}

async function loadImageFromFile(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("decode_failed"));
    };
    img.src = url;
  });
}

async function convertFile(file, mime, quality) {
  const img = await loadImageFromFile(file);
  const canvas = document.createElement("canvas");
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("no_context");
  ctx.drawImage(img, 0, 0);
  const blob = await new Promise((resolve) => canvas.toBlob(resolve, mime, quality));
  if (!blob) throw new Error("encode_failed");
  return blob;
}

async function handleConvert() {
  if (!outputGrid || !outputHint) return;
  const files = state.files;
  if (!files.length) return;

  outputGrid.innerHTML = "";
  outputHint.textContent = "Converting, please wait...";
  convertButton?.setAttribute("disabled", "true");

  const mime = formatSelect?.value || "image/png";
  const quality = Number(qualityInput?.value || "0.9");

  for (const file of files) {
    const baseName = file.name.replace(/\.[^.]+$/, "");
    const ext = formatExtension[mime] || "png";
    const outputName = `${baseName}.${ext}`;
    try {
      const blob = await convertFile(file, mime, quality);
      outputGrid.appendChild(createOutputThumb(outputName, blob, formatBytes(blob.size), false));
    } catch {
      outputGrid.appendChild(createOutputThumb(outputName, null, "Conversion failed", true));
    }
  }

  outputHint.textContent = "Conversion complete. Download your results.";
  convertButton?.removeAttribute("disabled");
}

function handleClear() {
  state.files = [];
  if (previewGrid) previewGrid.innerHTML = "";
  if (outputGrid) outputGrid.innerHTML = "";
  if (outputHint) outputHint.textContent = "Converted previews appear here";
  if (fileCount) fileCount.textContent = "0";
  renderPreview();
}

if (fileInput) {
  fileInput.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement) || !target.files) return;
    addFiles(normalizeFiles(target.files));
    target.value = "";
  });
}

if (dropzone) {
  dropzone.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropzone.classList.add("is-dragover");
  });

  dropzone.addEventListener("dragleave", () => {
    dropzone.classList.remove("is-dragover");
  });

  dropzone.addEventListener("drop", (event) => {
    event.preventDefault();
    dropzone.classList.remove("is-dragover");
    const files = normalizeFiles(event.dataTransfer?.files || []);
    addFiles(files);
  });
}

if (qualityInput) {
  qualityInput.addEventListener("input", updateQualityValue);
  updateQualityValue();
}

convertButton?.addEventListener("click", () => {
  handleConvert();
});

clearButton?.addEventListener("click", handleClear);

renderPreview();
