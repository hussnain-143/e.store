
export const metadata ={
    title : 'About'
}
const AboutPage = () => {
  return (
    <div className="container mx-auto my-16 px-4 py-10 bg-white shadow-2xl rounded-xl border border-gray-100 animate-fade-in-up">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-8 pb-4 text-center border-b-4 border-cyan-600 tracking-tight">About Us</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-8 border-l-4 border-cyan-400 pl-4 bg-cyan-50/50 p-3 rounded-md">
        Welcome to <span className="text-cyan-700 font-bold">e.store</span>! We are dedicated to providing you with the best **online shopping experience**,
        with a focus on **quality products**, **great prices**, and **excellent customer service**. Our commitment is to make your shopping journey enjoyable and seamless, from browsing to delivery.
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mb-5 mt-10 flex items-center">
        <span className="text-cyan-600 mr-2 text-4xl">●</span> Our Story
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        Founded in **[Current Year - 5]** by **a passionate team of e-commerce enthusiasts**, our journey began with a simple vision: to create a trusted online destination where customers could easily find high-quality products at competitive prices. Our passion for **customer satisfaction** and **innovative retail solutions** drove us to build e.store from the ground up, turning our hard work and inspiration into a thriving online marketplace.
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mb-5 mt-10 flex items-center">
        <span className="text-cyan-600 mr-2 text-4xl">●</span> Our Mission
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-8 border-l-4 border-cyan-400 pl-4 bg-cyan-50/50 p-3 rounded-md">
        Our mission is to **simplify your shopping journey** and **deliver exceptional value with every purchase**. We strive to **continually expand our curated product range**, ensuring diversity and quality, and to provide **unwavering customer support** that goes above and beyond. Your trust is our greatest asset.
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mb-5 mt-10 flex items-center">
        <span className="text-cyan-600 mr-2 text-4xl">●</span> Why Choose e.store?
      </h2>
      <ul className="list-none text-lg text-gray-700 mb-8 space-y-3">
        <li className="flex items-start">
          <span className="text-cyan-500 mr-3 mt-1">&#10003;</span> <p><strong>Curated Selection:</strong> We carefully select each product to ensure it meets our high standards of quality and value.</p>
        </li>
        <li className="flex items-start">
          <span className="text-cyan-500 mr-3 mt-1">&#10003;</span> <p><strong>Competitive Pricing:</strong> Enjoy great products without breaking the bank, with regular deals and offers.</p>
        </li>
        <li className="flex items-start">
          <span className="text-cyan-500 mr-3 mt-1">&#10003;</span> <p><strong>Secure Shopping:</strong> Your privacy and security are paramount. We use advanced encryption to protect your data.</p>
        </li>
        <li className="flex items-start">
          <span className="text-cyan-500 mr-3 mt-1">&#10003;</span> <p><strong>Reliable Delivery:</strong> We partner with trusted logistics providers to ensure your orders arrive safely and on time.</p>
        </li>
        <li className="flex items-start">
          <span className="text-cyan-500 mr-3 mt-1">&#10003;</span> <p><strong>Exceptional Support:</strong> Our dedicated customer service team is always ready to assist you with any questions or concerns.</p>
        </li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-800 mb-5 mt-10 flex items-center">
        <span className="text-cyan-600 mr-2 text-4xl">●</span> Join Our Community
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        We're more than just an online store; we're a community of shoppers who appreciate quality and value. Follow us on social media and subscribe to our newsletter for the latest updates, exclusive offers, and behind-the-scenes glimpses into e.store.
      </p>

      <p className="text-md text-gray-600 leading-relaxed mt-10 text-center font-medium italic">
        We hope you enjoy your shopping experience with us. For any inquiries, please don't hesitate to reach out to us at **support@e.store.com** or **+1 (555) 123-4567**.
      </p>
    </div>
  );
};

export default AboutPage;
