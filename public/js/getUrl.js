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

    let {nowm, wm, music} = await res.json();
    
    // agregamos la etiqueta video...
    let buttons = `
        <a href="${music}" target='_blank' class='btn'>download audio</a>
    `;
    let video = `
        <video controls="" autoplay="" name="media">
            <source src="${nowm}" type="video/mp4"></source>
        </video>
    `;
    content.innerHTML = `${buttons} ${video}`;
}