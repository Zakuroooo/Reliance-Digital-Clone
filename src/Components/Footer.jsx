import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-blue-900 text-white flex p-5">
      <div className="flex-1 mx-7">
        <h4 className="mb-2">FOLLOW US</h4>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/reliancedigital/"
            aria-label="Facebook"
          >
            <FaFacebook className="text-2xl" />
          </a>
          <a href="https://x.com/reliancedigital" aria-label="Twitter">
            <FaTwitter className="text-2xl" />
          </a>
          <a
            href="https://www.youtube.com/reliancedigital"
            aria-label="YouTube"
          >
            <FaYoutube className="text-2xl" />
          </a>
        </div>
      </div>

      <div className="flex-1 mx-7">
        <h4 className="mb-2">SITE INFO</h4>
        <ul className="list-none p-0">
          <li className="mb-1">
            <a
              href="https://www.reliancedigital.in/content/Aboutus"
              className="hover:underline"
            >
              About Reliance Digital
            </a>
          </li>
          <li className="mb-1">
            <a
              href="https://www.reliancedigital.in/content/contactus"
              className="hover:underline"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      <div className="flex-1 mx-7">
        <h4 className="mb-2">RESOURCE CENTRE</h4>
        <ul className="list-none p-0">
          <li className="mb-1">
            <a
              href="https://www.reliancedigital.in/solutionbox/category/product-reviews/"
              className="hover:underline"
            >
              Product Reviews
            </a>
          </li>
          <li className="mb-1">
            <a
              href="https://www.reliancedigital.in/solutionbox/category/buying-guides/"
              className="hover:underline"
            >
              Buying Guides
            </a>
          </li>
        </ul>
      </div>

      <div className="flex-1 mx-7">
        <h4 className="mb-2">POLICIES</h4>
        <ul className="list-none p-0">
          <li className="mb-1">
            <a
              href="https://www.reliancedigital.in/content/terms-of-use"
              className="hover:underline"
            >
              Terms of Use
            </a>
          </li>
          <li className="mb-1">
            <a
              href="https://www.reliancedigital.in/content/faqs"
              className="hover:underline"
            >
              FAQs
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
