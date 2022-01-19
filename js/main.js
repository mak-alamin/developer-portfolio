let menu_cross = document.querySelector('header i.fa.fa-times');
let menu_bars = document.querySelector('.home i.fa.fa-bars');
let header = document.querySelector('header');

if (window.innerWidth < 768) {
    header.classList.add('mobile');
    
    menu_bars.addEventListener('click', function (e) {
        header.classList.remove('hide');
        header.classList.add('show');
    });
    
    menu_cross.addEventListener('click', function (e) {
        header.style.display = 'block';
        header.classList.remove('show');
        header.classList.add('hide');
    });
}
