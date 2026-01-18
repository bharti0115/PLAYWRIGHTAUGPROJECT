import {test, expect} from '@playwright/test';

test('Visual Regression Test', async ({page}) => {
  // Set a higher timeout for this test
  test.setTimeout(120000);

  // Navigate to the target page
  await page.goto('https://freelance-learn-automation.vercel.app/signup');

  // Perform any necessary actions to reach the desired state
  // e.g., logging in, navigating through menus, etc.

  // Capture a screenshot of the page

  await page.waitForTimeout(5000)

  const screenshot = await page.screenshot();

  // Compare the screenshot with the baseline image
  expect(screenshot).toMatchSnapshot('baseline-image.png', { threshold: 0.2 });
});
