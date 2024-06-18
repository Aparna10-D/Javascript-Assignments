
let employees =[{},{},{}];
let employee1={
    name:'Joe',
    age:20,
    hobbies:['sports','music'],
    address:{
        city:'Bangalore',
        state:'KAR'
    },
    mobile: 8973904730
}
let employee2={
        name:'Preeti',
        age:21,
        hobbies:['cooking','painting'],
        address:{
            city:'Chennai',
            state:'TN'
        },
        mobile: 9873904750
    }
let employee3={
        name:'Veena',
        age:23,
        hobbies:['Playing Violin','reading novels'],
        address:{
            city:'Kochi',
            state:'KL'
        },
        mobile: 7973906534
    }
console.log(employee1);
console.log(employee1.name);
console.log(employee1.age);
console.log(employee1.mobile);
for(var i in employee1){
    var emp = employee1[i];
    if(typeof emp == Array || emp instanceof Object){
        for(var i in emp){
            console.log(emp[i]);
        }
    }
}
console.log(employee2);
console.log(employee2.name);
console.log(employee2.age);
console.log(employee2.mobile);
for(var i in employee2){
    var emp2 = employee2[i];
    if(typeof emp2 == Array || emp2 instanceof Object){
        for(var i in emp2){
            console.log(emp2[i]);
        }
    } 
}

console.log(employee3);
console.log(employee3.name);
console.log(employee3.age);
console.log(employee3.mobile);
for(var i in employee3){
    var emp3 = employee3[i];
    if(typeof emp3 == Array || emp3 instanceof Object){
        for(var i in emp3){
            console.log(emp3[i]);
        }
    } 
}



