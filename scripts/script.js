window.addEventListener('scroll', function() {
    scrollTop = window.pageYOffset;
    if (scrollTop < 20) {
        if (scrollTop == 0) {
            document.querySelector('#header__bg').style.opacity = "0";
        }
        else {
            document.querySelector('#header__bg').style.opacity = "1";
        }
    }
});

window.addEventListener("scroll", function(){
    if (this.scrollY < 600) {
        document.querySelector('.bigImgBlock').style.transform = "translateY(" + (this.scrollY) / 2 + "px)";
        document.querySelector('.forScroll').style.opacity = (this.scrollY) / 300;
        document.querySelector('.forScroll').style.transform = "translateY(" + (this.scrollY) / 2 + "px)";
        // document.querySelector('.bigImgBlock__border').style.bottom = "-" + (this.scrollY) / 100 + "px";

        if (this.scrollY > 550) {
            if (checkOpen_miniGameCard == false) {
                document.querySelector('.miniGameCard').style.display = "flex";
                document.querySelector('#centerHeader_gameCard').style.opacity = "0";
                document.querySelector('#centerHeader_gameCard').style.transform = "translateY(-40px)";
        
                setTimeout(function() {
                    document.querySelector('#centerHeader_gameCard').style.display = "none";
                }, 50);
                
                setTimeout(function() {
                    document.querySelector('.miniGameCard').style.opacity = "1";
                    document.querySelector('.miniGameCard').style.transform = "translateX(-50%) translateY(0px) scale(1)";
                    document.querySelector('.mainInfo').style.opacity = "0";
                    document.querySelector('.mainInfo').style.transform = "translateY(-100px) scale(0.6)";
                }, 60);
                checkOpen_miniGameCard = true;
            }
        }
    
        if (this.scrollY < 550) {
            if (checkOpen_miniGameCard) {
                document.querySelector('#centerHeader_gameCard').style.display = "flex";
    
                document.querySelector('.miniGameCard').style.opacity = "0";
                document.querySelector('.miniGameCard').style.transform = "translateX(-50%) translateY(80px) scale(1.5)";
                document.querySelector('.mainInfo').style.opacity = "1";
                document.querySelector('.mainInfo').style.transform = "translateY(0px) scale(1)";
                
                setTimeout(function() {
                    document.querySelector('.miniGameCard').style.display = "none";
                }, 200)
        
                setTimeout(function() {
                document.querySelector('#centerHeader_gameCard').style.transform = "translateY(0px)";
                document.querySelector('#centerHeader_gameCard').style.opacity = "1";
                }, 210)
                checkOpen_miniGameCard = false;
            }
        }
    }
});

makeOffers_index();