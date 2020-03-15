let navMenu = document.querySelector('.navigation_wrapper'),
    navMenuLinks = document.querySelectorAll('.navigation_wrapper_link-item');

navMenu.addEventListener('click', function (event) {
    navMenuLinks.forEach(function (item) {
        item.classList.remove('active');
        event.target.classList.add('active');
    });
});

// scroll

(function () {
    const smoothScroll = function (targetEl, duration) {
        const headerElHeight = document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
        const ease = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
        const animation = function (currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);
    };
    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());

// slider
let slideIndex = 1;
showSlides(slideIndex);

const plusSlides = n => showSlides(slideIndex += n)

const currentSlide = n => showSlides(slideIndex = n);

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("blogSlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

// switch

let iphoneVertical = document.querySelector('.iphone-vertical');
let iphoneHorizontal = document.querySelector('.iphone-horizontal');

iphoneVertical.onclick = function () {
    let mySrc = iphoneVertical.getAttribute('src');
    if (mySrc === 'assets/images/iphone-vertical.png') {
        iphoneVertical.setAttribute('src', './assets/images/iphone_vertical.png');
    } else {
        iphoneVertical.setAttribute('src', 'assets/images/iphone-vertical.png');
    }
}

iphoneHorizontal.onclick = function () {
    let mySrc = iphoneHorizontal.getAttribute('src');
    if (mySrc === 'assets/images/iphone-horizontal.png') {
        iphoneHorizontal.setAttribute('src', './assets/images/iphone_horizontal.png');
    } else {
        iphoneHorizontal.setAttribute('src', 'assets/images/iphone-horizontal.png');
    }
}

// Shuffle pictures

let listPicture = document.querySelector('.portfolio-picture'),
    picture = document.querySelectorAll('.portfolio-picture-item'),
    btnAll = document.getElementById('all'),
    btnWeb = document.getElementById('web'),
    btnDesign = document.getElementById('graphic'),
    btnArtwork = document.getElementById('artwork');

function shufflePictures(event) {
    if (!event.target.classList.contains('active-btn')) {
        for (let i = picture.length; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i + 1));
            listPicture.insertBefore(picture[randomIndex], picture[i]);
        }
    }
}

btnAll.addEventListener('click', shufflePictures);
btnWeb.addEventListener('click', shufflePictures);
btnDesign.addEventListener('click', shufflePictures);
btnArtwork.addEventListener('click', shufflePictures);

// border

for (let i = 0; i < picture.length; i++) {
    picture[i].addEventListener('click', function (event) {
        picture.forEach(function (item) {
            if (event.target !== item) {
                item.classList.remove('border');
            }
        });


        if (event.target.classList.contains('border')) {
            event.target.classList.remove('border');
        } else event.target.classList.add('border');
    });
}