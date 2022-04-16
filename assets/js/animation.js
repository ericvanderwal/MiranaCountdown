$(document).ready(function(e){
    "use strict";
    function verient_images_holder_hright(){
        var HEIGHT = window.innerWidth > 767 ? 106:90;
        $('.verient-images-holder').css('height',$('.vimage_parent.step4').outerHeight() + HEIGHT);
    }
    function ver_row_height(){
        var TOP = parseInt($('.intro').css('padding-top'),10);
        $('[class^="ver-row"], [class*=" ver-row"]').css({'height':$('.intro').innerHeight(),'top':-TOP});
    }
    $(window).load(function(){
        verient_images_holder_hright();
        ver_row_height();
    })
    $(document).on("click",".goTop",function(){
        $("html, body").animate({scrollTop: 0}, 1000);
    });

    function futterHeight(){
        if(window.innerWidth > 767){
            var footerHeight = $('footer').outerHeight();
            $('.main-data').css('margin-bottom',footerHeight)
        }else{
            $('.main-data').css('margin-bottom',0)
        }
    }
    futterHeight();
    $(window).resize(function(e){
        verient_images_holder_hright();
        ver_row_height();
        futterHeight()
    })
    var is_iPad = navigator.userAgent.match(/iPad/i) != null;
    //is_iPad == false ? $('.countdown-caption').addClass('desktop'):$('.countdown-caption').removeClass('desktop')

    // initialize skrollr if the window width is large enough
    
    if ($(window).width() > 1366 && is_iPad == false) {
        var s = skrollr.init({
            edgeStrategy: 'set',
            forceHeight: false,
            smoothScrolling: false,
            mobileDeceleration: 0.004,
            easing: {
                WTF: Math.random,
                forceHeight: true,
                inverted: function(p) {
                    return 1-p;
                }
            }
        });
    }

    // disable skrollr if the window is resized below 768px wide
    
    $(window).on('resize', function () {
        if ($(window).width() <= 1366 && is_iPad == true) {
            skrollr.init().destroy(); // skrollr.init() returns the singleton created above
        }

        if ($(window).width() > 1366 && is_iPad == false) {
            var s = skrollr.init({
                edgeStrategy: 'set',
                forceHeight: false,
                smoothScrolling: false,
                mobileDeceleration: 0.004,
                easing: {
                    WTF: Math.random,
                    forceHeight: true,
                    inverted: function(p) {
                        return 1-p;
                    }
                }
            });
        }
    });

    var slideShow = (function() {
        var executed = false;
        return function() {
            if (!executed) {
                executed = true;
                
                if($('#slideshow').length > 0){
                    $("#slideshow > img:gt(0)").hide();
                    setInterval(function() {
                      $('#slideshow > img:first')
                        .fadeOut(1000)
                        .next()
                        .fadeIn(1000)
                        .end()
                        .appendTo('#slideshow');
                    }, 3000);
                } 
            }
        };
    })();

    var OFFSETTOP = $('.responsive-feature').offset().top;

    function goTopApear(){
        if($(window).scrollTop() > (OFFSETTOP-250)){
            $('.goTop').removeClass('hide');
        }else{
            $('.goTop').addClass('hide');
        }
    }
    goTopApear();
    $(window).scroll(function(){
        if($(window).scrollTop() > (OFFSETTOP-500)){
            slideShow();
            $('.goTop').removeClass('hide');
        }else{
            $('.goTop').addClass('hide');
        }
        
    })

});
    