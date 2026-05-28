import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const practiceAreas = [
  { label: "Commercial Litigation", href: "/practice-areas/commercial-litigation" },
  { label: "Employment Litigation", href: "/practice-areas/employment-litigation" },
  { label: "Property Damage Claims", href: "/practice-areas/property-damage" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const [, setLocation] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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

  const goTo = (href: string) => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileAreasOpen(false);
    setLocation(href);
    window.scrollTo({ top: 0 });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-white ${
        isScrolled ? "shadow-md py-3" : "py-4"
      }`}
      style={{ backgroundColor: "rgb(16,11,50)" }}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center z-50">
          <img src="/logo.png" alt="Reel Legal Counsel Logo" className="h-36 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">

          {/* Practice Areas Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              data-testid="nav-practice-areas"
              onClick={() => setDropdownOpen((o) => !o)}
              className="flex items-center gap-1 font-medium text-sm tracking-wide uppercase hover:text-accent transition-colors"
            >
              Practice Areas
              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-3 w-64 bg-white shadow-xl border border-border z-50">
                {practiceAreas.map((area) => (
                  <button
                    key={area.href}
                    data-testid={`nav-${area.href}`}
                    onClick={() => goTo(area.href)}
                    className="block w-full text-left px-6 py-4 text-sm font-medium text-primary hover:bg-muted hover:text-accent transition-colors border-b border-border last:border-0 uppercase tracking-wide"
                  >
                    {area.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => scrollToSection("why-us")}
            className="font-medium text-sm tracking-wide uppercase hover:text-accent transition-colors"
          >
            Why Us
          </button>

          <button
            onClick={goToAbout}
            data-testid="link-about"
            className="font-medium text-sm tracking-wide uppercase hover:text-accent transition-colors"
          >
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
        <div
          className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 transition-transform duration-300 ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{ backgroundColor: "rgb(16,11,50)" }}
        >
          {/* Practice Areas accordion in mobile */}
          <div className="flex flex-col items-center w-full px-8">
            <button
              onClick={() => setMobileAreasOpen((o) => !o)}
              className="flex items-center gap-2 font-bold text-3xl text-white hover:text-accent transition-colors"
            >
              Practice Areas
              <ChevronDown
                size={22}
                className={`transition-transform duration-200 ${mobileAreasOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileAreasOpen && (
              <div className="mt-4 flex flex-col items-center gap-3 w-full">
                {practiceAreas.map((area) => (
                  <button
                    key={area.href}
                    onClick={() => goTo(area.href)}
                    className="text-lg text-accent hover:text-white transition-colors font-medium"
                  >
                    {area.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => scrollToSection("why-us")}
            className="font-bold text-3xl text-white hover:text-accent transition-colors"
          >
            Why Us
          </button>
          <button
            onClick={goToAbout}
            className="font-bold text-3xl text-white hover:text-accent transition-colors"
          >
            About
          </button>
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
