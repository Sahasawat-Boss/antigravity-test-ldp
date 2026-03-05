import React from 'react';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex flex-col md:flex-row items-center max-w-7xl mx-auto pt-32 pb-8 px-8 gap-16">
            <div className="flex-1 text-center md:text-left">
                <div className="inline-block px-4 py-2 bg-primary/10 text-indigo-400 border border-primary/20 rounded-full text-sm font-medium mb-6 animate-fade-in">
                    ✨ New: AI Predictive Engine v2.0
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight animate-slide-up">
                    Unlock the <span className="gradient-text">Future</span> of Data
                </h1>

                <p className="text-lg md:text-xl text-muted mb-10 max-w-xl mx-auto md:mx-0 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    Transform your raw data into actionable insights instantly with our revolutionary AI-driven analytics platform.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                    <a href="#get-started" className="inline-block px-8 py-4 rounded-lg font-medium text-lg text-white bg-gradient-to-br from-primary to-purple-600 shadow-[0_4px_14px_0_rgba(99,102,241,0.39)] hover:-translate-y-0.5 transition-transform">
                        Start Free Trial
                    </a>
                    <a href="#features" className="inline-block px-8 py-4 rounded-lg font-medium text-lg text-white bg-glass-bg border border-border backdrop-blur-md hover:bg-white/10 hover:-translate-y-0.5 transition-all">
                        Explore Features
                    </a>
                </div>
            </div>

            <div className="flex-1 relative h-[500px] w-full perspective-[1000px] opacity-0 animate-[fadeIn_1.5s_ease-out_0.6s_forwards]">
                {/* Main Dashboard Panel */}
                <div className="glass-panel w-full h-full rounded-2xl transform md:-rotate-y-15 md:rotate-x-5 transition-transform duration-500 hover:rotate-0 flex flex-col">
                    <div className="p-4 border-b border-border flex gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                        <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    </div>
                    <div className="p-8 flex-1 flex items-end">
                        <div className="flex gap-3 items-end w-full h-[200px]">
                            <div className="flex-1 bg-gradient-to-t from-primary/20 to-primary/80 rounded-t-md origin-bottom animate-shrink" style={{ height: '40%' }}></div>
                            <div className="flex-1 bg-gradient-to-t from-primary/20 to-primary/80 rounded-t-md origin-bottom animate-shrink" style={{ height: '70%', animationDelay: '0.1s' }}></div>
                            <div className="flex-1 bg-gradient-to-t from-primary/20 to-primary/80 rounded-t-md origin-bottom animate-shrink" style={{ height: '50%', animationDelay: '0.2s' }}></div>
                            <div className="flex-1 bg-gradient-to-t from-primary/20 to-primary/80 rounded-t-md origin-bottom animate-shrink" style={{ height: '90%', animationDelay: '0.3s' }}></div>
                            <div className="flex-1 bg-gradient-to-t from-primary/20 to-primary/80 rounded-t-md origin-bottom animate-shrink" style={{ height: '60%', animationDelay: '0.4s' }}></div>
                            <div className="flex-1 bg-gradient-to-t from-primary/20 to-primary/80 rounded-t-md origin-bottom animate-shrink" style={{ height: '80%', animationDelay: '0.5s' }}></div>
                        </div>
                    </div>
                </div>

                {/* Floating Side Panels */}
                <div className="glass-panel absolute -bottom-5 -left-10 p-6 rounded-2xl z-10 animate-float hidden md:block">
                    <div className="text-4xl font-bold text-indigo-400 mb-1">+145%</div>
                    <div className="text-sm text-muted">Growth Rate</div>
                </div>

                <div className="glass-panel absolute top-10 -right-5 p-6 rounded-2xl z-10 animate-float-reverse hidden md:block">
                    <div className="text-4xl font-bold text-indigo-400 mb-1">99.9%</div>
                    <div className="text-sm text-muted">Accuracy</div>
                </div>
            </div>
        </section>
    );
}
