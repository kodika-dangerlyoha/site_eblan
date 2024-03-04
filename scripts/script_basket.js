let buyForm = document.forms.buy;

function get_basket_list_request() {
    return basketProducts;
}

function delete_basket_request(id) {
    delete basketProducts.splice(id, 1);
}

function delete_game_basket(game_id) {
    delete_basket_request(game_id);
    make_basket_info();

    document.querySelector(`[gameId$="${game_id}"]`).classList.add('basketContainer__gameList__games__game_hidden');
    // document.querySelectorAll('.basketContainer__gameList__games__game')[n].classList.add('basketContainer__gameList__games__game_hidden');
}

function open_notifications(notification_list) {
    notification_list.forEach(error_info => {
        document.querySelector(`.for-input__notification_${error_info.name}`).style.visibility = "visible";
        document.querySelector(`.for-input__notification_${error_info.name} .for-input__notification__heading`).innerHTML = error_info.message;
    })
}

function open_notifacation_gray() {
    document.getElementById('notification_gray').style.visibility = "visible";
}

function close_notification(title) {
    document.querySelector(`.for-input__notification_${title}`).style.visibility = "hidden";
}

function goBuy() {
    function open_stepBuy(title) {
        const basket_info_h2 = document.querySelector('#basketInfo_h2');
        const dictionary_for_basketH2 = {
            'bot_inviting': "Бот добавляет вас в друзья", 
            'bot_profile': "Примите приглашение от ", 
            'bot_gifting': "Ожидайте подарок от бота", 
            'giftbox': "Примите подарок от бота", 
            'thx': "Спасибо за покупку"
        };
        let botName = "Yeat";

        document.querySelectorAll('.basketContainer__info__totalBlock__basketBlock').forEach(elem => {
            elem.style.display = "none";
        })
        document.querySelector(`[buyStepTitle$="step_${title}"]`).style.display = "flex";
        basket_info_h2.innerHTML = dictionary_for_basketH2[title];
        if (title == 'bot_profile') {
            basket_info_h2.innerHTML += botName;
        }
    }

    function check_promocode_request(promocode) {
        return {
            'status': false, // true or false
            'message': "Недействительный промокод" // error 
        }
    }

    let error_dict = [];

    
    if (!buyForm.input_tradeLink.value) {
        error_dict.push({
            'name': "trade_link",
            'message': "Укажите трейд ссылку" // text error
        });
    }
    if (!buyForm.input_email.value) {
        error_dict.push({
            'name': "email",
            'message': "Укажите Email" // text error
        });
    }
    if (!buyForm.bank_id.value) {
        error_dict.push({
            'name': "paymentMethod",
            'message': "Выберите способ оплаты" // text error
        });
    }
    if (buyForm.input_promocode.value) {
        let answer = check_promocode_request(String(buyForm.input_promocode.value));
        if (!answer.status) {
            error_dict.push({
            'name': "promocode",
            'message': answer.message // text error
        });
            
        }
    }

    if (!document.querySelector('.basketContainer__info__totalBlock__agreeBlock__checkBox__checkMark_active')) {
        document.querySelector(`.basketContainer__info__totalBlock__agreeBlock`).classList.add('basketContainer__info__totalBlock__agreeBlock_notification');
        error_dict.push({
            'name': "checkBox",
            'message': "Согласитесь с Условиями и политикой конфиденциальности" // text error
        });
    }

    open_notifications(error_dict);

    if (!error_dict.length) {
        open_stepBuy('bot_inviting');

        document.querySelectorAll('.basketContainer__gameList__games__game__right__closeBlock').forEach(elem => {
            elem.classList.add('basketContainer__gameList__games__game__right__closeBlock_hidden')
        });

        document.getElementById("exit_button").classList.add('basketContainer__info__exitButton_hidden');

        setTimeout(function() {
            open_stepBuy('bot_profile');
        }, 4000)
        setTimeout(function() {
            open_stepBuy('bot_gifting');
        }, 6000)
        setTimeout(function() {
            open_stepBuy('giftbox');
        }, 8000)
        setTimeout(function() {
            open_stepBuy('thx');

            document.querySelectorAll('.basketContainer__gameList__games__game__forHover').forEach(elem => {
                elem.style.opacity = "0";
            });

            document.getElementById("exit_button").classList.remove('basketContainer__info__exitButton_hidden');

            document.querySelector('#basket_games_list_bg').style.opacity = "1";
        }, 10000)
    }
}

function get_bank_list_request() {
    return {
        "00001": "Мир",
        "00002": "Visa",
        "00003": "Kiwi",
        "00004": "Ю Касса",
        "00005": "Mastercard",
    };
}
// от n избавляться
function choose_bank(bank_id) {
    document.querySelectorAll('.basketContainer__info__totalBlock__nav__floatBlock_paymentMethods__grid__bank_active').forEach(elem => {
        elem.classList.remove('basketContainer__info__totalBlock__nav__floatBlock_paymentMethods__grid__bank_active');
    })
    document.querySelector(`#bank_${bank_id}`).classList.add('basketContainer__info__totalBlock__nav__floatBlock_paymentMethods__grid__bank_active');
    
    buyForm.bank_id.value = bank_id;
    close_notification('paymentMethod');
    // console.log(bank_id);
    open_payment_methods_handler();
    document.getElementById("text_pay_method").textContent = get_bank_list_request()[bank_id];
}

function basket_checkBox_click() {
    const checkMark = document.querySelector('.basketContainer__info__totalBlock__agreeBlock__checkBox__checkMark');
    if (document.querySelector('.basketContainer__info__totalBlock__agreeBlock__checkBox__checkMark_active')) {
        checkMark.classList.remove('basketContainer__info__totalBlock__agreeBlock__checkBox__checkMark_active');
        return
    }

    document.querySelector(`.basketContainer__info__totalBlock__agreeBlock`).classList.remove('basketContainer__info__totalBlock__agreeBlock_notification');
    checkMark.classList.add('basketContainer__info__totalBlock__agreeBlock__checkBox__checkMark_active');
}

// сделать с id вместо n
function hover_close_basket(game_id) { 
    document.querySelector(`[bgBlueId$="${game_id}"]`).style.opacity = "0";
    document.querySelector(`[bgRedId$="${game_id}"]`).style.opacity = "1";
}

function unhover_close_basket(game_id) {
    document.querySelector(`[bgBlueId$="${game_id}"]`).style.opacity = "1";
    document.querySelector(`[bgRedId$="${game_id}"]`).style.opacity = "0";
}

function open_payment_methods_handler() {
    const active_nav = document.querySelector('.basketContainer__info__totalBlock__nav_active');
    if (active_nav) {
        active_nav.classList.remove('basketContainer__info__totalBlock__nav_active');
        return
    }

    document.querySelector('.basketContainer__info__totalBlock__nav').classList.add('basketContainer__info__totalBlock__nav_active');
}

make_basket();