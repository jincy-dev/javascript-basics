//<<---- String conversion---->>
let value=true;
console.log(typeof(value)); //Here we got that the type is boolean

value=String(value);
console.log(typeof(value)); //Now we've converted the boolean value to string


//<<---- Numeric conversion---->>
    //Example 1
let num="123";
console.log(typeof(num));

num=Number(num);
console.log(typeof(num));
    //Example 2
    console.log( Number(true) ); 
    console.log( Number(false) ) ;
    console.log( Number('azx') )   


//<<---- Boolean conversion---->>
//Values like 0, null, undefined, NaN become false

console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(1));


