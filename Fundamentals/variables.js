//<<---- Method 1---->>
let msg1='Message1';
let msg2='Message 2';
let number=5;

console.log(msg1);
console.log(msg2);
console.log(number);


//<<---- Method 2---->>
let message='This is a message';
let message2='This is the second message';
console.log(message+ ' ' + message2); // ' ' is use for giving space


//<<----Method 3---->>
let num=4,
num1=5,
num2=6;        //define multiple variables in multiline style
console.log(num+num1+num2);


//<<----Method 4---->>
let word;
word='Hello';
console.log(word);


//<<----Elimination---->>
let name1;
name1='Hello';
name1='World';
console.log(name1); //Since we've declared 2 values, the old value is removed






//We can also use alert(); instead of console.log();





/*PROBLEM?
Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using log (must output “John”). 
*/
 //Solution
let admin;
let name='John';

admin=name;
 console.log(admin);