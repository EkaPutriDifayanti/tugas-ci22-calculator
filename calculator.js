const penjumlahan = (a,b) => a + b;
const pengurangan = (a,b) => a - b;
const perkalian = (a,b) => a * b;
const pembagian = (a,b) => a / b;

let a = 2, b = 1;

console.log (`${a} + ${b} = ${penjumlahan(a,b)}`);
console.log (`${a} - ${b} = ${pengurangan(a,b)}`);
console.log (`${a} * ${b} = ${perkalian(a,b)}`);
console.log (`${a} / ${b} = ${pembagian(a,b)}`);

let operation = penjumlahan(a,b);
if (pengurangan(a,b) > operation){
    operation = pengurangan(a,b);
}else if(perkalian(a,b) > operation){
    operation = perkalian(a,b);
}else if(pembagian(a,b) > operation){
    operation = pembagian(a,b);
}
console.log (`Hasil operasi terbesar = ${operation}`);