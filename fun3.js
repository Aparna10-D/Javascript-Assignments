function calculate(choice, x, y){
    if(choice ==='a'){
        return(`Sum: ${x + y}`);
    }
       
    if(choice === 'm'){
        return(`Product: ${x * y}`);
    }
    if(choice === 'd'){
        return(`Difference: ${x - y}`)
    }
    else{
        return("Invalid input");
    }
}
let sum = calculate('a', 25, 8);
console.log(sum);
let product = calculate('m',30,10);
console.log(product);
let difference = calculate('d',70,45);
console.log(difference);