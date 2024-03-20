let main_block = 0;
let time_status = true;

function scroll_carousel(n) {
    if (time_status) {
        time_status = false;
        if ((main_block + n) == -1 || (main_block + n) == 5) {
            setTimeout(() => time_status = true, 505);
            return
        }
    
        main_block += n;
        let blocks = document.querySelectorAll('.carousel__banner');
    
        // blocks.forEach(elem => {
        //     elem.classList = "carousel__banner";
        // });
        
        for (let i = 0; i < main_block; i++) {
            blocks[i].classList = "carousel__banner";
            blocks[i].classList.add('carousel__banner_0');
        }
        
        for (let i = main_block, n = 1; i < blocks.length; i++, n++) {
            blocks[i].classList = "carousel__banner";
            blocks[i].classList.add(`carousel__banner_${n}`);
        }
    
        document.querySelectorAll('.carousel__buttons__button_disactive').forEach(elem => elem.classList.remove('carousel__buttons__button_disactive'));
    
        if (main_block == 0) {
            document.getElementById('carousel_button_top').classList.add('carousel__buttons__button_disactive');
        }
    
        if (main_block == 4) {
            document.getElementById('carousel_button_bottom').classList.add('carousel__buttons__button_disactive');
        }

        setTimeout(() => time_status = true, 505);
    }
}