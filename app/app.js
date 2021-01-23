const sideBar = document.querySelector('.side-navbar');
const humbergerMenu = document.querySelector('.humberger-menu');

// humberger menu toggling
humbergerMenu.addEventListener('click', () => {
    sideBar.classList.toggle('open');
    humbergerMenu.classList.toggle('line-change');
});

// closing humberger menu while clicking links
const navLink = document.querySelectorAll('a');
const links = document.querySelector('nav-a');

navLink.forEach((link) => {
    link.addEventListener('click', () => {
        sideBar.classList.add('close');
        humbergerMenu.classList.add('line-close');
        setTimeout(() => {
            sideBar.classList.remove('close');
            sideBar.classList.remove('open');

            humbergerMenu.classList.remove('line-change');
            humbergerMenu.classList.remove('line-close');
        }, 100);
        // setTimeout(() => {}, 10);
    });
});