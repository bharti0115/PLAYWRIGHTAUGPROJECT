import { Calc } from "./Parent.js";

class ScientCalc extends Calc
{
    //name="ABCCalc"

    add()
    {
        //super.add()
        console.log("We can perform basic advanced and scientific add operation");
    }

}
// object matters alot based on that respective methods can be called
const obj1=new ScientCalc()

obj1.add()

console.log(obj1.name);
