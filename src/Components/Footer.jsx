import React from "react";
import Link from "next/link"; // Import Link for Next.js routing
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi"; // Add social media icons

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Define footer links similar to header's navLinks
  const footerNavLinks = [
    { href: "/about", label: "About Us" },
    { href: "/", label: "Returns" },
    { href: "/product", label: "Shipping Info" },
  ];

  const legalLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/", label: "Sitemap" },
  ];

  const socialLinks = [
    { href: "https://facebook.com", icon: <FiFacebook /> },
    { href: "https://twitter.com", icon: <FiTwitter /> },
    { href: "https://instagram.com", icon: <FiInstagram /> },
    { href: "https://linkedin.com", icon: <FiLinkedin /> },
  ];

  return (
    <>
      <footer className="bg-gray-800 text-gray-300 w-full py-8 mt-12 drop-shadow-lg ">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company Info / Logo */}
          <div className="flex flex-col items-start">
            <Link href="/"  className="text-3xl text-white font-bold mb-4">
                <span className="text-cyan-400">E.</span>Store
             
            </Link>
            <p className="text-sm">
              Your one-stop shop for amazing products. Discover quality and convenience with us.
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-cyan-400 transition-colors duration-300">
                      {link.label}
                    
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}  className="hover:text-cyan-400 transition-colors duration-300">
                      {link.label}
                   
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (Example) */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <p className="text-sm">123 Main Street</p>
            <p className="text-sm">City, Country 12345</p>
            <p className="text-sm mt-2">Email: info@estore.com</p>
            <p className="text-sm">Phone: +1 (123) 456-7890</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {currentYear} E.Store. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;