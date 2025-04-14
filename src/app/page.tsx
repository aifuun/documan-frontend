'use client'
import Login from "@/components/auth/Login";
import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');
  
  const content = {
    en: {
      title: "AI Document Assistant",
      subtitle: "Powered by Amazon Bedrock",
      description: "Documan helps you understand documents faster with AI-powered summaries and answers to your questions. Upload any document and let our AI extract key insights and respond to your specific queries about the content.",
      sections: [
        {
          title: "What it does",
          content: "Analyzes documents using advanced AI to extract key information, generate concise summaries, and provide accurate answers to your specific questions about the content."
        },
        {
          title: "How it works",
          content: "Leveraging Amazon Bedrock's powerful language models, Documan processes your documents, understands the context, and provides intelligent insights in seconds."
        }
      ],
      features: [
        "Smart Summaries",
        "Q&A Interface",
        "Secure Storage"
      ],
      welcome: "Welcome to Documan",
      tagline: "Your document management solution"
    },
    zh: {
      title: "AI 文档助手",
      subtitle: "由 Amazon Bedrock 提供支持",
      description: "Documan 通过 AI 生成的摘要和问答功能，帮助您更快地理解文档内容。上传任何文档，让我们的 AI 提取关键见解并回答您对内容的特定问题。",
      sections: [
        {
          title: "功能介绍",
          content: "使用先进的人工智能分析文档，提取关键信息，生成简洁摘要，并对文档内容的特定问题提供准确答案。"
        },
        {
          title: "工作原理",
          content: "借助 Amazon Bedrock 强大的语言模型，Documan 处理您的文档，理解上下文，并在几秒钟内提供智能见解。"
        }
      ],
      features: [
        "智能摘要",
        "问答界面",
        "安全存储"
      ],
      welcome: "欢迎使用 Documan",
      tagline: "您的文档管理解决方案"
    }
  };
  
  const currentContent = content[language];
  
  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
      {/* Main Content Area */}
      <div className="flex-1 overflow-auto py-6">
        <div className="container mx-auto px-4 h-full flex flex-col">
          {/* Language Toggle */}
          <div className="flex justify-end mb-4">
            <button 
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              className="flex items-center space-x-2 bg-gray-700 text-gray-100 px-3 py-1 rounded-md hover:bg-gray-600 transition-colors text-sm"
            >
              <span>{language === 'en' ? '中文' : 'English'}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          {/* Two-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
            {/* Left Column - Project Description */}
            <div className="bg-gray-50/90 rounded-xl shadow-xl border border-gray-700/20 flex flex-col h-full">
              <div className="p-8 flex flex-col h-full">
                {/* Header */}
                <div className="text-center md:text-left mb-5">
                  <h2 className="text-3xl font-bold text-gray-800">{currentContent.title}</h2>
                  <p className="text-indigo-600 mt-2 font-medium">{currentContent.subtitle}</p>
                </div>
                
                {/* Main Description */}
                <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {currentContent.description}
                  </p>
                </div>
                
                {/* Sections */}
                <div className="space-y-5 mb-6 flex-1">
                  {currentContent.sections.map((section, index) => (
                    <div key={index} className="border-l-4 border-indigo-500 pl-4">
                      <h3 className="font-semibold text-gray-800 mb-1">{section.title}</h3>
                      <p className="text-gray-600 text-sm">{section.content}</p>
                    </div>
                  ))}
                </div>
                
                {/* Features */}
                <div className="mt-auto">
                  <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3 font-medium">Key Features</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {currentContent.features.map((feature, index) => (
                      <div key={index} className="bg-blue-50 rounded-md p-3 text-center text-sm text-blue-800 font-medium">
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Auth Component */}
            <div className="bg-gray-50 rounded-xl shadow-2xl overflow-hidden border border-gray-700/20 h-full flex flex-col">
              <div className="p-8 flex flex-col h-full">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                  {currentContent.welcome}
                </h1>
                
                <p className="text-gray-600 text-center mb-8">
                  {currentContent.tagline}
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