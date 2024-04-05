const get_horizont_game_html = (game, discount) => {
    return `<a href = "${game.link}" class = "gridHorizontalGames__game">
                <div class="gridHorizontalGames__game__banner">
                    <img src="${game.imgH}" alt="${game.name}">
                    <div class="gridHorizontalGames__game__banner__videoBlock">
                        <video src="${game.treilerSrc}" autoplay loop muted>
                    </div>   
                    <div class="gridHorizontalGames__game__banner__discount">
                        <div class="gridHorizontalGames__game__banner__discount__inner txt">${discount}%</div>
                    </div>
                </div>
                <div class="gridHorizontalGames__game__info">
                    <div class="gridHorizontalGames__game__info__buttons">
                        <div class="gridHorizontalGames__game__info__buttons__button">
                            <div class="gridHorizontalGames__game__info__buttons__button__forHover gridHorizontalGames__game__info__buttons__button__forHover_blue absolute-zero"></div>
                            <img src="img/icons/basket64.png" alt="">
                        </div>
                        <div class="gridHorizontalGames__game__info__buttons__button">
                            <div class="gridHorizontalGames__game__info__buttons__button__forHover gridHorizontalGames__game__info__buttons__button__forHover_red absolute-zero"></div>
                            <img src="img/icons/like64.png" alt="">
                        </div>
                    </div>
                    <div class="gridHorizontalGames__game__info__name txt">${game.name}</div>
                    <div class="gridHorizontalGames__game__info__price txt">${game.newPrice}₽</div>
                </div>
            </a>`
};

const get_vertical_game_html = (game, discount) => {
    return `<div class = "catalog__grid__game">
                <a href = "${game.link}" class="catalog__grid__game__banner">
                    <img src="${game.imgW}" alt="${game.name}">
                    <div class="catalog__grid__game__banner__discount">
                        <div class="catalog__grid__game__banner__discount__inner txt">${discount}%</div>
                    </div>
                </a>
                <div class="catalog__grid__game__info">
                    <div class="catalog__grid__game__info__buttons">
                        <div class="catalog__grid__game__info__buttons__button" onclick="add_game_basket(${game.id}, '${game.name}')">
                            <div class="catalog__grid__game__info__buttons__button__forHover catalog__grid__game__info__buttons__button__forHover_blue absolute-zero"></div>
                            <img src="img/icons/basket64.png" alt="">
                        </div>
                        <div class="catalog__grid__game__info__buttons__button" onclick="add_game_favorite(${game.id}, '${game.name}')">
                            <div class="catalog__grid__game__info__buttons__button__forHover catalog__grid__game__info__buttons__button__forHover_red absolute-zero"></div>
                            <img src="img/icons/like64.png" alt="">
                        </div>
                    </div>
                    <div class="catalog__grid__game__info__name txt">${game.name}</div>
                    <div class="catalog__grid__game__info__price txt">${game.newPrice} ₽</div>
                </div>
            </div>`
}

const get_carousel_game_html = (n, game, discount) => {
    return `<div class="banner__imgBlock absolute-zero">
                <img src="${game.bigBanner}" alt="">
            </div>
            <div class="banner__content">
                <div class="banner__content__info">
                    <div class="banner__content__info__gameName txt">${game.name}</div>
                    <div class="banner__content__info__priceBlock">
                        <div class="banner__content__info__priceBlock__buttonBasket flex-center">
                            <div class="banner__content__info__priceBlock__buttonBasket__forHover absolute-zero"></div>
                            <div class="banner__content__info__priceBlock__buttonBasket__text txt">В КОРЗИНУ</div>
                        </div>
                        <div class="banner__content__info__priceBlock__price txt">${game.newPrice}₽</div>
                        <div class="banner__content__info__priceBlock__percent flex-center txt">${discount}%</div>
                    </div>
                </div>
                <div class="banner__content__arrows">
                    <div class="banner__content__arrows__arrow banner__content__arrows__arrow_left flex-center" onclick = "makeCarousel_index(${n - 1})"><img src="img/icons/arrRight32.png" alt=""></div>
                    <div class="banner__content__arrows__arrow banner__content__arrows__arrow_right flex-center" onclick = "makeCarousel_index(${n + 1})"><img src="img/icons/arrRight32.png" alt=""></div>
                </div>
            </div>`
}

const get_banner_game_html = (game, discount) => {
    return `<div class="bannerSecond__imgBlock absolute-zero">
                <img src="${game.bigBanner}" alt="">
            </div>
            <div class="bannerSecond__info">
                <div class="bannerSecond__info__gameName txt">${game.name}</div>
                <div class="bannerSecond__info__priceBlock">
                    <div class="bannerSecond__info__priceBlock__buttonBasket flex-center">
                        <div class="bannerSecond__info__priceBlock__buttonBasket__forHover absolute-zero"></div>
                        <div class="bannerSecond__info__priceBlock__buttonBasket__text txt">В корзину</div>
                    </div>
                    <div class="bannerSecond__info__priceBlock__price txt">${game.newPrice}₽</div>
                    <div class="bannerSecond__info__priceBlock__percent flex-center txt">${discount}%</div>
                </div>
            </div>`
}

