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
        document.body.style.overflow = "auto";
        check_open_catalogNavs = false;
    }
    else {
        document.querySelector('.blackoutBlock').style.display = "block";
        document.querySelector('.centerBlock__catalogNavsBlock').style.display = "block";
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

function hover_close_basket(n) {
    document.querySelectorAll('.basketContainer__gameList__games__game__forHover__bg_blue')[n].style.opacity = "0";
    document.querySelectorAll('.basketContainer__gameList__games__game__forHover__bg_red')[n].style.opacity = "1";
}

function unhover_close_basket(n) {
    document.querySelectorAll('.basketContainer__gameList__games__game__forHover__bg_blue')[n].style.opacity = "1";
    document.querySelectorAll('.basketContainer__gameList__games__game__forHover__bg_red')[n].style.opacity = "0";
}

function open_paymentMethods() {
    if (check_open_paymentMethods) {
        document.querySelector('.basketContainer__info__totalBlock__nav__floatBlock').style.display = "none";
        document.querySelector('.basketContainer__info__totalBlock__nav__border').style.opacity = "0";
        document.querySelector('.basketContainer__info__totalBlock__nav').style.borderRadius = "7px 7px 7px 7px";
        check_open_paymentMethods = false;
    }
    else {
        document.querySelector('.basketContainer__info__totalBlock__nav__floatBlock').style.display = "block";
        document.querySelector('.basketContainer__info__totalBlock__nav__border').style.opacity = "1";
        document.querySelector('.basketContainer__info__totalBlock__nav').style.borderRadius = "7px 7px 0px 0px";
        check_open_paymentMethods = true;
    }
}

function chooseBank(n, nameBank) {
    if (document.querySelector('.basketContainer__info__totalBlock__nav__floatBlock_paymentMethods__grid__bank_active') != null) {
        document.querySelector('.basketContainer__info__totalBlock__nav__floatBlock_paymentMethods__grid__bank_active').classList.remove('basketContainer__info__totalBlock__nav__floatBlock_paymentMethods__grid__bank_active');
        document.querySelectorAll('.basketContainer__info__totalBlock__nav__floatBlock_paymentMethods__grid__bank')[n].classList.add('basketContainer__info__totalBlock__nav__floatBlock_paymentMethods__grid__bank_active');
        selected_paymentMethod = nameBank;
        close_notification(3);
        console.log(nameBank);
    }
    else {
        document.querySelectorAll('.basketContainer__info__totalBlock__nav__floatBlock_paymentMethods__grid__bank')[n].classList.add('basketContainer__info__totalBlock__nav__floatBlock_paymentMethods__grid__bank_active');
        selected_paymentMethod = nameBank;
        close_notification(3);
        console.log(nameBank);
    }
}

function addInBasket() {
    if (document.querySelector('.mainInfo__info__interactions__bottom__buttonBasket_active') != null) {
        document.querySelector('.mainInfo__info__interactions__bottom__buttonBasket').classList.remove('mainInfo__info__interactions__bottom__buttonBasket_active');
    }
    else {
        document.querySelector('.mainInfo__info__interactions__bottom__buttonBasket').classList.add('mainInfo__info__interactions__bottom__buttonBasket_active');
    }
}

function addInFavorite() {
    if (document.querySelector('.mainInfo__info__interactions__top__buttonFavorite_active') != null) {
        document.querySelector('.mainInfo__info__interactions__top__buttonFavorite').classList.remove('mainInfo__info__interactions__top__buttonFavorite_active');
    }
    else {
        document.querySelector('.mainInfo__info__interactions__top__buttonFavorite').classList.add('mainInfo__info__interactions__top__buttonFavorite_active');
    }
}

function open_notification(n) {
    document.querySelectorAll('.for-input__notification')[n].style.visibility = "visible";
}

function close_notification(n) {
    document.querySelectorAll('.for-input__notification')[n].style.visibility = "hidden";
}

function goBuy() {
    let promocodeActive = 'notselected';
    let checkFalseValue = 0;
    if (buyForm.input_tradeLink.value == "") {
        open_notification(1);
        checkFalseValue++;
    }
    if (buyForm.input_email.value == "") {
        open_notification(2);
        checkFalseValue++;
    }
    if (selected_paymentMethod == "notselected") {
        open_notification(3);
        checkFalseValue++;
    }
    if (buyForm.input_promocode.value != "") {
        promocodeActive = 'incorrect';
        promocodes.forEach(elem => {
            if (elem.promoNumber == buyForm.input_promocode.value) {
                promocodeActive = 'correct';
            }
        });
        if (promocodeActive == 'incorrect') {
            open_notification(4);
            checkFalseValue++;
        }
    }

    if (checkFalseValue == 0) {
        open_stepBuy(1);
        setTimeout(function() {
            open_stepBuy(2);
        }, 2000)
        setTimeout(function() {
            open_stepBuy(3);
        }, 4000)
        setTimeout(function() {
            open_stepBuy(4);
        }, 6000)
        setTimeout(function() {
            open_stepBuy(5);
        }, 8000)
    }

    console.log(checkFalseValue);
}

function open_authorization() {
    if (check_open_authorization) {
        document.querySelector('.authorization').style.opacity = "0";

        setTimeout(() => {
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

function open_stepBuy(n) {
    document.querySelectorAll('.basketContainer__info__totalBlock__basketBlock').forEach(elem => {
        elem.style.display = "none";
    })
    document.querySelectorAll('.basketContainer__info__totalBlock__basketBlock')[n].style.display = "flex";
    document.querySelector('#basketInfo_h2').innerHTML = dictionary_for_basketH2[n - 1];
    if (n == 2) {
        document.querySelector('#basketInfo_h2').innerHTML += botName;
    }
}