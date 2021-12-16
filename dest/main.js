//scroll menu top
let headers = document.querySelector('.header__menu-fixed  ');
let headerPosition = document.querySelector('.homepage').offsetHeight;
let heightBtn = document.querySelector('.logo').offsetHeight;

window.addEventListener('scroll', function () {
    let position = window.pageYOffset;
    if (position > ((headerPosition / 2) + (heightBtn / 2))) {
        headers.style.display = 'block';
    } else {
        headers.style.display = 'none';
    }
});

//menu 
let btnLogo = document.querySelector('.logo');
// let home =document.querySelector('main');
let btnMenu = document.querySelector('.menu');
let btnClose = document.querySelector('.menu__option-left .close');
let btnOverlay = document.querySelector('.overlay-wrap .overlay');

btnLogo.addEventListener('click', function(e){
    e.stopPropagation();
    btnMenu.classList.add('active');
    // home.classList.add('active');
    btnClose.classList.add('active');
    btnOverlay.classList.add('active');
});

function removeClass() {
    btnMenu.classList.remove('active');
    // home.classList.remove('active');
    btnClose.classList.remove('active');
    btnOverlay.classList.remove('active');
}

btnMenu.addEventListener('click', function (e) {
    e.stopPropagation();
});

btnClose.addEventListener('click', function(){
    removeClass();
});

btnOverlay.addEventListener('click', function(){
    removeClass();
});


//menu mobile
let btnMobile = document.querySelector('.menu__mobile-top .menu__top-hamburger');
let btnMenuMobile = document.querySelector('.menu__mobile');
let btnCloseMenu = document.querySelector('.menu__mobile');
let btnCloseMobile = document.querySelector('.menu__mobile .menu__option .menu__option-left .close');

btnMobile.addEventListener('click', function(){
    btnMenuMobile.classList.add('active');
});

btnCloseMenu.addEventListener('click', function(){
    btnCloseMobile.classList.add('active');
});
btnCloseMobile.addEventListener('click', function (e) {
    e.stopPropagation();
    btnCloseMobile.classList.remove('active');
    btnMenuMobile.classList.remove('active');
});

window.addEventListener('scroll', function () {
    btnCloseMobile.classList.remove('active');
    btnMenuMobile.classList.remove('active');
});


//BACK TO TOP
let toTop = document.querySelector('.info__backToTop');
function showBackToTop() {
    let scrollY = window.pageXOffset;
    if (scrollY > 500)
    {
        toTop.classList.add('active');
    }
    else {
        toTop.classList.remove('active')
    }
}
toTop.addEventListener('click', function(){
    window.scrollTo({
        top: 0
    })
})


//PROJECT
// let project = document.querySelector('.project__wrap-dropdown');
// let projectCurrent = document.querySelector('.project__wrap-dropdown .current span');
// let projectOption = document.querySelector('.project__wrap-dropdown .option');
// let projectItem = document.querySelectorAll('.project__wrap-dropdown .option a');

// project.addEventListener('click', function(e){
//     e.stopPropagation();
//     project.classList.toggle('active');
// });

// // projectItem.forEach(function(item){
// //     item.addEventListener('click', function(){
// //         let projectText = this.textContent;
// //         let projectCurrentSpan = projectCurrent.textContent;
// //         projectCurrent.innerHTML = projectText;
// //         this.innerHTML = projectCurrentSpan;
// //     })
// // })

// document.addEventListener('click', function(){
//     project.classList.remove('active');
// })


//PROJECT PAGE
let clickNumber = document.querySelectorAll('.option p');
let clickActive = document.querySelectorAll('.project__list');

clickNumber.forEach(function(items , index){
    items.addEventListener('click', function(){
        let numberID = index + 1;
        clickNumber.forEach(function(number){
            number.classList.remove('active');
        });
        clickActive.forEach(function(numbers){
            numbers.classList.remove('active');
        });
        this.classList.add('active');
        document.querySelector('.project__list-' + numberID).classList.add('active');
    })
})

//PRODUCT DETAIL 
let $carousel = $('.wrap');
$carousel.flickity({
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    prevNextButtons: false
});
$('.product__wrap-control .--prev').on('click', function () {
    $carousel.flickity('previous');
});
$('.product__wrap-control .--next').on('click', function () {
    $carousel.flickity('next');
});

let $slider = $('.slider__bg');
$slider.flickity({
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    autoPlay: 2000
});

//Lazy-loading
$(window).on('load',function(){
    $('.loading').removeClass('active');
    // $('.svg').svgToInline();
})


