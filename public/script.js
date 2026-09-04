const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  header.style.background = window.scrollY > 30 ? 'rgba(244, 239, 229, .92)' : 'transparent';
  header.style.backdropFilter = window.scrollY > 30 ? 'blur(12px)' : 'none';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.route-list li, .city-card, .note-grid article').forEach((element) => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(24px)';
  element.style.transition = 'opacity .65s ease, transform .65s ease';
  observer.observe(element);
});

document.head.insertAdjacentHTML('beforeend', '<style>.is-visible{opacity:1!important;transform:none!important}</style>');
