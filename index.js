console.log("Welcome To Spotify");
let songIndex=0;
let audioElement = new Audio('let me love you.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let songItems=Array.from(document.getElementsByClassName('songItem'))
let songs = [
    {songName:"lets nacho",filePath:"lets nacho.mp3",coverPath:"lets nacho.jpeg"},
    {songName:"Shadgi",filePath:"Shadgi.mp3",coverPath:"Shadgi.jpeg"},
    {songName:"With You",filePath:"With You.mp3",coverPath:"With You.jpeg"},
    {songName:"let me love you",filePath:"let me love you.mp3",coverPath:"let me love you.jpeg"},
    {songName:"Foxy",filePath:"Foxy.mp3",coverPath:"Foxy.jpeg"},
    {songName:"Death Row",filePath:"Death Row.mp3",coverPath:"Death Row.jpeg"},
    {songName:"Subah Hone Na De",filePath:"Subah Hone Na De.mp3",coverPath:"Subah Hone Na De.jpeg"},
    {songName:"System Pe System",filePath:"System Pe System.mp3",coverPath:"System Pe System.jpeg"}

]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByTagName("span")[0].innerText = songs[i].songName; 
    
})
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle')
    }
    else{
audioElement.pause();
masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle')
    }
})



audioElement.addEventListener('timeupdate',()=>{
console.log(audioElement.currentTime);
console.log(audioElement.duration);


progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= (myProgressBar.value*audioElement.duration)/100;
    console.log(myProgressBar.value);
    
});
Array.from(document.getElementsByClassName('songButton')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
    
});
});









