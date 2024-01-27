window.addEventListener('scroll', function() {
    scrollTop = window.pageYOffset;
    if (scrollTop < 20) {
        if (scrollTop == 0) {
            document.querySelector('#header__bg').style.opacity = "0";
        }
        else {
            document.querySelector('#header__bg').style.opacity = "1";
        }
    }
});

