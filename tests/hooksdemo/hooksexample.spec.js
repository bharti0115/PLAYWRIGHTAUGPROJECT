
import { expect, test } from "@playwright/test";

test.beforeAll(async()=>
{
    console.log("Running Before All Hooks");    
})

test.beforeEach(async()=>
{
    console.log("Running Before Each Hooks");    
})

test("Test 1", async function ({ page }) 
{ 
    console.log("Test 1 Executed");
    
});

test("Test 2", async function ({ page }) 
{
    console.log("Test 2 Executed");
    
});

test("Test 3", async function ({ page }) 
{
    console.log("Test 3 Executed");
     
});


test.afterEach(async()=>{

    console.log("Running After Each Hooks");
    
})

test.afterAll(async()=>{

    console.log("Running After All Hooks");
    
})
