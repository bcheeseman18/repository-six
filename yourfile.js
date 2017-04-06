
// HANGMAN LITE
/* 
Create a variable called word that contains a hangman word,
 and create a second variable called letter that indicates the letter that the player guessed.
  - Print out "Yeah, the letter x exists y times in my word" if the letter exists (but substitute the actual letter and the number of times)
  - If the letter doesn't exist, print out "Nope, that letter doesn't exist in my word."

  input: creature
  output: guessed letter

  */
/*
  let word = 'creature';
  let letter = 'r';
  let occurance = 0;
  let hasR = false;


  for (count = 0; count < word.length; count = count + 1) {
    if (word[count] === letter) {
        hasR = true;
        occurance = occurance + 1; 
    }
}


if (hasR) {
    console.log('Yea the letter ' + letter + ' exists ' + occurance + ' times in my word');
} else {
    console.log('Nope, that letter doesnt exist in my word');
    } 

// Cherokee Hare

/*

There's a mythical species of rabbit called the Cherokee Hare that can reproduce at variable rates and never seem to die. 
Fortunately, some engineers figured out to write some code to describe it's future population. Wildlife experts rejoice! 
Create a variable called startingPopulation that keeps track of the initial population of hares, 
create a variable called birthRate that keeps track of what percentage is born each week, and a 
variable called numberOfWeeks that represents how long we're trying to simulate. 

Print out "There will be x Cherokee Hares after y weeks" but replace x with the number of hares and y with the number of weeks.

Note: it's common practice to represent rates (like the birth rate) as decimal values, i.e. 10% would be 0.1 instead of 10.

Goal: how many more Hares are there after 3 weeks?
    - if the population starts at 100, and increases 1% each week, there will be how many after 10 weeks? = 103
    - (100x.01) = 3/week , 100 + 3 = 103 after 3 weeks

*/
/*
let startingPopulation = 100;
let birthRate = .01;
let numberOfWeeks = 3; 
let total = startingPopulation * birthRate * numberOfWeeks + startingPopulation;

console.log('There will be ' + total + ' Cherokee Hares after ' + numberOfWeeks); 

//CHANGE MACHINE

/*

Imagine we have a very versatile change machine. 
Create a variable called amount stores a quantity of dollars, and write some code that produces an array that indicates the number of 1, 5, 10, and 20 bills that the change machine should return. 
You want the change machine to return the smallest number of bills possible.
After your code runs you should have a new array of the format [twenties, tens, fives, ones]. 

For example, if amount = 47, you should print an array after your code runs that looks like [2, 0, 1, 2] (two twenties, 0 tens, 1 five, 2 ones).

Goal: get the least amount of bills possible after asking for 50 dollars from machine
    - i want 2 "twenties", 1 "ten" and no fives or ones

*/


let amount = 50;
let bill = [20, 10, 5, 1];
let change = [];

if ((amount/bill[0]) >= 1) { //if the ammount (50) is divided by 20 and that is greater than or equal to 1...then
    change[0] = Math.floor(amount/bill[0]); // first box in the change array will be equal to amount divided by bill which will be 2 - (this means first number in the change array will be 2)
    amount = amount - (change[0] * bill[0]); // this will change the amount to amount (50) - (change (2) * 20) = 10 (the new amount #)
} else {
    change[0] = 0; //if the amount divided by the bill is less than 1, the number first number in the change array will bring up 0
}

if ((amount/bill[1]) >= 1) { //if 10/10 is greater or equal to 1...then
    change[1] = Math.floor(amount/bill[1]); //change amount in the second number of the array will equal 10 divided by 10 which is 1, this means...
    amount = amount - (change[1] * bill[1]);// the new amount (10) equals 10 - (1 * 10) = 0 which means we dont need anymore change after this
} else {
    change[1] = 0;
}

if ((amount/bill[2]) >= 1) {
    change[2] = Math.floor(amount/bill[2]);
    amount = amount - (change[2] * bill[2]);
} else {
    change[2] = 0;
}

if ((amount/bill[3]) >= 1) {
    change[3] = Math.floor(amount/bill[3]);
    amount = amount - (change[3] * bill[3]);
} else {
    change[3] = 0;
}

console.log('I will get ' + change);

/*for (let i = 0; i < bill.length; i = i + 1) {

}

/* Finding Palindromes

Create a variable called word that stores a word we want to test as a palindrome. 
Write some code that prints out "true" if word is a palindrome, or "false" if its not.

input: word that we test as palindrome
output: true/false statement for a palindrome test

if the first letter and the last letter of the word, then it might be a palindrome

*/

let word = 'madam';
Palidrome = false;

for (let i = 0; i < word.length; i = i + 1) {
    if (i[0] === -1);
    Palidrome = true;
} 
    if (Palidrome) {
        console.log(word + ' is a palidrome');
    } else {
        console.log(word + ' is not a palidrome')
    }