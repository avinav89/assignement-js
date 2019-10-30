const puppeteer = require('puppeteer');
// var assert = require('chai').assert
module.exports = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--start-maximized']
    // slowMo: 50
  });
  try {
    // console.log('sas')
    const pages = await browser.pages();
    const page = pages[0];
    await page.setViewport({ width: 1200, height: 900 });
    await page.goto('http://192.168.108.77:2020/', { waitUntil: 'networkidle2' });
    const [element5] = await page.$x("//div[@class='user_info fl_right']//a[text()='Sign in']");
    element5.click();
    await page.waitFor(2000);
    await page.type('#signinUserName', '8850892144');
    await page.type('#signinPassword', 'authorised@123');
    const [element1] = await page.$x("//input[@id='btnsignin']");
    element1.click();
    await page.waitForXPath('//a[@href="/Home/LogOff"]');
    var [element_new] = await page.$x('//a[@href="/Home/LogOff"]');
    var text = await (await element_new.getProperty('text')).jsonValue();
    return (text);    
  } catch (e) {
    console.log('ERROR', e);
  }
  finally {
    await browser.close();
  }
};