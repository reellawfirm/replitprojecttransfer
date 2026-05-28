import React from "react";
import { Link } from "wouter";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0f0f4a] text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-4 mb-6">
              <img src="/logo.png" alt="Reel Legal Counsel Logo" className="h-14 w-auto object-contain" />
              <div>
                <h3 className="font-serif font-bold text-2xl tracking-wide">REEL LEGAL</h3>
                <p className="text-accent text-sm font-bold tracking-widest uppercase mt-1">Counsel</p>
              </div>
            </Link>
            <p className="text-gray-300 text-lg max-w-md font-serif italic">
              "Advocacy that levels the playing field."
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-accent">Quick Links</h4>
            <ul className="space-y-4">
              <li><button onClick={() => scrollToSection("services")} className="text-gray-300 hover:text-white transition-colors">Practice Areas</button></li>
              <li><button onClick={() => scrollToSection("why-us")} className="text-gray-300 hover:text-white transition-colors">Our Approach</button></li>
              <li><button onClick={() => scrollToSection("testimonials")} className="text-gray-300 hover:text-white transition-colors">Testimonials</button></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Chris Reel</Link></li>
              <li><button onClick={() => scrollToSection("contact")} className="text-gray-300 hover:text-white transition-colors">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-accent">Contact</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="font-bold mt-1">A:</span>
                <span>123 Legal Avenue, Suite 400<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="font-bold">P:</span>
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="font-bold">E:</span>
                <span>info@reellegal.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Reel Legal Counsel. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
