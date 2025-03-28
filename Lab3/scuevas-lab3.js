//Suheily Cueva
// ITMD 441-02 Undergraduate Student

//Exercise #1
function minMaxAverage(numbers) {
    let min = Math.min(...numbers); //gets the smallest number in the array
    let max = Math.max(...numbers); //gets the largest number in the array
    let total = numbers.length; //gets the total number of elements in the array
    let avg = numbers.reduce((sum, num) => sum + num, 0) / total; //this calculates the average of the numbers in the array
    console.log(`Total Numbers: ${total}, Min Value: ${min}, Max Value: ${max}, Average: ${avg.toFixed(2)}`);
}

minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
minMaxAverage([1, 5, 3, 5, 10, 12, 8, 6]);
minMaxAverage([17, 15, 35, 28, 11, 4]);

//Exercise #2
function countVowels(word) {
    let vowels = "aeiou"; //lets the program know which letters are the vowels
    let count = [...word].filter(letter => vowels.includes(letter)).length; //this counts the number of vowels by going through each letter in the word
    console.log(`${word}: ${count} vowels`);
}

countVowels("Winter");
countVowels("Paradise");
countVowels("Basketball");

//Exercise #3
function sortNumbers(numbers){
    let sorted = numbers.slice().sort((a, b) => a - b); //this creates a sorted copy of the array
    console.log(`Original Array: ${numbers} output Sorted Array: ${sorted}`);
}

sortNumbers([9, 4, 6, 2]);
sortNumbers([13, 7, 2, 19, 11]);
sortNumbers([37, 30, 41, 100, 15]);

//Exercise #4
function celsiusToFahrenheit(celsius) {
   let temp = Number(celsius); //this makes sure that input is a number
   let fahrenheit = (temp * 9/5) + 32; //this is the equation to convert celsius to fahrenheit
   console.log(`${temp.toFixed(1)} Celsius = ${fahrenheit.toFixed(1)} Fahrenheit`);
}
 
celsiusToFahrenheit(30);    
celsiusToFahrenheit(54);
celsiusToFahrenheit(12);