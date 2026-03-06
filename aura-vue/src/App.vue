<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observerInstance.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  const elementsToReveal = document.querySelectorAll('.reveal-on-scroll');
  elementsToReveal.forEach(el => observer.observe(el));

  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="blob-bg"></div>
  <div class="blob-bg blob-2"></div>

  <nav :class="['navbar', { scrolled: isScrolled }]">
    <div class="nav-container">
      <a href="#" class="logo">Aura.</a>
      <ul class="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#how-it-works">How it Works</a></li>
        <li><a href="#pricing">Pricing</a></li>
      </ul>
      <a href="#get-started" class="btn btn-primary">Get Started</a>
      <div class="mobile-menu-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>

  <main>
    <!-- Hero Section -->
    <section class="hero" id="home">
      <div class="hero-content">
        <div class="badge">✨ New: AI Predictive Engine v2.0</div>
        <h1 class="hero-title">Unlock the <span class="gradient-text">Future</span> of Data</h1>
        <p class="hero-subtitle">Transform your raw data into actionable insights instantly with our
          revolutionary AI-driven analytics platform.</p>
        <div class="hero-cta">
          <a href="#get-started" class="btn btn-primary btn-large">Start Free Trial</a>
          <a href="#features" class="btn btn-secondary btn-large">Explore Features</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="glass-panel main-dashboard">
          <div class="panel-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <div class="panel-body">
            <div class="chart-mockup">
              <div class="bar" style="height: 40%"></div>
              <div class="bar" style="height: 70%"></div>
              <div class="bar" style="height: 50%"></div>
              <div class="bar" style="height: 90%"></div>
              <div class="bar" style="height: 60%"></div>
              <div class="bar" style="height: 80%"></div>
            </div>
          </div>
        </div>
        <div class="glass-panel side-panel float-animation-1">
          <div class="stat-value">+145%</div>
          <div class="stat-label">Growth Rate</div>
        </div>
        <div class="glass-panel side-panel-2 float-animation-2">
          <div class="stat-value">99.9%</div>
          <div class="stat-label">Accuracy</div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features" id="features">
      <div class="section-header">
        <h2>Why Choose Aura?</h2>
        <p>Everything you need to scale your data operations.</p>
      </div>
      <div class="features-grid">
        <div class="feature-card reveal-on-scroll">
          <div class="icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
          </div>
          <h3>Real-time Insights</h3>
          <p>Monitor your metrics as they happen with sub-second latency.</p>
        </div>
        <div class="feature-card reveal-on-scroll">
          <div class="icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
          </div>
          <h3>Predictive Modeling</h3>
          <p>Foresee trends before they happen using advanced ML algorithms.</p>
        </div>
        <div class="feature-card reveal-on-scroll">
          <div class="icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10.000 10.000 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h3>Seamless Integration</h3>
          <p>Connect with your favorite tools in just one click.</p>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="how-it-works" id="how-it-works">
      <div class="section-header">
        <h2>How It Works</h2>
        <p>Get started in minutes, not months.</p>
      </div>
      <div class="steps-container">
        <div class="step-card reveal-on-scroll">
          <div class="step-number">01</div>
          <div class="step-content">
            <h3>Connect Data</h3>
            <p>Link your databases or APIs securely with our plug-and-play integrations.</p>
          </div>
        </div>
        <div class="step-card reveal-on-scroll">
          <div class="step-number">02</div>
          <div class="step-content">
            <h3>AI Analysis</h3>
            <p>Our engine processes billions of rows, finding hidden patterns instantly.</p>
          </div>
        </div>
        <div class="step-card reveal-on-scroll">
          <div class="step-number">03</div>
          <div class="step-content">
            <h3>Actionable Insights</h3>
            <p>Visualize data on beautiful dashboards and receive automated alerts.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="pricing" id="pricing">
      <div class="section-header">
        <h2>Simple, Transparent Pricing</h2>
        <p>Choose the plan that fits your team's needs.</p>
      </div>
      <div class="pricing-grid">
        <div class="pricing-card reveal-on-scroll">
          <div class="pricing-header">
            <h3>Starter</h3>
            <div class="price"><span>$</span>49<span class="period">/mo</span></div>
            <p>Perfect for small teams and startups.</p>
          </div>
          <ul class="features-list">
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Up to 1M data rows</li>
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Basic predictive models</li>
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Email support</li>
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> 1 User</li>
          </ul>
          <a href="#" class="btn btn-secondary btn-full">Get Started</a>
        </div>
        <div class="pricing-card popular reveal-on-scroll">
          <div class="popular-badge">Most Popular</div>
          <div class="pricing-header">
            <h3>Professional</h3>
            <div class="price"><span>$</span>149<span class="period">/mo</span></div>
            <p>For growing companies that need more power.</p>
          </div>
          <ul class="features-list">
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Up to 50M data rows</li>
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Advanced AI analytics</li>
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Priority 24/7 support</li>
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Up to 10 Users</li>
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Custom dashboards</li>
          </ul>
          <a href="#" class="btn btn-primary btn-full">Start Free Trial</a>
        </div>
        <div class="pricing-card reveal-on-scroll">
          <div class="pricing-header">
            <h3>Enterprise</h3>
            <div class="price">Custom</div>
            <p>Tailored solutions for large-scale operations.</p>
          </div>
          <ul class="features-list">
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Unlimited data rows</li>
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Custom AI model training</li>
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Dedicated API limits</li>
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Unlimited Users</li>
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> On-premise deployment</li>
          </ul>
          <a href="#" class="btn btn-secondary btn-full">Contact Sales</a>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="glass-panel cta-box reveal-on-scroll">
        <h2>Ready to transform your workflow?</h2>
        <p>Join thousands of forward-thinking companies.</p>
        <a href="#get-started" class="btn btn-primary btn-large cta-btn">Get Started Now</a>
      </div>
    </section>
  </main>

  <footer>
    <div class="footer-content">
      <div class="footer-brand">
        <a href="#" class="logo">Aura.</a>
        <p>Next-generation analytics for modern teams.</p>
      </div>
      <div class="footer-links">
        <div class="link-group">
          <h4>Product</h4>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Security</a>
        </div>
        <div class="link-group">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 Aura Inc. All rights reserved.</p>
    </div>
  </footer>
</template>
