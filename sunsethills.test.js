// const webdriver = require('jest');
const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('assert');


describe('Checking proper rendering of different elements', ()=>{
    var driver;

    beforeAll(async ()=>{
        // var driver = await new Builder().forBrowser('chrome').build();
        // await driver.get('C:/Github Repos/Sunset-Hills-Problem-main/Sunset-Hills-Problem/index.html');
    
    });
    

    test('Title is correct', async () => {           
        var driver = await new Builder().forBrowser('chrome').build();
        await driver.get('C:/Github Repos/Sunset-Hills-Problem-main/Sunset-Hills-Problem/index.html');
        var data = await driver.getTitle();
        // assert.equal(data, 'Sunset Hills Problem');
        expect(data).toBe('Sunset Hills Problem');
        
      });


});

// beforeEach(async ()=>{
//     let driver = await new Builder().forBrowser('chrome').build();
//     return await driver.get('C:/Github Repos/Sunset-Hills-Problem-main/Sunset-Hills-Problem/index.html');

// });


// it('Title is correct', async () => {       
    
//     // let driver = await new Builder().forBrowser('chrome').build();
//     // await driver.get('C:/Github Repos/Sunset-Hills-Problem-main/Sunset-Hills-Problem/index.html');
//     let data = await driver.getTitle();
//     assert.equal(data, 'Sunset Hills Problem');
    
//   });