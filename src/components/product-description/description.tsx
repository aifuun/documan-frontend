interface Section {
  title: string;
  content: string;
}

interface DescriptionProps {
  title: string;
  subtitle: string;
  description: string;
  sections: Section[];
  features: string[];
}

export default function Description({
  title,
  subtitle,
  description,
  sections,
  features,
}: DescriptionProps) {
  return (
    <div className="bg-gray-50/90 rounded-xl shadow-xl border border-gray-700/20 flex flex-col h-full">
      <div className="p-8 flex flex-col h-full">
        {/* Header */}
        <div className="text-center md:text-left mb-5">
          <h2 id="title" className="text-3xl font-bold text-gray-800">{title}</h2>
          <p id="subtitle" className="text-indigo-600 mt-2 font-medium">{subtitle}</p>
        </div>

        {/* Main Description */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <p id="description" className="text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-5 mb-6 flex-1">
          {sections.map((section, index) => (
            <div key={index} className="border-l-4 border-indigo-500 pl-4">
              <h3 id={`section-title-${index}`} className="font-semibold text-gray-800 mb-1">
                {section.title}
              </h3>
              <p id={`section-content-${index}`} className="text-gray-600 text-sm">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mt-auto">
          <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3 font-medium">
            Key Features
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {features.map((feature, index) => (
              <div
                key={index}
                id={`feature-${index}`}
                className="bg-blue-50 rounded-md p-3 text-center text-sm text-blue-800 font-medium"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}