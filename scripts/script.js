function openCatalogNavs() {
    if (check_open_catalogNavs) {
        document.querySelector('.blackoutBlock').classList.remove('blackoutBlock_active');
        document.querySelector('.centerBlock__catalogNavsBlock').classList.remove('centerBlock__catalogNavsBlock_active');
        setTimeout(() => {
            document.querySelector('.blackoutBlock').style.display = "none";
            document.querySelector('.centerBlock__catalogNavsBlock').style.display = "none";
        }, 160)
        check_open_catalogNavs = false;
    }
    else {
        document.querySelector('.blackoutBlock').style.display = "block";
        document.querySelector('.centerBlock__catalogNavsBlock').style.display = "block";
        setTimeout(() => {
            document.querySelector('.blackoutBlock').classList.add('blackoutBlock_active');
            document.querySelector('.centerBlock__catalogNavsBlock').classList.add('centerBlock__catalogNavsBlock_active');
        }, 10)
        check_open_catalogNavs = true;
    }
}

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

function openFilter() {
    if (check_open_filter) {
        document.querySelector('.filters__main__nav_filter').style.borderColor = "#3D3D3D";
        document.querySelector('.filters__floating').classList.remove('filters__floating_active');
        setTimeout(() => {
            document.querySelector('.filters__floating').style.display = "none";
        }, 160);
        check_open_filter = false;
    }
    else {
        document.querySelector('.filters__main__nav_filter').style.borderColor = "#0196FF";
        document.querySelector('.filters__floating').style.display = "flex";
        setTimeout(() => {
            document.querySelector('.filters__floating').classList.add('filters__floating_active');
        }, 10);
        check_open_filter = true;
    }
}