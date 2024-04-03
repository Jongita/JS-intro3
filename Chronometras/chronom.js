const clockDOM = document.getElementById('clock');

clockDOM.innerText = '0:0'

let i = 0;
setInterval(() => {
    i++;
    const s = i % 60;
    const m = (i - s) / 60;

    clockDOM.innerText = `${m}:${s < 10 ? '0' : ''}${s}`;

}, 1000);

let count = 0;
setInterval(() => {
    count++;
    if (count % 2 === 0) {
        titleDOM[0].innerText = 'DOM';
    } else {
        titleDOM[0].innerText = '***New Message***';
    }
}, 1000);
