//LOOPS AND STRINGS
//FUNCTIONS (ARROW FUNCTIONS)


//LO0PS ARE USED TO EXECUTE A CODE AGAIN AND AGAIN, for , while , do while
//(ex;spotify songs plays in a loop)

//(INITIALIZATION i=0 , STOPPING CONDITION i<=5 , UPDATION i++)

//PRINT 1 TO 5
// for (let count=1 ; count<=5 ; count++ ){
//     console.log("HARIKA JOWAKAPALLI");// 5 execute
// } console.log("loop has ended");

// i=1 , 1<=5 true
 // i=2 , 2<=5 true
 //i=3 , 3<=5 true
 //i=4 , 4<=5 true
 //i=5 , 5<=5 true
 //i=6 , 6<=5 false ,(comes out of lopp and loop has ended)


 //CALCULATE SUM OF 1 TO n
//  let sum = 0;
// let n    = 100;
//  for (let i=1; i<=n ; i++){
//     sum=sum+i;
//  }
//  console.log("sum=",sum);
//  console.log("loop has ended");

//  for (let i=1 ; i<=5 ; i++ ){
//      console.log("i=",i);
//  }
//  console.log(i);//error comes here  but if i use var instead of let in for loop, thhen out of loop i value wil print


//INFINITE LOOP(LOOP THAT NEVER ENDS)(we shouldnt use it in coding to save memory in computer, it may damange our website)
//STOPPING CONDITION IS ALWAYS TRUE
//for (let i=1 ; i>=0 ; i++){
//    console.log("i=",i);
//}....


//WHILE LOOP
//while(conditipn , still it gets true//initialization){
    //do some work(updationi++)
//}

// let i = 1
// while(i<=5){
//     console.log("i=",i);
//     i++;
// }

// let i = 1
// while(i<=10){
//     console.log("harika");
//     i++;
// }

//let i = 20
// while(i<=10){
//     console.log("harika");
//     i++;
// }....it will not print anything but in the case of do while it will print bcuz condition we are giving in the end

//DO WHILE LOOP(guarantee is that do while loop will run atleast one time)
// do{
//     do some work
// }while(condition);(at last)

//     let i = 20
//   do{
//    console.log("harika");
//         i++;
//      }while(i<=10);

// let i = 1
// do{
//  console.log("i=",i);
//       i++;
//    }while(i<=5);

//FOR-OF LOOP, FOR-IN LOOP(HELPS TO DO ITERATE LOOP ON SOME SPECIAL DATA TYPES)
//FOR-OF LOOP(HELPS TO CRATE LOOP IN STRINGS AND ARRAYS)(eg: "TONY", THE LOOP GO THROUGH EACH AND EVRY LETTER IN THAT WORD T,O,N,Y)
//for(let val of strVar){
    //do some work
//}
//(in for of loop i value comes automatically ,  updatios also will be automatic here , no iniatialization and no updation and no stopping condition ,  these all will be done by for of loop automatically)

// let str = "javascript";
// let size = 0;
// for(let val of str){ //iterator characters
//     console.log("val=",val);
//     size++;
// }
// console.log("string size=",size);//10

//for of loop not used for onjects


//FOR -IN LOOP IS USED FOR (OBJECTS AND IN ARRAYS)
//for(let key in onjVar){
    //do some work
//}

// let student = {
//     name : "harika",
//     age : 25,
//     cgpa : 8.5,
//     isPass :true,
// };
// for (let key in student){
//     console.log("key=",key , "value=", student[key]);//student[key],key is a variable only not a string here so no double quotes
// }


//PRINT ALL EVEN NUMBERS FROM 0 TO 100

// for( let i=1 ; i<=100 ; i++){
    
//     if(i%2 !== 0){
//         console.log("i=",i);
//     }
// }...

