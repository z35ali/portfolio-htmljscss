$(window).on('load', function() {
  $('html').css({
    overflowY: 'hidden'
  });
  $('.items').isotope({
    filter: '.website',
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false
    }
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
  $('.main').effect('bounce', { times: 1, distance: 50 }, 3500);
  $('#slides').superslides({
    animation: 'fade',
    play: false,
    pagination: false
  });
  function slideChange(path, color) {
    $('.main').effect('bounce', { times: 1, distance: 50 }, 1500);
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
      slideChange('img/slide1.png', '#1F6490');
    } else if (currentslide === 1) {
      slideChange('img/slide2.png', '#1B874A');
    } else if (currentslide === 2) {
      slideChange('img/slide3.png', '#0b6c59');
    } else if (currentslide === 3) {
      slideChange('img/slide4.png', '#673A78');
    } else if (currentslide === 4) {
      slideChange('img/slide5.png', '#A18304');
    } else if (currentslide === 5) {
      slideChange('img/slide6.png', '#9C5613');
    } else if (currentslide === 6) {
      slideChange('img/slide7.png', '#9A3126');
    }
  });

  var typed = new Typed('.typed', {
    strings: ['Web Developer.', 'Mobile Developer.', 'Programmer.'],
    typeSpeed: 70,
    backSpeed: 35,
    loop: true,
    startDelay: 1000,
    showCursor: false
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

  $(window).on('scroll', scrollFunctions);

  function scrollFunctions() {
    stickyNavigation();
    progressBarWidthChange();
    function stickyNavigation() {
      if ($(window).scrollTop() > 688) {
        $(nav).addClass('navColor');
      } else {
        $(nav).removeClass('navColor');
      }
    }

    function progressBarWidthChange() {
      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById('myBar').style.width = scrolled + '%';
    }
  }
});
