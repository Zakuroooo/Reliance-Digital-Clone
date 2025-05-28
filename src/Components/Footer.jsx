import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="max-w-[1200px] mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h4 className="text-base font-semibold mb-3">FOLLOW US</h4>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/reliancedigital/"
                aria-label="Facebook"
                className="hover:text-gray-300 transition-colors"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="https://x.com/reliancedigital"
                aria-label="Twitter"
                className="hover:text-gray-300 transition-colors"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://www.youtube.com/reliancedigital"
                aria-label="YouTube"
                className="hover:text-gray-300 transition-colors"
              >
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-3">SITE INFO</h4>
            <ul className="space-y-1.5">
              <li>
                <a
                  href="https://www.reliancedigital.in/content/Aboutus"
                  className="hover:text-gray-300 transition-colors text-sm"
                >
                  About Reliance Digital
                </a>
              </li>
              <li>
                <a
                  href="https://www.reliancedigital.in/content/contactus"
                  className="hover:text-gray-300 transition-colors text-sm"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-3">RESOURCE CENTRE</h4>
            <ul className="space-y-1.5">
              <li>
                <a
                  href="https://www.reliancedigital.in/solutionbox/category/product-reviews/"
                  className="hover:text-gray-300 transition-colors text-sm"
                >
                  Product Reviews
                </a>
              </li>
              <li>
                <a
                  href="https://www.reliancedigital.in/solutionbox/category/buying-guides/"
                  className="hover:text-gray-300 transition-colors text-sm"
                >
                  Buying Guides
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-3">POLICIES</h4>
            <ul className="space-y-1.5">
              <li>
                <a
                  href="https://www.reliancedigital.in/content/terms-of-use"
                  className="hover:text-gray-300 transition-colors text-sm"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="https://www.reliancedigital.in/content/faqs"
                  className="hover:text-gray-300 transition-colors text-sm"
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
