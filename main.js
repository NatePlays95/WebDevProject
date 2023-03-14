const track = document.getElementById("image-track");

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmousemove = e => {
    if (track.dataset.mouseDownAt === "0") return;
    
    const start = parseFloat(track.dataset.mouseDownAt);
    const mouseDelta = e.clientX - start;
    const maxDelta = window.innerWidth/2;
    
    const percent = (mouseDelta / maxDelta) * -100;
    const nextPercent = Math.max(0, Math.min(100, parseFloat(track.dataset.prevPercent) + percent));
    
    //track.style.transform = `translate(${-nextPercent}%, -50%)`;
    track.animate({
        transform: `translate(${-nextPercent}%, -50%)`
    },{duration: 1200, fill: "forwards"});

    for (const image of track.getElementsByClassName("image")) {
        //image.style.objectPosition = `${100 -nextPercent}% 50%`;
        image.animate({
            objectPosition: `${100 -nextPercent}% center`
        }, {duration: 1200, fill: "forwards"});
    }

    track.dataset.nextPercent = nextPercent;
}

window.onmouseup = e => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercent = track.dataset.nextPercent;

}