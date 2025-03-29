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
    for (let i = 0; i < image.length; i++) {
        templateimg.innerHTML += getnotesHTML(i);
    }
}

function getnotesHTML(index) {
    return `<div class="single_element">
                <img class="images" onclick="popup(), d_none_pop()" src=${image[index]}>
            </div>`;
}

function popup() {
    let pop = document.getElementById(`test`);

    pop.innerHTML += pop_template();
}

function pop_template() {
    return `<div id="main">
<div class="child1">Image Name</div>
<div class="child2"><img src="./gatze5.PNG" alt="" /></div>
<div class="child3">
    <img class="leftrightimage" onclick="" src="./img/left arrow.png" alt="" />
    <span>1/2</span>
    <img class="leftrightimage" onclick="" src="./img/right arrow.png" alt="" />
</div>
</div`;
}

function d_none_pop() {
    let pop_up = document.getElementById(`test`);
    pop_up.classList.toggle(`d_none`);
}
