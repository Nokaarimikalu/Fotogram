/** @format */

let image = [
    `./img/Bella.jpg`,
    `./img/Bella1.jpg`,
    `./img/gatze2.png`,
    `./img/gatze.jpg`,
    `./img/gatze7.PNG`,
    `./img/gatze5.PNG`,
    `./img/gatze6.png`,
    `./img/mecanik.JPG`,
    `./img/racoon.PNG`,
    `./img/ich.jpg`,
    `./img/me.png`,
    `./img/land.png`,
    `./img/gojo.jpg`,
    `./img/F40.JPG`,
];
const cleanedImage = image.map((path) => path.replace(`./img/`, ""));
const dNone = document.getElementById(`teplateimage`);
const dim = document.getElementById(`dimming`);
let renderedImage = 0;

function getOut() {
    dNone.classList.toggle(`d_none`);
    dim.classList.toggle(`d_none`);
}

function render() {
    const templateImg = document.getElementById(`template_container`);

    for (let i = 0; i < image.length; i++) {
        templateImg.innerHTML += getnotesHTML(i);
    }
}

function getnotesHTML(index) {
    return `<div class="single_element">
                <img class="mainimage" onclick="toggle(${index})" src=${image[index]}>
            </div>`;
}

function toggle(index) {
    const toggled_none = dNone.classList.toggle(`d_none`);
    dim.classList.toggle(`d_none`);
    renderedImage = index;

    if (!toggled_none) {
        dNone.innerHTML = popupTemplate(index);
    } else {
        dNone.innerHTML = ``;
    }
}

function changeImage(next) {
    renderedImage += next;

    if (renderedImage < 0) {
        renderedImage = image.length - 1;
    } else if (renderedImage >= image.length) {
        renderedImage = 0;
    }

    dNone.innerHTML = popupTemplate(renderedImage);
}

function popupTemplate(i) {
    return `<div id="popupimage">
                <div class="child1">${cleanedImage[i]}</div>
                <div class="child2"><img class="child2image" src="${image[i]}" alt="" /></div>
                <div class="child3">
                    <img class="leftright" onclick="changeImage(-1)" src="./img/left arrow.png" alt="" />
                    <span>${i + 1}/${image.length}</span>
                    <img class="leftright" onclick="changeImage(1)" src="./img/right arrow.png" alt="" />
                </div>
            </div>`;
}
