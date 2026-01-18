// Import test and expect functions from Playwright test runner
import { expect, test } from "@playwright/test";

test("Auto wait", async ({ page }) => 
{

  await page.goto('https://freelance-learn-automation.vercel.app/login');

  await page.getByRole('textbox', { name: 'Enter Email' }).fill('admin@email.com');

  await page.getByRole('textbox', { name: 'Enter Password' }).fill('admin@123');

  await expect(page.getByRole('button', { name: 'Sign in' })).toBeVisible();

  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page.getByRole('heading', { name: 'Welcome Admin Manager to' })).toBeVisible();

  await page.getByRole('img', { name: 'menu' }).click();

  await page.getByRole('button', { name: 'Sign out' }).click();

  await expect(page.getByRole('heading', { name: 'Sign In' })).toBeVisible();

 

})


test('test', async ({ page }) => 
  {
  await page.goto('https://freelance-learn-automation.vercel.app/login');
  await expect(page.getByRole('link', { name: 'New user? Signup' })).toBeVisible();
  await page.getByRole('link', { name: 'New user? Signup' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Brinda');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('Brinda899999@gmail.com');
  await page.getByRole('textbox', { name: 'Password must be atleast 6' }).click();
  await page.getByRole('textbox', { name: 'Password must be atleast 6' }).fill('asdasdasdasdasd');
  await page.getByRole('checkbox', { name: 'Selenium' }).check();
  await page.locator('#gender2').check();
  await page.locator('#state').selectOption('Himachal Pradesh');
 
  await page.locator('#hobbies').selectOption('Reading');

  await page.locator('#hobbies').selectOption('Reading');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await expect(page.getByText('Signup successfully, Please')).toBeVisible();
});

 test('Spice Jet', async ({ page }) => 
  {
  await page.goto('https://www.spicejet.com/');

  await page.getByTestId('to-testID-origin').getByRole('textbox').click();

  await page.getByTestId('to-testID-origin').getByRole('textbox').fill('Bang');
  
  await page.getByText('Kempegowda International').click();
  await page.getByTestId('to-testID-destination').getByRole('textbox').click();
  await page.getByTestId('to-testID-destination').getByRole('textbox').fill('Chen');
  await page.getByTestId('undefined-month-September-2025').getByText('13').click();
  await page.getByTestId('return-date-dropdown-label-test-id').locator('div').nth(1).click();
  await page.getByTestId('undefined-month-October-2025').getByText('13').click();
  await page.getByTestId('home-page-travellers').locator('div').nth(1).click();
  await page.getByTestId('Adult-testID-plus-one-cta').getByTestId('svg-img').click();
  await page.locator('div').filter({ hasText: /^INR$/ }).first().click();
  await page.getByText('USD', { exact: true }).click();
  await page.getByTestId('home-page-flight-cta').click();
});

