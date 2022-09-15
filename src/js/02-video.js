import Vimeo from '@vimeo/player';
import { setData, getData } from './storage';

const LOCAL_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);
const throttle = require('lodash/throttle');

player.on('timeupdate', throttle(saveTime, 1000));

player.setCurrentTime(getData(LOCAL_TIME));

function saveTime() {
  player.getCurrentTime().then(seconds => {
    setData(LOCAL_TIME, seconds);
  });
}
