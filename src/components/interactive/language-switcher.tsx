'use client';

import { useState } from 'react';
import { getCoverContent, Language } from '@/config/cover-content';

interface LanguageSwitcherProps {
  onContentChange: (content: ReturnType<typeof getCoverContent>) => void;
}

export default function LanguageSwitcher({ onContentChange }: LanguageSwitcherProps) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'zh' : 'en';
    setLanguage(newLanguage);
    const updatedContent = getCoverContent(newLanguage);
    onContentChange(updatedContent);
  };

  const currentContent = getCoverContent(language);

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 bg-gray-700 text-gray-100 px-3 py-1 rounded-md hover:bg-gray-600 transition-colors text-sm"
    >
      <span>{currentContent.switcherLabel}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}