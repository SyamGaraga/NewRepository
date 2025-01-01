// let isNodejs=true;
// let isDijango=false;
// let exp=4;
// let isrelocate=true;
// let joinIn=20;
// let isflexible=true;
// let job=((isNodejs||isDijango)&&(exp>=4)&&(isrelocate)&&(joinIn<=20)&&(isflexible))
// //console.log(job)

// job?console.log("Eligible for the job"):console.log("Noteligible for the job")

// user="syam";
// password="123"
// user=="syam"&&password=="23"?console.log("login successful"):console.log("failed");

// let ob={
//     user:"syam",
//     address:{
//     d_no:2-3-1,
//     street:"kbhp",
//     city:"hyd",
//     pincode:533577

// },
// };
// // console.log(ob.address.street);
// console.log(ob.address1?.street);

// let arr=[1,2,3,4,[5,6,7]];
// console.log(arr[4][0]);
// console.log(arr[8]?.[3]);

//  let op=8^9;
//  console.log(op)

// let isLogin = false;
// let user = "admin";
// isLogin ?user=="customer"?console.log("welcome"):console.log("admin") : console.log("please login");

// let login = false;
// let customer = "non";
// let item = "chicken";
// login
//   ? customer == "veg"
//     ? item == "paneer"
//       ? console.log("paneer")
//       : console.log("gobi")
//     : item == "chicken"
//     ? console.log("chicken")
//     : console.log("mutton")
//   : console.log("please login")

// console.log(a);
// console.log(b);
// console.log(c);
// debugger;
// var a=45;
// let b=5;
// const c=20;

// str="syamGaraga"
// for (let i in str){
//   console.log("hi",`2X${i}=${i*2}`);
// }

// let arr=['hi','one','two','three','four']
// for(let i of arr){
//   console.log(i);
// }

// let ob=[
// {
//   id:1,
//   title:"syam-garaga-123",
//   no:1235
// },
// {
//   id:2,
//   title:"sathish-123",
//   no:6789
// }
// ]
// for(let i of ob){
//   console.log(ob1)
// }

// //for-in,for-of
// let arr=['arvind','suresh','karhik','ramya','bhavya']
// let a=1
// for(let i in arr){
//   console.log(`${+i+1}-${arr[i]}`);
// }

// for(let i of arr){
//   console.log(`${a++}-${i}`)
// }




//  for( let i=10;i>0;i--)
//    console.log(`5X${i}=${5*i}`)

// str="welcome"
// for(let i=0;i<str.length;i++)
//   console.log(str[i])

// let arr=[4,5,6,7,8,9,10]
// for(i=0;i<arr.length;i++)
//   console.log(arr[i])

 str="welcome"
 srr1=""
 for(let i=str.length-1;i>=0;i--){
   srr1+=str[i];
 }
// console.log(srr1)




//  let str=""
// for(let i=5;i>0;i--){
//   str+='*';
//   console.log(str)
// }

// let arr=["syam","satish","abhi","karthik"]
// for(i=1;i<arr.length;i=i+2){
//   console.log("hello "+arr[i])
// } 


// let str="malayalam"
//  let srr1=""
// for(let i=str.length-1;i>=0;i--){
//   srr1+=str[i];
// }
// if( str==srr1)
//   console.log("palindrome")
// else
//   console.log("not a palindrome")



// list=["one","two","three","four","five"];
// for(let i in list){
//   console.log(list[i][1])
// }


// for(i=0;i<11;i++){
//   console.log(i);
//   console.log("hi",i)}


// while(false){
//   console.log("hi")
// }
// let isSubscribe=true;
// let days=15;
// while(isSubscribe&&days>=0){
//   console.log("hi",days);
//   days--;
// }

// for(let i=0;i<=10;i++){
//   if(i==5){
//     continue;  
//   }
//   console.log(i)
// }

// let i=10
// do{
//   for(let i=0;i>10;i++){
//     console.log(i)
//   }
// }
// while(i>7)
//   console.log(i)

arr=["one","two","three","four","five"]
for(let i=0;i<arr.length-1;i++){
  let str=[]
  for(let j=arr[i].length-1;j>=0;j--){
    str+=arr[i][j]
  }
  console.log(str)

}