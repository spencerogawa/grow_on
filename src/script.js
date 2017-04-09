// Hide Nav on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();


// Home Scroll Animation ///
$(window).scroll(function(event){
    didScroll = true;
    var scrollTop = $(window).scrollTop();
    $("#home-header").css("opacity", 1 - scrollTop / 400);

    if (scrollTop > 200){
    $("#cs-header").css("opacity", 1 - ((scrollTop - 200) / 350));
    }

    if (scrollTop > 7500){
    $("#fade-out02").css("opacity", 1 - ((scrollTop - 7500) / 7600));
    }

    var homeBgColor;
    // When width is LESS than 780 px
    if ($( window ).width() < 780) {
        if (scrollTop < 400) {
            homeBgColor = "rgba(0, 0, 0, 1.0)";
        } else if (scrollTop < 2300) {
            homeBgColor = "rgba(78, 196, 209, 1.0)";
        } else if (scrollTop < 5900) {
            homeBgColor = "rgba(255, 255, 255, 1.0)";
        } else if (scrollTop < 8800) {
            homeBgColor = "rgba(245, 201, 35, 1.0)";
        } else if (scrollTop < 9700) {
            homeBgColor = "rgba(255, 255, 255, 1.0)";
        } else if (scrollTop < 13100) {
            homeBgColor = "rgba(243, 114, 88, 1.0)";
        } else {
            homeBgColor = "rgba(255, 255, 255, 1.0)";
        }
    }
    // When width is LARGER than 780 px
    else {
        if (scrollTop < 400) {
            homeBgColor = "rgba(0, 0, 0, 1.0)";
        } else if (scrollTop < 2300) {
            homeBgColor = "rgba(78, 196, 209, 1.0)";
        } else if (scrollTop < 5900) {
            homeBgColor = "rgba(255, 255, 255, 1.0)";
        } else if (scrollTop < 8800) {
            homeBgColor = "rgba(245, 201, 35, 1.0)";
        } else if (scrollTop < 9700) {
            homeBgColor = "rgba(255, 255, 255, 1.0)";
        } else if (scrollTop < 13100) {
            homeBgColor = "rgba(243, 114, 88, 1.0)";
        } else {
            homeBgColor = "rgba(255, 255, 255, 1.0)";
        }
    }

    $('#home-body').css('background-color', homeBgColor);
    $('#home-header-container').css('background-color', homeBgColor);
    $('#typewriteText').css('background-color', homeBgColor);

    if (scrollTop > 40 && $( window ).width() < 780) {
        $('#scroll-to-top').css("display", "inline");
    } else {
        $('#scroll-to-top').css("display", "none");
    }

    console.log(scrollTop);
});

// CaseStudy Scroll Animation ///


setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('nav').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-up').removeClass('nav-hide').removeClass('nav-no-bg').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}


// HOME Scroll Down ///
$("#home-scroll-down").click(function() {
    $("html, body").animate({ scrollTop: 860 }, "slow");
    return false;
});


// CASE STUDY Home Scroll Down ///
$("#cs-home-scroll-down").click(function() {
    $("html, body").animate({ scrollTop: 860 }, "slow");
    return false;
});




/********************** Mobile Menu ***********************/
'use strict';

(function() {
  var body = document.body;
  var burgerMenu = document.getElementsByClassName('b-menu')[0];
  var burgerContain = document.getElementsByClassName('b-container')[0];
  var burgerNav = document.getElementsByClassName('b-nav')[0];

  burgerMenu.addEventListener('click', function toggleClasses() {
    [body, burgerContain, burgerNav].forEach(function (el) {
      el.classList.toggle('open');
    });
  }, false);
})();


/********************** Mobile Menu ***********************/

/* Scroll up to top page */
$("#scroll-to-top").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
