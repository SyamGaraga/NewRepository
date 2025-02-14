// let arr=[1,2,3,4,[4,5]]
// // console.log(...x)
// // console.log(x)
// let copy =JSON.parse(JSON.stringify(arr))
// copy[4][0]="hello";
// console.log(arr,"original")
// console.log(copy,"deeply copied")


const _=require('lodash');
const original=[1,2,3,{a:"shiva"},4];
const sc=_clone(original)
sc[3].a="ram";
console.log(sc,"shallowcopy")
console.log(original,"original")