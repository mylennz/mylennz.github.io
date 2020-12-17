---
---

animation = false 

var mixes = {{ site.data.listen | jsonify }};

$(() => {

    /* Animate-on-scroll handling */

    var start = false

    var observer = new IntersectionObserver(function(e) {
        if (start) {
            $(e[0].target).removeClass('hide')
        } else start = true
    }, { threshold: [0.25] });

    if (animation) {
        observer.observe(document.querySelector("#bio p.hide"));
        observer.observe(document.querySelector("#bio .image.hide"));
        observer.observe(document.querySelector("#dates .image.hide"));
        observer.observe(document.querySelector("#dates ul.hide"));
        observer.observe(document.querySelector("#listen .content.hide"));
        observer.observe(document.querySelector("#listen .mix-info.hide"));
    } else {
        $('.hide').removeClass('hide')
    }

    /* Hero slideshow */

    timer = () => {
        setTimeout(() => {
            let incomingSlide = $('.slide:not(.current-slide)')
            let outgoingSlide = $('.current-slide')
            incomingSlide.addClass('current-slide')
            outgoingSlide.removeClass('current-slide')
            timer()
        }, 4000)
    }

    // timer()

    /* Setting up all the mix info */

    for (var i = 0; i < mixes.length; i++) {
        let mix = mixes[i]
        let box = $(`#listen li:nth-child(${i + 1})`)

        box.click(() => {
            $('.selected-mix').removeClass('selected-mix')
            box.addClass('selected-mix')
            $('.mix-info p').text(mix.description)
            $('.mix-info a').attr('href', mix.url)
            $('.mix-info a').attr('target', '_blank')
        })
    }

    $('.soundcloud').click(() => {
        var win = window.open('https://www.soundcloud.com/mylen_nz', '_blank');
        win.focus();
    })

});