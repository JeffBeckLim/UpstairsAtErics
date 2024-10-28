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