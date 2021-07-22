//=================slick_slider initialize==================
//=================banner slick_slider start===================
$('#banner').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
    arrows:true,
    autoplay: false,
    prevArrow: '<i class="fa fa-arrow-left pre" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-arrow-right nex" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//======================venubvox initialization=================
$(document).ready(function(){
    $('.venobox').venobox(); 
});


//=================service-part slick slider===================
$('.ser_items').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
    arrows:true,
    autoplay: false,
    vertical:true,
    centerMode: true,
    centerPadding:'0',
    prevArrow: '<i class="fa fa-chevron-up ser_up" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-chevron-down ser_down" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//=================testi-part slick slider======================
$('.testi_items').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
    arrows:true,
    autoplay: false,
    vertical:true,
    centerMode: true,
    centerPadding:'0',
    asNavFor: '.testi-text-items',
    prevArrow: '<i class="fa fa-chevron-up testi_up" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-chevron-down testi_down" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//================testi-part testi-text slider================

$('.testi-text-items').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
    arrows:false,
    autoplay: false,
    vertical:true,
    centerMode: true,
    centerPadding:'0',
    asNavFor: '.testi_items',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//==========================sponsor-part slick slider=============
$('.sponsor_items').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
    arrows:false,
    autoplay: false,
     centerMode: true,
    centerPadding:'0',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//===================counter-part counter initialize================

$('.counter').counterUp({
                delay: 10,
                time: 1000
            });















