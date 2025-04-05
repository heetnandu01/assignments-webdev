let box = document.getElementsByClassName("box");

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

for (let i = 0; i < box.length; i++) {
    box[i].style.color = getRandomColor();
    box[i].style.backgroundColor = getRandomColor();
}
