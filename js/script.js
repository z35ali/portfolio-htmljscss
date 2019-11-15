$(window).on('load', function() {
  $('html').css({
    overflowY: 'hidden'
  });
  $('.items').isotope({
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false
    }
  });
  $('.loadingParent')
    .delay(500)

    .fadeOut(200, function() {
      $('html').css({
        overflowY: 'scroll'
      });
    });

  AOS.refresh();
});

$(document).ready(function() {
  $('.main').effect('bounce', { times: 1, distance: 50 }, 3500);
  $('#home').superslides({
    animation: 'fade',
    play: false,
    pagination: false
  });
  function slideChange(path, color) {
    $('.skillsSection').css({
      background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${path})`
    });
    $('.videoSection').css({
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
    numberofslides = $('#home').superslides('size');
    currentslide = $('#home').superslides('current');
    if (currentslide === 0) {
      slideChange('img/slide7.png', '#9A3126');
    } else if (currentslide === 1) {
      slideChange('img/slide1.png', '#1F6490');
    } else if (currentslide === 2) {
      slideChange('img/slide2.png', '#1B874A');
    } else if (currentslide === 3) {
      slideChange('img/slide3.png', '#0b6c59');
    } else if (currentslide === 4) {
      slideChange('img/slide4.png', '#673A78');
    } else if (currentslide === 5) {
      slideChange('img/slide5.png', '#A18304');
    } else if (currentslide === 6) {
      slideChange('img/slide6.png', '#9C5613');
    }
  });

  var typed2 = new Typed('.myName', {
    strings: ["I'm Zafar Ali..."],
    typeSpeed: 100,
    loop: true,
    startDelay: 1000,
    showCursor: false,
    backSpeed: 100
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

  $('#navigation a').click(function(e) {
    if ($('.navLink').hasClass('.resume')) {
      e.preventDefault(); //do not go directly to section
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

  $('#downArrow a').click(function(e) {
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

  $('.navbar-collapse a').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  $('#upArrow a').click(function(e) {
    e.preventDefault(); //do not go directly to section

    var targetElement = $(this).attr('href');
    var targetPosition = $(targetElement).offset().top;

    $('html, body').animate(
      {
        scrollTop: targetPosition
      },
      'slow'
    );
    $('.main').effect('bounce', { times: 1, distance: 50 }, 2000);
  });
  const nav = $('#navigation');

  $(window).on('scroll', scrollBehaviour);

  function scrollBehaviour() {
    if ($(window).scrollTop() > 688) {
      $(nav).addClass('navColor');
    } else {
      $(nav).removeClass('navColor');
    }
  }
});
