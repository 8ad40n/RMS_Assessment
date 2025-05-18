"use client";

import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Send, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#880808] text-white pt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-between items-center">
          {/* Newsletter Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">RESTAURANT</h2>
            <p className="text-sm">Subscribe our newsletter and get discount 25%off</p>
            <div className="relative flex gap-2">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="px-4 py-2 rounded bg-white text-black flex-1"
              />
              <Send className="absolute right-0 top-0 h-full w-10 px-2 cursor-pointer hover:text-gray-300 bg-[#A52A2A]"/>
            </div>
            <div className="flex gap-4 mt-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-gray-300" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-gray-300" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-gray-300" />
              <Youtube className="w-5 h-5 cursor-pointer hover:text-gray-300" />
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <p>3517 W. Gray St. Utica, Pennsylvania 57867</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <p>(480) 555-0103</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <p>M.Alyaqout@4house.Co</p>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <p>Sun - Sat / 10:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Our Menu</a></li>
              <li><a href="#" className="hover:text-gray-300">Team</a></li>
              <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
            </ul>
          </div>

          {/* Instagram Gallery */}
          <div className="hidden md:block space-y-4">
            <h3 className="text-xl font-semibold">Instagram Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              {[
                "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              ].map((src, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded">
                  <Image
                    width={200}
                    height={200}
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-red-900 bg-[#A52A2A] text-sm mt-8 ">
          <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>Copyright © 2025. All rights reserved</p>
            <div className="hidden md:flex gap-4">
              <Link href="#" className="hover:text-gray-300">Privacy Policy</Link>
              <Link href="#" className="hover:text-gray-300">Term of Use</Link>
              <Link href="#" className="hover:text-gray-300">Partner</Link>
            </div>
          </div>
        </div>
    </footer>
  );
}