const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Menu sluiten' : 'Menu openen');
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Menu openen');
    });
  });
}

const demoForm = document.querySelector('#demo-form');
if (demoForm) {
  demoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = demoForm.querySelector('.form-status');
    status.textContent = 'Bedankt. Je aanvraag staat klaar om aan een contactkanaal gekoppeld te worden.';
    demoForm.reset();
  });
}
