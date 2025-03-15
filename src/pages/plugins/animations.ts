document.addEventListener("DOMContentLoaded", () => {
  setupScrollReveal();
  animateBackgroundWaves();
  setupTestimonialScroll();
});

/**
 * Sets up the reveal-on-scroll animation for elements
 */
function setupScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
    el.classList.add(
      "opacity-0",
      "translate-y-8",
      "transition-all",
      "duration-700"
    );
    observer.observe(el);
  });
}

/**
 * Animates the background wave SVG elements
 */
function animateBackgroundWaves() {
  const wave1 = document.getElementById("wave1");
  const wave2 = document.getElementById("wave2");

  if (wave1 && wave2) {
    let phase = 0;

    function animate() {
      phase += 0.005;
      const y = Math.sin(phase) * 5;

      if (wave1) {
        wave1.setAttribute(
          "d",
          `M0,50 C30,${60 + y} 70,${40 - y} 100,50 L100,100 L0,100 Z`
        );
      }
      if (wave2) {
        wave2.setAttribute(
          "d",
          `M0,50 C20,${30 - y} 80,${70 + y} 100,50 L100,100 L0,100 Z`
        );
      }

      requestAnimationFrame(animate);
    }

    animate();
  }
}

/**
 * Sets up auto-scrolling testimonials that pause on hover
 */
function setupTestimonialScroll() {
  const container = document.querySelector(".testimonials-scroll");
  if (!container) return;

  const cards = document.querySelectorAll(".testimonial-card");
  let scrollInterval: number | undefined;
  let isHovering = false;

  // Initialize auto-scroll
  startScrolling();

  // Stop scrolling when hovering over a card
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      isHovering = true;
      stopScrolling();
    });

    card.addEventListener("mouseleave", () => {
      isHovering = false;
      startScrolling();
    });
  });

  // Stop scrolling when hovering over the container
  container.addEventListener("mouseenter", () => {
    stopScrolling();
  });

  container.addEventListener("mouseleave", () => {
    if (!isHovering) {
      startScrolling();
    }
  });

  // Stop auto-scroll when user manually scrolls
  container.addEventListener("wheel", () => {
    stopScrolling();
    // Resume after some time of inactivity
    clearTimeout((window as any).scrollResumeTimeout);
    (window as any).scrollResumeTimeout = setTimeout(() => {
      if (!isHovering) {
        startScrolling();
      }
    }, 4000);
  });

  container.addEventListener("touchstart", () => {
    stopScrolling();
  });

  container.addEventListener("touchend", () => {
    // Resume after some time of inactivity
    clearTimeout((window as any).scrollResumeTimeout);
    (window as any).scrollResumeTimeout = setTimeout(() => {
      if (!isHovering) {
        startScrolling();
      }
    }, 4000);
  });

  function startScrolling() {
    // Clear any existing interval
    if (scrollInterval) clearInterval(scrollInterval);

    // Start new interval
    scrollInterval = window.setInterval(() => {
      const el = container as HTMLElement;
      el.scrollLeft += 1;

      // Reset scroll position when we reach the end
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 10) {
        // Smoothly reset to beginning
        smoothScrollTo(el, 0, 1000);
      }
    }, 20);
  }

  function stopScrolling() {
    if (scrollInterval) {
      clearInterval(scrollInterval);
      scrollInterval = undefined;
    }
  }

  function smoothScrollTo(element: HTMLElement, to: number, duration: number) {
    const start = element.scrollLeft;
    const change = to - start;
    let currentTime = 0;
    const increment = 20;

    function animateScroll() {
      currentTime += increment;
      const val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollLeft = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    }

    function easeInOutQuad(t: number, b: number, c: number, d: number): number {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    animateScroll();
  }
}
