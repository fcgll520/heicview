const STORAGE_KEY = "heicview.language";
const DEFAULT_LANG = "en";
const SUPPORTED_LANGS = ["en", "zh-Hant", "de", "fr", "ja", "pt", "es"];

const translations = {
  en: {
    htmlLang: "en",
    metaTitle: "HeicView | Offline HEIC Converter for Windows",
    metaDescription:
      "HeicView is an offline HEIC converter for Windows. Batch convert HEIC to JPG, PNG, and WebP with local preview and privacy-first workflow.",
    brandTag: "Offline HEIC Converter for Windows",
    nav: ["Features", "Use Cases", "Workflow", "FAQ", "Contact Us"],
    topDownload: "Free Download",
    heroTitle: "An Offline HEIC Batch Converter Built for Windows",
    heroSubtitle:
      "HeicView runs fully offline with no uploads. Batch import HEIC / HEIF images, export to JPG, PNG, or WebP, and control output quality with local preview.",
    heroButtons: ["Download for Windows", "Explore Features"],
    heroBullets: [
      "Offline conversion with full privacy",
      "Batch export to JPG / PNG / WebP",
      "Local preview with quality control"
    ],
    heroPanel: ["Desktop App Preview", "HeicView v1"],
    metrics: ["Local Processing", "Export Formats", "Batch Conversion"],
    highlights: [
      ["Faster Throughput", "Drag and drop imports auto-detect HEIC files, reducing repetitive manual steps."],
      ["Stronger Privacy", "All images are processed on your device. No cloud upload. No online dependency."],
      ["Better Output Quality", "Choose formats and compression settings to match sharing, archive, or web use."]
    ],
    featuresTitle: "Core Feature Set",
    featuresDesc: "Designed around offline, batch, and controllable output from import to export.",
    featureCards: [
      {
        title: "Batch Import",
        text: "Add files by drag-and-drop or click-to-select. HEIC / HEIF files are detected automatically.",
        bullets: ["Folder-level continuous processing", "Automatic count and size summary", "Clear and restart anytime"]
      },
      {
        title: "Multi-Format Export",
        text: "Export to JPG / PNG / WebP for social media sharing, archives, or website publishing.",
        bullets: ["Unified quality setting", "Apply settings in bulk", "Download results instantly"]
      },
      {
        title: "Local Preview and Validation",
        text: "Preview before and after conversion to quickly verify clarity, ratio, and file size.",
        bullets: ["Clear thumbnail grid", "Visible error feedback", "No original file upload"]
      },
      {
        title: "Stable Offline Runtime",
        text: "Works without internet, ideal for private networks, travel, and privacy-sensitive workflows.",
        bullets: ["No cloud API required", "No network fluctuation impact", "Fast startup and response"]
      },
      {
        title: "Clean UX",
        text: "Focused on high-frequency actions with reduced complexity for both light and power users.",
        bullets: ["Low learning curve", "Short action path", "Clear visual hierarchy"]
      },
      {
        title: "Windows Desktop Focus",
        text: "Built for Windows local workflows and file-management habits.",
        bullets: ["Lightweight installer", "Compatible with common image workflows", "No browser upload needed"]
      }
    ],
    scenariosTitle: "Typical Use Cases",
    scenariosDesc: "From personal photo management to team asset processing, HeicView fits in quickly.",
    scenarios: [
      ["Mobile Photo Archive", "Convert HEIC photos exported from iPhone to JPG for cloud drive, NAS, or local album organization."],
      ["E-commerce Assets", "Batch convert to WebP or JPG to reduce image size and improve product page loading speed."],
      ["Office Documents", "Convert HEIC to PNG/JPG before inserting into PPT, Word, or PDF for better compatibility."],
      ["Privacy-Sensitive Work", "All processing stays local, ideal for internal networks, restricted files, and sensitive assets."]
    ],
    workflowTitle: "Convert in 3 Steps",
    workflowDesc: "A simple, clear workflow from import to export for continuous batch tasks.",
    steps: [
      ["Install HeicView", "Download and install the Windows package to launch the desktop converter."],
      ["Import HEIC Files", "Drag or select multiple images to build preview cards and the conversion queue."],
      ["Choose Format and Export", "Set output format and quality, then convert and save to your local folder."]
    ],
    callouts: [
      ["Why not online conversion?", "HEIC decoding depends on local environments. Desktop offline conversion is more stable and privacy friendly."],
      ["Recommended export strategy", "For social sharing, prioritize JPG/WebP. For design and post-editing, choose PNG for more detail."]
    ],
    faqTitle: "Frequently Asked Questions",
    faqDesc: "Common questions about HeicView and HEIC conversion.",
    faq: [
      ["Does HeicView support online conversion?", "No. HeicView is a Windows desktop offline converter focused on local processing and privacy."],
      ["What if preview fails after import?", "Check whether files are complete and try importing in smaller batches. Failed files will be marked clearly."],
      ["Is batch conversion slow?", "Speed depends on file count, resolution, and export format. Process by folder and tune quality by use case."],
      ["Which output formats are supported?", "Current export formats are JPG, PNG, and WebP for sharing, office documents, and web assets."]
    ],
    ctaTitle: "Start Your Offline HEIC Workflow",
    ctaText: "No upload needed. Batch process quickly and export to common image formats.",
    ctaButtons: ["Download Windows Installer", "Business Inquiry"],
    footerMeta: "HEIC batch converter with offline preview and export",
    footerLinks: ["Home", "Features", "Scenarios", "Download", "About Us", "Privacy", "Terms"]
  },
  "zh-Hant": {
    htmlLang: "zh-Hant",
    metaTitle: "HeicView | Windows 離線 HEIC 轉檔工具",
    metaDescription: "HeicView 是適用於 Windows 的離線 HEIC 轉檔工具，可批次轉為 JPG、PNG、WebP，並提供本機預覽與隱私優先流程。",
    brandTag: "Windows 離線 HEIC 轉檔工具",
    nav: ["功能特色", "應用場景", "使用流程", "常見問題", "聯絡我們"],
    topDownload: "免費下載",
    heroTitle: "專為 Windows 打造的 HEIC 離線批次轉換器",
    heroSubtitle: "HeicView 完全在本機離線處理，不需上傳。可批次匯入 HEIC / HEIF，快速輸出 JPG、PNG、WebP，並透過預覽與品質參數控制結果。",
    heroButtons: ["下載 Windows 版本", "查看功能"],
    heroBullets: ["離線轉換，隱私可控", "支援 JPG / PNG / WebP 批次輸出", "本機預覽與品質調整"],
    heroPanel: ["桌面應用預覽", "HeicView v1"],
    metrics: ["本機處理", "輸出格式", "批次轉換"],
    highlights: [
      ["更高處理效率", "拖放匯入後自動辨識 HEIC，減少重複操作。"],
      ["更好的隱私", "所有圖片都在本機處理，不經雲端。"],
      ["更佳輸出品質", "可依需求設定格式與壓縮品質。"]
    ],
    featuresTitle: "核心功能",
    featuresDesc: "圍繞離線、批次、可控輸出設計，涵蓋完整流程。",
    featureCards: [
      { title: "批次匯入", text: "支援拖放或點選加入，系統自動辨識 HEIC / HEIF。", bullets: ["可匯入整個資料夾", "自動統計數量與容量", "可隨時清空重來"] },
      { title: "多格式輸出", text: "可輸出 JPG / PNG / WebP，適合分享、歸檔與網頁使用。", bullets: ["統一品質參數", "批次套用設定", "轉檔後立即下載"] },
      { title: "本機預覽與驗證", text: "轉換前後可預覽，快速確認清晰度、比例與檔案大小。", bullets: ["縮圖清晰呈現", "錯誤狀態明確", "原圖不需上傳"] },
      { title: "穩定離線執行", text: "無網路也可運作，適合內網與敏感資料情境。", bullets: ["不依賴雲端 API", "不受網路波動影響", "啟動與回應快速"] },
      { title: "簡潔操作體驗", text: "聚焦高頻功能，降低複雜度，適合各類使用者。", bullets: ["上手門檻低", "操作路徑短", "視覺層次清楚"] },
      { title: "Windows 桌面優化", text: "針對 Windows 本機工作流程與檔案管理習慣設計。", bullets: ["安裝包輕量", "相容常見流程", "無需瀏覽器上傳"] }
    ],
    scenariosTitle: "典型應用場景",
    scenariosDesc: "從個人相片管理到團隊素材處理都能快速導入。",
    scenarios: [
      ["手機相片歸檔", "將 iPhone 匯出的 HEIC 快速轉為 JPG，便於雲端或本機整理。"],
      ["電商素材處理", "批次轉為 WebP 或 JPG，降低體積並提升頁面載入速度。"],
      ["辦公文件配圖", "先轉為 PNG/JPG 再插入 PPT、Word、PDF，提升相容性。"],
      ["隱私敏感環境", "所有處理都在本機完成，適合內網與受限資料。"]
    ],
    workflowTitle: "3 步完成轉換",
    workflowDesc: "從匯入到輸出流程簡潔，適合連續批次任務。",
    steps: [
      ["安裝 HeicView", "下載並安裝 Windows 版本，啟動桌面轉檔工具。"],
      ["匯入 HEIC 檔案", "拖放或選取多張圖片，建立預覽與待轉換佇列。"],
      ["設定格式並輸出", "選擇輸出格式與品質後，轉換並儲存到本機。"]
    ],
    callouts: [
      ["為何不做線上轉換？", "HEIC 解碼高度依賴本機環境，離線桌面方案更穩定也更重視隱私。"],
      ["輸出格式建議", "社群分享可優先 JPG/WebP；設計後製可選 PNG 保留細節。"]
    ],
    faqTitle: "常見問題",
    faqDesc: "關於 HeicView 與 HEIC 轉換的常見問題。",
    faq: [
      ["支援線上轉換嗎？", "不支援。HeicView 為 Windows 桌面離線工具，重點在本機處理與隱私。"],
      ["匯入後預覽失敗怎麼辦？", "先確認檔案是否完整，再嘗試分批匯入。異常檔案會有明確提示。"],
      ["批次轉換會很慢嗎？", "速度取決於數量、解析度與格式。建議分批處理並調整品質。"],
      ["支援哪些輸出格式？", "目前支援 JPG、PNG、WebP。"]
    ],
    ctaTitle: "立即開始你的 HEIC 離線流程",
    ctaText: "不需上傳，快速批次處理並輸出常用格式。",
    ctaButtons: ["下載 Windows 安裝包", "商務合作諮詢"],
    footerMeta: "HEIC 批次轉檔與本機預覽工具",
    footerLinks: ["首頁", "功能", "場景", "下載", "關於我們", "隱私", "條款"]
  },
  de: {
    htmlLang: "de",
    metaTitle: "HeicView | Offline-HEIC-Konverter für Windows",
    metaDescription: "HeicView konvertiert HEIC-Dateien offline unter Windows in JPG, PNG und WebP mit lokaler Vorschau.",
    brandTag: "Offline-HEIC-Konverter für Windows",
    nav: ["Funktionen", "Anwendungsfälle", "Ablauf", "FAQ", "Kontakt"],
    topDownload: "Kostenlos herunterladen",
    heroTitle: "Ein Offline-HEIC-Batch-Konverter für Windows",
    heroSubtitle: "Vollständig lokal ohne Uploads. HEIC/HEIF im Batch importieren und als JPG, PNG oder WebP exportieren.",
    heroButtons: ["Für Windows herunterladen", "Funktionen ansehen"],
    heroBullets: ["Offline und datenschutzfreundlich", "Batch-Export in JPG/PNG/WebP", "Lokale Vorschau mit Qualitätskontrolle"],
    heroPanel: ["Desktop-App Vorschau", "HeicView v1"],
    metrics: ["Lokale Verarbeitung", "Exportformate", "Batch-Konvertierung"],
    highlights: [["Mehr Tempo", "HEIC-Dateien werden beim Import automatisch erkannt."], ["Mehr Privatsphäre", "Alle Bilder bleiben auf Ihrem Gerät."], ["Bessere Qualität", "Format und Komprimierung flexibel einstellen."]],
    featuresTitle: "Kernfunktionen",
    featuresDesc: "Offline, Batch und kontrollierbare Ausgabe in einem durchgängigen Workflow.",
    featureCards: [
      {
        title: "Batch-Import",
        text: "Dateien per Drag-and-drop oder Klick hinzufügen. HEIC/HEIF wird automatisch erkannt.",
        bullets: ["Ordnerweise Verarbeitung", "Automatische Anzahl- und Größenübersicht", "Jederzeit zurücksetzen"]
      },
      {
        title: "Export in mehrere Formate",
        text: "Export nach JPG/PNG/WebP für Social Media, Archivierung und Web.",
        bullets: ["Einheitliche Qualitätseinstellung", "Einstellungen im Batch anwenden", "Ergebnisse sofort herunterladen"]
      },
      {
        title: "Lokale Vorschau und Prüfung",
        text: "Vor und nach der Konvertierung prüfen Sie Schärfe, Seitenverhältnis und Dateigröße.",
        bullets: ["Übersichtliches Thumbnail-Raster", "Sichtbares Fehler-Feedback", "Kein Upload der Originaldateien"]
      },
      {
        title: "Stabile Offline-Ausführung",
        text: "Funktioniert ohne Internet, ideal für interne Netzwerke und sensible Workflows.",
        bullets: ["Keine Cloud-API erforderlich", "Unabhängig von Netzschwankungen", "Schneller Start und schnelle Reaktion"]
      },
      {
        title: "Klare Bedienung",
        text: "Konzentriert auf häufige Aktionen mit geringer Komplexität für alle Nutzertypen.",
        bullets: ["Niedrige Einstiegshürde", "Kurze Klickwege", "Klare visuelle Hierarchie"]
      },
      {
        title: "Für Windows optimiert",
        text: "Ausgelegt auf lokale Windows-Workflows und Dateiverwaltung.",
        bullets: ["Leichtgewichtiger Installer", "Kompatibel mit typischen Bildprozessen", "Kein Browser-Upload nötig"]
      }
    ],
    scenariosTitle: "Typische Anwendungsfälle",
    scenariosDesc: "Geeignet für private Fotobestände und Team-Workflows.",
    scenarios: [["Mobile Fotoarchive", "HEIC von iPhone schnell nach JPG konvertieren."], ["E-Commerce Assets", "WebP/JPG im Batch für schnellere Ladezeiten."], ["Office-Dokumente", "PNG/JPG für bessere Kompatibilität in PPT, Word und PDF."], ["Sensible Daten", "Alles bleibt lokal im internen Umfeld."]],
    workflowTitle: "In 3 Schritten konvertieren",
    workflowDesc: "Ein klarer Ablauf von Import bis Export.",
    steps: [["HeicView installieren", "Windows-Installer herunterladen und starten."], ["HEIC-Dateien importieren", "Mehrere Bilder per Drag-and-drop hinzufügen."], ["Format wählen und exportieren", "Qualität einstellen und lokal speichern."]],
    callouts: [["Warum nicht online?", "HEIC-Decoding ist lokal oft stabiler und sicherer."], ["Export-Empfehlung", "JPG/WebP für Sharing, PNG für Detailtreue."]],
    faqTitle: "Häufige Fragen",
    faqDesc: "Wichtige Fragen zu HeicView und HEIC-Konvertierung.",
    faq: [["Gibt es Online-Konvertierung?", "Nein, HeicView ist ein Offline-Desktop-Tool."], ["Was tun bei Vorschaufehlern?", "Dateien prüfen und in kleineren Batches importieren."], ["Ist Batch langsam?", "Abhängig von Auflösung, Menge und Format."], ["Welche Formate werden unterstützt?", "JPG, PNG und WebP."]],
    ctaTitle: "Starten Sie Ihren Offline-HEIC-Workflow",
    ctaText: "Ohne Uploads, mit schnellem Batch-Processing.",
    ctaButtons: ["Windows Installer herunterladen", "Business-Anfrage"],
    footerMeta: "HEIC-Batch-Konverter mit lokaler Vorschau",
    footerLinks: ["Start", "Funktionen", "Szenarien", "Download", "Über uns", "Datenschutz", "AGB"]
  },
  fr: {
    htmlLang: "fr",
    metaTitle: "HeicView | Convertisseur HEIC hors ligne pour Windows",
    metaDescription: "HeicView convertit HEIC en JPG, PNG et WebP hors ligne sous Windows avec aperçu local.",
    brandTag: "Convertisseur HEIC hors ligne pour Windows",
    nav: ["Fonctionnalités", "Cas d'usage", "Processus", "FAQ", "Contact"],
    topDownload: "Téléchargement gratuit",
    heroTitle: "Un convertisseur HEIC par lot, hors ligne, pour Windows",
    heroSubtitle: "Traitement 100% local sans upload. Importez HEIC/HEIF en lot et exportez en JPG, PNG ou WebP.",
    heroButtons: ["Télécharger pour Windows", "Voir les fonctionnalités"],
    heroBullets: ["Conversion hors ligne et privée", "Export par lot JPG/PNG/WebP", "Aperçu local avec réglage qualité"],
    heroPanel: ["Aperçu de l'application", "HeicView v1"],
    metrics: ["Traitement local", "Formats d'export", "Conversion par lot"],
    highlights: [["Plus rapide", "Détection automatique des fichiers HEIC."], ["Plus privé", "Aucune image n'est envoyée au cloud."], ["Meilleure qualité", "Formats et compression ajustables."]],
    featuresTitle: "Fonctionnalités principales",
    featuresDesc: "Un workflow complet: hors ligne, par lot, et contrôlable.",
    featureCards: [
      {
        title: "Import par lot",
        text: "Ajoutez des fichiers par glisser-déposer ou clic. HEIC/HEIF est détecté automatiquement.",
        bullets: ["Traitement continu par dossier", "Résumé automatique du nombre et de la taille", "Réinitialisation à tout moment"]
      },
      {
        title: "Export multi-format",
        text: "Exportez en JPG/PNG/WebP pour le partage, l'archivage et le web.",
        bullets: ["Réglage de qualité unifié", "Application en lot des paramètres", "Téléchargement immédiat des résultats"]
      },
      {
        title: "Aperçu local et validation",
        text: "Vérifiez netteté, ratio et taille de fichier avant et après conversion.",
        bullets: ["Grille de miniatures claire", "Retour d'erreur visible", "Aucun envoi des fichiers originaux"]
      },
      {
        title: "Exécution hors ligne stable",
        text: "Fonctionne sans internet, adapté aux réseaux internes et données sensibles.",
        bullets: ["Aucune API cloud requise", "Indépendant des fluctuations réseau", "Démarrage et réponse rapides"]
      },
      {
        title: "UX épurée",
        text: "Centrée sur les actions fréquentes avec une complexité réduite.",
        bullets: ["Prise en main rapide", "Parcours d'action court", "Hiérarchie visuelle claire"]
      },
      {
        title: "Optimisé pour Windows",
        text: "Conçu pour les workflows locaux Windows et la gestion de fichiers.",
        bullets: ["Installeur léger", "Compatible avec les flux image courants", "Pas d'upload via navigateur"]
      }
    ],
    scenariosTitle: "Cas d'usage typiques",
    scenariosDesc: "Pour usage personnel comme pour les équipes.",
    scenarios: [["Archive photo mobile", "Convertissez les HEIC iPhone en JPG rapidement."], ["Ressources e-commerce", "WebP/JPG en lot pour alléger les pages."], ["Documents bureautiques", "PNG/JPG plus compatibles pour PPT, Word et PDF."], ["Contexte sensible", "Traitement local adapté aux environnements internes."]],
    workflowTitle: "Convertir en 3 étapes",
    workflowDesc: "Du chargement à l'export en quelques actions.",
    steps: [["Installer HeicView", "Téléchargez et installez la version Windows."], ["Importer des HEIC", "Ajoutez plusieurs images par glisser-déposer."], ["Choisir le format et exporter", "Réglez la qualité puis enregistrez en local."]],
    callouts: [["Pourquoi pas en ligne ?", "Le décodage HEIC est souvent plus fiable en local."], ["Conseil d'export", "JPG/WebP pour le partage, PNG pour les détails."]],
    faqTitle: "Questions fréquentes",
    faqDesc: "Réponses rapides sur HeicView.",
    faq: [["Conversion en ligne disponible ?", "Non, HeicView est un outil desktop hors ligne."], ["Échec d'aperçu après import ?", "Vérifiez les fichiers et importez par petits lots."], ["Conversion par lot lente ?", "Cela dépend de la quantité et de la résolution."], ["Formats pris en charge ?", "JPG, PNG et WebP."]],
    ctaTitle: "Démarrez votre workflow HEIC hors ligne",
    ctaText: "Sans upload, avec un traitement par lot rapide.",
    ctaButtons: ["Télécharger l'installeur Windows", "Demande commerciale"],
    footerMeta: "Convertisseur HEIC par lot avec aperçu local",
    footerLinks: ["Accueil", "Fonctionnalités", "Scénarios", "Télécharger", "À propos", "Confidentialité", "Conditions"]
  },
  ja: {
    htmlLang: "ja",
    metaTitle: "HeicView | Windows向けオフラインHEIC変換",
    metaDescription: "HeicView は Windows で HEIC を JPG/PNG/WebP にオフライン一括変換できるツールです。",
    brandTag: "Windows向けオフラインHEIC変換",
    nav: ["機能", "利用シーン", "手順", "FAQ", "お問い合わせ"],
    topDownload: "無料ダウンロード",
    heroTitle: "Windows向け オフライン HEIC 一括コンバーター",
    heroSubtitle: "アップロード不要で完全ローカル処理。HEIC/HEIF を一括変換し、JPG・PNG・WebP で出力できます。",
    heroButtons: ["Windows版をダウンロード", "機能を見る"],
    heroBullets: ["オフライン変換で高いプライバシー", "JPG/PNG/WebPを一括出力", "ローカルプレビューと品質調整"],
    heroPanel: ["デスクトップアプリ プレビュー", "HeicView v1"],
    metrics: ["ローカル処理", "出力形式", "一括変換"],
    highlights: [["処理が速い", "HEICを自動検出して作業を短縮。"], ["安全性が高い", "画像は端末内でのみ処理。"], ["品質を調整可能", "用途に合わせて形式と圧縮を設定。"]],
    featuresTitle: "主な機能",
    featuresDesc: "オフライン・一括・高コントロールのワークフロー。",
    featureCards: [
      {
        title: "一括インポート",
        text: "ドラッグ&ドロップまたはクリックで追加。HEIC/HEIFを自動検出します。",
        bullets: ["フォルダ単位で連続処理", "枚数と容量を自動集計", "いつでもリセット可能"]
      },
      {
        title: "複数形式で書き出し",
        text: "JPG/PNG/WebP に出力し、共有・保存・Web公開に対応します。",
        bullets: ["品質設定を一括適用", "バッチ設定の再利用", "結果をすぐダウンロード"]
      },
      {
        title: "ローカルプレビューと確認",
        text: "変換前後で画質・比率・ファイルサイズをすばやく確認できます。",
        bullets: ["見やすいサムネイル表示", "エラー状態を明確表示", "元画像のアップロード不要"]
      },
      {
        title: "安定したオフライン動作",
        text: "ネット接続なしでも動作し、社内環境や機密データにも適しています。",
        bullets: ["クラウドAPI不要", "回線状況の影響を受けにくい", "起動と応答が高速"]
      },
      {
        title: "シンプルなUX",
        text: "よく使う操作に集中し、初心者から上級者まで使いやすい設計です。",
        bullets: ["学習コストが低い", "操作ステップが短い", "視覚階層が明確"]
      },
      {
        title: "Windows向け最適化",
        text: "Windowsのローカル作業とファイル管理に合わせて設計されています。",
        bullets: ["軽量インストーラー", "一般的な画像ワークフローに対応", "ブラウザアップロード不要"]
      }
    ],
    scenariosTitle: "主な利用シーン",
    scenariosDesc: "個人利用からチーム運用まで対応。",
    scenarios: [["スマホ写真整理", "iPhoneのHEICをJPGへ素早く変換。"], ["EC素材作成", "WebP/JPGを一括作成して軽量化。"], ["業務資料", "PPT/Word/PDFに挿入しやすい形式へ。"], ["機密データ", "ローカル処理で外部送信なし。"]],
    workflowTitle: "3ステップで変換",
    workflowDesc: "読み込みから書き出しまでシンプル。",
    steps: [["HeicViewをインストール", "Windowsインストーラーを実行。"], ["HEICを読み込む", "複数画像をドラッグ&ドロップ。"], ["形式を選んで出力", "品質を設定してローカル保存。"]],
    callouts: [["なぜオンライン変換ではない？", "HEICデコードはローカル環境の方が安定しやすいためです。"], ["推奨形式", "共有はJPG/WebP、編集用途はPNGがおすすめ。"]],
    faqTitle: "よくある質問",
    faqDesc: "HeicViewに関する主要な質問。",
    faq: [["オンライン変換はできますか？", "いいえ、HeicViewはオフライン専用です。"], ["プレビューが失敗した場合は？", "ファイル確認後、少量ずつ再インポートしてください。"], ["一括変換は遅いですか？", "枚数・解像度・形式により変わります。"], ["対応形式は？", "JPG、PNG、WebPです。"]],
    ctaTitle: "オフラインHEICワークフローを開始",
    ctaText: "アップロード不要で一括高速処理。",
    ctaButtons: ["Windowsインストーラーをダウンロード", "法人お問い合わせ"],
    footerMeta: "ローカルプレビュー対応 HEIC一括変換ツール",
    footerLinks: ["ホーム", "機能", "シーン", "ダウンロード", "会社情報", "プライバシー", "利用規約"]
  },
  pt: {
    htmlLang: "pt",
    metaTitle: "HeicView | Conversor HEIC offline para Windows",
    metaDescription: "Converta HEIC para JPG, PNG e WebP no Windows com processamento local e sem upload.",
    brandTag: "Conversor HEIC offline para Windows",
    nav: ["Recursos", "Casos de uso", "Fluxo", "FAQ", "Contato"],
    topDownload: "Download grátis",
    heroTitle: "Conversor HEIC em lote e offline para Windows",
    heroSubtitle: "Processamento 100% local, sem uploads. Importe HEIC/HEIF em lote e exporte para JPG, PNG ou WebP.",
    heroButtons: ["Baixar para Windows", "Ver recursos"],
    heroBullets: ["Conversão offline com privacidade", "Exportação em lote JPG/PNG/WebP", "Pré-visualização local com controle de qualidade"],
    heroPanel: ["Prévia do app desktop", "HeicView v1"],
    metrics: ["Processamento local", "Formatos de saída", "Conversão em lote"],
    highlights: [["Mais rapidez", "Detecção automática de arquivos HEIC."], ["Mais privacidade", "Sem envio para a nuvem."], ["Melhor qualidade", "Formato e compressão ajustáveis."]],
    featuresTitle: "Recursos principais",
    featuresDesc: "Fluxo completo com foco em offline, lote e controle.",
    featureCards: [
      {
        title: "Importação em lote",
        text: "Adicione arquivos por arrastar e soltar ou clique. HEIC/HEIF é detectado automaticamente.",
        bullets: ["Processamento contínuo por pasta", "Resumo automático de quantidade e tamanho", "Limpar e recomeçar a qualquer momento"]
      },
      {
        title: "Exportação multi-formato",
        text: "Exporte para JPG/PNG/WebP para compartilhamento, arquivo e uso na web.",
        bullets: ["Configuração unificada de qualidade", "Aplicar parâmetros em lote", "Baixar resultados instantaneamente"]
      },
      {
        title: "Pré-visualização e validação local",
        text: "Verifique nitidez, proporção e tamanho antes e depois da conversão.",
        bullets: ["Grade de miniaturas clara", "Feedback visual de erro", "Sem upload de arquivos originais"]
      },
      {
        title: "Execução offline estável",
        text: "Funciona sem internet, ideal para redes internas e fluxos sensíveis.",
        bullets: ["Sem necessidade de API em nuvem", "Sem impacto de oscilações de rede", "Inicialização e resposta rápidas"]
      },
      {
        title: "UX limpa",
        text: "Foco nas ações mais frequentes com menor complexidade para qualquer perfil.",
        bullets: ["Baixa curva de aprendizado", "Caminho de ação curto", "Hierarquia visual clara"]
      },
      {
        title: "Foco no desktop Windows",
        text: "Projetado para fluxos locais e hábitos de gerenciamento de arquivos no Windows.",
        bullets: ["Instalador leve", "Compatível com fluxos de imagem comuns", "Sem upload pelo navegador"]
      }
    ],
    scenariosTitle: "Casos de uso típicos",
    scenariosDesc: "Do uso pessoal ao fluxo de equipe.",
    scenarios: [["Arquivo de fotos", "Converta HEIC do iPhone para JPG rapidamente."], ["Assets de e-commerce", "Converta em lote para WebP/JPG e reduza peso."], ["Documentos de escritório", "Use PNG/JPG para melhor compatibilidade."], ["Dados sensíveis", "Tudo processado localmente."]],
    workflowTitle: "Converta em 3 passos",
    workflowDesc: "Do import ao export de forma simples.",
    steps: [["Instale o HeicView", "Baixe e execute o instalador do Windows."], ["Importe arquivos HEIC", "Arraste e solte múltiplas imagens."], ["Escolha formato e exporte", "Ajuste qualidade e salve localmente."]],
    callouts: [["Por que não online?", "A decodificação HEIC costuma ser mais estável localmente."], ["Estratégia recomendada", "JPG/WebP para compartilhar, PNG para detalhes."]],
    faqTitle: "Perguntas frequentes",
    faqDesc: "Dúvidas comuns sobre o HeicView.",
    faq: [["Há conversão online?", "Não. O HeicView é um app desktop offline."], ["Falha na prévia após importar?", "Verifique os arquivos e importe em lotes menores."], ["Conversão em lote é lenta?", "Depende da quantidade, resolução e formato."], ["Quais formatos são suportados?", "JPG, PNG e WebP."]],
    ctaTitle: "Comece seu fluxo HEIC offline",
    ctaText: "Sem upload, com processamento em lote rápido.",
    ctaButtons: ["Baixar instalador do Windows", "Contato comercial"],
    footerMeta: "Conversor HEIC em lote com prévia local",
    footerLinks: ["Início", "Recursos", "Cenários", "Download", "Sobre", "Privacidade", "Termos"]
  },
  es: {
    htmlLang: "es",
    metaTitle: "HeicView | Convertidor HEIC offline para Windows",
    metaDescription: "Convierte HEIC a JPG, PNG y WebP en Windows de forma local y sin subir archivos.",
    brandTag: "Convertidor HEIC offline para Windows",
    nav: ["Funciones", "Casos de uso", "Flujo", "FAQ", "Contacto"],
    topDownload: "Descarga gratis",
    heroTitle: "Convertidor HEIC por lotes y offline para Windows",
    heroSubtitle: "Procesamiento 100% local sin cargas. Importa HEIC/HEIF por lotes y exporta a JPG, PNG o WebP.",
    heroButtons: ["Descargar para Windows", "Ver funciones"],
    heroBullets: ["Conversión offline con privacidad", "Exportación por lotes JPG/PNG/WebP", "Vista previa local con control de calidad"],
    heroPanel: ["Vista previa de la app", "HeicView v1"],
    metrics: ["Procesamiento local", "Formatos de salida", "Conversión por lotes"],
    highlights: [["Más rapidez", "Detección automática de archivos HEIC."], ["Más privacidad", "Sin envío de imágenes a la nube."], ["Mejor calidad", "Ajusta formato y compresión."]],
    featuresTitle: "Funciones principales",
    featuresDesc: "Flujo completo basado en offline, lotes y control.",
    featureCards: [
      {
        title: "Importación por lotes",
        text: "Añade archivos con arrastrar y soltar o con clic. HEIC/HEIF se detecta automáticamente.",
        bullets: ["Procesamiento continuo por carpeta", "Resumen automático de cantidad y tamaño", "Limpiar y reiniciar en cualquier momento"]
      },
      {
        title: "Exportación multiformato",
        text: "Exporta a JPG/PNG/WebP para compartir, archivar y publicar en web.",
        bullets: ["Ajuste unificado de calidad", "Aplicar configuración en lote", "Descarga inmediata de resultados"]
      },
      {
        title: "Vista previa y validación local",
        text: "Comprueba nitidez, relación y tamaño de archivo antes y después de convertir.",
        bullets: ["Cuadrícula clara de miniaturas", "Feedback de error visible", "Sin subir archivos originales"]
      },
      {
        title: "Ejecución offline estable",
        text: "Funciona sin internet, ideal para redes internas y flujos sensibles.",
        bullets: ["Sin necesidad de API en la nube", "Sin impacto por fluctuaciones de red", "Inicio y respuesta rápidos"]
      },
      {
        title: "UX limpia",
        text: "Enfocada en acciones frecuentes con menor complejidad para todo tipo de usuario.",
        bullets: ["Baja curva de aprendizaje", "Ruta de operación corta", "Jerarquía visual clara"]
      },
      {
        title: "Optimizado para Windows",
        text: "Diseñado para flujos locales de Windows y hábitos de gestión de archivos.",
        bullets: ["Instalador ligero", "Compatible con flujos de imagen comunes", "Sin cargas en navegador"]
      }
    ],
    scenariosTitle: "Casos de uso típicos",
    scenariosDesc: "Desde fotos personales hasta flujos de equipo.",
    scenarios: [["Archivo de fotos móviles", "Convierte HEIC de iPhone a JPG rápidamente."], ["Recursos e-commerce", "Convierte a WebP/JPG por lotes para reducir peso."], ["Documentos de oficina", "Usa PNG/JPG para mejor compatibilidad."], ["Datos sensibles", "Todo se procesa localmente."]],
    workflowTitle: "Convierte en 3 pasos",
    workflowDesc: "Proceso simple desde importación hasta exportación.",
    steps: [["Instala HeicView", "Descarga e instala el paquete para Windows."], ["Importa archivos HEIC", "Arrastra y suelta varias imágenes."], ["Elige formato y exporta", "Ajusta la calidad y guarda localmente."]],
    callouts: [["¿Por qué no online?", "La decodificación HEIC suele ser más estable en local."], ["Estrategia recomendada", "JPG/WebP para compartir, PNG para detalle."]],
    faqTitle: "Preguntas frecuentes",
    faqDesc: "Preguntas comunes sobre HeicView.",
    faq: [["¿Tiene conversión online?", "No. HeicView es una app de escritorio offline."], ["¿Falla la vista previa?", "Revisa los archivos e importa en lotes más pequeños."], ["¿Es lenta la conversión por lotes?", "Depende de cantidad, resolución y formato."], ["¿Qué formatos soporta?", "JPG, PNG y WebP."]],
    ctaTitle: "Empieza tu flujo HEIC offline",
    ctaText: "Sin subir archivos, con procesamiento por lotes rápido.",
    ctaButtons: ["Descargar instalador de Windows", "Consulta comercial"],
    footerMeta: "Convertidor HEIC por lotes con vista previa local",
    footerLinks: ["Inicio", "Funciones", "Escenarios", "Descargar", "Acerca de", "Privacidad", "Términos"]
  }
};

