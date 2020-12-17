animation = true 

var mixes = [{"name":"Summer Essentials Volume II","url":"http://soundcloud.com/mylen_nz/summer-essentials-volume-ii","description":"Mylen's second annual look back on the year with tunes to propel you into summer.","artwork":"https://i1.sndcdn.com/artworks-y0pM82BYfnMLmrO0-K7cyOQ-t500x500.jpg"},{"name":"BENEE - Sheesh (ft. Grimes) (Mylen Bootleg)","url":"http://soundcloud.com/mylen_nz/benee-sheesh-feat-grimes-mylen-bootleg","description":"Mylen puts his Drum & Bass spin on BENEE’s ‘Sheesh’ following the release of her new album ‘Hey U x’","artwork":"https://i1.sndcdn.com/artworks-ak2qOZzb5WGWRhxi-k6MXAQ-t500x500.jpg"},{"name":"Lunchbox Records Guest Mix","url":"http://soundcloud.com/mylen_nz/mylen-lunchbox-records-guest-mix","description":"Mylen presents a high octane guest mix for the NZ based label Lunchbox Records","artwork":"https://i1.sndcdn.com/artworks-lnM8GBlnYMyQBydt-tfEKvQ-t500x500.jpg"},{"name":"Mylen @ Summit Virtual Festival 2020","url":"https://soundcloud.com/mylen_nz/mylen-summit-virtual-festival-2020","description":"Mylen’s headline set from the 2020 virtual festival ‘SUMMIT’ brought to you by Beats Turning","artwork":"https://i1.sndcdn.com/artworks-X4FAWah0u9iNxd9y-IuRfZQ-t500x500.jpg"},{"name":"Mylen Rhythm & Vines Mix","url":"https://soundcloud.com/mylen_nz/road-to-rhythm-mylen-wildcard-mix","description":"2019 George FM x Rhythm & Vines winning wildcard mix","artwork":"https://i1.sndcdn.com/artworks-yzmSXcQPPN514v5L-AJsCPA-t500x500.jpg"}];

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