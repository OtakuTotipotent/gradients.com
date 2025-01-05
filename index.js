const body = document.querySelector('body');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const myClipboard = document.querySelector('.clipboard');
const directionBubble = document.querySelector('i');

let color1 = '#01ffea';
let color2 = '#c552ff';

btn1.addEventListener('click', (e) => {
    color1 = randomHashValue();
    btn2.style.backgroundColor = color1;
    directionBubble.style.backgroundImage = `linear-gradient(to top right, ${color2}, ${color1});`;
    body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    myClipboard.textContent = `background-image: linear-gradient(to right, ${color1}, ${color2})`;
});
btn2.addEventListener('click', (e) => {
    color2 = randomHashValue();
    btn1.style.backgroundColor = color2;
    directionBubble.style.backgroundImage = `linear-gradient(to top right, ${color1}, ${color2});`;
    body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    myClipboard.textContent = `background-image: linear-gradient(to right, ${color1}, ${color2})`;
});
myClipboard.addEventListener('click', () => {
    navigator.clipboard.writeText(myClipboard.textContent);
    alert('Congratulations!\nThe Gradient Color Code is copied successfully. You can Paste it now!!');
});

function randomHashValue() {
    const letters = 'D023C4E591A8BF76';
    let hashCode = '#';
    for (let i = 0; i < 6; i++) {
        hashCode += letters[Math.floor(Math.random() * 16)];
    }
    return hashCode;
}
