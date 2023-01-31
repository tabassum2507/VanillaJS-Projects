const container= document.getElementById('container')
const playBtn = document.getElementById('play')
const prevBtn =  document.getElementById('prev')
const nextBtn = document.getElementById('next')

const audio = document.getElementById('audio')
const progress = document.getElementById('progress')
const progressContainer = document.getElementById('progress-conatiner')
const title = document.getElementById('title')
const cover = document.getElementById('cover')
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

const songs = [ 'hey', 'summer', 'ukulele']

let songIndex = 2;

loadSong(songs[songIndex]);

function loadSong(song){
    title.innerHTML = song
    audio.src = `Music/${song}.mp3`
    cover.src = `Music/${song}.jpg`;
}

function playSong() {
    container.classList.add('play');
    playBtn.querySelector('i.fa-solid').classList.remove('fa-play')
    playBtn.querySelector('i.fa-solid').classList.add('fa-pause')

    audio.play();
}

function pauseSong() {
    container.classList.remove('play');
    playBtn.querySelector('i.fa-solid').classList.add('fa-play')
    playBtn.querySelector('i.fa-solid').classList.remove('fa-pause')

    audio.pause();
}

function prevSong() {
    songIndex --;

    if(songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
}

function nextSong() {
    songIndex++;

    if(songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong();
}

function setProgress(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currTime = (clickX / width ) * duration;
}