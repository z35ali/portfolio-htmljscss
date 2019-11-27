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
    $('html, body').animate(
      {
        scrollTop: targetPosition - 75
      },
      'slow'
    );
  });

  $(document).on('click', '.nav-item a', function(e) {
    $(this)
      .parent()
      .addClass('active')
      .siblings()
      .removeClass('active');
  });

  $(window).scroll(function() {
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
});

/**Collapse Nav on mobile when clicking link */
$('.navbar-collapse a').click(function() {
  $('.navbar-collapse').collapse('hide');
});