//CREATE A GAME WHERE U START WITH ANY RANDOM GAME NUMBER.ASK THE USER TO KEEP GUESSING THE GAME NUMBER UNTIL THE USER ENTERS CORRECT VALUE
// let gameNum = 25;
// let userNum = prompt("Guess the game number: ");
// while( userNum != gameNum){
//    userNum = prompt("You enetred wrong  game number. Guess again: ");
// }
// console.log("congratulations ,you entered the right number");

//STRINGS(IS A SEQUENCE IF CHARACTERS USED TO REPRESENT TEXT)
//CREATE A STRING(let str = "harika")
//STRING LENGTH(str.length)
//STRING INDICES(str[0],str[1],str[2])

// let str = "harika";
// let str2 = 'harika';
//console.log(str[1]);//h

//STRINGS HAS SOME INBUILT PROPERTIES AND SOME INBUILT FUNCTIONS(METHODS)
//(eg : str.length ...if u want o/p of length then u can check directly in console...str2.length)

//obj.key  //obj[key]  //str.length  //str[position],index,indices


//TEMPLATE LITERALS(IS A WAY TO HAVE EMBEDDED EXPRESSIONS IN STRINGS)(its a special type of string)
//`this is a template literal`
//STRING INTERPOLATION
//`string text${expession}string text`

// let obj = {
//     item :"pen",
//     price: 12,
// };
// let output = `the cost of ${obj.item} is ${obj.price} rupees`;//easy
// console.log(output);


//console.log("the cost of", obj.item , "is"   ,  obj.price , "rupees");//hard to wite commas and all
          // ("string"     , variable ,"string",   variable , "string")  we can combine all these  and put it in a single string by template literals          
          //  (with string we can write variables too inside it) 

//TEMPLATE LITERALS
// let specialString =`this is a template literal ${ 1 + 2 + 3}`;
// console.log(specialString);

//ESCAPE CHARACTERS ("\n")next line  , (\t gives tab space)
//console.log("harika \t jowakapalli");

//let str = "apna\tcollege";//13 should come but only 12 will get print bcuz escape characters \t count as 1 only
//console.log(str.length);

//STRING METHODS IN JAVASCRIPT(STRING METHODS OR FUNCTIONS ARE SAME)(METHOD TO DO SOME WORK)(METHOD ID LIKE A BLOCK OF CODE AND DO SOME WORK AND GIVE US OUTPUT)
//THESE ARE BUILT IN FUNCTIONS TO MANIPULATE A STRING
//str.toUpperCase()
//str.toLowerCase()
//str.trim()//removes whitespaces(IN STARTING AND IN ENDING)

// let str = "ApnaCollege";
// str.toUpperCase();
// console.log(str);//but it willprint  return ApnaCollege only ,it wont get changed to uppercase bcuz all the string methods wont change the original string, these methods always returns a new value , new string
//STRINGS ARE IMMUTABLE IN JAVASCRIPT (MEANS STRINGS  WONT GET CHANGES IN JS)(IF U WANT CHANGE THEN U AVE TO CRAETE A NEW STRING FOR IT)

// let str = "ApnaCollege";
// let newStr = str.toUpperCase();
// console.log(str);
// console.log(newStr);

//let str = "               javascript      harika";
//console.log(str.trim());//middle spaces will be left  but strt and end spaces get removed

//str.slice(start,end?)//returns pat of a string(starting index and ending index)
//abcdefg(start->c , end->f)the slice part will print as "cde" only and the end value is not inclusive in it

//let str = "extravagant";
//console.log(str.slice(1));//ending index is not given so it will print to last word
//console.log(str.slice(1,8));

//str.concat(str2)//joins str2 with str1
// let str1 = "apna";
// let str2 = "college";
//console.log(str1.concat(str2));
// let res = str2.concat(str1);
// console.log(res);

// let res ="iam learning coding from" str1 + str2;
//let res = "hello" + 123;
// console.log(res);

//str.replace(searchVal, newVal)....(eg:abcdef in the place of f u wanna put it as 123...abcde123)
// let str = "hello";
// console.log(str.replace("hell" , "fell"));

