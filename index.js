const puppeteer = require('puppeteer');
const fs = require('fs');


 async function getArrayLink(page) {
    const pretier = await page.$('.ptb-new-left-menu-firts');
    const postsSelector = 'a';
    await page.waitForSelector(postsSelector, { timeout: 0 });
    return await pretier.$$eval( // запрос списка ссылок
      postsSelector, postLinks => postLinks.map((link, arrayJson) => {
        return link.href;
        })
    );
}
async function initPage(page, href) {
    await page.goto
}


(async () => { // 
    
    const browser = await puppeteer.launch({
  		headless: true
    });    
    const page = await browser.newPage();
    // await page.goto('https://krasnodar.kerama-marazzi.com/ru/production/');
    await page.goto('https://krasnodar.kerama-marazzi.com/ru/production/section.php?SECTION_ID=6244');
    
    // await page.waitForSelector('.image-holder');
    // let arrayLinkButton = await page.$$('.image-holder > a')

    const testBut = await page.$$('.image-holder');

    // for (const value of testBut) {
    //     const a = 
    //     console.log(a);
    // }


    for (const value of testBut) {
        
        try{

        const button=  await value.$('a')
        await button.hover();
        await button.click();
        let test = await page.waitForSelector('#element-info', {visible: true});
        let result =  await test.$eval('strong', el=> el.textContent);
        console.log(result)
        } catch(e){}
    }
    

    // let a = 0;
    // for (let elem of arrayLinkButton) {
    //     console.log(elem);
    //     await elem.click();
    //     break;
    //     // await elem.click();
    //     // const pretier = await page.$('#element-info');
    //     // const prop = await (await pretier.getProperty('cellpadding')).jsonValue();
    //     // console.log(prop)
    // }


    // const postUrls = await getArrayLink(page);
   
    await browser.close();
})();


// fs.writeFileSync("hello.json",  // запись в файл
    //     JSON.stringify(postUrls
    //         .filter(value => value.indexOf('section.php') + 1)))

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