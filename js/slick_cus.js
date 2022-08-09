$(function(){
    // 부여군노인종합복지관
    $Slider1 = $("#slick1 .slide");
    $Slider1.on('init', function(event, slick){        
        $('#slick1 .slide .item:not(.slick-current)').addClass('on')
    });
    $Slider1.slick({        
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:true,
        speed : 700,
        autoplay: false,
        autoplaySpeed: 5000,
        infinite: true,
        arrows: false,    
        initialSlide : 2, 
        //centerMode: true,         
    })    
    $Slider1.on('reInit afterChange', function(event, slick, currentSlide, nextSlide){
        $('#slick1 .slide .item').removeClass('on')
        $('#slick1 .slide .item:not(.slick-current)').addClass('on')
    });

    // 임성희작가
    $Slider2 = $("#slick2 .exhibition1 ul")
    $Slider2.slick({
        variableWidth: true,
        slidesToScroll: 1,
        speed : 800,
        autoplay: false,
        autoplaySpeed: 5000,
        infinite: true,
        arrows: true,        
    })

    // 국토연구원
    const $Slider3 = $("#slick3 .list")
    $Slider3.on('init reInit beforeChange', function (event, slick, currentSlide, nextSlide) {
        var i = (nextSlide ? nextSlide : 0) + 1;
        $bar_current = (100 / (slick.slideCount))*i;
        $('#slick3 .bar').find('.bar_current').css('width', ($bar_current + '%'));        
    });
    $Slider3.slick({
        slidesToShow : 3,
        slidesToScroll : 1,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 6000,
        responsive: [ 
            {  
                breakpoint: 1400,
                settings: {                    
                    variableWidth : true,
                } 
            }
        ]  
    });

    // 국토연구원 국공유지
    const $Slider4 = $("#slick4 .list")
    $Slider4.slick({
        slidesPerRow: 3,
        accessibility: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 6000,
        infinite: false,
        arrows: true,
        dots:false,
        vertical: true, 
        responsive: [ 
            {  
                breakpoint: 870,
                settings: {                    
                    slidesPerRow: 2,
                } 
            }
        ]       
    });

});