const get_edition_game_html = (edition, discount) => {
    return `<a href="${edition.link}" class="editions__grid__edition">
                <div class="editions__grid__edition__imgBlock"><img src="${edition.img}" alt="${edition.title}"></div>
                <div class="editions__grid__edition__info">
                    <div class="editions__grid__edition__info__left">
                        <div class="editions__grid__edition__info__left__title txt">${edition.title}</div>
                        <div class="editions__grid__edition__info__left__price txt">${edition.newPrice} ₽</div>
                    </div>
                    <div class="editions__grid__edition__info__percent txt">${discount}%</div>
                </div>
            </a>`
}

const get_info_game_html = (game, discount, categoriesHTML) => {
    return `<div>
                <div class="mainInfo__info__title txt">${game.name}</div>
                <div class="mainInfo__info__category">
                    ${categoriesHTML}
                </div>
            </div>
            <div class="mainInfo__info__interactions">
                <div class="mainInfo__info__interactions__top">
                    <div class="mainInfo__info__interactions__top__percent">
                        <div class="mainInfo__info__interactions__top__percent__valueRow">
                            <div class="mainInfo__info__interactions__top__percent__valueRow__race">
                                <div class="mainInfo__info__interactions__top__percent__valueRow__race__point"></div>
                            </div>
                        </div>
                        <div class="mainInfo__info__interactions__top__percent__valueNamber txt">${discount}%</div>
                    </div>
                    <div class="mainInfo__info__interactions__top__price txt">${game.newPrice} ₽ <span>/</span><span>${game.oldPrice} ₽</span></div>
                    <div class="mainInfo__info__interactions__top__buttonFavorite mainInfo__info__interactions__top__buttonFavorite_active" onclick="addInFavorite(${game.id})">
                        <img src="img/icons/like64.png" alt="">
                    </div>
                </div>
                <div class="mainInfo__info__interactions__bottom">
                    <div class="mainInfo__info__interactions__bottom__buttonBuy">
                        <div class="mainInfo__info__interactions__bottom__buttonBuy__text txt">Купить</div>
                        <div class="mainInfo__info__interactions__bottom__buttonBuy__forHover absolute-zero"></div>
						<div class="mainInfo__info__interactions__bottom__buttonBuy__forActive absolute-zero"></div>
                    </div>
                    <div class="mainInfo__info__interactions__bottom__buttonBasket" onclick="addInBasket(${game.id})">
                        <img src="img/icons/basket64_2.png" alt="">
                    </div>
                </div>
            </div>`
}

const get_categories_game_html = (category) => {
    return `<a href="${category.link}" class="mainInfo__info__category__nav">
                <img src="img/icons/game32.png" alt="">
                <div class="mainInfo__info__category__nav__forHover">
                    <div class="mainInfo__info__category__nav__forHover__text txt">${category.name}</div>
                </div>
            </a>`
}

const get_basket_game_html = (game) => {
    return `<div class="basketContainer__gameList__games__game" gameId="${game.id}">
                <div class="basketContainer__gameList__games__game__forHover">
                    <div class="basketContainer__gameList__games__game__forHover__bg basketContainer__gameList__games__game__forHover__bg_blue" bgBlueId="${game.id}"></div>
                    <div class="basketContainer__gameList__games__game__forHover__bg basketContainer__gameList__games__game__forHover__bg_red" bgRedId="${game.id}"></div>
                </div>
                <div class="basketContainer__gameList__games__game__left">
                    <div class="basketContainer__gameList__games__game__left__imgBlock">
                        <img src="${game.imgH}" alt="${game.name}">
                    </div>
                    <div class="basketContainer__gameList__games__game__left__nameBlock">
                        <div class="basketContainer__gameList__games__game__left__nameBlock__name">

                            <a href="${game.link}" class="basketContainer__gameList__games__game__left__nameBlock__name__text txt">${game.name}</a>
                        </div>
                        <a href="${game.steamLink}" class="basketContainer__gameList__games__game__left__nameBlock__linkPlatform txt">Игра в Steam</a>
                    </div>
                </div>
                <div class="basketContainer__gameList__games__game__right">
                    <div class="basketContainer__gameList__games__game__right__price txt">${game.newPrice} ₽<span>${game.oldPrice} ₽</span></div>
                    <div class="basketContainer__gameList__games__game__right__closeBlock" onclick="delete_game_basket(${game.id}, '${game.name}')" onmouseover="hover_close_basket(true, ${game.id})" onmouseout="hover_close_basket(false, ${game.id})">
                        <img src="img/icons/cross2_32.png" alt="">
                    </div>
                </div>
            </div>`
}

