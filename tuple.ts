let x: [string, number]; // 타입 순서 길이 다 맞춰야 된다.

x = ['hello', 12];
// x = [12,'hello']; 안됨

const person: [string, number, number] = ['Kim', 12, 1];
const [first, second, third] = person; 