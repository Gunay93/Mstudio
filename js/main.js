$(document).ready(function () {
  // header fixed 
  // $(window).scroll(function(){
  //   var header = $('header'),
  //       scroll = $(window).scrollTop();
  //   var mainHeight = $('#main').height() + 100;

  //   if (scroll >= mainHeight) header.addClass('sticky')
  //   else header.removeClass('sticky');
    
  // });

  $("html, body").animate({scrollTop: 0}, 1000);

  function scrolling(){ 
    var mainHeight = $('#main').height() + 100;
    if ($(window).scrollTop()>mainHeight){
      $("header").addClass("fadeInDownBig sticky ");
    }
    if ($(window).scrollTop()<mainHeight){
      $("header").removeClass("fadeInDownBig sticky ");
    }
}
   $(window).scroll(function(){
       scrolling();
   });

  scrolling();

  // slider text parallax
  var rellax = new Rellax('.rellax');

  // active page  
  $(function () {                          
    $('#navbarMenu .nav-link').each(function () {
        var location = window.location.href; 
        var link = this.href; 
        if(location == link) {              
          $(this).parent().addClass('active');  
        }
    });
    
    $('footer .footer-menu .nav-link').each(function () {
        var location1 = window.location.href; 
        var link1 = this.href; 
        if(location1 == link1) {              
          $(this).parent().addClass('active');  
        }
    });
  });

  // lang wrap
  $(".lang-wrapper").hover(
    function() {
      $('.lang-wrapper .other-langs-wrap').toggleClass('opened');
      if($('.lang-wrapper .other-langs-wrap').hasClass('opened')) {
        $('.lang-wrapper .other-langs-wrap').show();
        $('.lang-wrapper .other-langs-wrap').animate({right: '100%'},100, 'linear');
      } else {
        $('.lang-wrapper .other-langs-wrap').animate({right: '0'},100, 'linear');
        $('.lang-wrapper .other-langs-wrap').fadeOut('fast');
      }   
    }
  );

  var lastScrollTop = $('#portfolio').height();
  backgroundSize = $("#about .about-img").css('background-size');
  transformI = $("#about .about-img-wrap").css('top');
  console.log(transformI);
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
    backgroundSize = parseFloat(backgroundSize) - 0.3;
    transformI = parseFloat(transformI) - 0.3;
   } else {
    backgroundSize = parseFloat(backgroundSize) + 0.3;
    transformI = parseFloat(transformI) + 0.3;
   }

  if (parseFloat(backgroundSize) < 100) {
   backgroundSize = 100;
  }
   $("#about .cover-img").css('background-size', backgroundSize + '%');
    // $("#about .about-img-wrap").css({
    //   transform: 'translate(-50%, '+ st/1000 + '%' +')'
    // });
    $("#about .about-img-wrap").css({
      // transform: 'translate(-50%, '+ transformI + 'px' +')'
      top: transformI + 'px'
    });
    $("#about .about-img").css('background-size', backgroundSize + '%');
   lastScrollTop = st;
});


  // add and remove wishlist
  $('.wishlistIcon').click(function() {
    $(this).toggleClass('mark');
  })

  // hamburger menu and dropdown on mobile
  $('.navbar-toggler .menu-wrap').click(function(e) {
    e.stopPropagation();
      $(this).addClass('opened');
      setTimeout(function() {
        $('header #navbarMenu').show();
        $('header #navbarMenu .navbar-nav').animate({right: '0'}, 300, 'linear');
        $('body').css('overflow-y', 'hidden');
      }, 200);
  });

  $('#navbarMenu .menu-wrap').click(function(e) {
    e.stopPropagation();
    $('body').css('overflow-y', 'visible');
    $('header #navbarMenu .navbar-nav').animate({right: '-100%'}, 300, 'linear');
    setTimeout(function() {
        $('header #navbarMenu').hide();
        $('.navbar-toggler .menu-wrap').removeClass('opened');
    }, 200);
  });

  $('header #navbarMenu .navbar-nav').click(function(e) {
    e.stopPropagation();
  });

  $('.dropdown-menu-wrap').click(function(e) {
    e.stopPropagation();
    $(this).toggleClass('show').siblings().removeClass('show');
  });

  $('body').click(function() {
    $('body').css('overflow-y', 'visible');
    $('.order-modal-wrapper').hide();
    $('header #navbarMenu .navbar-nav').animate({right: '-100%'}, 300, 'linear');
    setTimeout(function() {
        $('header #navbarMenu').hide();
        $('.navbar-toggler .menu-wrap.opened').removeClass('opened');
    }, 200);
    $('.dropdown-menu-wrap').removeClass('show');
  });

  // price order modal
    
  $('header .price-order').click(function(e) {
    e.stopPropagation();
    $('.order-modal-wrapper').show();
    $('body').css('overflow-y', 'hidden');
  });

  $('.order-modal-wrapper .close').click(function() {
      $('.order-modal-wrapper').hide();
      $('body').css('overflow-y', 'visible');
  });

  $('.order-modal').click(function(e) {
      e.stopPropagation(); 
  });

  // form effect
  $(".form").find(".form-control").each(function () {
    var targetItem = $(this).parent();
    if ($(this).val()) {
      $(targetItem).find("label").css({
        top: "-6px", fontSize: "16px", color: "#ff512f"
      });
    }
  });

  $(".form").find(".form-control").focus(function () {
    $(this).parent(".input-block").addClass("focus");
    $(this).parent().find("label").animate({
      top: "-6px", fontSize: "16px", color: "#ff512f"
    }, 300);
  });

  $(".form").find(".form-control").blur(function () {
    if ($(this).val().length == 0) {
      $(this).parent(".input-block").removeClass("focus");
      $(this).parent().find("label").animate({
        top: "20px", fontSize: "18px"
      }, 300);
    }
  });
});


