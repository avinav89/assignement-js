const puppeteer = require('puppeteer');
// var assert = require('chai').assert
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--start-maximized']
  });
  try {
    const pages = await browser.pages();
    const page = pages[0];
    await page.setViewport({ width: 1200, height: 900 });
    await page.goto('https://paytm.com/', { waitUntil: 'networkidle2' });
    const [element] = await page.$x("//*[@id='app']/div/div[3]/div/div[2]/div[1]/div/div/div[2]/div[2]/ul/li[1]/div/div/input");
    // element.click();
    element.type(8210172189)
    await page.waitFor(5000);
    // await page.type('#signinUserName', '8850892144');
    // await page.type('#signinPassword', 'authorised@123');
    // const [element1] = await page.$x("//input[@id='btnsignin']");
    // element1.click();
    // await page.waitFor(5000)
    // await page.type('#txtSearchByItemOrBrand1', 'Nilkamal Cabinets');
    // await page.waitFor(2000);
    // const [buttonx] = await page.$x("//button[@id='btnHomePageSearch1']");    
    // await buttonx.click();
    // await page.waitFor(2000)

    // // const [plus] = await page.$x("//div[@id='divOrder']//i[@class='fa fa-plus']");    
    // await plus.click();
    // await page.waitFor(5000);
    await page.screenshot({ path:'buddy-screenshotPTM.png'});
  } catch (e) {
    console.log('ERROR', e);
  }
  finally {
    await browser.close();
  }
})();