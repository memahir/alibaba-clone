import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Get Support */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Get Support</h3>
            <ul className="text-gray-600 space-y-2">
              <li><a href="#" className="hover:text-orange-600">Help Center</a></li>
              <li><a href="#" className="hover:text-orange-600">FAQs</a></li>
              <li><a href="#" className="hover:text-orange-600">Customer Service</a></li>
              <li><a href="#" className="hover:text-orange-600">Report an Issue</a></li>
            </ul>
          </div>

          {/* Payments & Protections */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Payments & Protections</h3>
            <ul className="text-gray-600 space-y-2">
              <li><a href="#" className="hover:text-orange-600">Secure Payments</a></li>
              <li><a href="#" className="hover:text-orange-600">Trade Assurance</a></li>
              <li><a href="#" className="hover:text-orange-600">Refund Policy</a></li>
              <li><a href="#" className="hover:text-orange-600">Buyer Protection</a></li>
            </ul>
          </div>

          {/* Source on Alibaba.com */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Source on Alibaba.com</h3>
            <ul className="text-gray-600 space-y-2">
              <li><a href="#" className="hover:text-orange-600">Product Categories</a></li>
              <li><a href="#" className="hover:text-orange-600">Request for Quotation</a></li>
              <li><a href="#" className="hover:text-orange-600">Supplier Directory</a></li>
            </ul>
          </div>

          {/* Sell on Alibaba.com */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Sell on Alibaba.com</h3>
            <ul className="text-gray-600 space-y-2">
              <li><a href="#" className="hover:text-orange-600">Start Selling</a></li>
              <li><a href="#" className="hover:text-orange-600">Seller Memberships</a></li>
              <li><a href="#" className="hover:text-orange-600">Marketing Solutions</a></li>
              <li><a href="#" className="hover:text-orange-600">Supplier Resources</a></li>
            </ul>
          </div>

          {/* Get to Know Us */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Get to Know Us</h3>
            <ul className="text-gray-600 space-y-2">
              <li><a href="#" className="hover:text-orange-600">About Alibaba</a></li>
              <li><a href="#" className="hover:text-orange-600">Careers</a></li>
              <li><a href="#" className="hover:text-orange-600">Investor Relations</a></li>
              <li><a href="#" className="hover:text-orange-600">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-6 border-t pt-4 flex justify-between items-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Alibaba.com. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-orange-600"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-orange-600"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-orange-600"><FaLinkedin size={20} /></a>
            <a href="#" className="hover:text-orange-600"><FaInstagram size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
