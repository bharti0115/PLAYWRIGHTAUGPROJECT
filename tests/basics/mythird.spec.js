import {test , expect} from "@playwright/test"

test("This is my first expect test", function ()
{
    // actual results will be coming from playwright test while running
    // expected will be coming your manual test cases
    expect("Playwright").toEqual("Playwright")

    expect("Playwright").toContain("Play")

    expect("Playwright").not.toEqual("Cypress")
    
})

test("This is my second expect test", function ()
{
    // actual results will be coming from playwright test while running
    // expected will be coming your manual test cases   
    expect(200).toBeGreaterThan(100)

    expect(89).toBeLessThan(100)

    expect(404).toBeGreaterThanOrEqual(404)
})

test("This is my third expect test", function ()
{
    expect(["Amit","Bhuppi","Avinash","Balaji"]).toContain("Amit")
    
})