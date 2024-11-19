var $ = jQuery.noConflict();
//var slider_array = new Array();

jQuery(document).ready(function($) {
    
    $(".top-bar .toggle-topbar.menu-icon a").click(function(e) {
        $('.toggle-topbar').click();
        $('html, body').animate({scrollTop : 0},1);
        e.preventDefault(); //To prevent default anchor tag behaviour
        e.stopPropagation(); //To prevent parent container click event from firing
        $(this).parent().closest('header').toggleClass('rel');
        $('#middle').toggleClass('nopadd');
        return false;
    });
    
    
    toggleSearch();
    moveTestimonials();
    slideTestimonials();
    home_parallax();    
    heightElementPost();
    moveWidget();
    moveSide();
    slideTestimonials_medium();
    parentMenuClick();
    moveTopFull();
    toggleLocation();
    stickHeader();
    //toggleLocationMobile();
    toggleSubmenu();
});

$(window).resize(function () {
    heightElementPost();
    moveWidget();
    marginTitle();
    moveSide();
    home_parallax();  
    moveTestimonials();  
    slideTestimonials();
    moveTopFull();
    stickHeader();
    //toggleLocation()
});

$( window ).load(function() {
    marginTitle();
    heightElementPost();
    toggleLocationMobile();
    stickHeader();
    //toggleLocation();

});


function slideTestimonials() {
    var slideobj1=$('.wave .testimonials .slide-text').bxSlider({
        mode: 'horizontal',
        pager: false,
        controls:false
    });
    var slideobj2=$('.wave .testimonials .slide-img').bxSlider({
        mode: 'fade',
        pager: false,
        controls:false
    });
    $('.wave .testimonials .quote-next').click(function (){
        slideobj1.goToNextSlide();
        slideobj2.goToNextSlide();
    });
    $('.wave .testimonials .quote-prev').click(function (){
        slideobj1.goToPrevSlide();
        slideobj2.goToPrevSlide();
    });
}

function slideTestimonials_medium() {
    var slideobj3=$('.testimonials-medium .testimonials .slide-text').bxSlider({
        mode: 'horizontal',
        pager: false,
        controls:false
    });
    var slideobj4=$('.testimonials-medium .testimonials .slide-img').bxSlider({
        mode: 'fade',
        pager: false,
        controls:false
    });
    $('.testimonials-medium .testimonials .quote-next').click(function (){
        slideobj3.goToNextSlide();
        slideobj4.goToNextSlide();
    });
    $('.testimonials-medium .testimonials .quote-prev').click(function (){
        slideobj3.goToPrevSlide();
        slideobj4.goToPrevSlide();
    });
}


function toggleSearch() {
    $('.toggle-search').on('click', function(event) {
        event.stopPropagation();
        $('.toggle-search').next().toggleClass('opened');
    });
    $('html').click(function() {
        $('.toggle-search').next().removeClass('opened');
    });
}

function home_parallax() {
    $('#banner-head .slide-image.has-parallax li').each(function(i){
        $('#banner-head .slide-image.has-parallax li').parallax("50%", 0.1);
    });

    $('.home-parallax').each(function(i){
        $('.home-parallax').parallax("50%", 0.2);
    });
    
}

function heightElementPost() {
    $('.posts .over').each(function(i){
        if($(window).width() > 600) {
            $(this).height($(this).prev().height() - 20);
            $(this).find(".meta").width($(this).find(".title").width());
        }
    });
}

//for Theme page
function moveWidget() {
    $('#list-widget').each(function(i){
        if($(window).width() < 970) {
            $(this).remove().insertAfter("#banner-head");
        }
        else {
            $(this).remove().insertAfter("#anchor-list-widger");
        }
    });
}

//Marign title
function marginTitle() {
    $('#mid-col .title-page').each(function(i){ 
        // if($(window).width() > 767) {
        var heighttitle = $(this).height() + 15;
        $(this).css("marginTop", -heighttitle);
        //}
    });
}

//move block side (left, right)
function moveSide() {
     
    $('#right-col.moveable').each(function(i){ 
        if($(window).width() < 1025) {
            $(this).remove().insertAfter("#left-col");
        } 

        if($(window).width() < 768) {
            $(this).remove().insertAfter("#anchor-right");
        }
    });
    
}

//move block side (left, right)
function moveTestimonials() {
     
    $('.wave .testimonials').each(function(i){ 
        if($(window).width() < 1025 && $(window).width() > 767) {
            $(this).remove();
        }
    });   
}

//Parent menu clickable on mobile
function parentMenuClick() {
    $('.top-bar-section').each(function(){  
        $('li.has-dropdown > a', this).each(function(){
            $(this).wrapInner( "<span></span>" );
        });  
    }); 
    $(".top-bar-section li.has-dropdown > a > span").click(function(){
         window.location=$(this).parent().attr("href");
         return false;
    });
}

//move .top-full-wrap block on mobile
function moveTopFull() {
    if($(window).width() < 768) {
        $('.top-full-wrap').remove().insertAfter("#top-inset-anchor");
        $( "#toggle-vest" ).attr("id","toggle-vest-mobile")
    } 
}


//Toggle location top
function toggleLocation() {
    $('.top-full-wrap #toggle-vest').on('click', function(event) {
        $('.top-full-wrap #toggle-vest').parent().toggleClass('opened');
        event.stopPropagation();
    });
    $('html').click(function() {
        $('.top-full-wrap #toggle-vest').parent().removeClass('opened');
    });
 }

 function toggleLocationMobile() {
    $( ".top-full-wrap #toggle-vest-mobile" ).on('click', function(event) {
        $(this).parent().toggleClass('opened');
        $( ".top-bar").toggleClass('over');
    });
 }

 function stickHeader() {
    if($(window).width() > 767) { 
        $(".wrap-full-nav").sticky({ topSpacing: 0 });
    }
 }

 //Toggle submenu on mobile
function toggleSubmenu() {
    $( "#sub-nav .title" ).click(function() {   
        if($(window).width() < 768) { 
            $(this).next().toggleClass('opened');
        }
    });
 }
