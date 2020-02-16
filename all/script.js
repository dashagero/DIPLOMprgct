document.getElementById("burger").onclick = function(){
addMenu();

}

function addMenu(){
    document.getElementById("menu").classList.toggle("show");
    document.getElementById("btn").classList.toggle("show");
}

