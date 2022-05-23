import { disabledButton } from "./disabledButton.js";
import { getUrl } from "./getUrl.js";

let app = document.getElementById('app');
let form = document.getElementById('form');
let content = document.getElementById('content');

disabledButton(); // disable button at the beginning and with empty input

form.addEventListener('submit', e => {
    e.preventDefault();

    content.innerHTML = '<img src="./img/spinning-circles.svg" alt="loader" />';

    let url = e.target.url.value; // get value of input
    let domain = url.split('/')[2]; // get domain

    if(domain === 'www.tiktok.com' || domain === 'vm.tiktok.com'){
        getUrl(url); // get data video
    }else{
        content.innerHTML = '<h3 class="messageError">Error, The url is not a tiktok link!</h3>'
    }
    e.target.reset();
})

