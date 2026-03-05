import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md py-4 border-b border-border' : 'py-6'}`}>
            <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold tracking-tight text-white">Aura.</a>

                <ul className="hidden md:flex gap-8 list-none">
                    <li><a href="#features" className="text-muted hover:text-white transition-colors text-sm">Features</a></li>
                    <li><a href="#how-it-works" className="text-muted hover:text-white transition-colors text-sm">How it Works</a></li>
                    <li><a href="#pricing" className="text-muted hover:text-white transition-colors text-sm">Pricing</a></li>
                </ul>

                <a href="#get-started" className="hidden md:inline-block px-6 py-3 rounded-lg font-medium text-sm text-white bg-gradient-to-br from-primary to-purple-600 shadow-[0_4px_14px_0_rgba(99,102,241,0.39)] hover:-translate-y-0.5 transition-transform">
                    Get Started
                </a>

                {/* Mobile Menu Button - simplified for brevity, you can add state-based rendering for the mobile menu */}
                <div className="md:hidden flex flex-col gap-1.5 cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <span className="w-6 h-0.5 bg-white transition-all"></span>
                    <span className="w-6 h-0.5 bg-white transition-all"></span>
                    <span className="w-6 h-0.5 bg-white transition-all"></span>
                </div>
            </div>
        </nav>
    );
}
