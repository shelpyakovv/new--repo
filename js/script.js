
new Swiper('.image-slider', {
pagination: {
      el: '.swiper-pagination',
      clickable: true,
      },
	//Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'

	},

	slidesPerView: 3,
 	spaceBetween: 1,
	loop: true,
   	breakpoints: {

            320: {
                slidesPerView: 1,
                spaceBetween: 30
            },


            520: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1025: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }

 });

// ОТКРЫТЬ БУРГЕР МЕНЮ ПО НАЖАТИЮ НА БУРГЕР КНОПКУ

$('.header__burger').on('click', function(){
    let mobiMenu = $('#header-menu');
    let body = $('body');

// ПОЯВЛЕНИЕ И ИСЧЕЗНОВЕРИЕ МЕНЮ
    if( mobiMenu.css('display') == 'none' ){
        mobiMenu.css('display', 'block');
        disable();
        
    }
    else{
        mobiMenu.css('display', 'none');
        enable();
        
    }

// АНИМАЦИЯ БУРГЕР МЕНЮ

    $(this).toggleClass('animate');

    // ОТКЛЮЧЕНИЕ СКРОЛЛА
    body.toggleClass('scroll-off');

});
let $page = $('html, body');
$('a[href*="#"]').click(function() {

    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 200);
    return false;
});



// ФОРМА ЗАКАЗА ЗВОНКА 

//СКРОЛЛ СТРАНИЦЫ
    //Функция отключения скролла
    function disable(){
        $('body').addClass('body__scroll-off')
    };

    //функция включения скролла
    function enable(){
        $('body').removeClass('body__scroll-off');
    }

    


function openModal(){
        resetForm();
        $('.popup').css({'top': $(window).scrollTop() + 100}).addClass('popup_active');
        $('.popup-background').fadeIn();
        disable();
        
    };

//Обработка клика кнопки Заказать звонок
    $('.button0, .button3, .button6').on('click', function(e){
        openModal();  

        
    });

//Функция, которая закрывает модальное окно Заказ услуги/звонка и включает скролл
    function closeModal() {
       resetForm();
        $('.popup').css({'top': $(window).scrollTop() + 100}).removeClass('popup_active');
        $('.popup-background').fadeOut();

      }   

    $('body').on('click','#order-off', function(e){
        closeModal();

//Убираю с экрана форму

        $('.popup').removeClass('popup_active');    
        enable();
    });


//Сбрасываем прошлые данные формы
    function resetForm() {
        $('.formanswer').removeClass('answeractive');
        $('.input').removeClass('error');
    };


$(document).ready(function() {

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "phpmailer/mail.php", //Change
            data: th.serialize()
        }).done(function() {
           
              $('.formanswer').toggle('show')
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
        
    });

});

  










