// difference between Map vs WeakMap https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap

const m1=new Map()

console.log(m1);

m1.set("id",125)

m1.set("id",130)

m1.set("name","Ankit")

m1.set("empname","Ankit")

console.log(m1);

console.log(m1.get("empname1"));

m1.delete("name")

console.log(m1);

console.log(m1.keys());

console.log(m1.values());

console.log(m1.has("id"));

console.log(m1.entries());




