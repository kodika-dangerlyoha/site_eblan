// import {get_horizont_game_html} from './HTMLelements.js';
let basket_game_list = get_basket_game_list();

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

function get_basket_game_list() {
    return basketProducts;
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

function makeBanner_index(game_info) {
    let discount = Math.round((game_info.oldPrice - game_info.newPrice) / game_info.oldPrice * 100);

    document.getElementById('bannerSecond').src = game_info.link;
    document.getElementById('banners_second_img').src = game_info.bigBanner;
    document.getElementById('banner_second_discount').innerText = discount + "%";
    document.getElementById('banner_second_price').innerText = game_info.newPrice + " ₽";
    document.getElementById('banner_second_title').innerText = game_info.name;
    
    // gameList += get_banner_game_html(
    //     get_game_banner(), 
    //     Math.round((get_game_banner().oldPrice - get_game_banner().newPrice) / get_game_banner().oldPrice * 100)
    // )

    // document.querySelector('#containerWborder #bannerSecond').innerHTML = gameList;
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

function make_basket_info() {
    const new_price = basket_game_list.reduce((b, a) => b + a.newPrice, 0);
    const old_price = basket_game_list.reduce((b, a) => b + a.oldPrice, 0);

    document.getElementById('basket_newPrice').innerText = `${new_price} ₽`;
    document.getElementById('basket_oldPrice').innerText = `${old_price} ₽`;
    document.getElementById('basket_discount').innerText = `${Math.round((old_price - new_price) / old_price * 100)}%`;

    if (document.querySelector('.basketContainer__info_hidden') && document.querySelector('.basketContainer_empty')) {
        document.querySelector('#basket_info').classList.remove('basketContainer__info_hidden');
        document.querySelector('#basket_container').classList.remove('basketContainer_empty');
    }
}

function make_basket() {
    // let gameListInfo = get_basket_game_list();
    let gameList = `<div class="basketContainer__gameList__games__bg absolute-zero" id="basket_games_list_bg"></div>
                    <div class="basketContainer__gameList__games__border"></div>
                    <div class="basketContainer__gameList__games__empty" id="gameList_emptyBlock">
                        <img src="img/icons/sad.png" alt="">
                        <div class="basketContainer__gameList__games__empty__text txt">Корзина пуста</div>
                        <a href="index.html" class="basketContainer__gameList__games__empty__exitButton txt">Вернуться к покупкам</a>
                    </div>`;

    if (!basket_game_list.length) {
        setTimeout(() => {
            document.querySelector('#gameList_emptyBlock').classList.add('basketContainer__gameList__games__empty_active');
            document.querySelector('#basket_info').classList.add('basketContainer__info_hidden');
            document.querySelector('#basket_container').classList.add('basketContainer_empty');
        }, 200)
        return
    }

    // gameList += basket_game_list.reduce((summ_game, game) => summ_game + get_basket_game_html(game));
    // console.log(gameList)

    basket_game_list.forEach(game => {
        gameList += get_basket_game_html(game);
    })

    make_basket_info();
    document.querySelector('#basket_games_list').innerHTML = gameList;
}