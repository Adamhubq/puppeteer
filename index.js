const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://krasnodar.kerama-marazzi.com/ru/production/');


    let response = await page.$$('.image');

    let index = response.length
    
    const divsCounts = await page.$$eval('.image', divs => divs.length);



    // 
    // const html = await page.$eval('.main-container', e => e.outerHTML);
    // for (; index--;) {
    //     console.log(await response[index].getProperty('href')alue)
    // }

    await browser.close();
})();

// downloads
// var fs = require('fs'),
//     request = require('request');

// var download = function (uri, filename, callback) {
//     request.head(uri, function (err, res, body) {
//         request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
//     });
// };

// download('https://images2.yesmagazine.ru/upload/cache_img/eb0/eb0eb1b749f48248f750d21052123f3f_fitted_660x880.jpg', 'google.png', () => {
//     console.log('done');
// });