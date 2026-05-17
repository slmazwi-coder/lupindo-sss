import React from 'react';
import { GraduationCap, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-6 w-6 text-amber-400" />
              <span className="font-bold">Lupindo SSS</span>
            </div>
            <p className="text-green-200">Tshisa Location, Matatiele<br/>Eastern Cape, South Africa</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-green-200">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +27 123 4567</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@lupindosss.edu.za</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-green-200">
              <li><a href="/admissions" className="hover:text-white">Admissions</a></li>
              <li><a href="/documents" className="hover:text-white">Documents</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-300">
          <p>© 2025 Lupindo Senior Secondary School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
