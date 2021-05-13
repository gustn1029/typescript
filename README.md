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
- tuple
```js
let x: [string, number]; // 타입 순서 길이 다 맞춰야 된다.

x = ['hello', 12];
// x = [12,'hello']; 안됨

const person: [string, number, number] = ['Kim', 12, 1];
const [first, second, third] = person;
```
tuple 은 typescript 타입으로 array 를   
좀 더 명확하게 만들 수 있다.  

위에 보이는 것 처럼 [] 안에 타입을 입력하면  
그 순서에 맞게 타입을 입력해야 되고, 입력한 타입 수 만큼만  
array를 만들 수 있다.

- any
```js
function returnAny(message: any): any {
    console.log(message);
}

const any1 = returnAny("리턴은 아무거나");

any1.toString();

let looselyTyped: any = {};

const w = looselyTyped.a.b.c.d;

function leakingAny(obj: any) {
    const a: number = obj.num;
    const b = a + 1;
    return b;
}

const c = leakingAny({num: 0});
c.toString(leakingAny(1));
```

any  
- 어떤 타입이어도 상관없는 타입입니다.  
- 이걸 최대한 쓰지 않는게 핵심입니다.  
- 왜냐하면 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 때문입니다.  
- 그래서 컴파일 옵션 중에는 any 를 써야하는데 쓰지 않으면 오류를 뱉도록 하는 옵션도 있습니다.  
    - nolmplicitAny  

```js
function returnAny(message): any {
    console.log(message);  
}  
returnVoid('리턴은 아무거나');
``` 

- The any will comtinue to propagate through your objects:  
    - any 는 계속해서 개체를 통해 전파됩니다.
- After all, remember that all the convenience of any comes at the cost of losing type safety.  
    - 결국, 모든 편의는 타입 안전성을 잃는 대가로 온다는 것을 기억하십시오.
- Type safety is one of the main motivations for using TypeScript and you should try to avoid using any when not necessary.  
    - 타입 안정성은 TypeScript 를 사용하는 주요 동기 중 하나이며 필요하지 않은 경우에는 any 를 사용하지 않도록 해야합니다.  

```js
let looselyTyped: any = {};
let d = looselyTyped.a.b.c.d;
 ^ = let d: any
 ```