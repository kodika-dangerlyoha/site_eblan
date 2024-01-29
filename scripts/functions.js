function openFilters() {
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

function open_filter(z) {
    // let oldZ = 0;
    let checkOpen = false;
    for (let i = 0; i < check_open_filters.length; i++) {
        if (check_open_filters[i] == z) {
            checkOpen = true;
            check_open_filters.splice(i, 1);
        }
    }

    if (checkOpen) {
        document.querySelectorAll('.filters__floating__nav__floatBlock')[z].style.display = "none";
        document.querySelectorAll('.filters__floating__nav__border')[z].style.opacity = "0";
        document.querySelectorAll('.filters__floating__nav')[z].style.borderRadius = "7px 7px 7px 7px";
    }
    else {
        // document.querySelectorAll('.filters__floating__nav__floatBlock')[oldZ].style.display = "none";
        // document.querySelectorAll('.filters__floating__nav__border')[oldZ].style.opacity = "0";
        // document.querySelectorAll('.filters__floating__nav')[oldZ].style.borderRadius = "7px 7px 7px 7px";

        document.querySelectorAll('.filters__floating__nav__floatBlock')[z].style.display = "block";
        document.querySelectorAll('.filters__floating__nav__border')[z].style.opacity = "1";
        document.querySelectorAll('.filters__floating__nav')[z].style.borderRadius = "7px 7px 0px 0px";
        check_open_filters.push(z);
    }
    // oldZ = z;
    console.log(check_open_filters);
}

function basket_checkBox_click() {
    if (check_active_basket_checkBox) {
        document.querySelector('#basket_checkMark').style.opacity = "0";
        document.querySelector('#basket_checkMark').style.transform = "translateY(-5px)";
        check_active_basket_checkBox = false;
    }
    else {
        document.querySelector('#basket_checkMark').style.opacity = "1";
        document.querySelector('#basket_checkMark').style.transform = "translateY(0px)";
        check_active_basket_checkBox = true;
    }
}