$(document).ready(function(){
    $('.show-mobile-nav').on('click',function(e){
        $('.main-nav ul').toggleClass('show');
    })
    $('.fancybox').fancybox({
        fitToView: true,

        helpers: {
            overlay: {
                locked: false
            }
        }
    });
})