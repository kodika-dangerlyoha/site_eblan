let main_block = 0;

function scroll_carousel(n) {
    const blocks = document.querySelectorAll('.carousel__banner');
    const blocks_lenght = blocks.length;
    const button_left = document.getElementById('carousel_button_left');
    const button_right = document.getElementById('carousel_button_right');

    button_left.disabled = true;
    button_right.disabled = true;
    main_block += n;
    
    document.querySelector('.carousel__bg_active').classList.remove('carousel__bg_active');
    document.querySelector(`.carousel__bg_${main_block + 1}`).classList.add('carousel__bg_active');
    
    for (let i = 0; i < main_block; i++) {
        blocks[i].classList = "carousel__banner";
        blocks[i].classList.add('carousel__banner_0');
    }
    
    for (let i = main_block, n = 1; i < blocks_lenght; i++, n++) {
        blocks[i].classList = "carousel__banner";
        blocks[i].classList.add(`carousel__banner_${n}`);
    }

    document.querySelectorAll('.carousel__buttons__button_disactive').forEach(elem => elem.classList.remove('carousel__buttons__button_disactive'));

    setTimeout(() => {
        if (main_block == 0) {
            button_left.classList.add('carousel__buttons__button_disactive');
            button_left.disabled = true;
            button_right.disabled = false;
        }
        else if (main_block == blocks_lenght - 1) {
            button_right.classList.add('carousel__buttons__button_disactive');
            button_right.disabled = true;
            button_left.disabled = false;
        }
        else {
            button_left.disabled = false;
            button_right.disabled = false;
        }
    }, 505);
}