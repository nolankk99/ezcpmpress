// 다국어 처리를 위한 번역 리소스

export type Language = 'ko' | 'en' | 'ja' | 'zh' | 'es';

export const languages: Record<Language, string> = {
  ko: '한국어',
  en: 'English',
  ja: '日本語',
  zh: '中文',
  es: 'Español',
};

// 메타데이터
export const metaData: Record<Language, { title: string; description: string }> = {
  ko: {
    title: 'EZ Compress | 무료 이미지 압축 및 변환 도구',
    description: '이미지 파일 크기를 빠르고 쉽게 압축하고 최적화하세요. JPG, PNG, WEBP 간 변환, 해상도 조절 및 일괄 처리 기능을 무료로 제공합니다.',
  },
  en: {
    title: 'EZ Compress | Free Image Compression and Conversion Tool',
    description: 'Compress and optimize image files quickly and easily. Convert between JPG, PNG, WEBP formats, adjust resolution, and batch process multiple images for free.',
  },
  ja: {
    title: 'EZ Compress | 無料画像圧縮・変換ツール',
    description: '画像ファイルを素早く簡単に圧縮・最適化しましょう。JPG、PNG、WEBP形式間の変換、解像度調整、一括処理機能を無料で提供します。',
  },
  zh: {
    title: 'EZ Compress | 免费图像压缩和转换工具',
    description: '快速轻松地压缩和优化图像文件。在JPG，PNG，WEBP格式之间转换，调整分辨率，批量处理多张图片，完全免费。',
  },
  es: {
    title: 'EZ Compress | Herramienta gratuita de compresión y conversión de imágenes',
    description: 'Comprima y optimice archivos de imagen de forma rápida y sencilla. Convierta entre formatos JPG, PNG, WEBP, ajuste la resolución y procese lotes de imágenes gratis.',
  },
};

