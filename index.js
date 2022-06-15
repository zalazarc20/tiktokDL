import http from 'https';
import express from 'express';
import bodyParser from 'body-parser';
import { tiktokdownload } from "tiktok-scraper-without-watermark";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.post('/url', async (req, res) => {
    let { videoUrl } = req.body;
    
    // get url video
    const tiktok = tiktokdownload(videoUrl);
    let { nowm } = await tiktok;
    const request = http.get(nowm);

    request.on('response', video => res.send(JSON.stringify(video.rawHeaders[11])));
})

app.listen(port, () => {
    console.log(`servidor activado - http://localhost:${port}`)
    console.log(`${process.env.RAILWAY_STATIC_URL}`)
    console.log(`server actived - port: ${port}`);
})