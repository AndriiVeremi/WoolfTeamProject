(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const mobileMenuWrap = document.querySelector('.mobile-menu-wrapper');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const mobileMenuList = document.querySelectorAll('.mobile-menu-nav');

  const disableScrool = () => {
    document.body.style.overflowY = 'hidden';
  }

  const enableScrool = () => {
    document.body.style.overflowY = 'visible';
  }
  
  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    mobileMenu.classList.contains('is-open') ? disableScrool() : enableScrool();
    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

   const closeMenu = () => {
    mobileMenu.classList.remove('is-open');
    enableScrool()
  }

  const closeMenuEsc = (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  }

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  document.addEventListener('keydown', closeMenuEsc);
  mobileMenu.addEventListener('click', closeMenu);
  mobileMenuWrap.addEventListener('click', (e) => e.stopPropagation());
  mobileMenuList.forEach(elem => elem.addEventListener('click', closeMenu));

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 1280px)').addEventListener('change', e => {
    console.log(e);
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
