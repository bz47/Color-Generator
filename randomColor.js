let button = document.getElementById('button');
let text = document.getElementById('text');

let rgb;
    let r;
    let g;
    let b;

function changeColor() {

    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);

    text.innerHTML = `R= ${r} G= ${g} B= ${b}`;
    rgb = `rgb(${r},${g},${b})`;

    document.body.style.background = rgb;
  
}




button.onclick = changeColor;

