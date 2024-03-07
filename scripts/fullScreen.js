const full_height_screen_block = document.querySelector('.forFullHeightScreen');

if (full_height_screen_block) {
    let windowInnerHeight = window.innerHeight;
    full_height_screen_block.style.minHeight = `${windowInnerHeight}px`;
}