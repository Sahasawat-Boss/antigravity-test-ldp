import React from 'react';

export default function Footer() {
    return (
        <footer className="border-t border-border py-16 px-8 bg-black/30 mt-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-16">
                <div className="max-w-xs">
                    <a href="#" className="text-2xl font-bold tracking-tight text-white inline-block mb-4">Aura.</a>
                    <p className="text-muted">Next-generation analytics for modern teams.</p>
                </div>

                <div className="flex gap-16 flex-wrap">
                    <div className="flex flex-col gap-4">
                        <h4 className="text-lg font-semibold text-white mb-2">Product</h4>
                        <a href="#" className="text-muted hover:text-white transition-colors">Features</a>
                        <a href="#" className="text-muted hover:text-white transition-colors">Pricing</a>
                        <a href="#" className="text-muted hover:text-white transition-colors">Security</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-lg font-semibold text-white mb-2">Company</h4>
                        <a href="#" className="text-muted hover:text-white transition-colors">About</a>
                        <a href="#" className="text-muted hover:text-white transition-colors">Careers</a>
                        <a href="#" className="text-muted hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto text-center text-muted text-sm pt-8 border-t border-border">
                <p>&copy; 2026 Aura Inc. All rights reserved.</p>
            </div>
        </footer>
    );
}
