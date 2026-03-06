import { Component, AfterViewInit, OnDestroy, HostListener, signal, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit, OnDestroy {
  isScrolled = signal(false);
  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  ngAfterViewInit() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    this.observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observerInstance.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elementsToReveal = this.el.nativeElement.querySelectorAll('.reveal-on-scroll');
    elementsToReveal.forEach((el: Element) => this.observer?.observe(el));

    const featureCards = this.el.nativeElement.querySelectorAll('.feature-card');
    featureCards.forEach((card: HTMLElement, index: number) => {
      card.style.transitionDelay = `${index * 0.1}s`;
    });
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
