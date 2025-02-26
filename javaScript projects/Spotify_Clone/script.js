let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs=[

    {songName: "let me love you", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    
    {songName: "let me love you", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    
    {songName: "let me love you", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    
    {songName: "let me love you", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    
    {songName: "let me love you", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},

]

//handle play pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-solid fa-2x fa-play');
        masterPlay.classList.add('fa-solid fa-2x fa-pause');
    }
})

//listen to events
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')

})