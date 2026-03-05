import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
    return (
        <section id="pricing" className="py-16 px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
                <p className="text-muted text-lg">Choose the plan that fits your team's needs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Basic Plan */}
                <div className="glass-panel p-8 sm:p-12 rounded-3xl h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] reveal-on-scroll">
                    <div className="text-center border-b border-border pb-8 mb-8">
                        <h3 className="text-2xl mb-4 text-white">Starter</h3>
                        <div className="text-6xl font-bold leading-none mb-4">
                            <span className="text-2xl align-top text-muted">$</span>49<span className="text-lg align-bottom text-muted font-normal">/mo</span>
                        </div>
                        <p className="text-muted text-sm">Perfect for small teams and startups.</p>
                    </div>
                    <ul className="flex-1 space-y-4 mb-12">
                        {['Up to 1M data rows', 'Basic predictive models', 'Email support', '1 User'].map((item, i) => (
                            <li key={i} className="flex gap-3 text-sm text-white">
                                <Check className="w-5 h-5 text-green-500 shrink-0" /> {item}
                            </li>
                        ))}
                    </ul>
                    <a href="#" className="w-full inline-block text-center px-6 py-4 rounded-lg font-medium text-white bg-glass-bg border border-border hover:bg-white/10 transition-all">
                        Get Started
                    </a>
                </div>

                {/* Pro Plan */}
                <div className="glass-panel p-8 sm:p-12 rounded-3xl h-full flex flex-col relative transform lg:scale-105 bg-gradient-to-b from-primary/10 to-transparent border-primary/50 transition-all duration-300 hover:-translate-y-2 reveal-on-scroll">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-br from-primary to-purple-600 text-white px-6 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                        Most Popular
                    </div>
                    <div className="text-center border-b border-border pb-8 mb-8 mt-2">
                        <h3 className="text-2xl mb-4 text-white">Professional</h3>
                        <div className="text-6xl font-bold leading-none mb-4">
                            <span className="text-2xl align-top text-muted">$</span>149<span className="text-lg align-bottom text-muted font-normal">/mo</span>
                        </div>
                        <p className="text-muted text-sm">For growing companies that need more power.</p>
                    </div>
                    <ul className="flex-1 space-y-4 mb-12">
                        {['Up to 50M data rows', 'Advanced AI analytics', 'Priority 24/7 support', 'Up to 10 Users', 'Custom dashboards'].map((item, i) => (
                            <li key={i} className="flex gap-3 text-sm text-white">
                                <Check className="w-5 h-5 text-green-500 shrink-0" /> {item}
                            </li>
                        ))}
                    </ul>
                    <a href="#" className="w-full inline-block text-center px-6 py-4 rounded-lg font-medium text-white bg-gradient-to-br from-primary to-purple-600 shadow-[0_4px_14px_0_rgba(99,102,241,0.39)] hover:scale-105 transition-all">
                        Start Free Trial
                    </a>
                </div>

                {/* Enterprise Plan */}
                <div className="glass-panel p-8 sm:p-12 rounded-3xl h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] reveal-on-scroll">
                    <div className="text-center border-b border-border pb-8 mb-8">
                        <h3 className="text-2xl mb-4 text-white">Enterprise</h3>
                        <div className="text-6xl font-bold leading-none mb-4">
                            <span className="text-4xl text-white">Custom</span>
                        </div>
                        <p className="text-muted text-sm mt-3">Tailored solutions for large-scale operations.</p>
                    </div>
                    <ul className="flex-1 space-y-4 mb-12">
                        {['Unlimited data rows', 'Custom AI model training', 'Dedicated API limits', 'Unlimited Users', 'On-premise deployment'].map((item, i) => (
                            <li key={i} className="flex gap-3 text-sm text-white">
                                <Check className="w-5 h-5 text-green-500 shrink-0" /> {item}
                            </li>
                        ))}
                    </ul>
                    <a href="#" className="w-full inline-block text-center px-6 py-4 rounded-lg font-medium text-white bg-glass-bg border border-border hover:bg-white/10 transition-all">
                        Contact Sales
                    </a>
                </div>
            </div>
        </section>
    );
}
