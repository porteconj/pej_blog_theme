

import analyticsFetch from './fetch.js';

const redirectIfToken = () => {
    const url = window.location.href;

    if (url.includes('#')) {
        const token = url.split('#')[1];
        window.location.href = `/admin/#${token}`;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    analyticsFetch();

});

redirectIfToken();





