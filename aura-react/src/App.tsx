import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const elementsToReveal = document.querySelectorAll('.reveal-on-scroll');
        elementsToReveal.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="blob-bg"></div>
            <div className="blob-bg blob-2"></div>

            <Navbar />

            <main>
                <Hero />
                <Features />
                <HowItWorks />
                <Pricing />

                {/* CTA Section */}
                <section className="py-16 px-8 max-w-7xl mx-auto">
                    <div className="glass-panel text-center py-20 px-8 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 reveal-on-scroll">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to transform your workflow?</h2>
                        <p className="text-muted text-xl mb-10">Join thousands of forward-thinking companies.</p>
                        <a href="#get-started" className="inline-block px-8 py-4 rounded-lg font-medium text-lg text-white bg-gradient-to-br from-primary to-purple-600 shadow-[0_4px_14px_0_rgba(99,102,241,0.39)] hover:scale-105 transition-all">
                            Get Started Now
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default App;
