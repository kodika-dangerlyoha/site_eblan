function makeCarousel_index(n) {
    let div = document.querySelector('#banner');
    div.innerHTML = "";
    let discount = Math.round((games[n].oldPrice - games[n].newPrice) / games[n].oldPrice * 100);

    let blockSiteHTML = `<div class="banner__imgBlock absolute-zero">
                            <img src="${games[n].bigBanner}" alt="">
                        </div>
                        <div class="banner__content">
                            <div class="banner__content__info">
                                <div class="banner__content__info__gameName txt">${games[n].name}</div>
                                <div class="banner__content__info__priceBlock">
                                    <div class="banner__content__info__priceBlock__buttonBasket flex-center">
                                        <div class="banner__content__info__priceBlock__buttonBasket__forHover absolute-zero"></div>
                                        <div class="banner__content__info__priceBlock__buttonBasket__text txt">В КОРЗИНУ</div>
                                    </div>
                                    <div class="banner__content__info__priceBlock__price txt">${games[n].newPrice}₽</div>
                                    <div class="banner__content__info__priceBlock__percent flex-center txt">${discount}%</div>
                                </div>
                            </div>
                            <div class="banner__content__arrows">
                                <div class="banner__content__arrows__arrow banner__content__arrows__arrow_left flex-center" onclick = "makeCarousel_index(${n - 1})"><img src="img/icons/arrRight32.png" alt=""></div>
                                <div class="banner__content__arrows__arrow banner__content__arrows__arrow_right flex-center" onclick = "makeCarousel_index(${n + 1})"><img src="img/icons/arrRight32.png" alt=""></div>
                            </div>
                        </div>`;

    div.innerHTML = blockSiteHTML;
}