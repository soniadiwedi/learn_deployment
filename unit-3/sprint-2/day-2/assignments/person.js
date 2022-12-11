import {Person,Teacher,Engineer} from "./classes.js";

let p1=new Person('Vivek')
console.log(p1.sayHello());

let t1=new Teacher('Akash','Science')
console.log(t1.sayHello());
console.log(t1.teach());

let e1=new Engineer('sagar');
console.log(e1.earn())
console.log(e1.teach())


 