import { imputValidation } from './imputValidation.js';

function renderSocials(data) {
    //imput validation
    if (!imputValidation(data)) {
        return false;
    }

    //logic
    const socialDOM = document.querySelector ('footer > .row');
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (typeof item !== 'object') {
            continue;
        }
        if (typeof item.link !== 'string' ||
        item.link === '') {
            continue;
        }
        if (typeof item.icon !== 'string' ||
        item.icon === '') {
            continue;
        }
        HTML += `<a href="${item.link}" target="_blank" class="fa fa-${item.icon}" aria-hidden="true"></a>`;
    }

    //post logic validation
    if (HTML === '') {
        console.error('ERROR: NEpavyko sugeneruoti social iconu/nuorodu.');
        return false;
    }
    //return
    socialDOM.innerHTML = HTML;
    return true;
}
export { renderSocials }