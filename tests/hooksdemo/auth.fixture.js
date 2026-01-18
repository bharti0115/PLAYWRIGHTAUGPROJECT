// fixtures/authData.fixture.ts (or .js)
import { test as base , expect} from '@playwright/test';

export const test = base.extend(
  {
    loggedInUser: async ({ page }, use) => 
    {
    await page.getByPlaceholder('Enter Email').pressSequentially('admin@email.com', { delay: 200 });

    await page.getByPlaceholder('Enter Password').pressSequentially('admin@123', { delay: 200 });

    await page.getByText('Sign in').last().click();

    console.log('Running Before Test');

    await use(page);

    console.log('Running After Test');

    await page.getByAltText('menu').click();
    await page.getByText('Sign out').click();
    await expect(page).toHaveURL(/login/);
  },

});
