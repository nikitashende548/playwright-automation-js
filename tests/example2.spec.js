const {test, expect} = require('@playwright/test');
test('SauceDemo Login', async({page})=>{
     await page.goto('https://www.saucedemo.com/');
     await page.waitForTimeout(2000);
     await page.getByPlaceholder('Username').fill('standard_user');
     await page.getByLabel('Password').fill('secret_sauce');
     await page.getByRole('button', {name : 'Login'}).click();
     await expect(page.getByText('Products')).toBeVisible();
     await page.getByRole('button',{name : 'Add to cart'}).first().click();
     //page.locator("//button[@id='add-to-cart-sauce-labs-backpack']")
    //  await page.getByRole('button',{name : 'Remove'}).first().click();
    //  await page.getByRole('button', { name: 'Cart, empty' }).click();
     await page.getByRole('button',{name :'Cart, 1 items'}).click();
     //await page.waitForTimeout(4000);
     //await page.getByRole('button', { name: 'Sauce Labs Backpack' }).click();
     //await page.getByText('Sauce Labs Backpack').click();
     //await page.waitForTimeout(4000); 
     //await expect(page.getByText('29.99')).toBeVisible();
     //await expect(page.locator('[data-test="inventory-item-price"]')).toHaveText('$29.99');
     await page.getByRole('button',{name : 'Checkout'}).click();
     await page.getByPlaceholder('First Name').fill('Testing');
     await page.getByPlaceholder('Last Name').fill('Testing');
     await page.getByPlaceholder('Zip/Postal Code').fill('441912')    
     await page.getByRole('button',{name :'continue'}).click();
     await page.getByRole('button',{name: 'Finish'}).click();
     await expect(page.getByText('Thank you for your order!')).toBeVisible();
     console.log('Thank you for your order!');

});