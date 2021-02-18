const {Builder, By, Key, until, WebElement} = require('selenium-webdriver');
const assert = require('assert');

describe('Checking proper rendering of different elements', ()=>{
    let driver;
    var buildings = ["b0", "b1", "b2", "b3", "b4"]; //Name of building elements
    var gray = 'rgba(128, 128, 128, 1)';
    var yellow = 'rgba(255, 255, 0, 1)';

    beforeEach(async ()=>{
        driver = await new Builder().forBrowser('chrome').build();     
        await driver.get('C:/Github Repos/Sunset-Hills-Problem-main/Sunset-Hills-Problem/index.html');
        
        //This code was added to make Selenium wait but it is not needed
        // await driver.wait(until.elementLocated(By.id('wait_test')), 30000);

        //This code was added to make Selenium wait but it is not needed
        // driver.wait(function() {
        //     return driver.executeScript('return document.readyState').then(function(readyState) {
        //       return readyState === 'complete';
        //     });
        //   });
    });

    afterEach(async()=>{
        await driver.quit();
    });


    test('Title is correct', async () => {           
        var data = await driver.getTitle();
        console.log("this is data:::::::::::::::::");
        console.log(data);
        expect(data).toBe('Sunset Hills Problem');
        
      });

    test('Left-most building is yellow while all the rest are gray', async () => {           

        console.log("this is colorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");      
        var color = await driver.findElement(By.id('h_b0'));
        
        //This code was to check whether Selenium found the element or not
        // await driver.findElements(By.id('h_b0'))
        // .then(found => console.log('Element found? %s', !!found.length));

        // var colorval = await color.getAttribute('innerHTML'); // use await. getAttribute is WebElement class method

        let color_vals = [];
        
        for (i=0; i<buildings.length; i++){
            let c = await driver.findElement(By.id(buildings[i]));
            let cval = await c.getCssValue("background-color"); // use await. getAttribute is WebElement class method
            color_vals.push(cval);
        }
            
        console.log(color_vals);

        var c = await driver.findElement(By.id('b0'));
        var cval = await c.getCssValue("background-color"); // use await. getAttribute is WebElement class method

        expect(cval).toBe("rgba(255, 255, 0, 1)");
        expect(color_vals).toStrictEqual([yellow, gray, gray, gray, gray])
        // expect(colorval).toBe('1');
        
      });
      

});




