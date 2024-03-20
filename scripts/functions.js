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

        document.querySelector('.centerBlock__nav').classList.remove('centerBlock__nav_active');

        setTimeout(() => {
            document.querySelector('.blackoutBlock').style.display = "none";
            document.querySelector('.centerBlock__catalogNavsBlock').style.display = "none";
        }, 160)
        document.body.style.overflow = "auto";
        check_open_catalogNavs = false;
    }
    else {
        document.querySelector('.blackoutBlock').style.display = "block";
        document.querySelector('.centerBlock__catalogNavsBlock').style.display = "block";

        document.querySelector('.centerBlock__nav').classList.add('centerBlock__nav_active');

        setTimeout(() => {
            document.querySelector('.blackoutBlock').classList.add('blackoutBlock_active');
            document.querySelector('.centerBlock__catalogNavsBlock').classList.add('centerBlock__catalogNavsBlock_active');
        }, 10)
        document.body.style.overflow = "hidden";
        check_open_catalogNavs = true;
    }
}

function close_filter(z, n) {
    document.querySelectorAll('.filters__floating__nav__floatBlock')[z].style.display = "none";
    document.querySelectorAll('.filters__floating__nav__border')[z].style.opacity = "0";
    document.querySelectorAll('.filters__floating__nav')[z].style.borderRadius = "7px 7px 7px 7px";
    check_open_filters.splice(n, 1);
    // console.log("close");
}

function addInBasket() {
    if (document.querySelector('.mainInfo__info__interactions__bottom__buttonBasket_active') != null) {
        document.querySelector('.mainInfo__info__interactions__bottom__buttonBasket').classList.remove('mainInfo__info__interactions__bottom__buttonBasket_active');
    }
    else {
        document.querySelector('.mainInfo__info__interactions__bottom__buttonBasket').classList.add('mainInfo__info__interactions__bottom__buttonBasket_active');
    }
}

function open_filter(z) {
    let checkOpen = false;
    for (let i = 0; i < check_open_filters.length; i++) {
        if (check_open_filters[i] == z) {
            checkOpen = true;
            close_filter(z, i);
        }
    }

    if (checkOpen == false) {

        for (let i = 0; i < check_open_filters.length; i++) {
            close_filter(check_open_filters[i], i);
        }

        document.querySelectorAll('.filters__floating__nav__floatBlock')[z].style.display = "block";
        document.querySelectorAll('.filters__floating__nav__border')[z].style.opacity = "1";
        document.querySelectorAll('.filters__floating__nav')[z].style.borderRadius = "7px 7px 0px 0px";
        check_open_filters.push(z);
    }
    // console.log(check_open_filters);
}

function addInFavorite() {
    if (document.querySelector('.mainInfo__info__interactions__top__buttonFavorite_active') != null) {
        document.querySelector('.mainInfo__info__interactions__top__buttonFavorite').classList.remove('mainInfo__info__interactions__top__buttonFavorite_active');
    }
    else {
        document.querySelector('.mainInfo__info__interactions__top__buttonFavorite').classList.add('mainInfo__info__interactions__top__buttonFavorite_active');
    }
}

function open_authorization() {
    if (check_open_authorization) {
        document.querySelector('.authorization').style.opacity = "0";

        setTimeout(() => {
            document.querySelector(".authorization__block_logIn").style.display = "block";
            document.querySelector(".authorization__block_registration").style.display = "none";
            document.querySelector('.authorization').style.display = "none";
        }, 160)

        document.body.style.overflow = "auto";

        check_open_authorization = false;
    }
    else {
        document.querySelector('.authorization').style.display = "flex";

        setTimeout(() => {
            document.querySelector('.authorization').style.opacity = "1";
        }, 10)

        document.body.style.overflow = "hidden";
        check_open_authorization = true;
    }
}

function openRegistration() {
    document.querySelector(".authorization__block_logIn").style.display = "none";
    document.querySelector(".authorization__block_registration").style.display = "block";
}

function open_page_game_info(title) {
    document.querySelectorAll('.information_block').forEach(elem => elem.classList.remove('information_block_active'));
    document.querySelector(`.information__${title}`).classList.add('information_block_active');
    document.querySelector('.head__nav__strip_active').classList.remove(`head__nav__strip_active`);
    document.querySelector(`.strip_${title}`).classList.add('head__nav__strip_active');
}

function open_offers_games(category) {
    document.querySelector('.offers__grid_active').classList.remove("offers__grid_active");
    document.querySelector(`.offers__grid_${category}`).classList.add("offers__grid_active");

    document.querySelector('.offers__head__nav__strip_active').classList.remove(`offers__head__nav__strip_active`);
    document.querySelector(`.strip_${category}`).classList.add('offers__head__nav__strip_active');
}