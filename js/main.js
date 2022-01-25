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
let my_titles = [
    "Full Stack Web Developer",
    "UI/UX Graphics Designer",
    "MERN Stack Developer",
    "PHP & WordPress Expert",
];

my_titles.forEach(function(title, index){
    let title_index = index;

    setInterval(function(){
        if (title_index == my_titles.length) {
            title_index = 0;
        }
        
        document.querySelector(".typewriter span").innerHTML = my_titles[title_index];

        title_index++;
    }, 5000);
});
