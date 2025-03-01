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

//Exercise #2

//Exercise #3

//Exercise #4

