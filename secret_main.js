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