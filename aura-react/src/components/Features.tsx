import React from 'react';
import { Activity, Cpu, Link } from 'lucide-react';

export default function Features() {
    const features = [
        {
            title: "Real-time Insights",
            description: "Monitor your metrics as they happen with sub-second latency.",
            icon: <Activity className="w-6 h-6" />
        },
        {
            title: "Predictive Modeling",
            description: "Foresee trends before they happen using advanced ML algorithms.",
            icon: <Cpu className="w-6 h-6" />
        },
        {
            title: "Seamless Integration",
            description: "Connect with your favorite tools in just one click.",
            icon: <Link className="w-6 h-6" />
        }
    ];

    return (
        <section id="features" className="py-32 px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Why Choose Aura?</h2>
                <p className="text-muted text-lg">Everything you need to scale your data operations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="glass-panel p-10 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] reveal-on-scroll" style={{ transitionDelay: `${index * 0.1}s` }}>
                        <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-indigo-400 mb-6">
                            {feature.icon}
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                        <p className="text-muted leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
