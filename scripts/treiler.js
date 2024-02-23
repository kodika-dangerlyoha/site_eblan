
function play_treiler() {
    document.querySelector('.mainInfo__banner__playButton').style.zIndex = "1";
    document.querySelector('.mainInfo__banner__treilerBlock').style.opacity = "1";
    document.querySelector('#treiler').play();
}

function play_pause_treiler() {
    if (!document.querySelector('#treiler').paused) {
        document.querySelector('#treiler').pause();
        document.getElementById('button_icon_play_pause').src = "img/icons/play-button24.png";
        
    }
    else {
        document.querySelector('#treiler').play();
        document.getElementById('button_icon_play_pause').src = "img/icons/pause24.png";
    }
}


document.querySelector('#treiler').volume = 0.2;

document.querySelector('#treiler').addEventListener("timeupdate", function() {
    document.getElementById('value_race').style.width = document.querySelector('#treiler').currentTime * 100 / document.querySelector('#treiler').duration  + "%";
}, false);

function open_volume() {
    document.getElementById('volume_race').style.display = "flex";
}

function close_volume() {
    document.getElementById('volume_race').style.display = "none";
}

//------------------------------------- перемотка

// document.querySelector('#race').addEventListener("mousemove", e => {
//     let timelineWidth = document.querySelector('#race').clientWidth;
//     // offsetX = offsetX < 20 ? 20 : (offsetX > timelineWidth - 20) ? timelineWidth - 20 : offsetX;
//     document.querySelector('#hover_race').style.width = e.offsetX * 100 / timelineWidth + "%";
// });

document.querySelector('#race').addEventListener("click", e => {
    let timelineWidth = document.querySelector('#race').clientWidth;
    document.querySelector('#treiler').currentTime = (e.offsetX / timelineWidth) * document.querySelector('#treiler').duration;
});

document.querySelector('#volume_race').addEventListener("mousedown", e => {
    let volumelineWidth = document.querySelector('#volume_race').clientWidth;
    document.querySelector('#treiler').volume = (e.offsetX * 100 / volumelineWidth) / 100;
    console.log(document.querySelector('#treiler').volume);
    document.querySelector('#volume_race_value').style.width = e.offsetX * 100 / volumelineWidth + "%";
});

function mute_volume() {
    document.querySelector('#treiler').volume = 0;
    document.querySelector('#volume_race_value').style.width = "0%";
}

// document.querySelector('#treiler').addEventListener("timeupdate", e => {
//     let {currentTime, duration} = e.target;
//     let percent = (currentTime / duration) * 100;
//     document.querySelector('#value_race').style.width = `${percent}%`;
// });

// const draggableProgressBar = e => {
//     let timelineWidth = document.querySelector('#race').clientWidth;
//     document.querySelector('#value_race').style.width = `${e.offsetX}px`;
//     document.querySelector('#treiler').currentTime = (e.offsetX / timelineWidth) * document.querySelector('#treiler').duration;
// }