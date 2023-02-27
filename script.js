// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//         }
//     });
// });

// const hiddenElemnts = document.querySelectorAll('.hidden');
// hiddenElemnts.forEach((el) => observer.observe(el));

// this for nav-sticky 

document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');

    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// this is for icon bar 

let changeIcon = function(icon) {
    icon.classList.toggle('fa-times')
}
