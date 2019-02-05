$(document).ready(function(){

  $('.slider').slick({
  	 autoplay:true,
    autoplaySpeed:6000,
    speed:600,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnHover:false,
    dots:true,
    pauseOnDotsHover:true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    touchThreshold: 100,
   fade:true,
    prevArrow:'<button class="PrevArrow"><div class="arrow-left"><div class="arrow-top"></div><div class="arrow-bottom"></div><div class="arrow-center"></div></div></button>',
    nextArrow:'<button class="NextArrow"><div class="arrow-right"><div class="arrow-top_1"></div><div class="arrow-bottom_1"></div><div class="arrow-center_1"></div></button>'
  });

   $('.slick_slider_who').slick({
   	prevArrow:'<button class="PrevArrow"><div class="arrow-left"><div class="arrow-top"></div><div class="arrow-bottom"></div><div class="arrow-center"></div></div></button>',
    nextArrow:'<button class="NextArrow"><div class="arrow-right"><div class="arrow-top_1"></div><div class="arrow-bottom_1"></div><div class="arrow-center_1"></div></button>'

   });
    $(".slick_slider_who").on('afterChange', function(event, slick, currentSlide){
     $("#ssw").text(currentSlide + 1);
  });




    $(".slider_news").slick({
      slidesToShow: 3,
      prevArrow:'<button class="PrevArrow"><div class="arrow-left"><div class="arrow-top"></div><div class="arrow-bottom"></div><div class="arrow-center"></div></div></button>',
      nextArrow:'<button class="NextArrow"><div class="arrow-right"><div class="arrow-top_1"></div><div class="arrow-bottom_1"></div><div class="arrow-center_1"></div></button>'
    });


     $(".slider_statia").slick({
      slidesToShow: 3,
      prevArrow:'<button class="PrevArrow"><div class="arrow-left"><div class="arrow-top"></div><div class="arrow-bottom"></div><div class="arrow-center"></div></div></button>',
      nextArrow:'<button class="NextArrow"><div class="arrow-right"><div class="arrow-top_1"></div><div class="arrow-bottom_1"></div><div class="arrow-center_1"></div></button>',
    });


    // $('[href="#home"]').on('shown.bs.tab', function (e) {
    //   console.log('click Home');
    //   $('.slider_news').resize();
    // });
    // $('[href="#profile"]').on('shown.bs.tab', function (e) {
    //   console.log('click Profile');
    //   $('.slider_statia').resize();
    // });


    // $('[href="#home"]').on('shown.bs.tab', function (e) {
    //         $('.slider_news').resize();
    //     });
    // $('[href="#profile"]').on('shown.bs.tab', function (e) {
    //       $('.slider_statia').resize();
    //   });





     $(".slider_news_2").slick({
      slidesToShow:1,
       prevArrow:'<button class="PrevArrow"><div class="arrow-left"><div class="arrow-top"></div><div class="arrow-bottom"></div><div class="arrow-center"></div></div></button>',
      nextArrow:'<button class="NextArrow"><div class="arrow-right"><div class="arrow-top_1"></div><div class="arrow-bottom_1"></div><div class="arrow-center_1"></div></button>'
    });


    $(".slider_gallery").on('afterChange', function(event, slick, currentSlide){
     $("#sg").text(currentSlide + 1);
     var slickk=$('.slider_gallery');
    $('.slider_gullery_counter .count').html( slickk.slick("getSlick").slideCount);
  });


function navtitle(){
   $('#pp-nav a').each(function(){
      if ($(this).hasClass('active')){
        var title = $(this).parent().data('tooltip');
        if(!$('#pp-nav .title').length)
        {
          $('#pp-nav').append('<div class="title">' + title + '</div>');
        }
        else
        {
          $('#pp-nav .title').html(title);
        }
      }
    });
};



$('.pagepiling').pagepiling({
	 menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
         anchors: ['section1', 'section2', 'section3', 'section4', 'section5','section6','section7','section8'],
        scrollingSpeed: 700,
        easing: 'linear',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['СТАРТОВАЯ', 'КТО МЫ', 'ТОЛЬКО ФАКТЫ', 'МАТЕРИАЛЫ И ТЕХНОЛОГИИ','ГАЛЕРЕЯ РАБОТ','ОТПРАВИТЬ ЗАЯВКУ','НОВОСТИ И СТАТЬИ','КОНТАКТЫ']
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,
        afterLoad: function(){
          navtitle();
        },
        afterRender: function(){
          navtitle();
        }

});



  $(document).ready(function(){
        $('#nav-icon3').click(function(){
            $(this).toggleClass('open');
        });
    });
  /*$(document).ready(function(){
        $('#nav-icon3').click(function(){
           if ($('body').hasClass('pp-viewing-section5'))
            {$(this).removeClass('pp-viewing-section5');}
         else {

             $(this).addClass('pp-viewing-section5');


        };
    });*/


	  $('.mobile_mnu').on('click',function(){
	  	$('.menu').toggleClass("menu-is-opened");

	  });

	  $(window).on('load', function() {
      $(".water-fill").css("-webkit-animation", "none");
      $(".water-fill").css("-moz-animation", "none");
      $(".water-fill").css("-ms-animation", "none");
      $(".water-fill").css("animation", "none");
      $(".water-fill").css("transition", ".3s");
        $('.water-fill').css('width', '100%!important');
	      $('.preloader').fadeOut('slow');
	      });

      $('.arrow_click').on('click', function() {
    $(this).toggleClass('left right');
      });
	   $('.arrow_click').on('click',function(){
      $('.photo_right,arrow_click').toggleClass("active");

    });

	  $('.scroll-pane').jScrollPane({
	  	verticalDragMinHeight: 10,
      mousewheel: true

	  });
    // var api = element.data('scrollToBottom(animate)');



    $("#link ul").on("click", "li", function(){
    $("#slide ul li").eq($(this).index()).append("1"); //делаете что хотите со слайдом с таким же индексом как у ссылки
    });

// Табы
    var tabContainer = document.querySelector('.nav-tabs'); // Конейнер с табами, на котором будем ловить клик
    // Элементы, которые надо будет сделать .active
    var tabButton = document.querySelectorAll('.nav-item');
    var tabContentItem = document.querySelectorAll('.tab-content__item');
    var tabLink = document.querySelectorAll('.nav-link');
    // /Элементы, которые надо будет сделать .active
    var tabContent = document.querySelector('.tab-content'); // Определяем родительский конейтнер
    var slickSliderInTab = document.querySelector('.tab-content .slick-slider'); // Определяем слайдер
    var tabContentItemHeight = slickSliderInTab.offsetHeight; // Берем высоту слайдера
    tabContent.style.height = tabContentItemHeight + 'px'; // Добавляем высоту слайдера родительсткому контенеру
    var tabLength = tabButton.length; // Количество табов

    tabContainer.onclick = (e) => {
      var target = e.target;
      for (var i = 0; i < tabLength; i++) {
        tabButton[i].classList.remove('active');
        tabContentItem[i].classList.remove('active');
        tabLink[i].classList.remove('active');
        if (tabLink[i] == target) {
          tabButton[i].classList.add('active');
          tabContentItem[i].classList.add('active');
          tabLink[i].classList.add('active');
        }
      }
    }
// /Табы



});



      var $slider = $('.slider_news');
      var $progressBar = $('.progress');
      var $progressBarLabel = $( '.slider__label' );

      $slider.on('init beforeChange', function(event, slick, currentSlide, nextSlide = 0) {
        var calc = ( (nextSlide + 1) / (slick.slideCount) ) * 100;

        $progressBar
          .css('background-size',  calc + '% 100%')
          .attr('aria-valuenow', calc  );

        $progressBarLabel.text( calc + '% completed' );
      });

      var $slider = $('.slider_statia');
      var $progressBar = $('.progress');
      var $progressBarLabel = $( '.slider__label' );

      $slider.on('init beforeChange', function(event, slick, currentSlide, nextSlide = 0) {
        var calc = ( (nextSlide + 1) / (slick.slideCount) ) * 100;

        $progressBar
          .css('background-size',  calc + '% 100%')
          .attr('aria-valuenow', calc  );

        $progressBarLabel.text( calc + '% completed' );
      });

