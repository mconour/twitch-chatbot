/* marquee functionality */


let marqueeJS = {
    init: function () {
        marqueeJS.Tags = document.querySelectorAll('.marqueeJS');
        for (var i = 0; i < marqueeJS.Tags.length; i++) {
            marqueeJS.Tags[i].style.overflow = 'hidden';
        }
        marqueeJS.Tags = document.querySelectorAll('.marqueeJS div');
        for (var i = 0; i < marqueeJS.Tags.length; i++) {
            marqueeJS.Tags[i].style.position = 'relative';
            marqueeJS.Tags[i].style.right = '-' + marqueeJS.Tags[i].parentElement.offsetWidth + 'px';
        }
        marqueeJS.loop();
    },
    loop: function () {
        for (var i = 0; i < marqueeJS.Tags.length; i++) {
            var x = parseFloat(marqueeJS.Tags[i].style.right);
            x++;
            var W = marqueeJS.Tags[i].parentElement.offsetWidth;
            var w = marqueeJS.Tags[i].offsetWidth;
            if ((x / 100) * W > w) x = -W;
            if (marqueeJS.Tags[i].parentElement.parentElement.querySelector(':hover') !== marqueeJS.Tags[i].parentElement) marqueeJS.Tags[i].style.right = x + 'px';
        }
        requestAnimationFrame(this.loop.bind(this));
    }
};
window.addEventListener('load', marqueeJS.init);