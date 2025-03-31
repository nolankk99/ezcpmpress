'use client';

import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { useLanguage } from './LanguageContext';
import { metaData } from './i18n';

// Context 유형 정의
type MetadataContextType = {
  updateMetaTags: () => void;
};

// Context 생성
const MetadataContext = createContext<MetadataContextType>({
  updateMetaTags: () => {},
});

// Provider 컴포넌트
export function MetadataProvider({ children }: { children: ReactNode }) {
  const { language } = useLanguage();
  
  // 메타데이터 언어별 업데이트
  const updateMetaTags = () => {
    try {
      const currentMetadata = metaData[language];
      
      // title 태그 업데이트
      document.title = currentMetadata.title;
      
      // meta 태그 업데이트 함수
      const updateMetaTag = (name: string, content: string) => {
        // 기존 태그 찾기
        let meta = document.querySelector(`meta[name="${name}"]`) || 
                   document.querySelector(`meta[property="${name}"]`);
        
        // 태그가 없으면 새로 생성
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute(name.includes('og:') ? 'property' : 'name', name);
          document.head.appendChild(meta);
        }
        
        // 태그 내용 업데이트
        meta.setAttribute('content', content);
      };
      
      // 메타 태그 업데이트
      updateMetaTag('description', currentMetadata.description);
      updateMetaTag('og:title', currentMetadata.title);
      updateMetaTag('og:description', currentMetadata.description);
    } catch (error) {
      console.error('메타데이터 업데이트 오류:', error);
    }
  };

  // 언어 변경 시 메타데이터 업데이트
  useEffect(() => {
    updateMetaTags();
  }, [language]);

  return (
    <MetadataContext.Provider value={{ updateMetaTags }}>
      {children}
    </MetadataContext.Provider>
  );
}

// Hook으로 사용
export const useMetadata = () => useContext(MetadataContext); 