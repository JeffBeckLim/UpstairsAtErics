
  // for the songs
// Make sure they are sorted
// make sure these have the same ending numbers progress elements
const buttons = [
    'button1',
    'button2',
    'button3'
  ]
  const audios = [
    'audio1',
    'audio2',
    'audio3'
  ]
  const progressContainers = [
    'progress-container1',
    'progress-container2',
    'progress-container3'
  ]
  const progressBars = [
    'progress1',
    'progress2',
    'progress3'
  ]
  
  const playIcons = [
    'playIcon1',
    'playIcon2',
    'playIcon3'
  ]

  for(i=0; i<buttons.length; i++){
    let button = document.getElementById(buttons[i]);
    let audio = document.getElementById(audios[i]);
    let playIcon = document.getElementById(playIcons[i]);
    button.addEventListener('click', ()=>{
        playOrPause(button,audio, playIcon);
    })
  
    let progress= document.getElementById(progressBars[i]);
    let progressContainer = document.getElementById(progressContainers[i]);
  
    audio.addEventListener('timeupdate', () => updateProgress(audio, progress));
    progressContainer.addEventListener('click', setProgress);
  }
  
  function playOrPause(button, audio, playIcon){
    if(button.classList.contains('play')){
        play(button, audio, playIcon)
    }
    else if(button.classList.contains('pause')){
        pause(button, audio, playIcon)
    }
    else{
        location.reload()
    }
  }
  function play(button, audio, playIcon) {  
    audio.play()
    button.classList.remove('play')
    button.classList.add('pause')

    playIcon.src = '../assets/pauseButton.svg'
  }
  
  function pause(button, audio, playIcon){
    audio.pause()
    button.classList.remove('pause')
    button.classList.add('play')

    playIcon.src = '../assets/playButton.svg'
  }
  
  function setProgress(e) {
    const audio = document.getElementById("audio"+this.id[this.id.length - 1])
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = parseInt((clickX / width) * duration) ;
  }
  
  
  function updateProgress(audio, progress) {
    const { duration, currentTime } = audio; // Destructure audio properties
    const progressPercent = (currentTime / duration) * 100;
  
    progress.style.width = `${progressPercent}%`;
  }
  
  
  