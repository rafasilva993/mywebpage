document.addEventListener('DOMContentLoaded', () => {

  // ===== FADE-IN ANIMATION =====
  const elements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.2
  });

  elements.forEach(el => observer.observe(el));


  // ===== FEATURE CLICK FEEDBACK + ANALYTICS =====
  const features = document.querySelectorAll('.feature');

  features.forEach(feature => {

    feature.addEventListener('click', function (e) {

      const link = feature.querySelector('a');
      const title = feature.querySelector('h2')?.innerText;

      // 🔹 Google Analytics event
      if (typeof gtag === 'function') {
        gtag('event', 'feature_click', {
          feature_name: title
        });
      }

      // 🔹 Click animation + delayed navigation
      if (link) {
        e.preventDefault();

        feature.classList.add('active');

        setTimeout(() => {
          window.location.href = link.href;
        }, 150);
      }

    });

  });

});