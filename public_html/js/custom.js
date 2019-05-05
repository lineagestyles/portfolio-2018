function ChangeUrl(page, url) {
    if (typeof (history.pushState) !== "undefined") {
        var obj = {Page: page, Url: url};
        history.pushState(obj, obj.Page, obj.Url);
    } else {
        alert("Browser does not support HTML5.");
    }
}
(function ($) {
    $(window).load(function () {
        $("#navigation").sticky({topSpacing: 0});
    });

    $('.page-scroll a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            if (this.hash === "#contact") save(1);
            else save(0);
            ChangeUrl('Strona', 'index.html' + this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });
    $('a.menu[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            if (this.hash === "#contact") save(1);
            else save(0);
            ChangeUrl('Strona', 'index.html' + this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });
    //owl carousel
    $('#owl-works').owlCarousel({
        items: 3,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [980, 5],
        itemsTablet: [768, 5],
        itemsTabletSmall: [550, 2],
        itemsMobile: [480, 2]
    });

    //nivo lightbox
    $('.owl-carousel .item a').nivoLightbox({
        loop: true,
        navigation: true,
        navigationText: [
            '<i class="fab fa-chevron-left"></i>',
            '<i class="fab fa-chevron-right"></i>'
        ],
        effect: 'fadeScale', // The effect to use when showing the lightbox
        theme: 'default', // The lightbox theme to use
        keyboardNav: true, // Enable/Disable keyboard navigation (left/right/escape)
        clickOverlayToClose: true, // If false clicking the "close" button will be the only way to close the lightbox
        onInit: function () {}, // Callback when lightbox has loaded
        beforeShowLightbox: function () {}, // Callback before the lightbox is shown
        //afterShowLightbox: function (lightbox) {}, // Callback after the lightbox is shown
        beforeHideLightbox: function () {}, // Callback before the lightbox is hidden
        afterHideLightbox: function () {}, // Callback after the lightbox is hidden
        //onPrev: function (element) {}, // Callback when the lightbox gallery goes to previous item
        //onNext: function (element) {}, // Callback when the lightbox gallery goes to next item
        errorMessage: 'The requested content cannot be loaded. Please try again later.' // Error message when content can't be loaded
    });

    //parallax
    if ($('.parallax').length)
    {
        $(window).stellar({
            responsive: true,
            scrollProperty: 'scroll',
            parallaxElements: false,
            horizontalScrolling: false,
            horizontalOffset: 0,
            verticalOffset: 0
        });

    }
var typed = $(".typed");

$(function () {
    typed.typed({
        strings: ["Patrycja Zajączkowska.", "Designer.", "Developer.", "Freelancer.", "Artist"],
        typeSpeed: 100,
        loop: true
    });
});

})(jQuery);

//walidacja formularza po kliknięciu na przycisk submit o id = 'wyslij';
$(function () {
    $('#wyslij').click(function () {
        ok = true;


        if ($("#name").val().length < 6) {
            $("#e_name").text("Wprowadź imie i nazwisko!");
            $("#e_name").css("display", "block");
            ok = false;
        } else {
            $("#e_name").text("");
            $("#e_name").css("display", "none");
        }

        obiektEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!obiektEmail.test($("#email").val())) {
            $("#e_email").text("Wprowadź poprawnie email!");
            $("#e_email").css("display", "block");
            ok = false;
        } else {
            $("#e_email").text("");
            $("#e_email").css("display", "none");
        }

        if ($("#subject").val().length < 4) {
            $("#e_subject").text("Podaj conajmniej 4 znaki!");
            $("#e_subject").css("display", "block");
            ok = false;
        } else {
            $("#e_subject").text("");
            $("#e_subject").css("display", "none");
        }

        for (i = 0; i < $('[name=wiek]').length; i++) {
            if ($('[name=wiek]')[i].checked) {
                $("#e_wiek").text("");
                $("#e_wiek").css("display", "none");
                break;
            } else {
                $("#e_wiek").text("Wybierz przedział wiekowy!");
                $("#e_wiek").css("display", "block");
                ok = false;
            }
        }
         if ($("#message").val().length < 6) {
            $("#e_msg").text("Napisz coś!");
            $("#e_msg").css("display", "block");
            ok = false;
        } else {
            $("#e_msg").text("");
            $("#e_msg").css("display", "none");
        }
        
        if (ok) { //wyślij formularz:
            $("#contact-form").submit();
            console.log("elo");
            return true;
        }
        else {
            return false;
        }
    });
});



function move(index) {
    if (index === 1) {
        $("#contact").show();
        $("#separator").hide();
        $("#gallery").hide();
        $("#separator2").hide();
        $("#about").hide();

        $("footer").css("background-color", "#a847c2");
        $("footer p").css("color", "white");
    }
    if (index === 0) {
        $("#contact").hide();
        $("#separator").show();
        $("#gallery").show();
        $("#separator2").show();
        $("#about").show();

        $("footer").css("background-color", "white");
        $("footer p").css("color", "#a847c2");
    }
}

$("select").change(function () {
    $("select option:selected").each(function () {
        if ($(this).text() === "WYBIERZ:") {
            $("#programming").css("display", "none");
            $("#graphics").css("display", "none");

        }
        if ($(this).text() === "Programowanie") {
            $("#programming").css("display", "inline");
            $("#graphics").css("display", "none");
        }
        if ($(this).text() === "Grafika") {
            $("#graphics").css("display", "inline");
            $("#programming").css("display", "none");
        }
    }).change();
});


function load() {
    var val = sessionStorage.getItem("kontakt");
    console.log(val);
    if (val === "1") {
        move(1);
    } else
        move(0);
}
function save(val) {
    sessionStorage.setItem("kontakt", val);
}
$(function () {
    load();
});