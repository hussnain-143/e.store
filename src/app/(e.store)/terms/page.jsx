
export const metadata = {
  title: 'Terms'
}

const TermsPage = () => {
  return (
    <div className="container mx-auto my-16 px-4 py-10 bg-white shadow-2xl rounded-xl border border-gray-100 animate-fade-in-up">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-8 pb-4 text-center border-b-4 border-cyan-600 tracking-tight">Terms of Service</h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-8 py-3 bg-gray-50/50 border-t-2 border-b-2 border-gray-200 px-4 rounded-md">
        Welcome to <span className="text-cyan-700 font-bold">e.store</span>. By continuing to browse and use this website, you acknowledge that you are agreeing to comply with and be bound by the following **terms and conditions of use**, which, together with our privacy policy, govern e.store's relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mb-5 mt-10 flex items-center">
        <span className="text-cyan-600 mr-2 text-4xl">●</span> General Conditions
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        Your access to and use of our services are conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service. We reserve the right to refuse service to anyone for any reason at any time.
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mb-5 mt-10 flex items-center">
        <span className="text-cyan-600 mr-2 text-4xl">●</span> Use of the Website is Subject to the Following:
      </h2>
      <ul className="list-none text-lg text-gray-700 mb-8 space-y-3">
        <li className="flex items-start">
          <span className="text-cyan-500 mr-3 mt-1 font-bold">1.</span> <p>The content of the pages of this website is for your **general information and use only**. It is subject to change without notice.</p>
        </li>
        <li className="flex items-start">
          <span className="text-cyan-500 mr-3 mt-1 font-bold">2.</span> <p>Neither we nor any third parties provide any **warranty or guarantee** as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors, and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</p>
        </li>
        <li className="flex items-start">
          <span className="text-cyan-500 mr-3 mt-1 font-bold">3.</span> <p>Your use of any information or materials on this website is **entirely at your own risk**, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.</p>
        </li>
        <li className="flex items-start">
          <span className="text-cyan-500 mr-3 mt-1 font-bold">4.</span> <p>This website contains material that is **owned by or licensed to us**. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</p>
        </li>
        <li className="flex items-start">
          <span className="text-cyan-500 mr-3 mt-1 font-bold">5.</span> <p>Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.</p>
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-800 mb-5 mt-10 flex items-center">
        <span className="text-cyan-600 mr-2 text-4xl">●</span> Links to Other Websites
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        Our service may contain links to third-party web sites or services that are not owned or controlled by e.store. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that e.store shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
      </p>

      <p className="text-md text-gray-600 leading-relaxed mt-10 text-center font-medium italic">
        These terms are subject to change without notice. Please review them periodically for updates.
      </p>
    </div>
  );
};

export default TermsPage;