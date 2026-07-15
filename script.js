// footer year
document.getElementById('year').textContent = new Date().getFullYear();

// spec bar date, styled like a print proof date stamp
const specDate = document.getElementById('spec-date');
if (specDate) {
  const d = new Date();
  const opts = { year: 'numeric', month: '2-digit', day: '2-digit' };
  specDate.textContent = 'PROOF ' + d.toLocaleDateString('en-GB', opts).replace(/\//g, '.');
}

// gentle reveal-on-scroll for sections (respects reduced motion)
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReduced && 'IntersectionObserver' in window) {
  const targets = document.querySelectorAll('.section, .case-visual, .timeline-item');
  targets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(el => io.observe(el));
}
