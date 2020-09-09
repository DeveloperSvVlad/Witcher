// Функция которая проверяет может ли браузер отобразить формат webp, если может, то функция добавляет к селектору body класс webp
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
 testWebP(function (support) {
    
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});

var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    autoplay: false,
    navigation: {
        nextEl: '.navigation__arrow',
    },
    breakpoints: {
        540: {
            slidesPerView: 2,
        }
    }
});

const $menuButton = document.querySelector('.header__button');
const $menu = document.querySelector('.header__row');
const $links = document.querySelectorAll('.menu__list a');


$menuButton.addEventListener('click', () => {
    $menuButton.classList.toggle('header__button-active');
    $menu.classList.toggle('header-active');

    for(let menuLinks of $links ) {
        menuLinks.addEventListener('click', () => {
            $menuButton.classList.remove('header__button-active');
            $menu.classList.remove('header-active');
        })
    }
})
