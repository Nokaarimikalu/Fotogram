/** @format */

/* <div id="main">
<div class="child1">Image Name</div>
<div class="child2"><img src="./gatze5.PNG" alt="" /></div>
<div class="child3">
    <img onclick="" src="left arrow.png" alt="" />
    <span>1/2</span>
    <img onclick="" src="right arrow.png" alt="" />
</div>
</div> */

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
    let pop_up = document.getElementById(`main_pop_up`);
    for (let i = 0; i < image.length; i++) {
        templateimg.innerHTML += getnotesHTML(i);
    }
    for (let i = 0; i < image.length; i++) {
        if (i < 1) {
            pop_up.innerHTML += pop_up_template(i);
        }
    }
}

function getnotesHTML(index) {
    return `<div class="single_element">
                <img onclick="toggle_pop_up()" src=${image[index]}>
            </div>`;
}

function pop_up_template(index) {
    return `  <div class="child1">Image Name</div>
                <div class="child2"><img src=${image[index]} alt="" /></div>
                <div class="child3">
                    <img onclick="" src="./img/left arrow.png" alt="" />
                    <span>1/2</span>
                    <img onclick="" src="./img/right arrow.png" alt="" />
                </div>`;
}

function toggle_pop_up() {
    let showornot = document.getElementById(`main_pop_up`);
    showornot.classList.toggle(`d_none`);
}
