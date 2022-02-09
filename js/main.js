const
    root = document.querySelector(":root"),
    themeSwitch = document.querySelector(".themeSwitch"),
    play = document.querySelector("#playButton"),
    disc = document.querySelector(".spinDisc"),
    currentPlay = document.querySelector("#currentPlayTime"),
    timeLeft = document.querySelector("#playTimeLeft"),
    audio = new Audio("./sound.mp3"),
    snippetTargetPosition = document.querySelectorAll(".has-snippet"),
    snippet = document.querySelectorAll(".snippet");


let
    isDark = true,
    playing = false,
    interval,
    time = 0,
    timeText = "";



const lightMode = () => {
    root.style.setProperty("--lighter-blue", "#f0f0f0");
    root.style.setProperty("--dark-blue", "#fff");
    root.style.setProperty("--primary-text-color", "#181b20");
    root.style.setProperty("--variant-text-color", "#1e252d");
    root.style.setProperty("--translate-pos", "translateX(23px)");
    root.style.setProperty("--themeSwitch-text", "'Dark'");
    root.style.setProperty("--shadow-value", " 0 0 13px 2px #1e252d3b");
    isDark = false;
};

const darkMode = () => {
    root.style.setProperty("--lighter-blue", "#1e252d");
    root.style.setProperty("--dark-blue", "#181b20");
    root.style.setProperty("--primary-text-color", "white");
    root.style.setProperty("--variant-text-color", "#a9b0b8");
    root.style.setProperty("--translate-pos", "translateX(0)");
    root.style.setProperty("--themeSwitch-text", "'Light'");
    root.style.setProperty("--shadow-value", " 0 0 0 0 #1e252d3b");
    isDark = true;
};

const changeTheme = () => {

    isDark ? lightMode() : darkMode();

};

//Change the theme
themeSwitch.addEventListener("click", changeTheme);


//Show snippet in the right position
snippetTargetPosition.forEach(el => {

    el.addEventListener("mouseover", () => {

        if (document.body.clientWidth <= 1280) {
            snippet.forEach(snip => {
                snip.style.top = (el.getBoundingClientRect().top + el.getBoundingClientRect().height / 2) + "px";
                snip.style.left = (el.getBoundingClientRect().right + 3) + "px";
            });

        }
    });
});



const checkLength = () => {

    let audioLength = audio.duration;
    let lengthTest = `0${Math.floor(audioLength / 60)}:${Math.floor(audioLength - Math.floor((audioLength / 60)) * 60)}`;
    timeLeft.innerHTML = lengthTest;

    return lengthTest;

}

const changeIconAndStartAnimation = () => {
    play.classList.toggle("lni-play");
    play.classList.toggle("lni-pause");
    disc.classList.toggle("spin");
}


play.addEventListener("click", () => {

    changeIconAndStartAnimation();
    checkLength();



    if (!playing) {

        audio.play();
        playing = true;
        interval = setInterval(() => {

            if (audio.ended) {
                clearInterval(interval);
                changeIconAndStartAnimation();
                time = 0;
                playing = false;
                currentPlay.innerHTML = checkLength();
                return
            }
            if (time === 206) { return } //return out of function if the end of the song is reached to avoid the text to display an extra second
            time++;
            if (time < 10) { currentPlay.innerHTML = "00:0" + time; }
            else if (time >= 10 && time < 60) { currentPlay.innerHTML = "00:" + time; }
            else if (time >= 60 && time - Math.floor((time / 60)) * 60 < 10) { currentPlay.innerHTML = `0${Math.floor(time / 60)}:0${time - Math.floor((time / 60)) * 60}` }
            else if (time >= 60 && time - Math.floor((time / 60)) * 60 >= 10) { currentPlay.innerHTML = `0${Math.floor(time / 60)}:${time - Math.floor((time / 60)) * 60}` }




        }, 1000)



    } else {
        audio.pause();
        playing = false;
        clearInterval(interval);
    }



});



/*
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);


let viewport = document.querySelector("meta[name=viewport]")
viewport.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0");


document.documentElement.style.setProperty("overflow", "auto")
const metaViewport = document.querySelector("meta[name=viewport]")
metaViewport.setAttribute("content", "height=" + initialHeight + "px, width=device-width, initial-scale=1.0")


metaViewport.setAttribute("content", ‘width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0’) */