// let str = "hellololo";
// console.log(str.replaceAll("lo" , "p"));


//str.charAt(idx)
// let str = "ILoveJs";
// console.log(str.charAt(5));//J

// let str = "ILoveJs";
// str[0] = "S";//to do this we can use replavce method(str = str.replace("I","S"));
// console.log(str);//SLoveJs bcuz original string is immutable if u want to change anything in the string u hv to create a new string


//PROMPT THE USER TO ENTER THIER FULL NAME.GENERATE A USERNAME FOR THEM BASED ON THE INPUT.START USERNAME WITH @, FOLLOWED  BY THEIR FULLNAME AND ENDING WITH THE FULLNAME LENGTH
//EG: "shradhakhapra", username should be "@shradhakhapra13"(length of their fullname 13)

// let fullName  =   prompt("enter your fullname without spaces");
// let userName =   "@" + fullName + fullName.length;
// console.log(userName);



//ARRAYS(COLLECTION OF ITEMS...LINEAR 1,2,3,4,5....INDEX POSITION MATTERS HERE)||OBJECTS(STUDENT RELATED INFO , IN OBJECTS KEY MATTERS , HERE KEY VALUE IS IN PAIRS)
//CLASS OF 5 STUDENTS MARKS(SAME TYPE OF RELATED INFO STORED IN ARRAYS)
//let array or const array = [" , , "];
//let marks = [98, 85,45,33];
//let info = ["hero","heroine","comedian"];
//let info = ["rahul" , 12 , "seeta"];//this is not a good practice , normally arrays should be related to same type of items

// let marks = [98 , 65, 83, 82, 43 , 99];
// console.log(marks);
// console.log(marks.length);//length is a property here
//typeof marks ...is object bcuz array is a typeof object......
//in the place of key we use index in array 0:98 , 1:65 , 2:83 ,3:82 , 4:43 ,5:99)

//property and methods diffrence is that property is a gives a value and methods is like it will do some work

// let heroes = ["ironman", "thor" ,"shaktiman"];
// console.log(heroes);

//funny thing about JS is that we dont know when it becomes an onject ,they turn out to be objets and they behave like an objectswhih is weird and interesting aprt about JS

//ARRAY INDICES
//arr[0],arr[1],arr[2]...
//0,1,2,3,4,5.....the values are stored in a linear fashion singke line
//marks[0]=66(can be changed)....but in strings we cant change it cuz its immutable and arrays are mutable

//LOOPING OVER AN ARRAY , PRINT ALL ELEMENTS IN ANA ARRAY
//let heroes = ["ironman", "thor" ,"shaktiman" , "batman", "superman"];
// console.log(heroes[0]);
// console.log(heroes[1]);///so to avoid this we use loops to iterate into arrays.objects,strings and print values
//string is a characters ka collection
//objects are key value pairs ka collection
//array is a similar type of items ka collection values
//all these are iterable through loops
//for loop :length property for array of 1,2,3,4,5....length of this array is 5 but last index of this array is 4
//for (indx=0 ; indx < arr.length ; indx++){
//}


//FOR LOOP IN ARRAY
// let heroes = ["ironman", "thor" ,"shaktiman" , "batman", "superman", "spiderman"];
// for (let i=0; i < heroes.length ; i++){
//     console.log(heroes[i]);
// }

//this is not a standard way to follow
// let heroes = ["ironman", "thor" ,"shaktiman" , "batman", "superman", "spiderman"];
// for (let idx=1; idx <= heroes.length ; idx++){
//     console.log(heroes[idx-1]);
// }

//FOR-OF LOOP
// let heroes = ["ironman", "thor" ,"shaktiman" , "batman", "superman", "spiderman"];
// for(let hero of heroes){
//     console.log(hero);
// }

// let cities = ["delhi" , "pune" , "mumbai", "hyderabad" , "gurgaon", "banglore"];
// for(let city of cities){
//     console.log(city.toUpperCase());
// }

