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
  $('.main').effect('bounce', { times: 2, distance: 50 }, 2800);
  $('#particles-js').animate({ opacity: 0.5 }, 1000);
  $('.section').animate({ opacity: 1 }, 1000);
  $('#portfolio').animate({ opacity: 1 }, 1000);

  $('#slides').superslides({
    animation: 'fade',
    play: false,
    pagination: false
  });

  $(document).on('animated.slides', function() {
    numberofslides = $('#slides').superslides('size');
    currentslide = $('#slides').superslides('current');
    if (currentslide === 0) {
      // first slide

      $('#scrollUp').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide3.png')"
      });
      $('.progress-bar').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide3.png')"
      });
      $('.skillsSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide3.png')"
      });
      $('.contactSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide3.png')"
      });

      $('.items a').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide3.png')"
      });

      $('.contactButton').css({
        'background-color':
          "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide3.png')"
      });
      //contact button color change
      $('.contactButton').hover(
        function() {
          $('.contactButton').css({
            'background-color': 'white'
          });
          $('.contactButton').css('color', '#1F6490');
        },
        function() {
          $('.contactButton').css('color', 'white');
          $('.contactButton').css({
            'background-color':
              "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide3.png')"
          });
        }
      );
    } else if (currentslide === 1) {
      $('#scrollUp').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide2.png')"
      });
      $('.progress-bar').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide2.png')"
      });
      $('.skillsSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide2.png')"
      });
      $('.contactSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide2.png')"
      });
      $('.items a').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide2.png')"
      });

      $('.contactButton').css('color', 'white');
      $('.contactButton').css({
        'background-color':
          "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide2.png')"
      });

      //contact button color change
      $('.contactButton').hover(
        function() {
          $('.contactButton').css({
            'background-color': 'white'
          });
          $('.contactButton').css('color', '#1B874A');
        },
        function() {
          $('.contactButton').css('color', 'white');
          $('.contactButton').css({
            'background-color':
              "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide2.png')"
          });
        }
      );
    } else if (currentslide === 2) {
      $('#scrollUp').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide1.png')"
      });
      $('.progress-bar').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide1.png')"
      });
      $('.skillsSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide1.png')"
      });
      $('.contactSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide1.png')"
      });
      $('.items a').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide1.png')"
      });

      $('.contactButton').css('color', 'white');
      $('.contactButton').css({
        'background-color':
          "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide2.png')"
      });

      //contact button color change
      $('.contactButton').hover(
        function() {
          $('.contactButton').css({
            'background-color': 'white'
          });
          $('.contactButton').css('color', '#1B874A');
        },
        function() {
          $('.contactButton').css('color', 'white');
          $('.contactButton').css({
            'background-color':
              "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide2.png')"
          });
        }
      );
    } else if (currentslide === 3) {
      $('#scrollUp').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide4.png')"
      });
      $('.progress-bar').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide4.png')"
      });
      $('.skillsSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide4.png')"
      });
      $('.contactSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide4.png')"
      });
      $('.items a').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide4.png')"
      });
      $('.contactButton').css({
        'background-color':
          "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide4.png')"
      });
      //contact button color change
      $('.contactButton').hover(
        function() {
          $('.contactButton').css({
            'background-color': 'white'
          });
          $('.contactButton').css('color', '#673A78');
        },
        function() {
          $('.contactButton').css('color', 'white');
          $('.contactButton').css({
            'background-color':
              "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide4.png')"
          });
        }
      );
    } else if (currentslide === 4) {
      $('#scrollUp').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide5.png')"
      });
      $('.progress-bar').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide5.png')"
      });
      $('.skillsSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide5.png')"
      });
      $('.contactSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide5.png')"
      });
      $('.items a').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide5.png')"
      });
      $('.contactButton').css({
        'background-color':
          "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide5.png')"
      });
      //contact button color change
      $('.contactButton').hover(
        function() {
          $('.contactButton').css({
            'background-color': 'white'
          });
          $('.contactButton').css('color', '#1F2E3C');
        },
        function() {
          $('.contactButton').css('color', 'white');
          $('.contactButton').css({
            'background-color':
              "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide5.png')"
          });
        }
      );
    } else if (currentslide === 5) {
      $('#scrollUp').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide6.png')"
      });
      $('.progress-bar').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide6.png')"
      });
      $('.skillsSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide6.png')"
      });
      $('.contactSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide6.png')"
      });
      $('.items a').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide6.png')"
      });

      $('.contactButton').css({
        'background-color':
          "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide6.png')"
      });
      //contact button color change
      $('.contactButton').hover(
        function() {
          $('.contactButton').css({
            'background-color': 'white'
          });
          $('.contactButton').css('color', '#096A59');
        },
        function() {
          $('.contactButton').css('color', 'white');
          $('.contactButton').css({
            'background-color':
              "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide6.png')"
          });
        }
      );
    } else if (currentslide === 6) {
      $('#scrollUp').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide7.png')"
      });
      $('.progress-bar').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide7.png')"
      });
      $('.skillsSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide7.png')"
      });
      $('.contactSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide7.png')"
      });
      $('.items a').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide7.png')"
      });
      $('.contactButton').css({
        'background-color':
          "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide7.png')"
      });
      //contact button color change
      $('.contactButton').hover(
        function() {
          $('.contactButton').css({
            'background-color': 'white'
          });
          $('.contactButton').css('color', '#167440');
        },
        function() {
          $('.contactButton').css('color', 'white');
          $('.contactButton').css({
            'background-color':
              "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide7.png')"
          });
        }
      );
    } else if (currentslide === 7) {
      $('#scrollUp').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide8.png')"
      });
      $('.progress-bar').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide8.png')"
      });
      $('.skillsSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide8.png')"
      });
      $('.contactSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide8.png')"
      });
      $('.items a').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide8.png')"
      });
      $('.contactButton').css({
        'background-color':
          "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide8.png')"
      });
      //contact button color change
      $('.contactButton').hover(
        function() {
          $('.contactButton').css({
            'background-color': 'white'
          });
          $('.contactButton').css('color', '#18557B');
        },
        function() {
          $('.contactButton').css('color', 'white');
          $('.contactButton').css({
            'background-color':
              "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide8.png')"
          });
        }
      );
    } else if (currentslide === 8) {
      $('#scrollUp').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide9.png')"
      });
      $('.progress-bar').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide9.png')"
      });
      $('.skillsSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide9.png')"
      });
      $('.contactSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide9.png')"
      });
      $('.items a').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide9.png')"
      });
      $('.contactButton').css({
        'background-color':
          "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide9.png')"
      });
      //contact button color change
      $('.contactButton').hover(
        function() {
          $('.contactButton').css({
            'background-color': 'white'
          });
          $('.contactButton').css('color', '#5F2C73');
        },
        function() {
          $('.contactButton').css('color', 'white');
          $('.contactButton').css({
            'background-color':
              "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide9.png')"
          });
        }
      );
    } else if (currentslide === 9) {
      $('#scrollUp').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide10.png')"
      });
      $('.progress-bar').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide10.png')"
      });
      $('.skillsSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide10.png')"
      });
      $('.contactSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide10.png')"
      });
      $('.items a').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide10.png')"
      });
      $('.contactButton').css({
        'background-color':
          "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide10.png')"
      });
      //contact button color change
      $('.contactButton').hover(
        function() {
          $('.contactButton').css({
            'background-color': 'white'
          });
          $('.contactButton').css('color', '#1A2734');
        },
        function() {
          $('.contactButton').css('color', 'white');
          $('.contactButton').css({
            'background-color':
              "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide10.png')"
          });
        }
      );
    } else if (currentslide === 10) {
      $('#scrollUp').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide11.png')"
      });
      $('.progress-bar').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide11.png')"
      });
      $('.skillsSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide11.png')"
      });
      $('.contactSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide11.png')"
      });
      $('.items a').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide11.png')"
      });
      $('.contactButton').css({
        'background-color':
          "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide11.png')"
      });
      //contact button color change
      $('.contactButton').hover(
        function() {
          $('.contactButton').css({
            'background-color': 'white'
          });
          $('.contactButton').css('color', '#A18304');
        },
        function() {
          $('.contactButton').css('color', 'white');
          $('.contactButton').css({
            'background-color':
              "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide11.png')"
          });
        }
      );
    } else if (currentslide === 11) {
      $('#scrollUp').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide12.png')"
      });
      $('.progress-bar').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide12.png')"
      });
      $('.skillsSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide12.png')"
      });
      $('.contactSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide12.png')"
      });
      $('.items a').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide12.png')"
      });
      $('.contactButton').css({
        'background-color':
          "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide12.png')"
      });
      //contact button color change
      $('.contactButton').hover(
        function() {
          $('.contactButton').css({
            'background-color': 'white'
          });
          $('.contactButton').css('color', '#9C5613');
        },
        function() {
          $('.contactButton').css('color', 'white');
          $('.contactButton').css({
            'background-color':
              "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide12.png')"
          });
        }
      );
    } else if (currentslide === 12) {
      $('#scrollUp').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide13.png')"
      });
      $('.progress-bar').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide13.png')"
      });
      $('.skillsSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide13.png')"
      });
      $('.contactSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide13.png')"
      });
      $('.items a').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide13.png')"
      });
      $('.contactButton').css({
        'background-color':
          "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide13.png')"
      });
      //contact button color change
      $('.contactButton').hover(
        function() {
          $('.contactButton').css({
            'background-color': 'white'
          });
          $('.contactButton').css('color', '#9A3126');
        },
        function() {
          $('.contactButton').css('color', 'white');
          $('.contactButton').css({
            'background-color':
              "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide13.png')"
          });
        }
      );
    } else if (currentslide === 13) {
      $('#scrollUp').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide14.png')"
      });
      $('.progress-bar').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide14.png')"
      });
      $('.skillsSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide14.png')"
      });
      $('.contactSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide14.png')"
      });
      $('.items a').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide14.png')"
      });
      $('.contactButton').css({
        'background-color':
          "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide14.png')"
      });
      //contact button color change
      $('.contactButton').hover(
        function() {
          $('.contactButton').css({
            'background-color': 'white'
          });
          $('.contactButton').css('color', '#A26806');
        },
        function() {
          $('.contactButton').css('color', 'white');
          $('.contactButton').css({
            'background-color':
              "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide14.png')"
          });
        }
      );
    } else if (currentslide === 14) {
      $('#scrollUp').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide15.png')"
      });
      $('.progress-bar').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide15.png')"
      });
      $('.skillsSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide15.png')"
      });
      $('.contactSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide15.png')"
      });
      $('.items a').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide15.png')"
      });
      $('.contactButton').css({
        'background-color':
          "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide15.png')"
      });
      //contact button color change
      $('.contactButton').hover(
        function() {
          $('.contactButton').css({
            'background-color': 'white'
          });
          $('.contactButton').css('color', '#8E3700');
        },
        function() {
          $('.contactButton').css('color', 'white');
          $('.contactButton').css({
            'background-color':
              "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide15.png')"
          });
        }
      );
    } else if (currentslide === 15) {
      $('#scrollUp').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide16.png')"
      });
      $('.progress-bar').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide16.png')"
      });
      $('.skillsSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide16.png')"
      });
      $('.contactSection').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide16.png')"
      });
      $('.items a').css({
        background:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/slide16.png')"
      });
      $('.contactButton').css({
        'background-color':
          "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide16.png')"
      });
      //contact button color change
      $('.contactButton').hover(
        function() {
          $('.contactButton').css({
            'background-color': 'white'
          });
          $('.contactButton').css('color', '#7E2318');
        },
        function() {
          $('.contactButton').css('color', 'white');
          $('.contactButton').css({
            'background-color':
              "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('img/slide16.png')"
          });
        }
      );
    }
  });

  var typed = new Typed('.typed', {
    strings: [
      'Software Engineer.',
      'Android Developer.',
      'Web Developer.',
      'Programmer.'
    ],
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

  $(window).scroll(function() {
    scrollFunction();
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: 'white',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
          $(this.el)
            .find('.percent')
            .text(Math.round(percent));
        }
      });
    }
    $('.chart2').easyPieChart({
      easing: 'easeInOut',
      barColor: 'white',
      trackColor: false,
      scaleColor: false,
      lineWidth: 4,
      size: 152,
      onStep: function(from, to, percent) {
        $(this.el)
          .find('.percent')
          .text(Math.round(percent));
      }
    });
  });
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
  function scrollFunction() {
    if (
      document.body.scrollTop > 688 ||
      document.documentElement.scrollTop > 688
    ) {
      document.getElementById('scrollUp').style.visibility = 'visible';

      document.getElementById('scrollUp').style.opacity = '1.0';
    } else {
      document.getElementById('scrollUp').style.visibility = 'hidden';

      document.getElementById('scrollUp').style.opacity = '0.0';
    }
  }
});
