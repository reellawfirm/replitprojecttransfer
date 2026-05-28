import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      setLocation("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const goToAbout = () => {
    setMobileMenuOpen(false);
    setLocation("/about");
    window.scrollTo({ top: 0 });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary text-primary-foreground shadow-md py-3" : "bg-transparent text-white py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 z-50">
          <img src="/logo.png" alt="Reel Legal Counsel Logo" className="h-10 w-auto object-contain" />
          <span className={`font-serif font-bold text-xl tracking-wide hidden sm:block ${isScrolled ? "text-white" : "text-white"}`}>
            REEL LEGAL
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("services")} className="font-medium text-sm tracking-wide uppercase hover:text-accent transition-colors">
            Practice Areas
          </button>
          <button onClick={() => scrollToSection("why-us")} className="font-medium text-sm tracking-wide uppercase hover:text-accent transition-colors">
            Why Us
          </button>
          <button onClick={() => scrollToSection("results")} className="font-medium text-sm tracking-wide uppercase hover:text-accent transition-colors">
            Results
          </button>
          <button onClick={goToAbout} data-testid="link-about" className="font-medium text-sm tracking-wide uppercase hover:text-accent transition-colors">
            About
          </button>
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none px-6 py-5 font-bold uppercase tracking-widest text-sm"
          >
            Free Case Evaluation
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        <div className={`fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ${mobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
          <button onClick={() => scrollToSection("services")} className="font-serif text-3xl text-white hover:text-accent transition-colors">Practice Areas</button>
          <button onClick={() => scrollToSection("why-us")} className="font-serif text-3xl text-white hover:text-accent transition-colors">Why Us</button>
          <button onClick={() => scrollToSection("results")} className="font-serif text-3xl text-white hover:text-accent transition-colors">Results</button>
          <button onClick={goToAbout} className="font-serif text-3xl text-white hover:text-accent transition-colors">About</button>
          <Button 
            onClick={() => scrollToSection("contact")}
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none px-8 py-6 font-bold uppercase tracking-widest mt-4"
          >
            Free Case Evaluation
          </Button>
        </div>
      </div>
    </header>
  );
}
