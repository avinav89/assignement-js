const puppeteer = require('puppeteer');
module.exports = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--start-maximized']
    });
    try {
        const pages = await browser.pages();
        const page = pages[0];
        await page.setViewport({ width: 1200, height: 900 });
        await page.goto('http://192.168.108.77:2020/', { waitUntil: 'networkidle2' });
        const [element5] = await page.$x("//div[@class='user_info fl_right']//a[text()='Sign in']");
        element5.click();

        await page.waitFor(2000);
        await page.type('#signinUserName', '');
        await page.type('#signinPassword', '');
        const [element1] = await page.$x("//input[@id='btnsignin']");
        element1.click();

        await page.waitForXPath('// div[text()="Please enter username."]');
        var [element_new] = await page.$x('// div[text()="Please enter username."]');
        var text = await (await element_new.getProperty('textContent')).jsonValue();
        return (text);
    } catch (e) {
        console.log('ERROR', e);
    }
    finally {
        await browser.close();
    }
};