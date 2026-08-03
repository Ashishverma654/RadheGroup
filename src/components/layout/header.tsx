"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/industries', label: 'Industries' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/90 dark:bg-inverse-surface/95 backdrop-blur-md shadow-sm border-b border-outline-variant/30">
      <div className="flex justify-between items-center h-20 px-md max-w-[1280px] mx-auto">
        <Link href="/" className="font-display-lg text-headline-sm md:text-display-lg font-bold text-primary dark:text-inverse-primary tracking-tight">
          RadheGroup
        </Link>
        <div className="hidden md:flex items-center gap-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`font-subheader text-subheader transition-colors ${
                  isActive 
                    ? 'text-primary font-bold border-b-2 border-primary pb-1' 
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-sm">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300 active:scale-90"
          >
            <span className="material-symbols-outlined">{mounted && theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
          </button>
          <Link href="/contact" className="hidden md:inline-flex bg-primary-container text-on-primary-container px-md py-2 font-subheader text-subheader font-bold rounded-lg hover:brightness-110 active:scale-95 transition-all">
            Get Quote
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded hover:bg-primary/10 transition-colors"
          >
            <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-surface dark:bg-inverse-surface border-b border-outline-variant/30 shadow-lg px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg transition-colors py-2 ${
                  isActive 
                    ? 'text-primary font-bold border-l-4 border-primary pl-3 -ml-4' 
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link 
            href="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="bg-primary-container text-on-primary-container text-center py-3 font-bold rounded-lg mt-2 w-full"
          >
            Get Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
