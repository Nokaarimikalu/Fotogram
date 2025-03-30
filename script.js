/** @format */

let image = [
    `./img/Bella.jpg`,
    `./img/Bella1.jpg`,
    `./img/gatze2.png`,
    `./img/gatze.jpg`,
    `./img/gatze7.png`,
    `./img/gatze6.png`,
    `./img/gatze5.PNG`,
    `./img/gatze6.png`,
    `./img/mecanik.JPG`,
    `./img/racoon.PNG`,
    `./img/ich.jpg`,
    `./img/me.png`,
    `./img/land.png`,
    `./img/gojo.jpg`,
    `./img/f40.JPG`,
];
const cleanedImage = image.map((path) => path.replace(`./img/`, ""));
const dNone = document.getElementById(`teplateimage`);
const dim = document.getElementById(`dimming`);
console.log(cleanedImage);

function getout() {
    dNone.classList.toggle(`d_none`);
    dim.classList.toggle(`d_none`);
}

function render() {
    const templateimg = document.getElementById(`template_container`);

    for (let i = 0; i < image.length; i++) {
        templateimg.innerHTML += getnotesHTML(i);
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

    if (!toggled_none) {
        dNone.innerHTML = popuptemplate(index);
    } else {
        dNone.innerHTML = ``;
    }
}

function changeImage() {
    if (i < image.length - 1) {
    }
}

function popuptemplate(i) {
    return `<div id="popupimage">
                <div class="child1">${cleanedImage[i]}</div>
                <div class="child2"><img class="child2image" src="${image[i]}" alt="" /></div>
                <div class="child3">
                    <img class="leftright" onclick="" src="./img/left arrow.png" alt="" />
                    <span>${i + 1}/${image.length}</span>
                    <img class="leftright" onclick="" src="./img/right arrow.png" alt="" />
                </div>
                </div>`;
}