// we can use FOR EACH LOOP also in arrays

//FOR A GIVEN ARRAY WITH MARKS OF STUDENTS [85, 97, 44 , 37 ,76,60]FIND THE AVERAGE MARKS OF ENTIRE CLASS.
//  let m = [85 , 97, 44 , 37, 76, 60];
//  let sum   = m[0]+m[1]+m[2]+m[3]+m[4]+m[5];
//  let total = m.length;
//  let avg   = sum/total;
//  console.log(avg);


// let marks = [85 , 97, 44 , 37, 76, 60];
// let sum = 0;
// for(let val of marks){
// sum += val; //sum = sum + val;(assignment operator)
// }
// let avg = sum/marks.length;
// console.log(`avg marks of the class = ${avg}`);

//FOR A GIVEN ARRAY WITH PRICES OF 5ITEMS [250 , 645, 300 ,900 ,50] ALL ITEMS HAVE AN OFFER OF10% OFF ON THEM.CHANGE THE ARRAY TO STORE FINAL PRICE AFTER APPLYING OFFER
//300 = 30 OFF = 300-30 = 270
//900 = 90 OFF = 900-90 = 810

//  let items = [250 , 645 , 300 , 900 , 50];
//  let i = 0;
//  for(let val of items){
//    // console.log(`value at index ${i} =${val}`);
//     let offer = val/10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`)
//      i++;
//  }//..WE ARE TRACKING THIS INDEX USING FOR OF LOOP INDIRECTLY BUT NOT DIRECTLY

//SO TRACK INDEX DIRECTLY WE HAVE TO USE FOR LOOP
// let items = [250 , 645 , 300 , 900 , 50];
// for (let i=0 ; i<items.length; i++){
//     let offer = items[i]/10;
//     items[i] -= offer;
// }
// console.log(items);

//ARRAY METHODS
//Push():add to end
//pop() :delete from end & return
//toString() :converts array to string

//let foodItems = ["potato", "apple" , "litchi" , "tomato"];
//foodItems.push("chips", "banana", "paneer");
// console.log(foodItems);
// let deletedItem = foodItems.pop();
// console.log(foodItems);
// console.log("deleted",deletedItem);

// let foodItems = ["potato", "apple" , "litchi" , "tomato"];
// console.log(foodItems);
// console.log(foodItems.toString());//returns new string
// console.log(foodItems);//original array doesnt get changed

// let marks = [98,88,65,78];
// console.log(marks.toString());


//concat() :JOINS MULTIPLE ARRAYS AND RETURNS RESULT
//unshift():ADD TO START//like a PUSH METHOD
//shift()  :DELETE FROM START AND RETURN // LIKE POP METHOD

// let marvelHeroes = ["thor", "spiderman" , "ironman"]
// let dcHeroes     = ["superman", "batman"];
// let indianHeroes = ["shaktiman", "krish"];
// let heroes = marvelHeroes.concat(dcHeroes,indianHeroes);
// console.log(heroes);

//let marvelHeroes = ["thor", "spiderman" , "ironman"]
//marvelHeroes.unshift("shaktiman");
// let val = marvelHeroes.shift();
// console.log("deleted", val);

//Slice() : RETURNS A PIECE OF THE ARRAY and doesn't change  values in original array
//slice(startIdx , endIdx)

//Splice() : CHANGE ORIGINAL ARRAY (add , remove , replcae)//changes in the original array
//splice (startIdx , delCount , newEl1...)


// let marvelHeroes = ["thor", "spiderman" , "ironman", "antman" , "batman"];
// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(1,3));//end value is non inclusive
// console.log(marvelHeroes.slice());

//splice (startIdx , delCount , newEl1...)
//let arr = [1,2,3,4,5,6,7];
// arr.splice(2, 2, 101 ,102);

//add ELEMENT
//arr.splice(2, 0 , 101);

//DELETE ELEMENT
//arr.splice(3 , 1);

