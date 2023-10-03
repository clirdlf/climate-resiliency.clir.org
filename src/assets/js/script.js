// Import the Bootstrap bundle
//
// This includes Popper and all of Bootstrap's JS plugins.
// @see https://github.com/twbs/examples/blob/main/sass-js/js/main.js
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header');

    window.onscroll = function() {
        if( window.scrollY >= header.offsetTop ) {
            header.classList.add('nav-bg');
        } 
        if( window.scrollY <= header.offsetTop ) {
            header.classList.remove('nav-bg');
        } 
    }

    // TODO: do this in template 
    const backgrounds = document.querySelectorAll("[data-background]");
    for (const element of backgrounds) {
        const backgroundImage = element.dataset.background;
        element.style.backgroundImage = `url(${backgroundImage})`;
    }

    const colors = document.querySelectorAll("[data-color]");
    for (const element of colors) {
        const backgroundColor = element.dataset.color;
        element.style.backgroundColor = backgroundColor;
    }

    const progress = document.querySelectorAll("[data-progress]");
    for (const element of progress) {
        const backgroundColor = element.dataset.color;
        element.style.backgroundColor = backgroundColor;
    }

    const elements = document.querySelectorAll("[data-progress]");
    for (const element of elements) {
        const progress = element.dataset.progress;
        element.style.bottom = progress;
    }

    // hero parallax
    const parallaxBox = document.getElementById('parallax');
    const c2left = document.getElementById('l2').offsetLeft,
        c2top = document.getElementById('l2').offsetTop,
        c3left = document.getElementById('l3').offsetLeft,
        c3top = document.getElementById('l3').offsetTop,
        // c4left = document.getElementById('l4').offsetLeft,
        c4top = document.getElementById('l4').offsetTop,
        c5left = document.getElementById('l5').offsetLeft,
        c5top = document.getElementById('l5').offsetTop,
        c6left = document.getElementById('l6').offsetLeft,
        c6top = document.getElementById('l6').offsetTop,
        c7left = document.getElementById('l7').offsetLeft,
        c7top = document.getElementById('l7').offsetTop,
        c8left = document.getElementById('l8').offsetLeft,
        c8top = document.getElementById('l8').offsetTop,
        c9left = document.getElementById('l9').offsetLeft,
        c9top = document.getElementById('l9').offsetTop;

        parallaxBox.onmousemove = function (event) {
            event = event || window.event;
            var x = event.clientX - parallaxBox.offsetLeft,
                y = event.clientY - parallaxBox.offsetTop;

            /*  mouseParallax('l1', c1left, c1top, x, y, 5); */
            mouseParallax('l2', c2left, c2top, x, y, 25);
            mouseParallax('l3', c3left, c3top, x, y, 20);
            // mouseParallax('l4', c4left, c4top, x, y, 35);
            mouseParallax('l5', c5left, c5top, x, y, 30);
            mouseParallax('l6', c6left, c6top, x, y, 45);
            mouseParallax('l7', c7left, c7top, x, y, 30);
            mouseParallax('l8', c8left, c8top, x, y, 25);
            mouseParallax('l9', c9left, c9top, x, y, 40);
        };

        function mouseParallax(id, left, top, mouseX, mouseY, speed) {
            var obj = document.getElementById(id);
            var parentObj = obj.parentNode,
                containerWidth = parseInt(parentObj.offsetWidth),
                containerHeight = parseInt(parentObj.offsetHeight);
            obj.style.left = left - (((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) * speed) + 'px';
            obj.style.top = top - (((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) * speed) + 'px';
        }

}, false);