$(document).ready(function() {
  // sticky navigation menu

  let nav_offset_top = $('.header_area').height() + 50;

  function navbarFixed() {
    if ($('.header_area').length) {
      $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $('.header_area .main-menu').addClass('navbar_fixed');
        } else {
          $('.header_area .main-menu').removeClass('navbar_fixed');
        }
      });
    }
  }

  navbarFixed();
  $('#projectsButton a').click(function(e) {
    var targetElement = $(this).attr('href');
    var targetPosition = $(targetElement).offset().top;
    $('html, body').animate(
      {
        scrollTop: targetPosition - 180
      },
      'slow'
    );
  });

  $('#navbarNav a').click(function(e) {
    var targetElement = $(this).attr('href');
    var targetPosition = $(targetElement).offset().top;

    let scroll = $(window).scrollTop();
    if (scroll >= nav_offset_top) {
      $('html, body').animate(
        {
          scrollTop: targetPosition - 75
        },
        'fast'
      );
    } else {
      $('html, body').animate(
        {
          scrollTop: targetPosition - 163
        },
        'fast'
      );
    }
  });

  $(document).on('click', '.nav-item a', function(e) {
    $(this)
      .parent()
      .addClass('active')
      .siblings()
      .removeClass('active');
  });

  $(document).scroll(function() {
    /* Active nav behaviour */
    $('.navbar-nav').click(function() {
      $(this).addClass('active');
      $('.navbar-nav')
        .not(this)
        .removeClass('active');
    });

    /* Scroll to top button behaviour*/
    if ($(this).scrollTop() > 135) {
      $('.gotopbtn').css({
        opacity: '1.0'
      });
    } else {
      $('.gotopbtn').css({
        opacity: '0.0'
      });
    }
  });

  /*Scrolling highlight the active nav item */
  $(window).scroll(function(event) {
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    var scrollPos = $(document).scrollTop() + 75;
    if ($(document).scrollTop() === 0) {
      $('a[href^="#home"]')
        .parent('li')
        .addClass('active')
        .siblings()
        .removeClass('active');
      return;
    } else if (scrollPosition >= scrollHeight - 100) {
      $('a[href^="#contact"]')
        .parent('li')
        .addClass('active')
        .siblings()
        .removeClass('active');
      return;
    }

    $('.nav-item a').each(function() {
      var currLink = $(this);
      var refElement = $(currLink.attr('href'));
      if (
        refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $('.nav-item').removeClass('active');
        currLink.parent().addClass('active');
      } else {
        currLink.parent().removeClass('active');
      }
    });
  });

  /**Collapse Nav on mobile when clicking link */
  $('.navbar-collapse a').click(function() {
    $('.navbar-collapse').collapse('hide');
  });
});
