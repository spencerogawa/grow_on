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


    /*********************** index.html ***********************/
    var homeBgColor;
    // When width is LESS than 780 px
    if ($( window ).width() < 780) {
        if (scrollTop < 400) {
            homeBgColor = "rgba(0, 0, 0, 1.0)";
        } else if (scrollTop < 800) {
            homeBgColor = "rgba(78, 196, 209, 1.0)";
        } else if (scrollTop < 1000) {
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
        } else if (scrollTop < 9400) {
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
    /*********************** index.html ***********************/

    /*********************** app.html ***********************/
    // var homeBgColorApp;
    // // When width is LESS than 780 px
    // if ($( window ).width() < 780) {
    //     if (scrollTop < 400) {
    //         homeBgColorApp = "rgba(255, 255, 255, 1.0)";
    //     } else if (scrollTop < 2100) {
    //         homeBgColorApp = "rgba(78, 196, 209, 1.0)";
    //     } else if (scrollTop < 3000) {
    //         homeBgColorApp = "rgba(255, 255, 0, 1.0)";
    //     } else if (scrollTop < 3900) {
    //         homeBgColorApp = "rgba(245, 201, 35, 1.0)";
    //     } else if (scrollTop < 4800) {
    //         homeBgColorApp = "rgba(255, 0, 255, 1.0)";
    //     } else if (scrollTop < 5600) {
    //         homeBgColorApp = "rgba(243, 114, 88, 1.0)";
    //     } else {
    //         homeBgColorApp = "rgba(255, 255, 255, 1.0)";
    //     }
    // }
    // // When width is LARGER than 780 px
    // else {
    //     if (scrollTop < 400) {
    //         homeBgColorApp = "rgba(255, 255, 255, 1.0)";
    //     } else if (scrollTop < 2100) {
    //         homeBgColorApp = "rgba(78, 196, 209, 1.0)";
    //     } else if (scrollTop < 3000) {
    //         homeBgColorApp = "rgba(255, 255, 0, 1.0)";
    //     } else if (scrollTop < 3900) {
    //         homeBgColorApp = "rgba(245, 201, 35, 1.0)";
    //     } else if (scrollTop < 4800) {
    //         homeBgColorApp = "rgba(255, 0, 255, 1.0)";
    //     } else if (scrollTop < 5600) {
    //         homeBgColorApp = "rgba(243, 114, 88, 1.0)";
    //     } else {
    //         homeBgColorApp = "rgba(255, 255, 255, 1.0)";
    //     }
    // }
    // $('#app-body').css('background-color', homeBgColorApp);
    // /*********************** app.html ***********************/

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







// SHOPPING CART //
// ---------------cart item add--------------------------------

$('.add-cart').click(function(){
    var currentCount = parseInt($(this).parent().find('.count').text());
    console.log(currentCount);
    var totalPrice = parseFloat($('.total span').text());
    console.log(totalPrice);
    var price = parseFloat($(this).parent().parent().find(".price span").text());
    console.log(price);
    var title = $(this).parent().parent().find('.onlineshop-juice-name').text();
    console.log(title);
    var find = title.replace(/\s/g, '').replace(/&/g, '');
    console.log(find);
    var imagePlace = $(this).parent().parent().parent().find('img').attr('src');
    console.log(imagePlace);
    var totalItemNumber = parseInt($('.totalItemNumber').text());
    console.log(totalItemNumber);

    currentCount = currentCount + 1;
    totalItemNumber = totalItemNumber +1;
    totalPrice = totalPrice + price;


    $('.total span').text(totalPrice.toFixed(2));



    $('.thumTotalPrice').text(totalPrice.toFixed(2));
    $(this).parent().find('.count').text(currentCount);
    $(this).parent().parent().addClass('itemClicked');


    $('.totalItemNumber').text(totalItemNumber);

    if (currentCount > 1) {
        $('.checkout ul').find('.'+find).remove();
        $('.checkout ul').prepend('<li class ="'+find+'"><img class="thumImage" src="'+imagePlace+'" alt="place holder image"><p class="thumTitle">'+title+'</p><div class="thumSummary">$<span class="thumPrice">'+price.toFixed(2)+'</span> x<span class="thumCount">'+currentCount+'</span></div></li>');

    }else{
        $('.checkout ul').prepend('<li class ="'+find+'"><img class="thumImage" src="'+imagePlace+'" alt="place holder image"><p class="thumTitle">'+title+'</p><div class="thumSummary">$<span class="thumPrice">'+price.toFixed(2)+'</span> x<span class="thumCount">'+currentCount+'</span></div></li>');
    }
    if (totalPrice >0){
        $(".empty").hide();
    }else{}

});


// ---------------cart item minus--------------------------------
$('.min-cart').click(function(){
    var currentCount = parseInt($(this).parent().find('.count').text());
    var totalPrice = parseFloat($('.total span').text());
    var price = parseFloat($(this).parent().parent().find(".price span").text());
    var title = $(this).parent().parent().find('.onlineshop-juice-name').text();
    var find = title.replace(/\s/g, '').replace(/&/g, '');
    $(this).parent().parent().parent().find('img').attr('src');
    var totalItemNumber = parseInt($('.totalItemNumber').text());


    if (currentCount == 1) {

        currentCount = currentCount - 1;
        totalPrice = totalPrice - price;
        totalItemNumber = totalItemNumber -1;
        $('.total span').text(totalPrice.toFixed(2));
        $(".thumTotalPrice").text(totalPrice.toFixed(2))
        $(this).parent().find('.count').text(currentCount);
        $('.checkout ul').find('.'+find).remove();
        $('.totalItemNumber').text(totalItemNumber);
        $(this).parent().parent().removeClass('itemClicked');

    }else if(currentCount>1){
        currentCount = currentCount - 1;
        totalPrice = totalPrice - price;
        totalItemNumber = totalItemNumber -1;
        $('.totalItemNumber').text(totalItemNumber);
        $('.total span').text(totalPrice.toFixed(2));
        $(".thumTotalPrice").text(totalPrice.toFixed(2))
        $(this).parent().find('.count').text(currentCount);
        $('.checkout ul').find('.'+find).remove();
        $('.checkout ul').prepend('<li class ="'+find+'"><img class="thumImage" src="'+imagePlace+'" alt="place holder image"><p class="thumTitle">'+title+'</p><div >$<span class="thumPrice">'+price.toFixed(2)+'</span> x(<span class="thumCount">'+currentCount+'</span>)</div></li>');
    }else{}

    if (totalPrice ==0){
        $(".empty").show();
    }else{}

});

// ---------------Check Out--------------------------------
$('.myAccount').click(function(){
    // $('.checkout').slideDown(1000);
    // $('.checkoutBlack').slideDown(1000);

    TweenMax.to('.checkout',0.8,{
        transform:"translateY(100px)",
        display:"block",
        opacity:"1",
        // delay:0.8
    });
    TweenMax.to('.checkoutBlack',0.8,{
        display:"block",
        opacity:"1",
        // delay:0.8
    });
});


// ---continue shopping-------
$('.checkout h3').click(function(){
    // $('.checkout').slideUp(1000);
    // $('.checkoutBlack').slideUp(1000);

    TweenMax.to('.checkout',0.8,{
        transform:"translateY(0px)",
        display:"none",
        opacity:"0",
    });
    TweenMax.to('.checkoutBlack',0.8,{
        display:"none",
        opacity:"0",
        delay:0.5
    });
});

// ------place order---------
$('.checkoutBtn').click(function(){
    var totalPrice = parseInt($('.total span').text());
    if (totalPrice > 0){

        TweenMax.to('.beforeCheckout',0.5,{
            display:"none",
            opacity:"0",
        });
        TweenMax.to('.afterCheckout',2.0,{
            display:"block",
            opacity:"1",
            delay:0.5
        });
    }
});

// ----------Close Checkout-------------
$('.backBtn').click(function(){
    // $('.checkout').slideUp(1000);
    // $('.checkoutBlack').slideUp(1000);

    TweenMax.to('.checkout',0.8,{
        transform:"translateY(0px)",
        display:"none",
        opacity:"0"
    });
    TweenMax.to('.checkoutBlack',0.8,{
        display:"none",
        opacity:"0",
        delay:0.5
    });
});

/*
 * Close modal when the area outside of the modal is clicked.
 */
$('#onlineshop-div').click(function(){
    var checkoutAttrStyle = $('.checkout').attr('style');
    if (checkoutAttrStyle) {
        if (checkoutAttrStyle.search("block") > 0) {
            $('.backBtn').click();
        }
    }
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
