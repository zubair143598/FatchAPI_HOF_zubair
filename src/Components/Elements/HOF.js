
const number = [1, 2, 3, 4, 5];
number.forEach((item) => console.log(item * 2));

const val = number.filter((item) => item % 2 !== 0);
console.log(val);
const number3 = [
  {
    name: "zubair",
    idL: 1,
  },
  {
    name: "Muzamil",
    idL: 2,
  },
  {
    name: "Umer",
    idL: 3,
  },
];
number3.forEach(item=>console.log(item))
const v1=number3.map(item=>item);
console.log(v1);

const val2 = number.filter((items) => items % 2 == 0);
console.log(val2);

const numbers2 = [1, 2, 3, 4, 5, 6, 7];

const val3 = numbers2.map((item) => item);
console.log(val3);

// by default the sum is false
const total=numbers2.reduce((sum,item)=>(sum+item));
console.log(total);