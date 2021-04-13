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

- symbol
    - 프리미티브 타입의 값을 담아서 사용합니다.
    - 고유하고 수정불가능한 값으로 만들어줍니다.
    - 그래서 주로 접근을 제어하는데 쓰는 경우가 많았습니다.
```js
console.log(Symbol('foo')===Symbol('foo'));
-> false

const sym = Symbol();

const obj = {
    [sym]: 'value',
};

obj[sym];

함수로 사용할 떄는 Symbol() 타입으로 사용할 때는 symbol()
```

