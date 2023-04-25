/* Menus Responsive */
$(function(){
    $('.nav__icon').on('click', function() {
        $(this).toggleClass('active');
        $('.menus-wrapper ul').slideToggle();
    });

    $(window).on('load resize',function(){
        var w = $(window).width();
        var h = $(window).height();
        var x = 992;
        if (w >= x) {
            $('.menus-wrapper ul').css({ display: 'flex',height: 'auto' });
        }else {
            $('.menus-wrapper ul').css({ display: 'none',height: h + 'px'});
        }
    });
});

/* Search animation */
$(function () {
    $('.search-wrapper .fa-search').on('click', function () {
        $('.search').toggleClass('show');
    })
})

/* Slick Slider */
$('.slider').slick({
    adaptiveHeight:true,
});
