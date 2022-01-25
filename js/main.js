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

// Typing animation
setInterval(function(){    
    document.querySelector(".typewriter").classList.remove("type_reverse");
    document.querySelector(".typewriter").classList.add("type_straight");

    setTimeout(function(){
        document.querySelector(".typewriter").classList.remove("type_straight");
        document.querySelector(".typewriter").classList.add("type_reverse");

    }, 4500);
}, 10000);
