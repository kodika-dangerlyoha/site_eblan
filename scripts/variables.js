let check_open_catalogNavs = false;
let check_open_filter = false;
let scrollTop = window.pageYOffset;
let check_open_filter_gameMode = false;
let check_open_filters = [];
let check_active_basket_checkBox = false;
let check_open_paymentMethods = false;
let checkOpen_miniGameCard = false;
let check_open_authorization = false;
let selected_paymentMethod = "notselected";
const promocodes = [
    {
        "promoNumber": '4356h',
        "percent": '10'
    },
    {
        "promoNumber": '1234h',
        "percent": '30'
    },
    {
        "promoNumber": '111',
        "percent": '20'
    },
];
let buyForm = document.forms.buy;