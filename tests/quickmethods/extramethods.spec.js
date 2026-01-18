import { de } from "@faker-js/faker";
import { expect, test } from "@playwright/test";

test.skip("Working on disabled element", async function ({ page }) {
  
  await page.goto("https://seleniumpractise.blogspot.com/2016/09/how-to-work-with-disable-textbox-or.html");

  // force true 
  await page.locator("#pass").fill("mukesh otwani",{force:true})

  await page.waitForTimeout(10000)

});


test("Clicks with keyboard events", async function ({ page }) {
  
  await page.goto("https://freelance-learn-automation.vercel.app/signup");

  await page.getByText("Already a user? Login").click({modifiers:["Shift"]})

  await page.waitForTimeout(10000)


//await page.locator("").dblclick() use it for double clickawait page.locator("").dblclick()

});


test("Right Click", async function ({ page }) {
  
  await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

  await page.locator("//span[text()='right click me']").click({button:"right"})

  await page.waitForTimeout(2000)

  await page.locator("//span[text()='Delete']").click()

  await page.waitForTimeout(10000)


});


test("Keyboard Events", async function ({ page }) {
  
  await page.goto("https://freelance-learn-automation.vercel.app/login");

  await page.getByPlaceholder("Enter Email").fill("admin@email.com")

  await page.waitForTimeout(1000)

  await page.getByPlaceholder("Enter Email").press("ControlOrMeta+A")

   await page.waitForTimeout(1000)

  await page.getByPlaceholder("Enter Email").press("ControlOrMeta+C")

   await page.waitForTimeout(1000)

  await page.getByPlaceholder("Enter Email").press("Tab")

   await page.waitForTimeout(1000)

  await page.locator("#password1").press("ControlOrMeta+V") // you can use ControlOrMeta+Shift+Esc any sequence


});


test("Mouse Hover", async function ({ page }) {
  
  await page.goto("https://www.spicejet.com/");

  await page.locator("//div[text()='Add-ons']").hover()

  await page.locator("//div[text()='Taxi']").first().click()

  await page.waitForTimeout(15000)


});

test("Drag and Drop", async function ({ page }) 
{
  
  await page.goto("https://jqueryui.com/droppable/");

  let frame=page.frameLocator("//iframe[@class='demo-frame']")  

  let src=frame.locator("#draggable")

  let dest=frame.locator("#droppable")

  await src.dragTo(dest)

  await page.waitForTimeout(5000)

});


test("Drag and Drop Using Mouse Control", async function ({ page }) 
{
  
  await page.goto("https://jqueryui.com/droppable/");

  let frame=page.frameLocator("//iframe[@class='demo-frame']")  

  let src=frame.locator("#draggable")

  let dest=frame.locator("#droppable")

  await src.hover()

  await page.waitForTimeout(1000)

  await page.mouse.down()

  await page.waitForTimeout(1000)

  await dest.hover()

  await page.waitForTimeout(1000)

  await page.mouse.up()

  await page.waitForTimeout(5000)


});


test("Handle SSL Issues or Invalid Certificate", async function ({ page }) 
{
  
  await page.goto("https://expired.badssl.com/");

  await page.waitForTimeout(5000)


});

test("Basic Auth Handle", async function ({ page }) 
{
  
  await page.goto("https://the-internet.herokuapp.com/basic_auth");

  await page.goto("https://google.com");

  await page.goto("https://facebook.com");

  await page.goto("https://linkedin.com");

  await page.waitForTimeout(5000)

  await page.locator("").innerText()

  await page.locator("").innerHTML()

  await page.locator("").getAttribute("outerHTML")

  await page.locator().textContent()


});






































