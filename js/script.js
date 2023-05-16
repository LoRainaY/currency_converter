'use strict'

const inputBYN = document.querySelector('#byn'),
    inputUSD = document.querySelector("#usd");

inputBYN.addEventListener('input', () => {

    getResources('https://www.nbrb.by/api/exrates/rates/431').then((data) => {
        inputUSD.value = (+inputBYN.value / data.Cur_OfficialRate).toFixed(2);
    })


});
inputUSD.addEventListener('input', () => {

    getResources('https://www.nbrb.by/api/exrates/rates/431').then((data) => {
        inputBYN.value = (+inputUSD.value * data.Cur_OfficialRate).toFixed(2);
    })

});
const getResources = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Ошибка ${res.status} по адресу ${res.url}`);
    }
    return await res.json();
};