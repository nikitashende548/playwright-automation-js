const {test, expect} = require ('@playwright/test');       //test → used to create a test expect → used for assertions
test ('Open Google',async ({page}) => {           // Open google: test name, page:pW broser tab, async:allow us to use wait

    await page.goto('https://www.google.com');
    console. log('Test');
    await expect(page).toHaveTitle(/Google/);
});