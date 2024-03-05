const header_bg = document.querySelector('#header__bg');
window.addEventListener('scroll', function() {
    scrollTop = window.pageYOffset;
    if (scrollTop == 0) {
        header_bg.style.opacity = "0";
    }
    else {
        header_bg.style.opacity = "1";
    }
});

const full_height_screen_block = document.querySelector('.forFullHeightScreen');

if (full_height_screen_block) {
    let windowInnerHeight = window.innerHeight;
    full_height_screen_block.style.minHeight = `${windowInnerHeight}px`;
}