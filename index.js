let fname = "Ayo";

console.log(fname)
// alert('Hello')

let lname = "Ade";

console.log(lname)
console.log(`${lname} ${fname}`.split(''))

//to cancatenate string
let fullName = `${lname} ${fname}`;
// could also use let fullName =" lname + " " + fname"
console.log(fullName)

// the type of datatype 
console.log(typeof fullName)


//number datatype
let num = 12.3345;

console.log(typeof num);


//get the interger of a floating number
console.log(parseInt(num));

//parse a float number

console.log(parseFloat(num));

//add a fixed number of decimal places
console.log(num.toFixed(8));

//round to a fixed number of decimal place
console.log(num.toFixed(3));

//arrays
let list = [1, 2, 3];

console.log(list);

//add to the list of array
list.push(4, 5, 6);
console.log(list);

//remove the last item on the list
list.pop();
console.log(list);

//change the value of an index
list[2] = 8;
console.log(list);

// go through an array or iterate through
// use the for loop
list.forEach((element) => {
    console.log(element)
})


//creating object
let user = {
    firstName:'Ayo', //use : not = // comma is important for seperation.
    lastName: 'Ade',
    address: {              //creating object within an object
        city: 'Ibadan',
        state: 'Oyo state',
        area: 'Challenge'
    },
    age: 29,
    lang:['Yor', 'Eng', 'ASL']  //add a array to an object
};

//call only the firstName
console.log(user.firstName);

//call only the lastName
console.log(user.lastName);

//call the city
console.log(user.address.city);
console.log(user.address.area);
console.log(user.address.state);

//modify age
user.age = 30

console.log(user.age)

//increament and decreament
let exp = 1;

exp += 5;   //increament by 5 to exp
console.log(exp);


exp ++;  //increament by 1
console.log(exp);

exp -= 2; //decreament by 2
console.log(exp);

exp *= 3;   // increament by multipling 3
console.log(exp)

exp /= 5; // decreament by dividing by 5
console.log(exp);

//if, else if, else condition
let man = 6;

if ( man > 6){                  //if statement takes argument/parameter
    console.log('yea! man');
}   else if (man != 6){         //else if take an argument/parameter
    console.log('Man not you!')
} else {                        // else does not take argument/parameter
    console.log('Ouch man!')
}

if(2>1){
    console.log('you are right pal!')
}
// function
function circle(r) {                //declaring the function
  console.log(2*3.41*r*r);
}

circle(1)         //invoking/calling/runing the function

// let r = 5
// console.log(2*3.41*r*r);  //same as in the function


function greet(Name) {
    console.log ('Hello there ' + Name)
}

greet(fname);        // fname reference to the top

greet('Kunle');


// function that cal the width and height in inches and then convert to cm
// 1 inch = 2.54cm


function cal(width, height){
  area = width * height;
  console.log (conv = area * 2.54);
}

cal(8,10);



// function convert inches to cm


function convt(value) {
   let result = value * 2.54;
    return result;
}           // once return is used in the function, the function has to be assigned to a variable for it to be invoked else invoking it without assigning it will not take effect.

let widthW = convt(18);
let heightW = convt(10);
let dimension = [widthW, heightW];
console.log(dimension);



function addValues (num1,num2){
    return num1 + num2;
}

let firstValue = addValues(8,12);
console.log(firstValue);

let secondValue = addValues(9, 45);

console.log(secondValue);

// let values = [firstValue, secondValue];
// console.log(values);

//function expression
let add = function addValues (num1,num2){           // the add function can be used in reference to addValues function, it will performan the same function
    return num1 + num2;
};

// to invoke the above
let thridValue = add(6,7)  //invoked add function above

let values = [firstValue, secondValue, thridValue, add(7,3)]; //add(7,3) again invoked the add function in the array
console.log(values)