// 전역 UI 문자열
export const translations = {
  // 헤더
  header: {
    title: {
      ko: 'EZ Compress',
      en: 'EZ Compress',
      ja: 'EZ Compress',
      zh: 'EZ Compress',
      es: 'EZ Compress',
    },
    description1: {
      ko: '이미지 파일을 빠르고 쉽게 압축하고 변환하세요.',
      en: 'Compress and convert image files quickly and easily.',
      ja: '画像ファイルを素早く簡単に圧縮・変換しましょう。',
      zh: '快速轻松地压缩和转换图像文件。',
      es: 'Comprima y convierta archivos de imagen de forma rápida y sencilla.',
    },
    description2: {
      ko: 'JPG, PNG, WEBP 형식 간 변환과 해상도 조절 기능을 무료로 제공합니다.',
      en: 'Convert between JPG, PNG, WEBP formats and adjust resolution for free.',
      ja: 'JPG、PNG、WEBP形式間の変換と解像度調整機能を無料で提供します。',
      zh: '在JPG、PNG、WEBP格式之间转换并调整分辨率，完全免费。',
      es: 'Convierta entre formatos JPG, PNG, WEBP y ajuste la resolución gratis.',
    },
  },

  // 이미지 압축기
  compressor: {
    // 섹션 제목
    stepImageSelect: {
      ko: '1. 이미지 선택',
      en: '1. Select Images',
      ja: '1. 画像選択',
      zh: '1. 选择图像',
      es: '1. Seleccionar imágenes',
    },
    stepCompressionSettings: {
      ko: '2. 압축 설정',
      en: '2. Compression Settings',
      ja: '2. 圧縮設定',
      zh: '2. 压缩设置',
      es: '2. Ajustes de compresión',
    },
    stepResults: {
      ko: '3. 압축 결과',
      en: '3. Compression Results',
      ja: '3. 圧縮結果',
      zh: '3. 压缩结果',
      es: '3. Resultados de compresión',
    },
    guideTitle: {
      ko: '사용 가이드',
      en: 'User Guide',
      ja: '使用ガイド',
      zh: '使用指南',
      es: 'Guía de uso',
    },

    // 업로드 영역
    dropzoneText: {
      ko: '이미지 파일을 여기에 끌어다 놓으세요',
      en: 'Drag and drop image files here',
      ja: '画像ファイルをここにドラッグ＆ドロップ',
      zh: '将图像文件拖放到这里',
      es: 'Arrastre y suelte archivos de imagen aquí',
    },
    dropzoneOr: {
      ko: '또는',
      en: 'or',
      ja: 'または',
      zh: '或者',
      es: 'o',
    },
    browseFiles: {
      ko: '파일 찾아보기',
      en: 'Browse Files',
      ja: 'ファイルを参照',
      zh: '浏览文件',
      es: 'Explorar archivos',
    },
    supportedFormats: {
      ko: '지원 형식: JPG, PNG, WEBP',
      en: 'Supported formats: JPG, PNG, WEBP',
      ja: '対応フォーマット：JPG、PNG、WEBP',
      zh: '支持格式：JPG、PNG、WEBP',
      es: 'Formatos soportados: JPG, PNG, WEBP',
    },
    multipleFiles: {
      ko: '여러 파일 가능',
      en: 'multiple files',
      ja: '複数ファイル可能',
      zh: '可多个文件',
      es: 'múltiples archivos',
    },
    singleFile: {
      ko: '단일 파일',
      en: 'single file',
      ja: '単一ファイル',
      zh: '单个文件',
      es: 'archivo único',
    },
    imagesSelected: {
      ko: '개의 이미지가 선택됨',
      en: 'images selected',
      ja: '個の画像が選択されました',
      zh: '张图像已选择',
      es: 'imágenes seleccionadas',
    },
    cancel: {
      ko: '취소',
      en: 'Cancel',
      ja: 'キャンセル',
      zh: '取消',
      es: 'Cancelar',
    },
    selectOtherFiles: {
      ko: '다른 파일 선택',
      en: 'Select Other Files',
      ja: '他のファイルを選択',
      zh: '选择其他文件',
      es: 'Seleccionar otros archivos',
    },

    // 압축 설정
    quickSettings: {
      ko: '빠른 설정',
      en: 'Quick Settings',
      ja: 'クイック設定',
      zh: '快速设置',
      es: 'Ajustes rápidos',
    },
    advancedSettings: {
      ko: '고급 설정',
      en: 'Advanced Settings',
      ja: '詳細設定',
      zh: '高级设置',
      es: 'Ajustes avanzados',
    },
    minimalCompression: {
      ko: '최소 압축',
      en: 'Minimal Compression',
      ja: '最小圧縮',
      zh: '最小压缩',
      es: 'Compresión mínima',
    },
    optimalCompression: {
      ko: '최적 압축',
      en: 'Optimal Compression',
      ja: '最適圧縮',
      zh: '最佳压缩',
      es: 'Compresión óptima',
    },
    maximumCompression: {
      ko: '최대 압축',
      en: 'Maximum Compression',
      ja: '最大圧縮',
      zh: '最大压缩',
      es: 'Compresión máxima',
    },
    quality: {
      ko: '품질',
      en: 'quality',
      ja: '品質',
      zh: '质量',
      es: 'calidad',
    },
    originalSizeKeep: {
      ko: '원본 크기',
      en: 'original size',
      ja: '元のサイズ',
      zh: '原始大小',
      es: 'tamaño original',
    },
    maxWidth: {
      ko: '최대',
      en: 'max',
      ja: '最大',
      zh: '最大',
      es: 'máx',
    },
    webpConversion: {
      ko: 'WebP 변환',
      en: 'WebP conversion',
      ja: 'WebP変換',
      zh: 'WebP转换',
      es: 'conversión WebP',
    },
    compressionQuality: {
      ko: '압축 품질',
      en: 'Compression Quality',
      ja: '圧縮品質',
      zh: '压缩质量',
      es: 'Calidad de compresión',
    },
    low: {
      ko: '낮음',
      en: 'Low',
      ja: '低',
      zh: '低',
      es: 'Baja',
    },
    high: {
      ko: '높음',
      en: 'High',
      ja: '高',
      zh: '高',
      es: 'Alta',
    },
    maxWidthPx: {
      ko: '최대 너비 (px)',
      en: 'Max Width (px)',
      ja: '最大幅 (px)',
      zh: '最大宽度 (px)',
      es: 'Ancho máximo (px)',
    },
    maxHeightPx: {
      ko: '최대 높이 (px)',
      en: 'Max Height (px)',
      ja: '最大高さ (px)',
      zh: '最大高度 (px)',
      es: 'Altura máxima (px)',
    },
    keepOriginal: {
      ko: '원본 유지',
      en: 'Keep Original',
      ja: '元のサイズを維持',
      zh: '保持原始',
      es: 'Mantener original',
    },
    convertFormat: {
      ko: '변환 형식',
      en: 'Convert Format',
      ja: '変換フォーマット',
      zh: '转换格式',
      es: 'Convertir formato',
    },
    keepOriginalFormat: {
      ko: '원본 형식 유지',
      en: 'Keep Original Format',
      ja: '元のフォーマットを維持',
      zh: '保持原始格式',
      es: 'Mantener formato original',
    },
    recommended: {
      ko: '권장',
      en: 'recommended',
      ja: '推奨',
      zh: '推荐',
      es: 'recomendado',
    },
    compressImages: {
      ko: '이미지 압축하기',
      en: 'Compress Images',
      ja: '画像を圧縮する',
      zh: '压缩图像',
      es: 'Comprimir imágenes',
    },
    processing: {
      ko: '압축 처리 중...',
      en: 'Processing...',
      ja: '処理中...',
      zh: '处理中...',
      es: 'Procesando...',
    },

    // 결과
    downloadAll: {
      ko: '모두 다운로드',
      en: 'Download All',
      ja: 'すべてダウンロード',
      zh: '全部下载',
      es: 'Descargar todo',
    },
    reset: {
      ko: '초기화',
      en: 'Reset',
      ja: 'リセット',
      zh: '重置',
      es: 'Resetear',
    },
    totalOriginalSize: {
      ko: '총 원본 크기',
      en: 'Total Original Size',
      ja: '合計元サイズ',
      zh: '总原始大小',
      es: 'Tamaño original total',
    },
    totalCompressedSize: {
      ko: '총 압축 크기',
      en: 'Total Compressed Size',
      ja: '合計圧縮サイズ',
      zh: '总压缩大小',
      es: 'Tamaño comprimido total',
    },
    averageCompressionRatio: {
      ko: '평균 압축률',
      en: 'Average Compression Ratio',
      ja: '平均圧縮率',
      zh: '平均压缩率',
      es: 'Ratio de compresión promedio',
    },
    reduction: {
      ko: '감소',
      en: 'reduction',
      ja: '削減',
      zh: '减少',
      es: 'reducción',
    },
    originalSize: {
      ko: '원본 크기',
      en: 'Original Size',
      ja: '元のサイズ',
      zh: '原始大小',
      es: 'Tamaño original',
    },
    compressedSize: {
      ko: '압축 크기',
      en: 'Compressed Size',
      ja: '圧縮サイズ',
      zh: '压缩大小',
      es: 'Tamaño comprimido',
    },
    compressionRatio: {
      ko: '압축률',
      en: 'Compression Ratio',
      ja: '圧縮率',
      zh: '压缩率',
      es: 'Ratio de compresión',
    },
    pixels: {
      ko: '픽셀',
      en: 'pixels',
      ja: 'ピクセル',
      zh: '像素',
      es: 'píxeles',
    },
    download: {
      ko: '다운로드',
      en: 'Download',
      ja: 'ダウンロード',
      zh: '下载',
      es: 'Descargar',
    },
    close: {
      ko: '닫기',
      en: 'Close',
      ja: '閉じる',
      zh: '关闭',
      es: 'Cerrar',
    },

    // 사용 가이드
    whyCompress: {
      ko: '이미지 압축은 왜 필요한가요?',
      en: 'Why compress images?',
      ja: '画像圧縮が必要な理由は？',
      zh: '为什么需要压缩图像？',
      es: '¿Por qué comprimir imágenes?',
    },
    whyCompressDesc: {
      ko: '이미지 파일은 웹사이트 로딩 속도에 큰 영향을 미칩니다. 압축된 이미지는 화질은 유지하면서 파일 크기를 줄여 웹페이지 성능을 개선하고, 저장 공간을 절약하며, 서버 비용을 절감하는데 도움이 됩니다.',
      en: 'Image files significantly impact website loading speed. Compressed images reduce file size while maintaining quality, improving webpage performance, saving storage space, and cutting server costs.',
      ja: '画像ファイルはウェブサイトの読み込み速度に大きな影響を与えます。圧縮された画像は画質を維持しながらファイルサイズを縮小し、ウェブページのパフォーマンスを向上させ、保存容量を節約し、サーバーコストを削減します。',
      zh: '图像文件对网站加载速度有重大影响。压缩图像可以在保持质量的同时减小文件大小，提高网页性能，节省存储空间，并降低服务器成本。',
      es: 'Los archivos de imagen impactan significativamente en la velocidad de carga del sitio web. Las imágenes comprimidas reducen el tamaño del archivo manteniendo la calidad, mejorando el rendimiento de la página web, ahorrando espacio de almacenamiento y reduciendo costos de servidor.',
    },
    optimalSettings: {
      ko: '최적의 압축 설정은?',
      en: 'What are the optimal compression settings?',
      ja: '最適な圧縮設定は？',
      zh: '最佳压缩设置是什么？',
      es: '¿Cuáles son los ajustes de compresión óptimos?',
    },
    webImages: {
      ko: '웹사이트 이미지: 75% 품질, 최대 1200px, WebP 형식',
      en: 'Website images: 75% quality, max 1200px, WebP format',
      ja: 'ウェブサイト用画像: 75%品質、最大1200px、WebP形式',
      zh: '网站图像：75%质量，最大1200px，WebP格式',
      es: 'Imágenes para web: 75% de calidad, máximo 1200px, formato WebP',
    },
    printImages: {
      ko: '인쇄용 이미지: 90% 이상의 품질, 원본 크기 유지',
      en: 'Print images: 90%+ quality, original size',
      ja: '印刷用画像: 90%以上の品質、元のサイズを維持',
      zh: '印刷图像：90%以上质量，保持原始大小',
      es: 'Imágenes para impresión: 90%+ de calidad, tamaño original',
    },
    socialMedia: {
      ko: '소셜 미디어: 80% 품질, 1080px, JPG 형식',
      en: 'Social media: 80% quality, 1080px, JPG format',
      ja: 'ソーシャルメディア: 80%品質、1080px、JPG形式',
      zh: '社交媒体：80%质量，1080px，JPG格式',
      es: 'Redes sociales: 80% de calidad, 1080px, formato JPG',
    },
    whatIsWebP: {
      ko: 'WebP 형식이란?',
      en: 'What is WebP format?',
      ja: 'WebP形式とは？',
      zh: '什么是WebP格式？',
      es: '¿Qué es el formato WebP?',
    },
    webpDesc: {
      ko: 'WebP는 Google이 개발한 최신 이미지 형식으로, JPG보다 약 25-35% 더 작은 파일 크기를 제공하면서 동등한 화질을 유지합니다. 대부분의 최신 브라우저에서 지원되며, 웹사이트 최적화에 이상적입니다.',
      en: 'WebP is a modern image format developed by Google that provides about 25-35% smaller file sizes than JPG while maintaining equivalent image quality. It\'s supported by most modern browsers and is ideal for website optimization.',
      ja: 'WebPはGoogleが開発した最新の画像形式で、JPGと同等の画質を維持しながら約25-35%小さいファイルサイズを提供します。ほとんどの最新ブラウザでサポートされており、ウェブサイトの最適化に理想的です。',
      zh: 'WebP是Google开发的现代图像格式，在保持同等图像质量的同时，比JPG提供约25-35%更小的文件大小。它被大多数现代浏览器支持，是网站优化的理想选择。',
      es: 'WebP es un formato de imagen moderno desarrollado por Google que proporciona tamaños de archivo aproximadamente 25-35% más pequeños que JPG mientras mantiene una calidad de imagen equivalente. Es compatible con la mayoría de los navegadores modernos y es ideal para la optimización de sitios web.',
    },
  },

  // 푸터
  footer: {
    infoTitle: {
      ko: '이미지 압축과 변환에 대한 정보',
      en: 'Information about Image Compression and Conversion',
      ja: '画像圧縮と変換について',
      zh: '关于图像压缩和转换的信息',
      es: 'Información sobre compresión y conversión de imágenes',
    },
    paragraph1: {
      ko: 'EZ Compress는 이미지 파일 크기를 효과적으로 줄여주는 무료 온라인 도구입니다. 웹사이트 속도 개선, 저장 공간 절약, 이메일 첨부 용량 감소 등 다양한 상황에서 유용하게 활용할 수 있습니다.',
      en: 'EZ Compress is a free online tool that effectively reduces image file sizes. It can be useful in various situations such as improving website speed, saving storage space, and reducing email attachment sizes.',
      ja: 'EZ Compressは画像ファイルサイズを効果的に縮小する無料のオンラインツールです。ウェブサイトの速度向上、保存容量の節約、メール添付ファイルサイズの削減など、さまざまな状況で役立ちます。',
      zh: 'EZ Compress是一个有效减小图像文件大小的免费在线工具。它在提高网站速度、节省存储空间和减少电子邮件附件大小等各种情况下非常有用。',
      es: 'EZ Compress es una herramienta gratuita en línea que reduce eficazmente el tamaño de los archivos de imagen. Puede ser útil en varias situaciones como mejorar la velocidad del sitio web, ahorrar espacio de almacenamiento y reducir el tamaño de los archivos adjuntos de correo electrónico.',
    },
    paragraph2: {
      ko: 'JPG, PNG, WEBP 등 다양한 이미지 형식 간 변환과 해상도 조절 기능을 제공하여 사용자가 필요에 맞게 이미지를 최적화할 수 있습니다. 효율적인 압축 알고리즘을 통해 이미지 품질은 유지하면서 파일 크기만 줄일 수 있습니다.',
      en: 'We provide conversion between various image formats such as JPG, PNG, WEBP, and resolution adjustment features, allowing users to optimize images according to their needs. Through efficient compression algorithms, you can reduce file size while maintaining image quality.',
      ja: 'JPG、PNG、WEBPなどの様々な画像形式間の変換と解像度調整機能を提供し、ユーザーが必要に応じて画像を最適化できます。効率的な圧縮アルゴリズムにより、画質を維持しながらファイルサイズのみを削減できます。',
      zh: '我们提供JPG、PNG、WEBP等各种图像格式之间的转换和分辨率调整功能，允许用户根据需要优化图像。通过高效的压缩算法，您可以在保持图像质量的同时减小文件大小。',
      es: 'Proporcionamos conversión entre varios formatos de imagen como JPG, PNG, WEBP y funciones de ajuste de resolución, permitiendo a los usuarios optimizar imágenes según sus necesidades. A través de algoritmos de compresión eficientes, puede reducir el tamaño del archivo manteniendo la calidad de la imagen.',
    },
    paragraph3: {
      ko: '모든 처리는 사용자의 브라우저에서 직접 이루어지므로 개인 정보 보호가 보장되며, 별도의 프로그램 설치 없이 무료로 이용할 수 있습니다.',
      en: 'All processing is done directly in your browser, ensuring privacy protection, and can be used for free without installing any separate programs.',
      ja: 'すべての処理はユーザーのブラウザで直接行われるため、プライバシー保護が保証され、別途プログラムをインストールすることなく無料で利用できます。',
      zh: '所有处理直接在您的浏览器中完成，确保隐私保护，并且可以免费使用，无需安装任何单独的程序。',
      es: 'Todo el procesamiento se realiza directamente en su navegador, garantizando la protección de la privacidad, y se puede utilizar de forma gratuita sin instalar ningún programa adicional.',
    },
    adArea: {
      ko: '광고 영역',
      en: 'Ad Space',
      ja: '広告エリア',
      zh: '广告区域',
      es: 'Espacio publicitario',
    },
    copyright: {
      ko: '모든 권리 보유.',
      en: 'All rights reserved.',
      ja: 'すべての権利を保有。',
      zh: '保留所有权利。',
      es: 'Todos los derechos reservados.',
    },
  },
}; 