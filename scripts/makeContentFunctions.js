function getGames() {
    return games;
}

function getGames_for_salesHits() {
    return games.slice(0, 5);
}

function getGames_similar() {
    return games.slice(0, 6);
}


function makeOffers_index() {
    let div = document.querySelector('#offers');
    div.innerHTML = "";

    function addGame() {
        let grid = document.createElement('div');
        
        getGames().forEach(game => {
            let discount = Math.round((game.oldPrice - game.newPrice) / game.oldPrice * 100);
            let blockSiteHTML = `<div class="gridHorizontalGames__game__banner">
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
                                </div>`;
            let div = document.createElement('div');
            div.classList.add("gridHorizontalGames__game");
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
                        <div class="offers__grid gridHorizontalGames">
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

function makeSimilar_gameCard() {
    let div = document.querySelector('#similar');
    div.innerHTML = "";

    function addGame() {
        let grid = document.createElement('div');
        
        getGames_similar().forEach(game => {
            let discount = Math.round((game.oldPrice - game.newPrice) / game.oldPrice * 100);
            let blockSiteHTML = `<div class="gridHorizontalGames__game__banner">
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
                                </div>`;
            let div = document.createElement('div');
            div.classList.add("gridHorizontalGames__game");
            div.innerHTML = blockSiteHTML;
            grid.append(div);
        });
        return grid.innerHTML;
    }

    let blockSiteHTML = `<h3 class="txt">Похожие игры</h3>
                        <div class="similar__grid gridHorizontalGames">
                            ${addGame()}
                        </div>`;

    div.innerHTML = blockSiteHTML;
}

function makeSalesHits_index() {
    let div = document.querySelector('#salesHits');
    div.innerHTML = "";

    function addGame() {
        let grid = document.createElement('div');
        
        getGames_for_salesHits().forEach(game => {
                let discount = Math.round((game.oldPrice - game.newPrice) / game.oldPrice * 100);
                let blockSiteHTML = `<div class="salesHits__games__game__banner">
                                        <img src="${game.imgW}" alt="">
                                        <div class="salesHits__games__game__banner__discount">
                                            <div class="salesHits__games__game__banner__discount__inner txt">${discount}%</div>
                                        </div>
                                    </div>
                                    <div class="salesHits__games__game__info">
                                        <div class="salesHits__games__game__info__buttons">
                                            <div class="salesHits__games__game__info__buttons__button">
                                                <div class="salesHits__games__game__info__buttons__button__forHover salesHits__games__game__info__buttons__button__forHover_blue absolute-zero"></div>
                                                <img src="img/icons/basket64.png" alt="">
                                            </div>
                                            <div class="salesHits__games__game__info__buttons__button">
                                                <div class="salesHits__games__game__info__buttons__button__forHover salesHits__games__game__info__buttons__button__forHover_red absolute-zero"></div>
                                                <img src="img/icons/like64.png" alt="">
                                            </div>
                                        </div>
                                        <div class="salesHits__games__game__info__name txt">${game.name}</div>
                                        <div class="salesHits__games__game__info__price txt">${game.newPrice} ₽</div>
                                    </div>`;
                let div = document.createElement('div');
                div.classList.add("salesHits__games__game");
                div.innerHTML = blockSiteHTML;
                grid.append(div);
        });
        return grid.innerHTML;
    }

    let blockSiteHTML = `<div class="salesHits__bg absolute-zero"></div>
                            <h3 class="txt">Хиты продаж</h3>
                            <div class="salesHits__games">
                                ${addGame()}
                            </div>
                            <div class="salesHits__blockButtonMore">
                            <div class="salesHits__blockButtonMore__button txt">
                                Показать еще
                                <img src="img/icons/arrRight32.png" alt="">
                            </div>
                        </div>`;

    div.innerHTML = blockSiteHTML;
}

function makeCatalog_catalog() {
    let div = document.querySelector('#catalog');
    div.innerHTML = "";

    function addGame() {
        let grid = document.createElement('div');
        
        getGames().forEach(game => {
                let discount = Math.round((game.oldPrice - game.newPrice) / game.oldPrice * 100);
                let blockSiteHTML = ` <div class="catalog__grid__game__banner">
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
                                        </div>`;
                                        
                let div = document.createElement('div');
                div.classList.add("catalog__grid__game");
                div.innerHTML = blockSiteHTML;
                grid.append(div);
        });
        return grid.innerHTML;
    }

    let blockSiteHTML = `<div class="catalog__grid">
                            ${addGame()}
                        </div>`;

    div.innerHTML = blockSiteHTML;
}

function makeFavorite_favorite() {
    let div = document.querySelector('#catalog');
    div.innerHTML = "";

    function addGame() {
        let grid = document.createElement('div');
        
        getGames().forEach(game => {
                let discount = Math.round((game.oldPrice - game.newPrice) / game.oldPrice * 100);
                let blockSiteHTML = ` <div class="catalog__grid__game__banner">
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
                                        </div>`;
                                        
                let div = document.createElement('div');
                div.classList.add("catalog__grid__game");
                div.innerHTML = blockSiteHTML;
                grid.append(div);
        });
        return grid.innerHTML;
    }

    let blockSiteHTML = `<div class="catalog__grid">
                            ${addGame()}
                        </div>`;

    div.innerHTML = blockSiteHTML;
}