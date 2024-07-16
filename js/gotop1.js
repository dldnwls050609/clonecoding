$(function () {
    // header
    // $('.menu nav .submenu>li>ul').mouseenter(function () {
    //     $('.menu nav .submenu>li>ul').addClass('on')
    // })
    // $('.menu nav.submenu > li > ul').mouseleave(function () {
    //     $('.menu nav .submenu>li>ul').removeClass('on')
    // })
    $('.menu1 .sub1').mouseenter(function () {
        $('.subcontainer').addClass('on')
    })
    $('.menu1 .sub1').mouseleave(function () {
        $('.subcontainer').removeClass('on')
    })

    ////////   gotop 버튼   ///////
    // 윈도우 300px 스크롤하면 gotop 보이기
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 300) {
            $('.gotop').fadeIn()
        } else {
            $('.gotop').fadeOut()
        }
    })

    // gotop을 클릭하면 이로 올라가도록 설정
    $('.gotop').click(function (e) {
        e.preventDefault()
        $('html,body').stop().animate({
            scrollTop: '0',
        }, 1000)
    })

})
