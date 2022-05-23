let app = document.getElementById('app');
let form = document.getElementById('form');
let content = document.getElementById('content');

const getUrl = async (url) => {
    let res = await fetch('/url', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ videoUrl: url})
    })

    let videoUrl = await res.json();
    
    // agregamos la etiqueta video...
    let video = `
        <video controls="" autoplay="" name="media">
            <source src="${videoUrl}" type="video/mp4"></source>
        </video>
    `
    content.innerHTML = video;
}

form.addEventListener('submit', e => {
    e.preventDefault();

    content.innerHTML = '<img src="./img/spinning-circles.svg" alt="loader" />';

    let url = e.target.url.value;
    getUrl(url)
    e.target.reset();
})

