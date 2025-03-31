# 🚀 Next.js 프로젝트 시작 가이드

## 1. 프로젝트 초기 설정

```bash
# 1. 프로젝트 생성
npx create-next-app@latest my-project
cd my-project

# 2. 기본 패키지 설치
npm install @radix-ui/react-slot class-variance-authority clsx lucide-react tailwind-merge
npm install next-themes
```

## 2. 필수 디렉토리 구조
```
project/
├── app/
│   ├── [locale]/
│   │   └── page.tsx
│   ├── lib/
│   │   ├── LanguageContext.tsx
│   │   └── MetadataContext.tsx
│   └── layout.tsx
├── components/
│   └── ui/
├── public/
│   ├── google[코드].html
│   ├── naver[코드].html
│   ├── yandex_[코드].html
│   ├── robots.txt
│   ├── sitemap.xml
│   └── manifest.json
└── locales/
    ├── ko/
    ├── en/
    ├── ja/
    ├── zh/
    └── es/
```

## 3. SEO 체크리스트

### 3.1 검색엔진 등록
- [ ] [Google Search Console](https://search.google.com/search-console) 등록
- [ ] [Naver Search Advisor](https://searchadvisor.naver.com) 등록
- [ ] [Yandex Webmaster](https://webmaster.yandex.com) 등록

### 3.2 필수 메타데이터
```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: "사이트명",
  description: "사이트 설명",
  keywords: "키워드1, 키워드2...",
  authors: [{ name: "사이트명" }],
  creator: "사이트명",
  publisher: "사이트명",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    languages: {
      'ko': '/ko',
      'en': '/en',
      'ja': '/ja',
      'zh': '/zh',
      'es': '/es'
    }
  },
  openGraph: {
    title: "사이트명",
    description: "사이트 설명",
    type: "website",
    locale: "ko_KR",
    alternateLocale: ["en_US", "ja_JP", "zh_CN", "es_ES"],
    siteName: "사이트명",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "사이트 설명"
    }]
  },
  verification: {
    google: "발급받은코드",
    yandex: "발급받은코드",
    other: {
      "naver-site-verification": "발급받은코드"
    }
  },
  category: "Technology",
};
```

### 3.3 robots.txt 템플릿
```txt
User-agent: *
Allow: /
Sitemap: https://your-domain.com/sitemap.xml
```

### 3.4 sitemap.xml 템플릿
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-domain.com</loc>
    <lastmod>YYYY-MM-DD</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

## 4. 다국어 처리

### 4.1 언어 컨텍스트 설정
```typescript
// app/lib/LanguageContext.tsx
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ko' | 'en' | 'ja' | 'zh' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, section?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ko');
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    // 브라우저 언어 감지
    const browserLang = navigator.language.split('-')[0] as Language;
    const savedLang = localStorage.getItem('language') as Language;
    const initialLang = savedLang || browserLang || 'ko';
    setLanguage(initialLang);

    // 번역 파일 로드
    fetch(`/locales/${initialLang}.json`)
      .then(res => res.json())
      .then(data => setTranslations(data));
  }, []);

  const t = (key: string, section?: string) => {
    if (!translations) return key;
    if (section) {
      return translations[section]?.[key] || key;
    }
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
```

## 5. 배포 체크리스트

### 5.1 배포 전 확인사항
- [ ] 메타데이터 정보 업데이트
- [ ] 검색엔진 인증 파일 추가
- [ ] robots.txt 업데이트
- [ ] sitemap.xml 업데이트
- [ ] 다국어 번역 파일 확인
- [ ] manifest.json 업데이트

### 5.2 배포 명령어
```bash
# 개발 서버
npm run dev

# 프로덕션 빌드
npm run build

# Vercel 배포
vercel --prod
```

## 6. 프로젝트 최적화 (선택사항)

### 6.1 성능 최적화
- [ ] 이미지 최적화
- [ ] 코드 스플리팅
- [ ] 캐싱 전략

### 6.2 분석 도구
- [ ] Google Analytics 설정
- [ ] 히트맵 분석

### 6.3 추가 기능
- [ ] PWA 지원
- [ ] 쿠키 동의
- [ ] 광고 설정

## 7. 유용한 명령어
```bash
# shadcn/ui 컴포넌트 추가
npx shadcn@latest add [component-name]

# 새 페이지 생성
touch app/[locale]/[page-name]/page.tsx

# 새 컴포넌트 생성
touch components/[ComponentName].tsx
``` 