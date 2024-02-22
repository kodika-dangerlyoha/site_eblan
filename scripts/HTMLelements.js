const get_horizont_game_html = (game, discount) => {
    return `<div class = "gridHorizontalGames__game">
                <div class="gridHorizontalGames__game__banner">
                    <img src="${game.imgH}" alt="">
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
            </div>`
};

const get_vertical_game_html = (game, discount) => {
    return `<div class = "catalog__grid__game">
                <div class="catalog__grid__game__banner">
                    <img src="${game.imgW}" alt="">
                    <div class="catalog__grid__game__banner__discount">
                        <div class="catalog__grid__game__banner__discount__inner txt">${discount}%</div>
                    </div>
                </div>
                <div class="catalog__grid__game__info">
                    <div class="catalog__grid__game__info__buttons">
                        <div class="catalog__grid__game__info__buttons__button">
                            <div class="catalog__grid__game__info__buttons__button__forHover catalog__grid__game__info__buttons__button__forHover_blue absolute-zero"></div>
                            <img src="img/icons/basket64.png" alt="">
                        </div>
                        <div class="catalog__grid__game__info__buttons__button">
                            <div class="catalog__grid__game__info__buttons__button__forHover catalog__grid__game__info__buttons__button__forHover_red absolute-zero"></div>
                            <img src="img/icons/like64.png" alt="">
                        </div>
                    </div>
                    <div class="catalog__grid__game__info__name txt">${game.name}</div>
                    <div class="catalog__grid__game__info__price txt">${game.newPrice} ₽</div>
                </div>
            </div>`
};

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
};

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
};

// export {get_horizont_game_html}