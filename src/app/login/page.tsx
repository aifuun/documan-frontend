'use client';

import { useState } from 'react';
import Login from '@/components/auth/Login';
import LanguageSwitcher from '@/components/interactive/language-switcher';
import Description from '@/components/product-description/description';
import { getCoverContent } from '#/config/cover-content';

export default function LoginPage() {
  // Initialize content with the default language (English)
  const [content, setContent] = useState(getCoverContent('en'));

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
      {/* Main Content Area */}
      <div className="flex-1 overflow-auto py-6">
        <div className="container mx-auto px-4 h-full flex flex-col">
          {/* Language Toggle */}
          <div className="flex justify-end mb-4">
            <LanguageSwitcher onContentChange={setContent} />
          </div>

          {/* Two-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
            {/* Left Column - Project Description */}
            <Description
              title={content.title}
              subtitle={content.subtitle}
              description={content.description}
              sections={content.sections}
              features={content.features}
            />

            {/* Right Column - Auth Component */}
            <div className="bg-gray-50 rounded-xl shadow-2xl overflow-hidden border border-gray-700/20 h-full flex flex-col">
              <div className="p-8 flex flex-col h-full">
                <h1 id="welcome" className="text-3xl font-bold text-center text-gray-800 mb-6">
                  {content.welcome}
                </h1>

                <p id="tagline" className="text-gray-600 text-center mb-8">
                  {content.tagline}
                </p>

                <div className="authenticator-wrapper w-full max-w-full overflow-visible flex-1">
                  <Login />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4 text-center text-gray-300 text-sm bg-gray-900 border-t border-gray-800">
        © {new Date().getFullYear()} Documan. All rights reserved.
      </footer>
    </div>
  );
}