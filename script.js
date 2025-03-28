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
    let templateimg = document.getElementById(`template_img`);

    for (let i = 0; i < image.length; i++) {
        templateimg.innerHTML += getnotesHTML(i);
    }
}

function getnotesHTML(index) {
    return `<div class="single_element">
                <img src=${image[index]}
            </div>`;
}
