const {Builder, By, Key, until, WebElement} = require('selenium-webdriver');
const assert = require('assert');
// var sleep = require('sleep');

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

        //console.log("this is colorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");      
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

        let c = await driver.findElement(By.id('b0'));
        let cval = await c.getCssValue("background-color"); // use await. getAttribute is WebElement class method

        expect(cval).toBe("rgba(255, 255, 0, 1)");
        expect(color_vals).toStrictEqual([yellow, gray, gray, gray, gray])
        // expect(colorval).toBe('1');
        
      });
      

    test('0th and 1st bulding getting light', async () => {           

    // HEIGHTS
    // Building 0: 1
    // Building 1: 2
    // Building 2: 1
    // Building 3: 1
    // Building 4: 1

    let color_vals = [];
    let target_building = 'b1';

    await driver.findElement(By.id('h_' + target_building)).clear(); //Clear the value of input element
    await driver.findElement(By.id('h_' + target_building)).sendKeys("2", "\n"); // Enter 2 and then hit enter
    
    async function isYellow(element){
        let color = await element.getCssValue("background-color");
        if (color === 'rgba(255, 255, 0, 1)'){
            return true
        }
        else{
            // console.log('returning false');
            return false
        }
    }
  
    await driver.wait(()=> isYellow(driver.findElement(By.id(target_building))),30000); //wait till isYellow returns true (because animation takes time to change color)
    
    for (i=0; i<buildings.length; i++){
        let c = await driver.findElement(By.id(buildings[i]));
        let cval = await c.getCssValue("background-color"); // use await. getAttribute is WebElement class method
        color_vals.push(cval);
    }
      
    expect(color_vals).toStrictEqual([yellow, yellow, gray, gray, gray])

    
    }, 30000);




    test('0th and 2nd bulding getting light', async () => {           

        // HEIGHTS
        // Building 0: 1
        // Building 1: 1
        // Building 2: 2
        // Building 3: 1
        // Building 4: 1
    
        let color_vals = [];
        let target_building = 'b2';
    
        await driver.findElement(By.id('h_' + target_building)).clear(); //Clear the value of input element
        await driver.findElement(By.id('h_' + target_building)).sendKeys("2", "\n"); // Enter 2 and then hit enter
        
        async function isYellow(element){
            let color = await element.getCssValue("background-color");
            if (color === 'rgba(255, 255, 0, 1)'){
                return true
            }
            else{
                // console.log('returning false');
                return false
            }
        }
      
        await driver.wait(()=> isYellow(driver.findElement(By.id(target_building))),30000); //wait till isYellow returns true (because animation takes time to change color)
        
        for (i=0; i<buildings.length; i++){
            let c = await driver.findElement(By.id(buildings[i]));
            let cval = await c.getCssValue("background-color"); // use await. getAttribute is WebElement class method
            color_vals.push(cval);
        }
          
        expect(color_vals).toStrictEqual([yellow, gray, yellow, gray, gray])
    
        
        }, 30000);





    test('0th and 3rd bulding getting light', async () => {           

        // HEIGHTS
        // Building 0: 1
        // Building 1: 1
        // Building 2: 1
        // Building 3: 2
        // Building 4: 1
    
        let color_vals = [];
        let target_building = 'b3';
    
        await driver.findElement(By.id('h_' + target_building)).clear(); //Clear the value of input element
        await driver.findElement(By.id('h_' + target_building)).sendKeys("2", "\n"); // Enter 2 and then hit enter
        
        async function isYellow(element){
            let color = await element.getCssValue("background-color");
            if (color === 'rgba(255, 255, 0, 1)'){
                return true
            }
            else{
                // console.log('returning false');
                return false
            }
        }
      
        await driver.wait(()=> isYellow(driver.findElement(By.id(target_building))),30000); //wait till isYellow returns true (because animation takes time to change color)
        
        for (i=0; i<buildings.length; i++){
            let c = await driver.findElement(By.id(buildings[i]));
            let cval = await c.getCssValue("background-color"); // use await. getAttribute is WebElement class method
            color_vals.push(cval);
        }
          
        expect(color_vals).toStrictEqual([yellow, gray, gray, yellow, gray])
    
        
        }, 30000);



    test('0th and 4th bulding getting light', async () => {           

        // HEIGHTS
        // Building 0: 1
        // Building 1: 1
        // Building 2: 1
        // Building 3: 1
        // Building 4: 2
    
        let color_vals = [];
        let target_building = 'b4';
    
        await driver.findElement(By.id('h_' + target_building)).clear(); //Clear the value of input element
        await driver.findElement(By.id('h_' + target_building)).sendKeys("2", "\n"); // Enter 2 and then hit enter
        
        async function isYellow(element){
            let color = await element.getCssValue("background-color");
            if (color === 'rgba(255, 255, 0, 1)'){
                return true
            }
            else{
                // console.log('returning false');
                return false
            }
        }
      
        await driver.wait(()=> isYellow(driver.findElement(By.id(target_building))),30000); //wait till isYellow returns true (because animation takes time to change color)
        
        for (i=0; i<buildings.length; i++){
            let c = await driver.findElement(By.id(buildings[i]));
            let cval = await c.getCssValue("background-color"); // use await. getAttribute is WebElement class method
            color_vals.push(cval);
        }
          
        expect(color_vals).toStrictEqual([yellow, gray, gray, gray, yellow])
    
        
        }, 30000);


    test('All buildings getting light', async () => {           

        // HEIGHTS
        // Building 0: 1
        // Building 1: 2
        // Building 2: 3
        // Building 3: 4
        // Building 4: 5
    
        let color_vals = [];
        let target_buildings = {
            'b0': '1',
            'b1': '2',
            'b2': '3',
            'b3': '4',
            'b4': '5'
        };
    

        async function heightSetter(target_buildings){
            
            for (const key in target_buildings){
                await driver.findElement(By.id('h_' + key)).clear(); //Clear the value of input element
                await driver.findElement(By.id('h_' + key)).sendKeys(target_buildings[key], "\n"); // Enter 2 and then hit enter
   
            }
            
   
        }

        await heightSetter(target_buildings);

        // await driver.findElement(By.id('h_' + target_building)).clear(); //Clear the value of input element
        // await driver.findElement(By.id('h_' + target_building)).sendKeys("2", "\n"); // Enter 2 and then hit enter
        
        async function isYellow(element){
            let color = await element.getCssValue("background-color");
            if (color === 'rgba(255, 255, 0, 1)'){
                return true
            }
            else{
                // console.log('returning false');
                return false
            }
        }
      
        await driver.wait(()=> isYellow(driver.findElement(By.id('b1'))),30000); //wait till isYellow returns true (because animation takes time to change color)
        await driver.wait(()=> isYellow(driver.findElement(By.id('b2'))),30000); //wait till isYellow returns true (because animation takes time to change color)
        await driver.wait(()=> isYellow(driver.findElement(By.id('b3'))),30000); //wait till isYellow returns true (because animation takes time to change color)
        await driver.wait(()=> isYellow(driver.findElement(By.id('b4'))),30000); //wait till isYellow returns true (because animation takes time to change color)
        


        for (i=0; i<buildings.length; i++){
            let c = await driver.findElement(By.id(buildings[i]));
            let cval = await c.getCssValue("background-color"); // use await. getAttribute is WebElement class method
            color_vals.push(cval);
        }
          
        expect(color_vals).toStrictEqual([yellow, yellow, yellow, yellow, yellow])
    
        
        }, 30000);



});




