const navToggle = document.getElementById('navToggle');
const navRight = document.querySelector('.nav-right');

navToggle.addEventListener('click', () => {
  navRight.classList.toggle('open');
});

navRight.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navRight.classList.remove('open'));
});

const revealed = document.querySelectorAll('.reveal');
if (!('IntersectionObserver' in window)) {
  revealed.forEach(el => el.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.01, rootMargin: '0px 0px -8% 0px' }
  );
  revealed.forEach(el => observer.observe(el));
}
