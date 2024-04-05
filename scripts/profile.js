let favorite_list = get_favorite_list_request();

function get_favorite_list_request() {
    const favorite_list = JSON.parse(document.cookie).favorite_list.slice(0, 6);

    let favorite_list_infos = [];
    games.forEach(info => {
        if (contains(favorite_list, info.id)) {
            favorite_list_infos[info.id] = info;
        }
    })
    return favorite_list_infos;
}

function make_favorite_profile() {
    document.querySelector('#favorite_grid').innerHTML += favorite_list.reduce((summ_game, game) => summ_game + get_favorite_game_html(game, Math.round((game.oldPrice - game.newPrice) / game.oldPrice * 100)), "");
}
make_favorite_profile()