let average = function calcAvg(...nums){
    let sum = 0;
    let avg = 0;
    nums.forEach((element) => {
        sum += element;
        avg = sum/nums.length;
    });
    console.log(`Sum: ${sum}`);
    console.log(`Average: ${avg}`);
}
average(90,80,90,70);
average(90,80,90,100,70);
average(90,80,60);