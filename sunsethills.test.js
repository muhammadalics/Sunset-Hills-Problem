// const webdriver = require('jest');
const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('assert');


describe('Checking proper rendering of different elements', ()=>{
    let driver;

    beforeEach(async ()=>{
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('C:/Github Repos/Sunset-Hills-Problem-main/Sunset-Hills-Problem/index.html');
    });

    afterEach(async()=>{
        await driver.quit();
    });


    test('Title is correct', async () => {           
        var data = await driver.getTitle();
        expect(data).toBe('Sunset Hills Problem');
        
      });

    test('Title is correct222222222', async () => {           
        var data = await driver.getTitle();
        expect(data).toBe('Sunset Hills Problem');
        
      });
      

});

