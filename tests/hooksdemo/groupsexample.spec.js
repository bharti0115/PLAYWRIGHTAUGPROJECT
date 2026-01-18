import { expect, test } from "@playwright/test";

test.describe("Smoke Test", () => 
    {

    test("Test 1", async function ({ page }) {
        console.log("Test 1 Executed");
    });

    test("Test 2", async function ({ page }) {
        console.log("Test 2 Executed");
    });

    test("Test 3", async function ({ page }) {
        console.log("Test 3 Executed");
    });
    
});

test.describe("Regression Test", () => 
    {

    test("Test 3", async function ({ page }) {
        console.log("Test 3 Executed");
    });

    test("Test 4", async function ({ page }) {
        console.log("Test 4 Executed");
    });

    test("Test 5", async function ({ page }) {
        console.log("Test 5 Executed");
    });

    test("Test 6", async function ({ page }) {
        console.log("Test 6 Executed");
    });
});