//REPLACE ELEMENT
// arr.splice(3 , 1, 101);


//CREATE AN ARRAY TO STORE COMPANIES --["bloomberg" , "microsoft" , "uber", "google" , "ibm" , "netflix"]; AND 1)REMOVE THE FIRST COMPANY FROM THE ARRAY 2)REMOVE UBER AND ADD OLA IN ITS PLACE 3) ADD AMAZON AT THE END
//let companies = ["bloomberg" , "microsoft" , "uber", "google" , "ibm" , "netflix"];
//console.log(companies.shift());
//console.log(companies.splice(2, 1 , "ola"));
//console.log(companies.push("amazon"));


//FUNCTIONS--BLOCK OF CODE THAT PERFORMS A SPECIFIC TASK , CAN BE INVOKED(CALL) WHENEVER NEEDED
//console.log("hello!");//(.log will always print something)
//"abc".toUpperCase()//(will always converts small letters to capital letters)
//"xyz".toUpperCase()
//[1,2,3].push(4);//(same work of push is to add another  new value in an array)
//these are also examples of function (same work is done again and again)
//functions will always invoked by paranthesis()
//input (inp) -> [black box] -> work output

//function definition 
//function functionName(){
    //do some work
//}

//function call or invoke
//functionName();

//function functionName(param1 , param2 , ...){
    //do some work
//}

//function myFunction(){
//console.log("welcome to apna college");
//  console.log("we are learning javascript");
//}//no need to put semicolar ; bcuz its already understood that function starts and ends {}
//myFunction();//u have to call this function with ots name orelse it wont print any values
//myFunction();
//redundancy means things repeating 
//good developers use functions for things which are getting repeated in code(so we should minimise the redundancy of the code)


//function myFunction(msg){ //parameter -> input variable
  //console.log(msg)
//}
//myFunction();//for tthis result will come as undefined bcuz we did not gave anything in msg

//function myFunction(msg , n){ 
   // console.log(msg*n)
  //}

  //output is NaN(NOT A UMBER , THIS IS NOT VALID U CANT MULTIPLY STRING WITH A NUMB)
  //myFunction("i love javascipt" , 100);//argument 

  //parameter and argument are same only , but the only difference is if we pass in function definition its called as parameter
  // if its passed in function call its called as argument

  //CRAETE A FUNCTION WHICH CALCULATES 2 NUMBERS SUM(LETS SAY IN OUR CODE WE AHVE TO SUM TWO NUBERS AGAIN AND AGAIN)
//function sum(a,b){
  //  console.log(a+b);
//}
//sum(1,2);
//sum(13786424 , 457843);
//function can be given input and they can return us values too , we hv to use return keyword


/*function sum(x,y){
    // these parameters x and y are function local variables(in this block of code ...wil be as scope) -> scope ...means that particular variable 
    //Scope in JavaScript defines the accessibility and visibility of variables and functions within a program
    //these local variables can be accessed within that {}...out of that it cant be accessed
S = x+y;
console.log("before return");
 return S; //RETURN ONLY ONE VALUE IT CAN BE STRING OR NUMBER OR ARRAY OR OBJECT
console.log("after return");//this line wont execute bcuz after return nothing will execute
//so we shouldn't write anything after return in functions
}
let val = sum(3,4);
//console.log(x);//error comes here bcuz local variable x cant be accessed out of that function..x is not defined
console.log(val);

function sum(x, y) {
    S = x + y;
   return S;
}*/


//function parameters are like local variables of function and it has block scope of that function only

