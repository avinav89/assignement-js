const assert = require('chai').assert;
const txt = require('./example.js')
const webtour = require('./webTour')
const webtourA = require('./webtourA')


describe('App', function() {
    it('authorised dealer with valid cred', async function() {
        let result = await txt();   
        assert.equal(result, 'Sign Out'); 
    });

    it('authorised dealer with invalid cred.', async function() {
        let result = await webtour();   
        assert.equal(result, 'Username and Password did not match.'); 
    });

    it('authorised dealer with blank cred.', async function() {
        let result = await webtourA();   
        assert.equal(result, 'Please enter username.'); 
    });

});

// div[text()="Please enter username.











































// const app = require('../app');
// const sayHello = require('../app').sayHello;
// const addNumber = require('../app').addNumber;




//     async function sayHello () {
    
//     const browser = await puppeteer.launch({
//       headless: false,
//       args: ['--start-maximized']
//       // slowMo: 50
//     });
//     try {
//       console.log('sas')
//       const pages = await browser.pages();
//       const page = pages[0];
//       await page.setViewport({ width: 1200, height: 900 });
//       await page.goto('http://192.168.108.77:2020/', { waitUntil: 'networkidle2' });
//       // await page.goto('http://www.iana.org/domains/example', { waitUntil: 'networkidle2' });
//       const [element] = await page.$x("//div[@class='user_info fl_right']//a[text()='Sign in']");
//       element.click();
//       // element.getProperty('getText');
//       // console.log('element', element)
//       await page.waitFor(2000);
//       await page.type('#signinUserName', '8850892144');
//       await page.type('#signinPassword', 'authorised@123');
//       const [element1] = await page.$x("//input[@id='btnsignin']");
//       element1.click();    
  
//       await page.waitFor(5000)
//       const text = await page.evaluate(() => Array.from(document.querySelectorAll('a[href="/Home/LogOff"]'), element => element.textContent));
//       console.log('text', text[0])
//       return text[0]
//     }
//     finally {
//         await browser.close();
//       }
// }


  
      
  
  






// describe('App', function () {
//     it('sayHello should return hello', function () {
//         let result = app.sayHello()
//         assert.equal(result, 'hello');
//     });

//     it('sayHello should return type string', function () {
//         let result =app.sayHello();
//         assert.typeOf(result, 'string');
//     });

//     it('Addnumber should be above 5', function () {
//         let result = app.addNumber(5,5);
//         // assert.equal(result, 'string');
//         assert.isAbove(result, 5);
//     });


// });