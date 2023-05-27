//number, biInt, string, boolean, null, undefined, objects and symbols

//<<---- NUMBER---->>
let num;
num=1
console.log(num);
console.log(typeof(num)); //This will show the datatype


//<<---- BIGINT---->>
let bigInT= 10n;
console.log(bigInT);
console.log(typeof(bigInT));//This will show the datatype


//<<---- STRING---->>
let str='This is a string';
console.log(str);
console.log(typeof(str));//This will show the datatype


//<<---- BOOLEAN---->>
let isGreater=4>1;
console.log(isGreater);
console.log(typeof(isGreater));//This will show the datatype


//<<---- NULL---->> null is an object
let details=null;
console.log(details);
console.log(typeof(details));//This will show the datatype


//<<---- UNDEFINED---->>
let date;
console.log(date);
console.log(typeof(date));//This will show the datatype


//<<---- OBJECT---->>
//Not a premitive datatype


//<<---- SYMBOL---->>
//Used to create unique identifiers for objects


//<<----TYPEOF---->>
//Used to return the type of operand



//PROBLEM?
/*
What is the output of the script?

let name = "Ilya";

alert( `hello ${1}` ); // ?

alert( `hello ${"name"}` ); // ?

alert( `hello ${name}` ); // ?
*/
 //Solution
    //alert( `hello ${1}` ); // ? hello 1
 
    //alert( `hello ${"name"}` ); // ? hello name
 
    //alert( `hello ${name}` ); // ? hello Ilya
 