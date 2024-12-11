function close_side_bar(){
    let side_bar = document.getElementById("side-bar-div");
    console.log(side_bar);
    side_bar.classList.add("d-none")    
}

function show_side_bar(){
    let side_bar = document.getElementById("side-bar-div");
    console.log(side_bar);
    side_bar.classList.remove("d-none")
}



document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.hero-wave');
    fadeElements.forEach(element => {
      element.classList.add('show');
    });
  });


  const albumCovers = document.querySelectorAll('.album-cover-div');


  albumCovers.forEach(div => {
    div.addEventListener('click', () => {

      let description = div.querySelector('.song-description');

      if(description.classList.contains('show')){
        description.classList.remove('show')
      }else{
        description.classList.add('show')
      }
      
    });
  });