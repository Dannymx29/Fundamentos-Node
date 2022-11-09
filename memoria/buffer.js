// let buffer = Buffer.alloc(4);

// let buffer2 = Buffer.from([4, 5, 8, 7]);

// let buffer3 = Buffer.from('vivo al dia y que algundia esto cambie');

// console.log(buffer);
// console.log(buffer2);
// console.log(buffer3);
// console.log(buffer3.toString());

//--avecedario con buffer

let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < 26; i++){
    abc[i] = i + 97;
}

console.log(abc);
console.log(abc.toString());