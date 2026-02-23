document.querySelector('.mobile-toggle')?.addEventListener('click', () => {
  document.querySelector('.nav-links')?.classList.toggle('open');
});

document.querySelectorAll('.faq-q').forEach((item) => {
  item.addEventListener('click', () => item.parentElement.classList.toggle('open'));
});

const faqSearch = document.getElementById('faqSearch');
if (faqSearch) {
  faqSearch.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    document.querySelectorAll('.faq-item').forEach((el) => {
      const show = el.innerText.toLowerCase().includes(q);
      el.style.display = show ? 'block' : 'none';
    });
  });
}

document.querySelectorAll('[data-count]').forEach((el) => {
  const target = Number(el.dataset.count);
  let current = 0;
  const step = Math.max(1, Math.ceil(target / 50));
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = current.toLocaleString();
  }, 28);
});
