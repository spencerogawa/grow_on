/**
 *
 * Mouse enter, then toggle images
 *
**/
function toggleImagesOnlineShop() {

    // Preload Images
    var image1 = new Image();
    var image2 = new Image();
    var image3 = new Image();
    var image4 = new Image();
    var image5 = new Image();
    image1.src = './images/onlineshop_box-hover.png';
    image2.src = './images/onlineshop-lina-hover-animation.gif';
    image3.src = './images/onlineshop-ray-hover-animation.gif';
    image4.src = './images/onlineshop-mikey-hover-animation.gif';
    image5.src = './images/onlineshop-EandT-hover-animation.gif';

    $( "#online-juice-box-img" )
        .mouseenter(function() {
            console.log("entering online-juice-box-img");
            if ($( window ).width() > 768) {
                $(this)
                    .css("background-image", "url('./images/onlineshop_box-hover.png')")
                    .css("height", "400px")
                    .css("width", "400px")
                    .css("background-position", "center")
                    .css("background-size", "70%");
            } else {
                $(this).css("background-image", "url('./images/onlineshop_box-hover.png')");
            }
        })
        .mouseleave(function() {
            console.log("leaving online-juice-box-img");
            $( this ).removeAttr("style");
        });

    $( ".lina-juice-img" )
        .mouseenter(function() {
            console.log("entering lina-juice-img");
            $( this ).css("background-image", "url('./images/onlineshop-lina-hover-animation.gif')");
        })
        .mouseleave(function() {
            console.log("leaving lina-juice-img");
            $( this ).removeAttr("style");
        });

    $( ".ray-juice-img" )
        .mouseenter(function() {
            console.log("entering ray-juice-img");
            $( this ).css("background-image", "url('./images/onlineshop-ray-hover-animation.gif')");
        })
        .mouseleave(function() {
            console.log("leaving ray-juice-img");
            $( this ).removeAttr("style");
        });

    $( ".mikey-juice-img" )
        .mouseenter(function() {
            console.log("entering mikey-juice-img");
            $( this ).css("background-image", "url('./images/onlineshop-mikey-hover-animation.gif')");
        })
        .mouseleave(function() {
            console.log("leaving mikey-juice-img");
            $( this ).removeAttr("style");
        });

    $( ".EandT-juice-img" )
        .mouseenter(function() {
            console.log("entering EandT-juice-img");
            $( this ).css("background-image", "url('./images/onlineshop-EandT-hover-animation.gif')");
        })
        .mouseleave(function() {
            console.log("leaving EandT-juice-img");
            $( this ).removeAttr("style");
        });
}

toggleImagesOnlineShop();
