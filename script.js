function timer(started) {
    let end = Date.now();
    return (end - started);
}

function display() {
    if (Math.random() > 0.5){
        document.getElementById("shape").style.borderRadius = "50%";
    } else {
        document.getElementById("shape").style.borderRadius = "0%";
    }
    document.getElementById("shape").style.top = `${Math.random() * 200}px`;
    document.getElementById("shape").style.left = `${Math.random() * 200}px`;
    document.getElementById("shape").style.backgroundColor = getRandomColor();
    document.getElementById("shape").style.display = "block";
    start = Date.now();
    return (start);
}

function appearAfterDelay() {
    setTimeout(display, Math.random() * 2000);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let start = Date.now();

document.getElementById("start").onclick = function () {
    appearAfterDelay();

    document.getElementById("shape").onclick = function () {
        document.getElementById("shape").style.display = "none";
        document.getElementById("timeTaken").innerHTML = "It took you " + timer(start) / 1000 + " seconds"
        appearAfterDelay();
    }
}