$(document).ready(function() {
  // sticky navigation menu
  let nav_offset_top = $('.header_area').height() + 50;
  const SECTION_PADDING = 75;

  function navbarFixed() {
    if ($('.header_area').length) {
      $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $('.header_area .main-menu').removeClass('navbar_fixed_hide');
        } else {
          $('.header_area .main-menu').addClass('navbar_fixed_hide');
        }
      });
    }
  }

  navbarFixed();
  $('#projectsButton').click(function(e) {
    e.preventDefault();
    var targetElement = $(this).attr('href');
    var targetPosition = $(targetElement).offset().top;
    $('html, body').animate(
      {
        scrollTop: targetPosition - SECTION_PADDING
      },
      'slow'
    );
  });

  $('.navbar-brand, #navbarNav a, #name, .gotopbtn').click(function(e) {
    e.preventDefault();
    var targetElement = $(this).attr('href');
    var targetPosition = $(targetElement).offset().top;

    let scroll = $(window).scrollTop();

    $('html, body').animate(
      {
        scrollTop: targetPosition - SECTION_PADDING
      },
      'fast'
    );
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
        display: 'inline-block'
      });
    } else {
      $('.gotopbtn').css({
        display: 'none'
      });
    }
  });

  /* Scrolling highlight the active nav item */
  $(window).scroll(function(event) {
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    var scrollPos = $(document).scrollTop() + 2;
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
        refElement.position().top <= scrollPos + SECTION_PADDING &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $('.nav-item').removeClass('active');
        currLink.parent().addClass('active');
      }
    });
  });

  /* Collapse Nav on mobile when clicking link */
  $('.navbar-collapse a').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  /* Dark Mode Toggle CSS variable changes*/
  $('#darkModeToggle').click(function() {
    if ($('#darkModeToggle').is(':checked')) {
      $(':root')
        .get(0)
        .style.setProperty('--background-color', '#333333');
      $(':root')
        .get(0)
        .style.setProperty('--color', 'white');
      $(':root')
        .get(0)
        .style.setProperty('--title-color', 'white');
      $(':root')
        .get(0)
        .style.setProperty('--text-color', 'rgba(255, 255, 255, 0.762)');
      $(':root')
        .get(0)
        .style.setProperty('--box-color', '#35383b');
      $(':root')
        .get(0)
        .style.setProperty('--text-secondary', 'rgba(255, 255, 255, 0.762)');
      $(':root')
        .get(0)
        .style.setProperty(
          '--box-shadow',
          ' 0px 10px 30px rgba(255,255,255, 0.205)'
        );
      $(':root')
        .get(0)
        .style.setProperty(
          '--nav-shadow',
          ' 0px 10px 30px rgba(255,255,255, 0.03)'
        );
    } else {
      $(':root')
        .get(0)
        .style.setProperty('--background-color', '');
      $(':root')
        .get(0)
        .style.setProperty('--color', '');
      $(':root')
        .get(0)
        .style.setProperty('--title-color', '');
      $(':root')
        .get(0)
        .style.setProperty('--text-color', '');
      $(':root')
        .get(0)
        .style.setProperty('--box-color', '');
      $(':root')
        .get(0)
        .style.setProperty('--text-secondary', '');
      $(':root')
        .get(0)
        .style.setProperty('--box-shadow', '');
      $(':root')
        .get(0)
        .style.setProperty('--nav-shadow', '');
    }
  });
});
