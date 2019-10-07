const puppeter = require('puppeteer');

puppeter.launch()
    .then(browser => new Promise((resolve, reject) => {
        browser.newPage()
            .then(page => page.goto('https://220-volt.ru'))
        then(resp => page.screenshot({
            path: 'example.png'
        }))
    }))