const root = document.querySelector(":root");
const themeSwitch = document.querySelector(".themeSwitch");
let isDark = true;

const changeTheme = () => {
    if (isDark) {
        root.style.setProperty("--lighter-blue", "#f0f0f0");
        root.style.setProperty("--dark-blue", "#fff");
        root.style.setProperty("--primary-text-color", "#181b20");
        root.style.setProperty("--variant-text-color", "#1e252d");
        root.style.setProperty("--translate-pos", "translateX(23px)");
        root.style.setProperty("--themeSwitch-text", "'Dark'");
        root.style.setProperty("--shadow-value", " 0 0 13px 2px #1e252d3b");
        isDark = false;
    } else {
        root.style.setProperty("--lighter-blue", "#1e252d");
        root.style.setProperty("--dark-blue", "#181b20");
        root.style.setProperty("--primary-text-color", "white");
        root.style.setProperty("--variant-text-color", "#a9b0b8");
        root.style.setProperty("--translate-pos", "translateX(0)");
        root.style.setProperty("--themeSwitch-text", "'Light'");
        root.style.setProperty("--shadow-value", " 0 0 0 0 #1e252d3b");
        isDark = true;
    }

}

themeSwitch.addEventListener("click", changeTheme);

const play = document.querySelector("#playButton");
const disc = document.querySelector(".spinDisc");
const currentPlay = document.querySelector("#currentPlayTime");
const timeLeft = document.querySelector("#playTimeLeft");
const audio = new Audio("./sound.mp3");
let playing = false;




play.addEventListener("click", () => {
    play.classList.toggle("lni-play");
    play.classList.toggle("lni-pause");
    disc.classList.toggle("spin");

    if (!playing) {
        audio.play();
        playing = true;
    } else {
        audio.pause();
        playing = false;;
    }


});

let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);


let viewport = document.querySelector("meta[name=viewport]")
viewport.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0");


document.documentElement.style.setProperty("overflow", "auto")
const metaViewport = document.querySelector("meta[name=viewport]")
metaViewport.setAttribute("content", "height=" + initialHeight + "px, width=device-width, initial-scale=1.0")