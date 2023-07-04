import Player from '@vimeo/player';

const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const videoplayerCurrentTimeKey = 'videoplayer-current-time';
const videoplayerCurrentTimeValue = localStorage.getItem(
  videoplayerCurrentTimeKey
);

console.log(`Текущее время: ${videoplayerCurrentTimeValue} в localStorage`);

player.setCurrentTime(videoplayerCurrentTimeValue);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on('timeupdate', throttle(throttledTimeupdate, 1000));

function throttledTimeupdate() {
  player.getCurrentTime().then(function (seconds) {
    console.log('Текущее время: ' + seconds);
    localStorage.setItem(videoplayerCurrentTimeKey, seconds);
  });
}

// !!! в метов getCurrentTime можно установить параметр,
// чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.

// player.on('timeupdate', function () {
//     console.log("timeupdate");
//     player.getCurrentTime(1).then(function (seconds) {
//         console.log('Текущее время: ' + seconds);
//         localStorage.setItem(videoplayerCurrentTimeKey, seconds);
//   });
// });
