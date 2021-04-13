# TypeScript
타입스크립트에 대해 공부

## Types

- boolean  
```js
let isDone: boolean = false;
isDone = true;

console.log(typeof isDone);
-> boolean
```

- number 
```js
let decimal: number = 7; // 10진수

let hex: number = 0xf00d; // 16진수

let binary: number = 0b1010; // 2진수

let octal: number = 0o744; // 8진수

let notANumber: number = NaN; // 가능

let underscoreNum : number = 1_000_000; 
```
- string 
```js
let myName: string = 'Kim';

myName = 'Hyeon';

let fullName: string = 'Kim hs';
let age: number = 31;

let sentence: string = `Hello, My name is ${fullName}. 
I'll be ${age} years old next month.
`

console.log(sentence);
-> Hello, My name is Kim hs. 
   I'll be 31 years old next month.
```

