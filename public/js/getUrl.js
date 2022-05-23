export const getUrl = async (url) => {
    let content = document.getElementById('content');
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