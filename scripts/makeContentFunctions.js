// import {get_horizont_game_html} from './HTMLelements.js';

function getGames() {
    return games;
}

function getGames_for_salesHits() {
    return games.slice(0, 5);
}

function getGames_similar() {
    return games.slice(0, 6);
}

function get_game_banner() {
    return games[3];
}

function get_editions() {
    return games[0].editions;
}

function get_categories_game() {
    return games[0].categories;
}

function makeOffers_index() {
    let gameList = "";
    
    getGames().forEach(game => {
        gameList += get_horizont_game_html(
            game, 
            Math.round((game.oldPrice - game.newPrice) / game.oldPrice * 100)
        )
    });

    document.querySelector('#offers #content_offers__grid').innerHTML = gameList;
}

function makeSimilar_gameCard() {
    let gameList = "";
    
    getGames_similar().forEach(game => {
        gameList += get_horizont_game_html(
            game, 
            Math.round((game.oldPrice - game.newPrice) / game.oldPrice * 100)
        )
    });

    document.querySelector('#similar #content').innerHTML = gameList;
}

function makeSalesHits_index() {
    let gameList = "";
    
    getGames_for_salesHits().forEach(game => {
        gameList += get_vertical_game_html(
            game, 
            Math.round((game.oldPrice - game.newPrice) / game.oldPrice * 100)
        )
    });

    document.querySelector('#salesHits #salesHits_content').innerHTML = gameList;
}

function makeBanner_index() {
    let gameList = "";
    
    gameList += get_banner_game_html(
        get_game_banner(), 
        Math.round((get_game_banner().oldPrice - get_game_banner().newPrice) / get_game_banner().oldPrice * 100)
    )

    document.querySelector('#containerWborder #bannerSecond').innerHTML = gameList;
}

function makeCarousel_index(n) {
    let gameList = "";
    
        gameList += get_carousel_game_html(
            n,
            games[n], 
            Math.round((games[n].oldPrice - games[n].newPrice) / games[n].oldPrice * 100)
        );

    document.querySelector('#banner').innerHTML = gameList;
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

function make_editions() {
    let editionList = "";
    
    get_editions().forEach(edition => {
        editionList += get_edition_game_html(
            edition, 
            Math.round((edition.oldPrice - edition.newPrice) / edition.oldPrice * 100)
        )
    });

    document.querySelector('#edition #edition_grid').innerHTML = editionList;
    document.getElementsByClassName('editions__grid__edition')[0].classList.add('editions__grid__edition_active');
    document.getElementsByClassName('editions__grid__edition__percent')[0].classList.add('editions__grid__edition__percent_active');
}

function make_desscription() {
    console.log(games[0].description.replace('<br>', ''));
    document.querySelector('#description').innerHTML = games[0].description.replace(/<br>/g, '');
}

function make_game_card_info() {
    let gameList = "";
    let categories_list = "";

    document.getElementById('game_banner').src = games[0].bigBanner;
    document.getElementById('treiler').src = games[0].treilerSrc;
    document.getElementById('game_img').src = games[0].imgH;

    get_categories_game().forEach(category => {
        categories_list += get_categories_game_html(category);
    })
    
    gameList += get_info_game_html(
        games[0], 
        Math.round((games[0].oldPrice - games[0].newPrice) / games[0].oldPrice * 100),
        categories_list
    )

    document.querySelector('#game_info').innerHTML = gameList;
}