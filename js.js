//region first task
function yuzeBeraber(a,b){
    return(a+b==100)||(a==100)||(b==100)
}
console.log(yuzeBeraber(75,100))
console.log(yuzeBeraber(12,88))
console.log(yuzeBeraber(100,20))
//endregion

//region second task
function string_check(str1) {
    if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') 
    {
      return str1;
    }
    return "Py"+str1;
  }
  
  console.log(string_check("Python"));
  console.log(string_check("thon"));
//endregion

//region third task 
function herfElave(str)
{
    if (str.length>=3)
    {
        str_len = 3;
        
        back = str.substring(str.length-3);
        return back + str + back;
    }
    else
    return false;
}
console.log(front_back3("nij"));
console.log(front_back3("ni"));
console.log(front_back3("nijat"));
//endregion

//region fourth
function nearest(a,b){
    var a1=100-a 
    var b1=100-b 
    if(a1<b1){
      return a + " daha yaxindir"
    }else{
      return b + " daha yaxindir"
    }
  }
  console.log(nearest(18,50))
//endregion

//region fifth task
let arr=[1,2,3,4,5,6,7,8,9,10]
let sum=0;
for (let index = 0; index < arr.length; index++) {
    if(arr[index]%2==0){
        sum+=arr[index]
    }
}
console.log(sum)
//endregion

//region task first Muellim burda console.Readline() kimi sey axtardim internetde user'dan gelsin ededler ancag tapa bilmedim deyesen node.js le yazirdi
// function yuzeBeraber(a,b){
//     if(a===100|| b===100 || (a+b===100)){
//         return true;
//     } 
//     else{
//         return false;
//     }
// }
// let input = prompt("Please enter the numbers");
// alert(`Numbers ${a}+${b}`);
// console.log(yuzeBeraber)
//endregion