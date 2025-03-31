'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, languages } from './i18n';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, section: 'header' | 'compressor' | 'footer') => string;
  availableLanguages: Record<Language, string>;
};

const defaultLanguage: Language = 'ko';

// Context 생성
const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: () => '',
  availableLanguages: languages,
});

// Provider 컴포넌트
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  // 브라우저 선호 언어 설정에 기반하여 초기 언어 결정
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as Language;
    
    if (storedLanguage && Object.keys(languages).includes(storedLanguage)) {
      setLanguage(storedLanguage);
      return;
    }

    // 브라우저 언어 감지
    const browserLang = navigator.language.split('-')[0] as Language;
    if (Object.keys(languages).includes(browserLang)) {
      setLanguage(browserLang);
    }
  }, []);

  // 언어 변경 핸들러
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    // HTML lang 속성 업데이트
    document.documentElement.lang = lang;
  };

  // 번역 함수
  const t = (key: string, section: 'header' | 'compressor' | 'footer'): string => {
    try {
      // section 내에서 키 경로를 따라서 번역 값을 찾음
      const keys = key.split('.');
      let translation: any = { header: {}, compressor: {}, footer: {} };
      
      // 동적으로 translations를 임포트
      const { translations } = require('./i18n');
      
      translation = translations[section];
      
      // 중첩된 키 처리
      let result = keys.reduce((obj, k) => obj[k], translation);
      
      // 현재 언어로 번역 반환
      if (result && result[language]) {
        return result[language];
      }
      
      // 번역 없으면 영어로 폴백
      if (result && result.en) {
        return result.en;
      }
      
      // 최종 폴백
      return key;
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error);
      return key;
    }
  };

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t,
    availableLanguages: languages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook으로 사용
export const useLanguage = () => useContext(LanguageContext); 