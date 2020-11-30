import { countTimeDiff } from '../clock/countTimeDiff.js'

/**
 * Generuoja statini laikrodi, kuris parodo kiek liko laiko iki artimiausiu Naujuju metu
 * @param {string} selector CSS taisykle, kaip rasti vieta, kur bus generuojamas laikrodzio HTML turinys
 * @returns {boolean} Jei funckija sekmingai ivygdo savo funkcionaluma, tai grazina `true`, priesingu atveju `false`.
 */
function renderClock (selector) {
    if (typeof selector !== 'string') {
        console.error('ERROR: selektorius turi buti tekstinio tipo');
    }
    if (typeof selector === '') {
        console.error('ERROR: selektorius negali buti tuscias tekstas');
    }
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('ERROR: neresta vieta, kur sugeneruoti laikrodzio HTML turini');
        return false;
    }
    const time = countTimeDiff();
    const HTML = `<div class="time-box">
                    <div class="time">${days}</div>
                    <span>Days</span>
                </div>
                <div class="time-box">
                    <div class="time">${hours}</div>
                    <span>Hours</span>
                </div>
                <div class="time-box">
                    <div class="time">${minutes}</div>
                    <span>Minutes</span>
                </div>
                <div class="time-box">
                    <div class="time">${seconds}</div>
                    <span>Seconds</span>
                </div>`;

    DOM.innerHTML = HTML;
    const timesDOM = DOM.querySelectorAll('.time');
    console.log(timesDOM);

    setInterval(() => {
        const time = countTimeDiff();
        timesDOM[0].innerText = time.days < 10 ? '0' + time.days : time.days;
        timesDOM[1].innerText = time.hours < 10 ? '0' + time.hours : time.hours;
        timesDOM[2].innerText = time.minutes < 10 ? '0' + time.minutes : time.minutes;
        timesDOM[3].innerText = time.seconds < 10 ? '0' + time.seconds : time.seconds;
    })


    return true;
}

export { renderClock }