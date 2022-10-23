import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const keyCurrentTime = 'videoplayer-current-time';

player.on('timeupdate', throttle(onSetTimeupdate, 500));
function onSetTimeupdate(data) {
  console.log('data.seconds: ', data.seconds);
  localStorage.setItem(keyCurrentTime, data.seconds);
}

if (localStorage.getItem(keyCurrentTime)) {
  player.setCurrentTime(localStorage.getItem(keyCurrentTime));
}
