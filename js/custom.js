$(function() {

    // MENU
    $('.nav-link').on('click', function() {
        $(".navbar-collapse").collapse('hide');
    });


    // AOS ANIMATION
    AOS.init({
        disable: 'mobile',
        duration: 800,
        anchorPlacement: 'center-bottom'
    });


    // SMOOTH SCROLL
    $(function() {
        $('.nav-link').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1000);
            event.preventDefault();
        });
    });


    // PROJECT SLIDE
    $('#project-slide').owlCarousel({
        loop: true,
        center: true,
        autoplayHoverPause: false,
        autoplay: true,
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            }
        }
    });

});

/*************************
 * BLOG
 ***************************/

/* SOCIAL SHARE  */
let shareButton = document.querySelectorAll(".share-popup");
let windowSize = "";
for (let i = 0; i < shareButton.length; i++) {
    shareButton[i].addEventListener("click", function() {
        let url = this.href;
        let domain = url.split("/")[2];
        switch (domain) {
            case "www.facebook.com":
                windowSize = "width=585,height=368";
                break;
            case "www.twitter.com":
                windowSize = "width=585,height=494";
                break;
            case "www.linkedin.com":
                windowSize = "width=570,height=494";
                break;
        }
        window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,' + windowSize);
        return false;
    });
}