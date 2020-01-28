
let str = "my javascript!";

const [even, odd] = [...str].reduce((r,char,i) => (r[i%2].push(char), r), [[],[]])

console.log(even.join(''))