function setText(selector, text) {
  const node = document.querySelector(selector);
  if (node && typeof text === "string") node.textContent = text;
}

function setList(selector, values) {
  const nodes = Array.from(document.querySelectorAll(selector));
  values.forEach((value, index) => {
    if (nodes[index]) nodes[index].textContent = value;
  });
}

function applyLanguage(lang) {
  const copy = translations[lang] || translations.en;
  const featureCards = Array.isArray(copy.featureCards) ? copy.featureCards : translations.en.featureCards;
  const metaDescription = document.querySelector('meta[name="description"]');

  document.documentElement.lang = copy.htmlLang || "en";
  document.title = copy.metaTitle;
  if (metaDescription) metaDescription.setAttribute("content", copy.metaDescription);

  setText(".brand__tag", copy.brandTag);
  setList(".nav__link", copy.nav);
  setText(".topbar__actions .button", copy.topDownload);

  setText(".hero__title", copy.heroTitle);
  setText(".hero__subtitle", copy.heroSubtitle);
  setList(".hero .hero__cta .button", copy.heroButtons);
  setList(".hero__bullets li", copy.heroBullets);
  setList(".hero__panelHead span", copy.heroPanel);
  setList(".metric__label", copy.metrics);

  setList(".highlights .highlight h3", copy.highlights.map((item) => item[0]));
  setList(".highlights .highlight p", copy.highlights.map((item) => item[1]));

  setText("#features .section__title", copy.featuresTitle);
  setText("#features .section__desc", copy.featuresDesc);

  setList("#features .card__title", featureCards.map((item) => item.title));
  setList("#features .card__text", featureCards.map((item) => item.text));
  featureCards.forEach((card, index) => {
    setList(`#features .card:nth-child(${index + 1}) .card__list li`, card.bullets);
  });

  setText("#scenarios .section__title", copy.scenariosTitle);
  setText("#scenarios .section__desc", copy.scenariosDesc);
  setList("#scenarios .timeline__item h3", copy.scenarios.map((item) => item[0]));
  setList("#scenarios .timeline__item p", copy.scenarios.map((item) => item[1]));

  setText("#workflow .section__title", copy.workflowTitle);
  setText("#workflow .section__desc", copy.workflowDesc);
  setList("#workflow .step__title", copy.steps.map((item) => item[0]));
  setList("#workflow .step__text", copy.steps.map((item) => item[1]));
  setList("#workflow .callout__title", copy.callouts.map((item) => item[0]));
  setList("#workflow .callout__text", copy.callouts.map((item) => item[1]));

  setText("#faq .section__title", copy.faqTitle);
  setText("#faq .section__desc", copy.faqDesc);
  setList("#faq .faq__q", copy.faq.map((item) => item[0]));
  setList("#faq .faq__a", copy.faq.map((item) => item[1]));

  setText("#download .cta__title", copy.ctaTitle);
  setText("#download .cta__text", copy.ctaText);
  setList("#download .hero__cta .button", copy.ctaButtons);

  setText(".footer__meta", copy.footerMeta);
  setList(".footer__right > .footer__link", copy.footerLinks);

  const languageSelect = document.querySelector("#site-language");
  if (languageSelect && languageSelect.value !== lang) {
    languageSelect.value = lang;
  }
}

function getInitialLanguage() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
  return DEFAULT_LANG;
}

function setupLanguageSwitcher() {
  const languageSelect = document.querySelector("#site-language");
  if (!languageSelect) return;

  const initialLang = getInitialLanguage();
  applyLanguage(initialLang);

  languageSelect.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLSelectElement)) return;
    const nextLang = target.value;
    const validLang = SUPPORTED_LANGS.includes(nextLang) ? nextLang : DEFAULT_LANG;
    localStorage.setItem(STORAGE_KEY, validLang);
    applyLanguage(validLang);
  });
}

setupLanguageSwitcher();

