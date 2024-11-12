import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Mail, Clock, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-blue-400 mb-2">Ostech</h2>
            <p className="text-gray-300">
              Ostech Machines Pvt Ltd reflects quality workmanship from Gujarat in the field of machine building. With an integrated organizational approach and a growing distribution network, we have established a brand in the global arena.
            </p>
          </div>
          <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-slate-900 transition-colors">
            Inquiry
          </button>
        </div>

        {/* Products Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold border-b border-blue-400 pb-2 mb-4">Our Products</h3>
          <ul className="space-y-3">
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Case Packer</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Retractable Conveyors</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Customized Solution</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Sparklite</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Double Layer</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold border-b border-blue-400 pb-2 mb-4">Contact</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <MapPin className="w-5 h-5 mt-1 text-blue-400" />
              <p className="text-gray-300">
                Factory Address: OSTECH Machines Pvt Ltd Plot no.121 Vibrant Business Park, GIDC, Vapi-396191, Gujarat
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <p className="text-gray-300">Office Timing: 9:00 AM - 6:00 PM</p>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-blue-400" />
              <p className="text-gray-300">+91 99783 88388</p>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-blue-400" />
              <p className="text-gray-300">rajneesh@ostech.in</p>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-blue-400" />
              <p className="text-gray-300">kamal.kaushik@ostech.in</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            Designed by RnD Technosoft 2024 © Ostech Machines Pvt Ltd. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;