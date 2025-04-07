export type Language = 'en' | 'zh';

export function getCoverContent(language: Language) {
  return coverContent[language];
}

const coverContent = {
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
    tagline: "Your document management solution",
    switcherLabel: "中文",
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
    tagline: "您的文档管理解决方案",
    switcherLabel: "English",
  }
};