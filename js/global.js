
window.setTimeout(function(){
$(".loading").fadeOut(500)
},400)

$(document).ready(function(){
	$(window).load(function () {
          $(".mobile-inner-header-icon").click(function(){
            $(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");
            $(".mobile-inner-nav").slideToggle(250);
          });
          $(".mobile-inner-nav li").each(function( index ) {
            $( this ).css({'animation-delay': (index/10)+'s'});
          });
          $(".mobile-inner-nav li").click(function(){
            $(this).find('dl').slideToggle(200)
          })
        });

})

$(document).ready(function(){

$(".section1 .left .con>*>*").each(function( index ) {
            $( this ).css({'animation-delay': (index/10)+'s'});
          });
$(".section7 .list li").each(function( index ) {
            $( this ).css({'animation-delay': (index/10)+'s'});
          });




$('.section1 .imgbox1 img').addClass('wow scalcAni')

$('.section6 .list li').addClass(' wow zoomInUp ')
$('.section1 .right .imgbox5 img,.section4 .wrap > .title,.section5 .content3 .title2,.section6 .title img,.section7 .title img').addClass('wow zoomIn')

$('.section2 .right img.ani1,.section5 .title').addClass('wow zoomIn')

$('.section1 .left .con>*>*,.section5 .content1 .right,.section5 .content2 .right,.section5 .list .ri').addClass('wow fadeInRight')

$('.section2 .right img.ani3,.section7 .imgbox img,.section7 .list li').addClass('wow fadeInUp')


$('.section3 .title,.section3 .dec,.section4 .title1,.section4 .dec').addClass('wow fadeInUp')

$('.section4 li,.section7 .content .right').addClass('wow fadeInDown')

$('.section2 .left>*,.section5 .content1 .left>*,.section5 .content2 .left>*,.section5 .list .hd').addClass('wow fadeInLeft')

$('.section3 .list li').addClass('wow zoomInDown')

// $('.section4 .ani2 img').addClass('wow tada')

// $('.section4 .ani1 img').addClass('wow fly')
$('.section7 .content .left').addClass('wow fly2')







var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
});
wow.init();




function height(){
  var sc = $(window).scrollTop();
  if (sc > 200) {
      $("body").addClass("current");
    } else {
      $("body").removeClass("current");
    }
}
height()
$(window).scroll(function () {
  height()
});


$('.section5 .list .hd .tit').eq(0).show()

var content3 = new Swiper('.content3 .swiper-container', {
        pagination: '.content3 .swiper-pagination',
        paginationClickable: '.content3 .swiper-pagination',
        nextButton: '.content3 .swiper-button-next',
        prevButton: '.content3 .swiper-button-prev',
        autoplay:5000,
        autoplayDisableOnInteraction: false,
        speed:500,
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight:true,

        onSlideChangeStart: function(swiper){
          $('.section5 .list .hd .tit').hide()
          $('.section5 .list .hd .tit').eq(swiper.activeIndex).show()

          $(".section5 .list .hd .tit").removeClass('animated tada')
          $(".section5 .list .hd .tit").eq(swiper.activeIndex).addClass('animated tada')

        }
});







 //日期倒计时
            $.leftTime("2024/02/16 23:45:24",function(d){
              if(d.status){
                var $dateShow1=$("#dateShow1");
                $dateShow1.find(".h").html(d.h);
                $dateShow1.find(".m").html(d.m);
                $dateShow1.find(".s").html(d.s);
              }
            });

$(document).ready(function() {
    $('.addnum input').on('input', function() {
        var inputValue = parseInt($(this).val());
        if (!isNaN(inputValue) && inputValue >= 1 && inputValue <= 10) {
            updateETHValue(inputValue);
        } else {
            // If the input is outside the range, reset to 1
            $(this).val(1);
            updateETHValue(1);
        }
    });

    // Handle the increase button
    $('.i2').on('click', function() {

        if ($('.addnum input').val() == '') {
            $('.addnum input').val(0);
        }
        var inputValue = parseInt($('.addnum input').val()) + 1;
        if (inputValue <= 10) {
            $('.addnum input').val(inputValue);
            updateETHValue(inputValue);
        }
    });

    // Handle the decrease button
    $('.i1').on('click', function() {
        var inputValue = parseInt($('.addnum input').val()) - 1;
        if (inputValue >= 1) {
            $('.addnum input').val(inputValue);
            updateETHValue(inputValue);
        }
    });

    function updateETHValue(value) {
        var ethValue = (value * 0.1).toFixed(1);
        $('.val span').text(ethValue);
    }
});

$(document).ready(function() {
    // Get the input element
    var inputElement = $('.addval .words');

    // Set the valid values
    var validValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // Decrease button (i1) click event
    $('.addval .i1').click(function() {
      updateValue(-1);
    });

    // Increase button (i2) click event
    $('.addval .i2').click(function() {
      updateValue(1);
    });

    // Function to update the input value
    function updateValue(change) {
      var currentValue = parseInt(inputElement.val());
      var index = validValues.indexOf(currentValue);

      if (index !== -1) {
        // If the current value is in the valid values array
        index = (index + change + validValues.length) % validValues.length;
        inputElement.val(validValues[index]);
      } else {
        // If the current value is not in the valid values array, set it to the first valid value
        inputElement.val(validValues[0]);
      }
    }

    // Input change event to ensure only valid values are entered
    inputElement.change(function() {
      var enteredValue = parseInt(inputElement.val());
      if (!validValues.includes(enteredValue)) {
        // If the entered value is not valid, set it to the first valid value
        inputElement.val(validValues[0]);
      }
    });
  });

});