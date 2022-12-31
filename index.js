
//*  Start-button */
function startParty() {
    const block = document.querySelector('.block');
    const button = document.getElementsByTagName('button');
    const lightMusic = document.querySelector(".super-container");
    const circle = document.querySelector(".circle");

    lightMusic.setAttribute("style", "animation: gradient 350ms ease 16400ms infinite");
    circle.setAttribute("style", "animation: background 800ms infinite alternate,rotateWithOrigin 2000ms linear 16600ms infinite");


    return block.style.display = "none", button.style.display = "none";
}

const button = document.querySelector("button")
button.addEventListener('click', startParty);

document.querySelector('button').addEventListener('click', () => {
    document.querySelector('audio').play()


    //* Santa */

    setTimeout(function showSanta() {
        let santa = document.querySelector('.santa');
        const styles = window.getComputedStyle(santa);
        const display = styles.getPropertyValue('display');

        const santaInterval1 = setInterval(function () {
            if (santa.style.display = 'block') {
                santa.style.display = 'none';
            }
        }, 1000)


        const santaInterval = setInterval(function () {
            if (display == "none") {
                santa.style.display = 'block';
            }
        }, 8000)

    }, 8000);


    //* Dwarf */

    setTimeout(function showDwarf() {
        const dwarfImg = document.querySelector(".dwarf");
        dwarfImg.style.display = "block";
        const delay = 100;
        let i = 0;
        startTimer = function (pixels) {
            left = dwarfImg.offsetLeft;

            if ((pixels > 0 && left > 750) || (pixels < 0 && left < 130)) {
                clearInterval(timer);

                timer = setInterval(function () {
                    startTimer(pixels * -1);
                }, delay);
            }
            dwarfImg.style.left = left + pixels + "px"
            i++
        };

        let timer = setInterval(function () {
            startTimer(8);
        }, delay);
    }, 16000);
})




















