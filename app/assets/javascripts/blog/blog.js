jQuery(document).ready(function ($) {
    $("#blog-link").click(function(){
        window.open("http://priyankasaigalblog.wordpress.com");
    });

    //initialise Stellar.js
    $(window).stellar();

    //Cache some variables
    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');

    function onScrollInit( items, trigger ) {
        items.each( function() {
            var osElement = $(this),
            osAnimationClass = osElement.attr('data-os-animation'),
            osAnimationDelay = osElement.attr('data-os-animation-delay');
            osElement.css({
              '-webkit-animation-delay':  osAnimationDelay,
              '-moz-animation-delay':     osAnimationDelay,
              'animation-delay':          osAnimationDelay,
              'animation-duration':         '2s',
              '-webkit-animation-delay':  '2s',
              '-moz-animation-delay':     '2s'
            });

            var osTrigger = ( trigger ) ? trigger : osElement;
            
            osTrigger.waypoint(function() {
              osElement.addClass('animated').addClass(osAnimationClass);
              },{
                  offset: '90%'
            });
        });

     }   
     onScrollInit($('.os-animation'));
 

    //waypoints doesnt detect the first slide when user scrolls back up to the top so we add this little bit of code, that removes the class
    //from navigation link slide 2 and adds it to navigation link slide 1.
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }

    //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    //When the user clicks on the button, get the get the data-slide attribute value of the button and pass that variable to the goToByScroll function
    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });



    $(".title").typed({
        strings: ["Hi, I'm Priyanka Saigal."],
        typeSpeed: 90,
    });

    setTimeout(function() {
        $(".subtitle").typed({
            strings: ["Front End Developer"],
            typeSpeed: 100
        });
    }, 3000);

    var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
    });

});



