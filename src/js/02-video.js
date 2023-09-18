import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.getElementById('vimeo-player');

const player = new Player(iframe);
const currentTime = Number(localStorage.getItem("videoplayer-current-time"));

const onPlay = function (event) {
    localStorage.setItem("videoplayer-current-time", event.seconds)
};


player.on('timeupdate', throttle(onPlay, 1000));

if (currentTime) {
    player.setCurrentTime(currentTime)
};