/*let val = sum(3, 4);
console.log(val);....here why did they put let val= sum...cant they just give it as sum(3,4) and another doubt is S is var right so....we can write as var S right?
ChatGPT
ChatGPT
In JavaScript, you can indeed directly call the sum function without assigning its return value to a variable, like so:

javascript
Copy code
console.log(sum(3, 4));
This would output the result of the sum directly to the console.

Regarding your second question, S is not declared with var, let, or const in your code, so it will become a global variable. Here's what happens:

javascript
Copy code
function sum(x, y) {
   S = x + y; // Implicit global variable declaration if "use strict" mode is not enabled
   return S;
}

let val = sum(3, 4);
console.log(val);
If you intend for S to be a local variable within the sum function, it's best to declare it using var, let, or const:

javascript
Copy code
function sum(x, y) {
   let S = x + y; // Declaring S as a local variable using let
   return S;
}

let val = sum(3, 4);
console.log(val);
This way, S will be scoped only within the sum function and won't accidentally affect or be affected by other parts of your code.*/




//ARROW FUNCTIONS..COMPACT(small) WAY OF WRITING A FUNCTION
//const functionName = (param1, param2..) => {
    //do some work
//}

//const sum = (a,b)=>{
  //  return a+b;
//}

/*sum function
function sum(a,b){
    return a+b;
}

//multiplication function
function mul(a,b){
    return a*b;
}*/

//we can write these functions in small way with ARROW FUNCTIONS
//ARROWS FUNCTIONS VALUES RESULT CAN BE STORED IN A VARIABLE

/*const arrowSum = (a,b)=>{
    console.log(a+b);
}*/
//within the value of arrowSum it has one whole storage of function definition//arrowSum(a,b)=>{// console.log(a+b);//}


//ARROW FUNCTIONS ARE PART OF MODERN JS

/*const arrowMul = (a,b) => {
    console.log(a*b);
}
arrowMul(3,4)*/

/*const arrowMul = (a,b) => {
    return a*b;
}
arrowMul(3,4)*/


/*You
const arrowMul = (a,b) => {
    console.log(a*b);
}
arrowMul(3,4)...i have understood this but when i use const arrowMul = (a,b) => {
    return a*b;
}
arrowMul(3,4)....wheni use return whats happening...wats the use of return why do they use return in functions
ChatGPT
ChatGPT
In JavaScript functions, the return statement is used to specify the value that the function should return to the caller. When you use return in a function, it means that the function will evaluate the expression following return and return that value back to the point where the function was called.

In your first example:

javascript
Copy code
const arrowMul = (a, b) => {
    console.log(a * b);
}

arrowMul(3, 4);
This function arrowMul calculates the product of a and b and logs it to the console. But it doesn't return any value. It simply performs a task (printing to the console) but doesn't provide any output that can be used further in the program.

In your second example:

javascript
Copy code
const arrowMul = (a, b) => {
    return a * b;
}

arrowMul(3, 4);
This function arrowMul still calculates the product of a and b, but this time it returns the result using the return statement. This means that when you call arrowMul(3, 4), it evaluates 3 * 4, returns the result 12, and then you can use this result in your program, such as assigning it to a variable or passing it to another function.

The return statement is particularly useful when you want your function to compute some value that you need to use elsewhere in your code, rather than just performing a task like logging to the console.*/

//const printHello = () => {
  //  console.log("hello");
//}//and we can remove these curly barces and put in one line also

//const printHello = () => console.log("hello");// u can write it in one line arrow function also


//CREATE A FUNCTION USING THE "FUNCTION" KEYWORD THAT TAKES A STRING AS AN ARGUMENT & RETURNS THE NUMBER OF VOWELS IN THE STRING

/*function countVowels(str){
    let count = 0 ;
    str = str.toLowerCase();
    for (const char of str){
        if(char === "a" || char === "e" || char === "i" || char ==="o" || char === "u")
            {
                count++;
            }
        }   
    return count;
    }
    console.log (countVowels("harika"));*/

 //CREATE AN ARROW FUNCTION TO PERFORM THE SAME TASK
 
 /*const countVow = (str) => {
    let count = 0 ;
    str = str.toLowerCase();
    for (const char of str){
        if(char === "a" || char === "e" || char === "i" || char ==="o" || char === "u")
            {
                count++;
            }
        }   
    return count;
    }
    console.log (countVowels("tom"));*/
 

