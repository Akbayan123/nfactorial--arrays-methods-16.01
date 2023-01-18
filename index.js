// #1
function checkAge(age) {
    let userAge = (age > 18) ? true :confirm('Родители разрешили?');
}

checkAge(17)
console.log(checkAge)

// #2
function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }

  let x = 9;
  let n = 2;

console.log(pow(x, n));

// #3
  let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    () => { alert("Вы согласились."); },
    () => { alert("Вы отменили выполнение."); }
  );

// #4
let arr = [5, 2, 1, -10, 8];
arr.sort((a,b)=> b - a);
alert( arr );

// #5
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

alert( names );

// #6
let vasya2 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya2 = { name: "Петя", surname: "Иванов", id: 2 };
let masha2 = { name: "Маша", surname: "Петрова", id: 3 };

let users2 = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

alert( usersMapped[0].id ); 
alert( usersMapped[0].fullName );

// #7
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
  let vasya3 = { name: "Вася", age: 25 };
  let petya3 = { name: "Петя", age: 30 };
  let masha3 = { name: "Маша", age: 29 };
  
  let array = [ vasya, petya, masha ];
  
  alert( getAverageAge(Array) ); 
  