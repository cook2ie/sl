$(function () {
    $('.list').mouseenter(function () {
        $('.headerbg').stop().slideDown(260)
        $('.dropdown').stop().show(300)
    })
    $('.list').mouseleave(function () {
        $('.headerbg').stop().slideUp(260)
        $('.dropdown').stop().hide(300)
    })

    $(window).scroll(function () {
        console.log($(window).scrollTop())

        if ($(window).scrollTop() >= 200) {
            $('.gotop').fadeIn(200)
        } else {
            $('.gotop').fadeOut(200)
        }
    })

    $('.gotop').click(function (e) {
        e.preventDefault()
        $('html,body').stop().animate({
            scrollTop: 0
        }, 500)
    })
})