var box1 = document.querySelector("#box1");
var box2 = document.querySelector("#box2");

window.addEventListener("keydown", function () {
    jump();
})

function jump() {
    box1.classList.add("animate");
    setTimeout(function() {
        box1.classList.remove("animate");
    }, 1000);
}


var gameover = setInterval(function () {
    var characterTop = parseInt(window.getComputedStyle(box1).getPropertyValue("top"));
    var rockLeft = parseInt(window.getComputedStyle(box2).getPropertyValue("left"));
    // console.log("rockeLeft = ",rockLeft);
    if(rockLeft < 70 && rockLeft > 0 && characterTop >= 100) {
        box2.style.animation = "none";
        // box2.style.display = "none";
        alert("lose");
        box2.style.animation = "box2 1.2s infinite linear";
        
    }
}, 40);
