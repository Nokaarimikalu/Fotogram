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

function render() {
    let templateimg = document.getElementById(`template_container`);

    for (let i = 0; i < image.length; i++) {
        templateimg.innerHTML += getnotesHTML(i);
    }
}

function getnotesHTML(index) {
    return `<div class="single_element">
                <img class="mainimage" onclick="toggle(${index})" id="image${image[index]}" src=${image[index]}>
            </div>`;
}

function toggle(index) {
    let dNone = document.getElementById(`popupimage`);
    console.log(`wee`);
    dNone.classList.toggle(`d_none`);

    dNone.innerHTML += popuptemplate(index);
}

function popuptemplate(index) {
    return `<div class="child1">weewooo</div>
                <div class="child2"><img class="child2image" src="${image[index]}" alt="" /></div>
                <div class="child3">
                    <img class="leftright" onclick="" src="./img/left arrow.png" alt="" />
                    <span>1/2</span>
                    <img class="leftright" onclick="" src="./img/right arrow.png" alt="" />
                </div>`;
}