/*---------- progres count slider_gallary-----------------*/

$(document).ready(function() {
      var $slider = $('.slider_gallery');
      var $progressBar = $('.progress');
      var $progressBarLabel = $( '.slider__label' );

      $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        var calc = ( (nextSlide + 1) / (slick.slideCount- 1) ) * 100;

        $progressBar
          .css('background-size',  calc + '% 100%')
          .attr('aria-valuenow', calc  );

        $progressBarLabel.text( calc + '% completed' );
      });

      $slider.slick({
        slidesToShow:4,
        infinite: false,
      slidesToScroll:1,
      animation: true,
      prevArrow:'<button class="PrevArrow"><div class="arrow-left"><div class="arrow-top"></div><div class="arrow-bottom"></div><div class="arrow-center"></div></div></button>',
      nextArrow:'<button class="NextArrow"><div class="arrow-right"><div class="arrow-top_1"></div><div class="arrow-bottom_1"></div><div class="arrow-center_1"></div></button>',
      responsive: [
       {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 980,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 1
      }
    }
  ]
      });
      /*---------- end progres count slider_gallary-----------------*/


      /*------------Filter slider_gallery----------*/

        var filtered = false;

    $('.filter-link').on('click', function(e){
      e.preventDefault();



      var $this = $(this),
          link = $this.attr('href'),
          dir = link.replace(/#/, '');

      if(!$this.hasClass('active')){
            $this.addClass('active').siblings().removeClass('active');
      }else{
        $this.removeClass('active');
      }

      if (filtered === false) {
        $('.slider_gallery').slick('slickUnfilter');
        $('.slider_gallery').slick('slickFilter', '.filter-' + dir);
        $('.slider_gallery').slick('slickGoTo', 0);
      }else {
        $('.slider_gallery').slick('slickUnfilter');
        $('.slider_gallery').slick('slickFilter', '.filter-' + dir);
        $('.slider_gallery').slick('slickGoTo', 0);

        filtered = false;
      }
    });
     $('.slider_gallery').lightGallery({
        selector: ".slider_gallery a"
     });

 /*------------End Filter slider_gallery----------*/
  $(".slider_gallery").mixItUp({
    animation: {
      enable: true,
      effectsIn: 'fade translateY(-100%)',
      duration: 1000
    }
  });



 var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      mousewheel: true,
    });


});




$(function() {
  var index = $('.kitchen_blok_wrapper').index(this);
  $('.bg_lines_kitchen .bg_lines_kitchen').removeClass('active').eq(index).addClass('active');
});
