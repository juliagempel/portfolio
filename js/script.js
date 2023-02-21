const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

const ratings = document.querySelectorAll('.rating__counter'),
        lines = document.querySelectorAll('.rating__line span');

ratings.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});