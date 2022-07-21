import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iFrame = document.querySelector('#vimeo-player');
const player = new Player(iFrame);

const LOCALSTORAGE_KEY = "videoplayer-current-time";

const onPlay = function (data) {
    localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const savedTime = localStorage.getItem(LOCALSTORAGE_KEY);

if (savedTime) {
  player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
}

