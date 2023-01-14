// 1 variables
// var name = 'Alex' // old structure

// const firstName = 'Alex'
// const age = 26
// const isProgrammer = true


// console.log('Имя человека: ' + firstName + ', возраст человека: ' + age)
// alert('Имя человека: ' + firstName + ', возраст человека: ' + age) 
// const lastName = prompt('Enter Last Name')
// alert(firstName + ' ' + lastName)

// let currentYear = 2023
// const birthYear = 1985

// const age = currentYear - birthYear
// const a = 10
// let c = 32
// console.log(age)
// c +=a //c = c + a
// console.log(c)
// console.log(currentYear++)
// console.log(currentYear)

// const isProgrammer = true
// const name = 'Alex'
// const age = 26
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// const courseStatus = 'pending' // ready, fail, pending
// if (courseStatus === 'ready') {
//   console.log ('курс готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//   console.log('Курс находится в разработке')
// } else {
//   console.log('Курс не получился')
// }

// const isReady = true
//   // if (isReady) {
//   //   console.log('everything is ready')
//   // } else {
//   //   console.log('Is not ready')
//   // }

//   //Тернарное выражение
//   isReady ? console.log('everything is ready') : console.log('Курс не получился') // сокращенная логика образца сверхусм 

// function calculateAge(year) {
//   return 2023 - year
// }    
// // const myAge = calculateAge(1985)
// // console.log(myAge)
// function logInfoAbout(name, year) {
//   const age = calculateAge(year)
//   if (age > 0) {
//     console.log('Man name:' + name + ' and his age is:' + age)
//   } else {
//     console.log('this future man')
//   }

  
// }
//   logInfoAbout('Alex', '2024')
// const cars = ['Mazda', 'Mers', 'Ford']
// console.log(cars)
// cars[0] = 'Porsche'
// console.log(cars)
// cars[3] = 'Mazda'
// console.log(cars)
// const cars = ['Mazda', 'Mers', 'Ford']

// for (let i = 0; i < cars.length; i++) {
//   const car = cars[i]
//   console.log(car)
// }
// for (let cars of cars {
// }
// const person = {
//   firstName: 'Alex',
//   lastName: 'Tim',
//   year: 1985,
//   languages: ['UKR', 'RU', 'EN'],
//   hasWife: true,
//   greet: function() {
//     console.log('greet')
//   }
// }
// console.log(person)
// console.log(person.firstName)
// const num = 42
// const float = 42.42
// const pow = 10e3 

// function getRandomBetween(min, max) {    
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }
// console.log(getRandomBetween(10, 42)) 

// const name = 'Alex'
// const age = 37

// function getAge() {
//   return age
// }

// const output = 'Hello, my name is ' + name + ' and my age is ' + age + ' years'
// const output = `Hello, my name is ${name} and my age is ${getAge()} years`
// console.log(output);

// const output = `
//   <div>This is div</div>
//   <p>this is o</p>
//   `
// console.log(output);

// function logPerson (s, name, age) {
//   if (age < 0) {
//     age = 'Not born yet'
//   }
//   return `${s[0]}${name}${s[1]}${age}${s[2]}`
// }
// const personName = 'Alex'
// const personAge = 37

// const output = logPerson`Name: ${personName}, Age: ${personAge}!`
// console.log(output);

//function declaration
// function greet(name) {
//   console.log('hello - ', name);
// }
//function expression 
// const greet2 = function greet2(name) {
//   console.log('hello - 2 - ', name);
// }
// greet('igor')
// greet2('vasya')
// console.dir(greet)

// let counter = 0
// const interval = setInterval(function() {
//   if (counter === 5) {
//     clearInterval(interval)
//   } else
//   console.log(++counter);
// }, 1000)

// function greet(name) {
//     console.log('hello - ', name);
//   }

//   const arrow  = (name) => {
//     console.log('hello - ', name);
//   }

// const arrow2 = name => console.log('hello - ', name)
// arrow2 ('Alex')

// const pow2 = num => num ** 2
// console.log(pow2(5));

// const sum = (a = 2, b = 1) => a + b
// console.log(sum())

// function sumAll (...all) {
//   let result = 0
//   for (let num of all) {
//     result +=num
//   }
//   return result
// }
// const res = sumAll(1, 2, 3, 4, 5)
// console.log(res);

// function createMember(name) {
//   return function(lastName) {
//     console.log(name + lastName)
//   }
// }
// const logWithLastName = createMember('Alex')