//FOR EACH LOOP IN ARRAYS (INBUILT FUNCTION) (ITS A METHOD) 
//arr.forEach(callBackFunction)
//callbackFunction : Here it is a function to execute each element in the array
//callback is a function passed as an argument to another function 

//arr.forEach((val) => {
    //console.log(val);
//})
 


/*
function and method difference and similarities in JS in 3 lines with example
ChatGPT
ChatGPT
In JavaScript, a function is a block of code that can be called independently, while a method is a function that is associated with an object.

Similarities:

Both functions and methods can be defined using the function keyword.
They can both accept parameters and perform tasks or return values.
Differences:

Functions can be standalone or globally defined, whereas methods are typically defined within objects.
Methods are accessed via dot notation on objects, while functions can be called directly.
Example:

javascript
Copy code
// Function
function add(a, b) {
    return a + b;
}

// Method
const object = {
    value: 10,
    increment: function() {
        this.value++;
    }
};

console.log(add(3, 4)); // Output: 7
object.increment();
console.log(object.value); // Output: 11
*/


//JS FUNCTIONS ARE VERY SPECIAL BCUZ FUNCTIONS CAN BE PASSED INTO ANOTHER FUNCTIONA AS NORMAL VARIABLES AND CAN BE RETURNED

/*function abc(){
    console.log("hello");
}
 
function myFunc(abc){
    return abc;
}*/

//FOR EACH LOOP IN AN ARRAY

//let arr = [1,2,3,4,5];
//arr.forEach(function printVal(val) { // value at each index, passes each value at evry index
//    console.log(val);
//});//output 1 2 3 4 5

//another way
//
//let arr = [1,2,3,4,5];
//arr.forEach((val) => {
  //  console.log(val);
//});

//(val) => {   console.log(val);   }
//this is the callback function in it and it has 3 parameteers that we can use it and these are optional 
//one is value -> item
//two is index -> position
//three is array itself 

//let arr1 = ["pune","mumbai","chennai","vizag","lucknow"];
//arr1.forEach((city , idx, arr1) => {
  //  console.log(city.toUpperCase() , idx , arr1);
//});

// for each is only used for arrays not for strings

//WHAT ARE HIGHER ORDER FUNCTIONS/METHODS IN JS? (FUNCTION AS PARAMETER , FUNCTION AS RETURN)
//THATS IS FOREACH ....HIGHER ORDER FUNCTIONS ARE THOSE WHICH OTHER FUNCTIONS KO TAKE AS PARAMETER  AND CAN RETURN ANY OTHER FUNCTION
//THESE ARE METHODS THAT EITHER TAKE ANOTHER FUNCTION AS A  PARAMETER INSIDE THEM OR THEY RETURN ANOTHER FUNCTION AS THEIR OUTPUT


//FOR A GIVEN ARRAY OF NUMBERS , PRINT THE SQUARE OF EACH VALUE USING FOR LOOP?

/*let arr = [1 , 2, 3, 4, 5];
arr.forEach((val) => {
    val = val**2;
    console.log(val);
});*/

/*let nums = [ 2, 3, 4,7 ,9];
nums.forEach((num) => {
console.log(num * num);//or num**2
});*/


//ANOTHER WAY TO WRITE CALLBACK
/*let nums = [ 2, 3, 4,7 ,9];

let calcSquare = (num) => {   //calcSquare is  a function
    console.log(num * num);//or num**2
    }

nums.forEach(calcSquare); // this one will also give same result */


//SOME MORE ARRAY METHODS
//MAP || VERY SIMILAR TO FOR EACH  || ONLY DIFFERENCE ID THAT MAP RETURNS THE RESULT AS  "NEW ARRAY" || BUT FOR EACH DO SOME WORK AND CALCULATES AND GIVE IT 
//CREATES A NEW ARRAY WITH THE RESULTS OF SOME OPRATION . THE VALUE ITS CALLBACK RETURNS ARE USED TO FORM NEW ARRAY
//arr.map(callbackFnx(value , index , array))

