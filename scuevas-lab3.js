//Suheily Cueva
// ITMD 441-02 Undergraduate Student

//Exercise #1
function minMaxAverage(numbers) {
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    let total = numbers.length;
    let avg = numbers.reduce((sum, num) => sum + num, 0) / total;
    console.log(`Total Numbers: ${total}, Min Value: ${min}, Max Value: ${max}, Average: ${avg.toFixed(2)}`);
}

minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
minMaxAverage([1, 5, 3, 5, 10, 12, 8, 6]);
minMaxAverage([17, 15, 35, 28, 11, 4]);

//Exercise #2
function countVowels(word) {
    let vowels = "aeiou";
}


//Exercise #3

//Exercise #4

