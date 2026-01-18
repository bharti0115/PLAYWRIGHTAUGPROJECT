// JS Dont have collection framework - built in JS Classes dynamic

// Set dont allow duplicates
// Set dont work on Index
const s1=new Set() // creates object - empty object of set
console.log(s1);
s1.add(12)
s1.add(12)
s1.add(12)
s1.add("Mukesh")
s1.add(12.25)
s1.add(false)
s1.add({"name":"Playwright"})
console.log(s1);
console.log(s1.size);
s1.delete(12)
console.log(s1);
console.log(s1.has(12.35));




