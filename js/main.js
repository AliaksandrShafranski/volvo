$(function(){

    $(".menu__btn, .menu a").on("click", function(){
        $('.menu__list').toggleClass('menu__list--active');
    });

    $(".menu a, .footer__social-arrow").on("click", function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
	$('.menu__list').removeClass('menu__list--active');
    });

    $('.slider__inner').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="arrow-left icon"<button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="arrow-right icon"<button>',
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                }
            },
        ]
    });

    $("#phone").mask("+375 (999) 999-99-99");

});

let openModalEntry = document.querySelectorAll(".accessories__item-btn, .header__content-link, .working__link");
const closePopUp = document.getElementById('popup__close');
const popUp = document.getElementById('popup');

openModalEntry.forEach(function(button){
    button.addEventListener('click', function(e){
        e.preventDefault();
        popUp.classList.add('active');
        console.log(this.innerHTML);
    });
});

closePopUp.addEventListener('click', () => {
        popUp.classList.remove('active');
    });
