let imageFrames = document.getElementsByClassName("frame-image")
console.log(imageFrames)

for (let i = 0; i < imageFrames.length; i++) {
    let imgFrame = imageFrames[i];
    
    imgFrame.onmouseover = function(){
        imgFrame.getElementsByClassName("frame-date")[0].animate({
            opacity: `0%`, top: '-20%'
        }, {duration: 100, fill: "forwards"});
    }
    imgFrame.onmouseout = function(){
        imgFrame.getElementsByClassName("frame-date")[0].animate({
            opacity: '100%', top: '0%'
        }, {duration: 100, fill: "forwards"});
    }
}


let framePixelArt = document.getElementById("cat-pixelart")
let frameIllustration = document.getElementById("cat-illustration")

//close all subwindows at start
let closeSubWindows = function() {
    framePixelArt.style.display = "none";
    frameIllustration.style.display = "none";
}
closeSubWindows();

document.getElementById("btn-cat-pixelart").onclick = function() {
    closeSubWindows();
    framePixelArt.style.display = "block";
}
document.getElementById("btn-cat-illustration").onclick = function() {
    closeSubWindows();
    frameIllustration.style.display = "block";
}