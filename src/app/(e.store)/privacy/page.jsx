export const metadata ={
    title : 'Privacy'
}

const PrivacyPage = () => {
  return (
    <div className="container mx-auto my-16 px-4 py-10 bg-white shadow-2xl rounded-xl border border-gray-100 animate-fade-in-up">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-8 pb-4 text-center border-b-4 border-cyan-600 tracking-tight">Privacy Policy</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-8 border-l-4 border-cyan-400 pl-4 bg-cyan-50/50 p-3 rounded-md">
        Your privacy is incredibly important to us at <span className="text-cyan-700 font-bold">e.store</span>. This policy meticulously explains how we collect, use, and protect your personal information to ensure your trust and confidence. We are deeply committed to safeguarding your privacy. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mb-5 mt-10 flex items-center">
        <span className="text-cyan-600 mr-2 text-4xl">●</span> Information We Collect
      </h2>
      <ul className="list-none text-lg text-gray-700 mb-8 space-y-3">
        <li className="flex items-start">
          <span className="text-cyan-500 mr-3 mt-1">&#10003;</span> <p><strong>Personal Identification:</strong> Name, email address, phone number, and other contact details.</p>
        </li>
        <li className="flex items-start">
          <span className="text-cyan-500 mr-3 mt-1">&#10003;</span> <p><strong>Demographic Data:</strong> Postcode, preferences, and interests to help us understand our audience better.</p>
        </li>
        <li className="flex items-start">
          <span className="text-cyan-500 mr-3 mt-1">&#10003;</span> <p><strong>Transactional Details:</strong> Purchase history and securely handled payment information.</p>
        </li>
        <li className="flex items-start">
          <span className="text-cyan-500 mr-3 mt-1">&#10003;</span> <p><strong>Usage & Analytics:</strong> Data on how you interact with our website, pages visited, and time spent, to enhance your experience.</p>
        </li>
        <li className="flex items-start">
          <span className="text-cyan-500 mr-3 mt-1">&#10003;</span> <p><strong>Survey Responses:</strong> Other information gathered from customer surveys and special offers.</p>
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-800 mb-5 mt-10 flex items-center">
        <span className="text-cyan-600 mr-2 text-4xl">●</span> How We Use Your Information
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        We gather this information to profoundly understand your needs and deliver an even better, more personalized service. Specifically, your information is utilized for:
      </p>
      <ul className="list-none text-lg text-gray-700 mb-8 space-y-3">
        <li className="flex items-start">
          <span className="text-cyan-500 mr-3 mt-1">&#10003;</span> <p><strong>Internal Record Keeping:</strong> Efficiently managing your orders and customer accounts.</p>
        </li>
        <li className="flex items-start">
          <span className="text-cyan-500 mr-3 mt-1">&#10003;</span> <p><strong>Product & Service Enhancement:</strong> Continuously improving our offerings based on your valuable feedback and usage patterns.</p>
        </li>
        <li className="flex items-start">
          <span className="text-cyan-500 mr-3 mt-1">&#10003;</span> <p><strong>Promotional Communications:</strong> Sending relevant emails about new products, exclusive offers, or other information tailored to your interests, always respecting your preferences.</p>
        </li>
        <li className="flex items-start">
          <span className="text-cyan-500 mr-3 mt-1">&#10003;</span> <p><strong>Seamless Transactions:</strong> Ensuring smooth order fulfillment and efficient returns management.</p>
        </li>
        <li className="flex items-start">
          <span className="text-cyan-500 mr-3 mt-1">&#10003;</span> <p><strong>Dedicated Customer Support:</strong> Providing prompt and helpful assistance for any queries or issues you may encounter.</p>
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-800 mb-5 mt-10 flex items-center">
        <span className="text-cyan-600 mr-2 text-4xl">●</span> Data Security
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-8 border-l-4 border-cyan-400 pl-4 bg-cyan-50/50 p-3 rounded-md">
        We are absolutely committed to ensuring that your information remains secure. To rigorously prevent unauthorized access or disclosure, we have implemented suitable physical, electronic, and managerial procedures to diligently safeguard and secure all information we collect online. Your data's safety is our top priority.
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mb-5 mt-10 flex items-center">
        <span className="text-cyan-600 mr-2 text-4xl">●</span> External Links Disclaimer
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        Our website may contain convenient links to other websites of interest. However, once you have utilized these links to navigate away from our site, please be aware that we no longer possess any control over that external website. Consequently, we cannot be held responsible for the protection and privacy of any information you provide whilst visiting such sites, as they are not governed by this privacy statement. We strongly advise you to exercise caution and carefully review the privacy statement applicable to the website in question.
      </p>

      <p className="text-md text-gray-600 leading-relaxed mt-10 text-center font-medium italic">
        This privacy policy is subject to change without notice. We encourage you to visit this page periodically to stay informed of any updates.
      </p>
    </div>
  );
};

export default PrivacyPage;