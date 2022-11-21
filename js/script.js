$(document).ready(function () {
    // AOS.init();
    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();
        if (wScroll >= 120) {
            $('.navbar').addClass('mb-navbar-fixed');
        } else {
            $('.navbar').removeClass('mb-navbar-fixed');
        }


    });

    if ($(window).scrollTop() >= 120) {
        $('.navbar').addClass('mb-navbar-fixed');
    } else {
        $('.navbar').removeClass('mb-navbar-fixed');
    }


    const config = {
        loop: true,
        margin: 30,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
                margin: 10,
                stagePadding: 40
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    }
    $(".mb-team-experience-slide").owlCarousel(config);
    $(".mb-partners-slide").owlCarousel(config);

    $(".navbar-nav .nav-link").click(function (e) {
        const targetEl = $(this).attr('href');
        if (targetEl != '#' && targetEl.startsWith('#')) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: ($(targetEl).offset().top - 120)
            }, 500);
        }
    });
    $("a").click(function (e) {
        if ($(window).width() > 767) {
            const targetEl = $(this).attr('href');
            if (targetEl != '#' && targetEl.startsWith('#')) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: ($(targetEl).offset().top - 120)
                }, 500);
            }
        }
        else{
            const targetEl = $(this).attr('href');
            if (targetEl != '#' && targetEl.startsWith('#')) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: ($(targetEl).offset().top - 70)
                }, 500);
            }
        }
    });

    $('#to_top').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    })

    // $('.mb-right-box-close').click(function (e) {
    //     e.preventDefault();
    //     $('.mb-right-box-wrap').fadeOut(300);
    //     $('.mb-right-box-wrap').removeClass('show');
    // })

    window.setTimeout(() => {
        $('#wr_loading').fadeOut();
    }, 800)

    // window.setTimeout(() => {
    //     $('.mb-right-box-wrap').fadeIn(300);
    //     $('.mb-right-box-wrap').addClass('show');
    // }, 1500)
});
$(document).ready(function () {
    window.addEventListener("scroll", handleToggleScrollToTop);

    function handleToggleScrollToTop(e) {
        const windowx = e.currentTarget;
        if (windowx.scrollY > 200) {
            // $('#to_top').fadeIn(300);
        } else {
            // $('#to_top').fadeOut(300);
        }
    }
    setSlide();

    $(window).on('resize', () => {
        setSlide();
    })
})

function setSlide() {
    if ($(window).width() < 768) {
        $('#slideMobile').addClass('owl-carousel');
        $("#slideMobile").owlCarousel({
            loop: true,
            // autoplay: true,
            dots: true,
            margin: 30,
            center: true,
            items: 1,
            autoplayTimeout: 3000
        });
    } else {
        if (typeof $('#slideMobile').data('owl.carousel') != 'undefined') {
            $('#slideMobile').data('owl.carousel').destroy();
            $('#slideMobile').removeClass('owl-carousel');
        }
    }
}

function hideBanner() {
    $('body').removeClass('testnet');
    $('.mb-banner-testnet').hide(300);
}
var noticeModalEl = document.getElementById("noticeModal");
if (noticeModalEl) {
    var noticeModal = new bootstrap.Modal(noticeModalEl, {});
    window.onload = function () {
        if (!localStorage.getItem('isShowPopup')) {
            window.setTimeout(() => {
                noticeModal.show();
            }, 2000)
        } else {
            $('body').addClass('testnet');
            $('.mb-banner-testnet').fadeIn(300);
        }
    };
    noticeModalEl.addEventListener('hidden.bs.modal', function (event) {
        $('body').addClass('testnet');
        $('.mb-banner-testnet').fadeIn(300);
        localStorage.setItem('isShowPopup', true);
    })
}

$("#slideCommunity").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    center: true,
    items: 3,
    autoplayTimeout: 3000,
    responsiveClass: true,
    margin: 30,
    responsive: {
        0: {
            items: 1,
        },
        1023: {
            items: 2,
        },
        1200: {
            items: 3,
        }
    }
});
$(".navbar-toggler").click(function() {
    if($(".mb-navbar").hasClass("open"))
    {
        $(".mb-navbar").removeClass("open");
    }
    else{
        $(".mb-navbar").addClass("open");
    }
});
$(document).ready(function () {
    /* if($(document).find(".realtime-data")){
        $.ajax({
            url: "https://portal.massbitroute.net/mbr/community/count-node",
            type: 'GET',
            success: function(res) {
                document.getElementById("count-node").innerHTML=res;
                document.getElementById("percent-node").innerHTML=res;
            },
            error: function (err) {
                document.getElementById("count-node").innerHTML=0;
                document.getElementById("percent-node").innerHTML=0;
            }
        });
        
        $.ajax({
            url: "https://portal.massbitroute.net/mbr/community/count-gateway",
            type: 'GET',
            success: function(res) {
                document.getElementById("count-gateway").innerHTML=res;
                document.getElementById("percent-gateway").innerHTML=res;
            },
            error: function (err) {
                document.getElementById("count-gateway").innerHTML=0;
                document.getElementById("percent-gateway").innerHTML=0;
            }
        });
        $.ajax({
            url: "https://portal.massbitroute.net/mbr/community/count-dapi",
            type: 'GET',
            success: function(res) {
                document.getElementById("count-dapi").innerHTML=res;
                document.getElementById("percent-dapi").innerHTML=res;
            },
            error: function (err) {
                document.getElementById("count-dapi").innerHTML=0;
                document.getElementById("percent-dapi").innerHTML=0;
            }
        });
    } */
    (function($) {
        $.fn.animateNumbers = function(stop, commas, duration, ease) {
            return this.each(function() {
                var $this = $(this);
                var start = parseInt($this.text());
                commas = (commas === undefined) ? true : commas;
                $({value: start}).animate({value: stop}, {
                    duration: duration == undefined ? 10000 : duration,
                    easing: ease == undefined ? "swing" : ease,
                    step: function() {
                        $this.text(Math.floor(this.value));
                        if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
                    },
                    complete: function() {
                       if (parseInt($this.text()) !== stop) {
                           $this.text(stop);
                           if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
                       }
                    }
                });
            });
        };
    })(jQuery);
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    
    $('#count-dapi').animateNumbers(613121);
    //$('#percent-dapi').animatePercents(15);
    $('#count-gateway').animateNumbers(1945);
    //$('#percent-gateway').animatePercents(98);
    $('#count-node').animateNumbers(2188);
    //$('#percent-node').animatePercents(31);
});
document.getElementById("mc-embedded-subscribe").addEventListener("click", function () {
    var email = document.getElementById("mce-EMAIL").value;
    if (validateEmail(email)) {
        $.ajax({
            type: 'post',
            url: 'https://mail-srv.pikasso.xyz/waiting_list',
            data: JSON.stringify({
                email: email,
                projectId: '2dc1cda5-44ce-498e-99a5-011a18c6c77c'
            }),
            contentType: "application/json; charset=utf-8",
            success: function (res) {
                document.getElementById("message").innerHTML = "Your subscription has been successful.";
                bootstrap.Modal.getOrCreateInstance(document.getElementById('SubscribeModal')).show();
            },
            error: function (err) {
                document.getElementById("message").innerHTML = "Your subscription could not be saved. Please try again.";
                bootstrap.Modal.getOrCreateInstance(document.getElementById('SubscribeModal')).show();
            }
        });
    }
});
function validateEmail(email) {
    return /^\w+([+\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}