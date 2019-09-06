$(window).on('load', function() {
  $('html').css({
    overflowY: 'hidden'
  });

  $('.cup')
    .delay(500)

    .fadeOut(2000, function() {
      $('.loader').fadeOut(1000);
      $('html').css({
        overflowY: 'scroll'
      });
    });
});

$(document).ready(function() {
  $('.items').isotope({
    filter: '*',
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false
    }
  });
  $('.main').effect('bounce', { times: 3, distance: 50 }, 5000);
  $('#particles-js').animate({ opacity: 0.5 }, 1000);
  $('.section').animate({ opacity: 1 }, 1000);
  $('#portfolio').animate({ opacity: 1 }, 1000);

  $('#slides').superslides({
    animation: 'fade',
    play: false,
    pagination: false
  });

  function slideChange(path, color) {
    $('.progress-bar').css({
      background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${path})`
    });
    $('.skillsSection').css({
      background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${path})`
    });
    $('.contactSection').css({
      background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${path})`
    });

    $('.items a').css({
      background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${path})`
    });

    $('.contactButton').css({
      'background-color': `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${path})`
    });
    //contact button color change
    $('.contactButton').hover(
      function() {
        $('.contactButton').css({
          'background-color': 'white'
        });
        $('.contactButton').css('color', `${color}`);
      },
      function() {
        $('.contactButton').css('color', 'white');
        $('.contactButton').css({
          'background-color': `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${path})`
        });
      }
    );
  }
  $(document).on('animated.slides', function() {
    numberofslides = $('#slides').superslides('size');
    currentslide = $('#slides').superslides('current');
    if (currentslide === 0) {
      slideChange('img/slide3.png', '#1F6490');
    } else if (currentslide === 1) {
      slideChange('img/slide2.png', '#1B874A');
    } else if (currentslide === 2) {
      slideChange('img/slide1.png', '#0b6c59');
    } else if (currentslide === 3) {
      slideChange('img/slide4.png', '#673A78');
    } else if (currentslide === 4) {
      slideChange('img/slide5.png', '#096A59');
    } else if (currentslide === 5) {
      slideChange('img/slide6.png', '#167440');
    } else if (currentslide === 6) {
      slideChange('img/slide7.png', '#167440');
    } else if (currentslide === 7) {
      slideChange('img/slide8.png', '#18557B');
    } else if (currentslide === 8) {
      slideChange('img/slide9.png', '#5F2C73');
    } else if (currentslide === 9) {
      slideChange('img/slide10.png', '#1A2734');
    } else if (currentslide === 10) {
      slideChange('img/slide11.png', '#A18304');
    } else if (currentslide === 11) {
      slideChange('img/slide12.png', '#9C5613');
    } else if (currentslide === 12) {
      slideChange('img/slide13.png', '#9A3126');
    } else if (currentslide === 13) {
      slideChange('img/slide14.png', '#A26806');
    } else if (currentslide === 14) {
      slideChange('img/slide15.png', '#8E3700');
    } else if (currentslide === 16) {
      slideChange('img/slide15.png', '#7E2318');
    }
  });

  var typed = new Typed('.typed', {
    strings: ['Mobile Developer.', 'Web Developer.', 'Programmer.'],
    typeSpeed: 70,
    backSpeed: 35,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });
  var typed2 = new Typed('.myName', {
    strings: ['My Name is Zafar Ali'],
    typeSpeed: 100,
    loop: false,
    startDelay: 1000,
    showCursor: false
  });

  var typed3 = new Typed('.dots', {
    strings: ['...'],
    typeSpeed: 500,
    backSpeed: 500,
    loop: true,
    startDelay: 3000,
    showCursor: false
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    items: 4,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      938: {
        items: 4
      }
    }
  });

  var skillsTopOffset = $('.skillsSection').offset().top;

  $('[data-fancybox]').fancybox();

  $('#filters a').click(function() {
    $('#filters .current').removeClass('current');
    $(this).addClass('current');

    var selector = $(this).attr('data-filter');

    //click element
    $('.items').isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: 'linear',
        queue: false
      }
    });
    return false;
  });

  $('#navigation li a').click(function(e) {
    e.preventDefault(); //do not go directly to section

    var width = $(window).width();
    if (width < 992) {
      $('#navbarNav').collapse('toggle');
    }
    var targetElement = $(this).attr('href');
    var targetPosition = $(targetElement).offset().top;
    $('html, body').animate(
      {
        scrollTop: targetPosition - 75
      },
      'slow'
    );
  });

  $('#navigation a').click(function(e) {
    e.preventDefault(); //do not go directly to section

    var targetElement = $(this).attr('href');
    var targetPosition = $(targetElement).offset().top;
    $('html, body').animate(
      {
        scrollTop: targetPosition - 75
      },
      'slow'
    );
  });

  $('#section03 a').click(function(e) {
    e.preventDefault(); //do not go directly to section

    var targetElement = $(this).attr('href');
    var targetPosition = $(targetElement).offset().top;
    $('html, body').animate(
      {
        scrollTop: targetPosition
      },
      'slow'
    );
  });

  $('#section04 a').click(function(e) {
    e.preventDefault(); //do not go directly to section

    var targetElement = $(this).attr('href');
    var targetPosition = $(targetElement).offset().top;
    $('html, body').animate(
      {
        scrollTop: targetPosition
      },
      'slow'
    );
  });
  const nav = $('#navigation');
  const navTop = nav.offset().top;

  $(window).on('scroll', stickyNavigation);

  function stickyNavigation() {
    if ($(window).scrollTop() > 688) {
      $(nav).addClass('navColor');
    } else {
      $(nav).removeClass('navColor');
    }
  }
});
