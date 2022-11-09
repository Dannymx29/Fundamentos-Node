const puppeteer = require('puppeteer');

(async () => {
    console.log('lanzamos navegador');
    const browser = await puppeteer.launch({headless: false});

    const page = await browser.newPage();
    await page.goto('https://en.wikipedia.org/wiki/Node.js');

    var titulo1 = await page.evaluate(() => {
        const h1 = document.getElementById('firstHeading');
        console.log(h1.innerHTML);

        return h1.innerHTML;
    })

    console.log(titulo1);

    console.log('cerramos navegador');
    browser.close();
    console.log('navegador cerrado');
})();