const get_carousel_banner_html = (game, discount, cout) => {
    return `<div class="carousel__banner carousel__banner_${cout}">
                <div class="carousel__banner__imgBlock">
                    <img src="${game.bigBanner}" alt="">
                </div>
                <div class="carousel__banner__interaction">
                    <div class="carousel__banner__interaction__info">
                        <a href="${game.link}" class="carousel__banner__interaction__info__link"></a>
                        <div class="carousel__banner__interaction__info__title txt">${game.name}</div>
                        <div class="carousel__banner__interaction__info__shopInfo">
                            <div class="carousel__banner__interaction__info__shopInfo__buttons">
                                <div class="carousel__banner__interaction__info__shopInfo__buttons__button carousel__banner__interaction__info__shopInfo__buttons__button_basket">
                                    <img src="img/icons/basket32.png" alt="">
                                </div>
                                <div class="carousel__banner__interaction__info__shopInfo__buttons__button carousel__banner__interaction__info__shopInfo__buttons__button_favorite">
                                    <img src="img/icons/heart32.png" alt="">
                                </div>
                            </div>
                            <div class="carousel__banner__interaction__info__shopInfo__priceTag">
                                <div class="carousel__banner__interaction__info__shopInfo__priceTag__prices">
                                    <div class="carousel__banner__interaction__info__shopInfo__priceTag__prices__newPrice txt">${game.newPrice} ₽</div>
                                    <div class="carousel__banner__interaction__info__shopInfo__priceTag__prices__oldPrice txt">${game.oldPrice} ₽</div>
                                </div>
                                <div class="carousel__banner__interaction__info__shopInfo__priceTag__discount flex-center txt">${discount}%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
}

const get_carousel_bg_html = (game, cout) => {
    return `<div class="carousel__bg carousel__bg_${cout}">
                <img src="${game.bigBanner}" alt="">
            </div>`
}

const get_favorite_game_html = (game, discount) => {
    return `<div class="catalog__grid__game profileContaier__info__grid__game">
                <a href="${game.link}" class="catalog__grid__game__banner profileContaier__info__grid__game__banner">
                    <img src="${game.imgW}" alt="">
                    <div class="profileContaier__info__grid__game__banner__discount">
                        <div class="profileContaier__info__grid__game__banner__discount__inner txt">${discount}%</div>
                    </div>
                </a>
                <div class="profileContaier__info__grid__game__info">
                    <div class="profileContaier__info__grid__game__info__buttons">
                        <div class="profileContaier__info__grid__game__info__buttons__button" onclick="add_game_basket(${game.id}, '${game.name}')">
                            <div class="profileContaier__info__grid__game__info__buttons__button__forHover profileContaier__info__grid__game__info__buttons__button__forHover_blue absolute-zero"></div>
                            <img src="img/icons/basket64.png" alt="">
                        </div>
                        <div class="profileContaier__info__grid__game__info__buttons__button" onclick="add_game_favorite(${game.id}, '${game.name}')">
                            <div class="profileContaier__info__grid__game__info__buttons__button__forHover profileContaier__info__grid__game__info__buttons__button__forHover_red absolute-zero"></div>
                            <img src="img/icons/like64.png" alt="">
                        </div>
                    </div>
                    <div class="profileContaier__info__grid__game__info__name txt">${game.name}</div>
                    <div class="profileContaier__info__grid__game__info__price txt">${game.newPrice} ₽</div>
                </div>
            </div>`
}


// ----------------------- notification ---------------------------------

// const get_notification_add_game_html = (game_name) => {
//     return `<div class="header__notification__grid__notification notification_addGame">
//                 <div class="header__notification__grid__notification__point txt">
//                     <div class="header__notification__grid__notification__point__circle"></div>
//                 </div>
//                 <div class="header__notification__grid__notification__text txt">Игра <span>${game_name}</span> добавлена в корзину</div>
//             </div>`
// }

// const get_notification_nothing_html = () => {
//     return `<div class="header__notification__grid__notification notification_nothing">
//                 <div class="header__notification__grid__notification__point txt">
//                     <div class="header__notification__grid__notification__point__circle header__notification__grid__notification__point__circle_nothing"></div>
//                 </div>
//                 <div class="header__notification__grid__notification__text txt">Нет новый уведомлений</div>
//             </div>`
// }

// const get_notification_error_html = () => {
//     return `<div class="header__notification__grid__notification notification_error">
//                 <div class="header__notification__grid__notification__point txt">
//                     <div class="header__notification__grid__notification__point__circle header__notification__grid__notification__point__circle_error"></div>
//                 </div>
//                 <div class="header__notification__grid__notification__text txt">Произошла ошибка</div>
//             </div>`
// }

const get_notification_html = (status, message, id) => {
    return `<div class="header__notification_temporary__grid__notification notification_${status}" id="${id}">
                <div class="header__notification_temporary__grid__notification__point txt">
                    <div class="header__notification_temporary__grid__notification__point__circle header__notification_temporary__grid__notification__point__circle_${status}"></div>
                </div>
                <div class="header__notification_temporary__grid__notification__text txt">${message}</div>
            </div>`
}

// export {get_horizont_game_html}