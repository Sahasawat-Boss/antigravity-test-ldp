import React from 'react';

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-16 px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">How It Works</h2>
                <p className="text-muted text-lg">Get started in minutes, not months.</p>
            </div>

            <div className="flex flex-col gap-8 max-w-3xl mx-auto">
                {[
                    {
                        num: "01",
                        title: "Connect Data",
                        desc: "Link your databases or APIs securely with our plug-and-play integrations."
                    },
                    {
                        num: "02",
                        title: "AI Analysis",
                        desc: "Our engine processes billions of rows, finding hidden patterns instantly."
                    },
                    {
                        num: "03",
                        title: "Actionable Insights",
                        desc: "Visualize data on beautiful dashboards and receive automated alerts."
                    }
                ].map((step, idx) => (
                    <div key={idx} className="group flex flex-col sm:flex-row items-start gap-8 glass-panel p-10 rounded-2xl transition-all duration-300 hover:translate-x-3 hover:border-primary/40 hover:bg-primary/5 reveal-on-scroll">
                        <div className="text-5xl font-bold text-transparent group-hover:text-indigo-400 group-hover:stroke-none transition-colors" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
                            {step.num}
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-muted">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