//let newArr = arr.map((val) => {
    //return val*2
//})

/*let nums = [12, 34 ,56, 78, 90];
let newArr = nums.map((val) => {
     return val;// u can store square of that value too by giving val*val or val*2 or anything
});
console.log(newArr);*/

//SOME MORE ARRAY METHODS
//FILTER METHOD
//CREATES A NEW ARRAY OF ELEMENTS THAT GIVE TRUE FOR A CONDITION / BASED ON SOME CONDTION IT WILL FILTER
//EG : ALL EVEN  ELEMENTS
//let newArr = arr.filter( (val) =>{
//trutun  val%2 === 0; // true values store in newarr and false alues dont store in newarr
//})


/*let arr = [1 , 2, 3, 4, 5,6 ,7, 8, 9];
let evenArr = arr.filter((val) => {
return val%2 === 0;// odd !== // val>3 
});
console.log(evenArr);*/

//SOME MORE ARRAY METHODS
//REDUCE METHOD
//PERFORMS SOME OPERATIONS AND REDUCES THE ARRAY TO A SINGLE VALUE. IT RETURNS THAT SINGLE VALUE

/*let arr = [1,2,3,4];
const output = arr.reduce((prev , curr) => {
return prev + curr;
});
console.log(output);*/

//PRINT THE LARGEST NUM IN AN ARRAY

/*let arr = [9, 7, 5, 17];
const output = arr.reduce((prev , curr) => {
return prev > curr ? prev : curr; //conditional or ternary operator
});
console.log(output);*/

//WE ARE GIVEN ARRAY OF MARKS OF STUDENTS , FILTER OUTOF THE MARKS OF THE STUDENTS THAT SCORED 90+

/*let marks = [70, 90, 98, 76, 65, 95, 86, 99, 92, 77, 50 ];
let toppers  = marks.filter((val) => {
return val > 90 ;
});
console.log(toppers);*/


//TAKE A NUM N AS I/P FROM USER . CRAETE AN ARRAY OF NUMBERS FROM 1 TO N. 
//USE THE REDUCE METHOD TO CALCULATE SUM OF ALL NUMBERS IN THE ARRAY
//USE THE REDUCE METHOD TO CALCULATE PRODUCT OF ALL NUMBERS IN AN ARRAY(FACTORIAL OF N)

/*let n = prompt("enter a number : ");
let arr = [];
for(let i=1 ; i<=n ; i++ ){
    arr[i-1] = i; //1(0) , 2(1), 3(2), 4(3)
}
console.log(arr);

let sum = arr.reduce((prev, curr) => {
return prev + curr;
});
console.log("sum =" , sum);

let factorial = arr.reduce((prev, curr) => {
    return prev * curr;
    });
 /*console.log("factorial=",factorial);
....

/*
let n = prompt("enter a number: ");: This line prompts the user to enter a number, and whatever the user inputs is stored in the variable n.

for (let i = 1; i <= n; i++) {: This line initializes a loop variable i with the value 1.

The loop continues as long as i is less than or equal to n.
In each iteration of the loop, i is incremented by 1.
Example: Let's say the user enters 5 for n. The loop will start with i = 1, and it will continue as long as i is less than or equal to 5.

Inside the loop, arr[i - 1] = i;:

This line assigns the value of i to the i-1th index of the arr array.
Since array indices start from 0, we need to subtract 1 from i to get the correct index.
Example: When i = 1, arr[i - 1] = arr[0] = 1. So, 1 will be stored at index 0 of the array arr.

After the loop finishes executing, the entire array arr is printed to the console using console.log(arr);. This displays all the numbers from 1 to n that were stored in the array.

So, in summary, n represents the number entered by the user, and i represents the loop counter that starts from 1 and increments by 1 in each iteration until it reaches n. During each iteration, the value of i is used to populate the array arr with numbers from 1 to n.
*/

console.log("harika");


























