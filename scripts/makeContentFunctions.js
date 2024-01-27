function makeOffers_index() {
    let div = document.querySelector('#offers');
    div.innerHTML = "";

    function addGame() {
        let grid = document.createElement('div');
        
        games.forEach(game => {
            let discount = Math.round((game.oldPrice - game.newPrice) / game.oldPrice * 100);
            let blockSiteHTML = `<div class="offers__grid__game__banner">
                                    <img src="${game.imgH}" alt="">
                                    <div class="offers__grid__game__banner__discount">
                                        <div class="offers__grid__game__banner__discount__inner txt">${discount}%</div>
                                    </div>
                                </div>
                                <div class="offers__grid__game__info">
                                    <div class="offers__grid__game__info__buttons">
                                        <div class="offers__grid__game__info__buttons__button">
                                            <div class="offers__grid__game__info__buttons__button__forHover offers__grid__game__info__buttons__button__forHover_blue absolute-zero"></div>
                                            <img src="img/icons/basket64.png" alt="">
                                        </div>
                                        <div class="offers__grid__game__info__buttons__button">
                                            <div class="offers__grid__game__info__buttons__button__forHover offers__grid__game__info__buttons__button__forHover_red absolute-zero"></div>
                                            <img src="img/icons/like64.png" alt="">
                                        </div>
                                    </div>
                                    <div class="offers__grid__game__info__name txt">${game.name}</div>
                                    <div class="offers__grid__game__info__price txt">${game.newPrice}₽</div>
                                </div>`;
            let div = document.createElement('div');
            div.classList.add("offers__grid__game");
            div.innerHTML = blockSiteHTML;
            grid.append(div);
        });
        return grid.innerHTML;
    }

    let blockSiteHTML = `<div class="offers__head">
                            <div class="offers__head__nav">
                                <div class="offers__head__nav__text txt">Новинки</div>
                                <div class="offers__head__nav__strip offers__head__nav__strip_active"></div>
                            </div>
                            <div class="offers__head__nav">
                                <div class="offers__head__nav__text txt">Ожидаемое</div>
                                <div class="offers__head__nav__strip"></div>
                            </div>
                            <div class="offers__head__nav">
                                <div class="offers__head__nav__text txt">Наш выбор</div>
                                <div class="offers__head__nav__strip"></div>
                            </div>
                        </div>
                        <div class="offers__grid">
                            ${addGame()}
                        </div>
                        <div class="offers__blockButtonMore">
                            <div class="offers__blockButtonMore__button txt">
                                Показать еще
                                <img src="img/icons/arrRight32.png" alt="">
                            </div>
                        </div>`;

    div.innerHTML = blockSiteHTML;
}