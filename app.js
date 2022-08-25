

// Variables preparer pour le proces


const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');


// affiche mobile menu


const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);



// montrer l'active nav on defilant


const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#skill-page');
  const servicesMenu = document.querySelector('#project-page');
  const contactMenu = document.querySelector('#contact-page');
  let scrollPos = window.scrollY;


  // console.log(scrollPos);

  // ajouter 'highlight' class au lien cliquable
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    servicesMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
    contactMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    servicesMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
    contactMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    aboutMenu.classList.add('highlight');
    servicesMenu.classList.remove('highlight');
    contactMenu.classList.remove('highlight');
    homeMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 3000) {
    contactMenu.classList.add('highlight');
    servicesMenu.classList.remove('highlight');
    homeMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  fermer mobile Menu quand on appui sur un lien
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
