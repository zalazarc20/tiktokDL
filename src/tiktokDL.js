import axios from 'axios';
import cheerio from 'cheerio';
import qs from 'qs';

export const tiktokDL = async (url) => {
    return new Promise((resolve, reject) => {
        axios.get('https://ttdownloader.com/')
        .then((data) => {
            const $ = cheerio.load(data.data)
            const cookie = data.headers['set-cookie'].join('')
            const dataPost = {
                url: url,
                format: '', 
                token: $('#token').attr('value')
            }
            // return console.log(cookie);
            axios({
                method: 'POST',
                url: 'https://ttdownloader.com/query/',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    origin: 'https://ttdownloader.com',
                    referer: 'https://ttdownloader.com/',
                    cookie: cookie,
                },
                data: qs.stringify(dataPost)
            }).then(({ data }) => {
                const $ = cheerio.load(data)
                const result = {
                    nowm: $('#results-list > div:nth-child(2) > div.download > a')?.attr('href'),
                }
                resolve(result);
            })
            .catch(e => {
                reject({ status: false, message: 'error fetch data', e: e.message })
            })
        })
        .catch(e => {
            reject({ status: false, message: 'error fetch data', e: e.message })
        })
    })

}