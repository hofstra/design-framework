$(document).ready(function(){
    $('.show-mobile-nav').on('click',function(e){
        e.preventDefault();
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