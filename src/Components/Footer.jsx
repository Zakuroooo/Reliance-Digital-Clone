import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-[1400px] mx-auto px-2 sm:px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">FOLLOW US</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/reliancedigital/"
                aria-label="Facebook"
                className="hover:text-gray-300 transition-colors"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://x.com/reliancedigital"
                aria-label="Twitter"
                className="hover:text-gray-300 transition-colors"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://www.youtube.com/reliancedigital"
                aria-label="YouTube"
                className="hover:text-gray-300 transition-colors"
              >
                <FaYoutube className="text-2xl" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">SITE INFO</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.reliancedigital.in/content/Aboutus"
                  className="hover:text-gray-300 transition-colors"
                >
                  About Reliance Digital
                </a>
              </li>
              <li>
                <a
                  href="https://www.reliancedigital.in/content/contactus"
                  className="hover:text-gray-300 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">RESOURCE CENTRE</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.reliancedigital.in/solutionbox/category/product-reviews/"
                  className="hover:text-gray-300 transition-colors"
                >
                  Product Reviews
                </a>
              </li>
              <li>
                <a
                  href="https://www.reliancedigital.in/solutionbox/category/buying-guides/"
                  className="hover:text-gray-300 transition-colors"
                >
                  Buying Guides
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">POLICIES</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.reliancedigital.in/content/terms-of-use"
                  className="hover:text-gray-300 transition-colors"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="https://www.reliancedigital.in/content/faqs"
                  className="hover:text-gray-300 transition-colors"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
