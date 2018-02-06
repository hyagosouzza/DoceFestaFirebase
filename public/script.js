$(document).ready(function () {
    $('.list-group-item').click(function () {
        $('.list-group-item.active').removeClass('active');
        $(this).addClass('active');
    })
    $(function () {
        $('[data-toggle="popover"]').popover({ html: true });
    })
    $('.popover-dismiss').popover({
        trigger: 'hover',
        trigger: 'click'
    })
    $(window).scroll(function () {
        if ($(this).scrollTop() > 110) {
            $('.main').addClass('sticky-top');
            $('.navbar-brand').addClass('img-fixed');
            $('.navbar-brand').removeClass('img-normal');
            $('.animar').addClass('animated fadeInDown');

        } else{
            $('.navbar-brand').addClass('img-normal');
            $('.navbar-brand').removeClass('img-fixed');
            $('.main').removeClass('sticky-top');
            $('.animar').removeClass('animated fadeInDown');
        }
    });
});