// 1.sum of two numbers
// let num1 = 10
// let num2 = 20
// console.log(num1 + num2)


//2.mul of two numbers
// let num1 = 20;
// let num2 = 30;
// console.log(num1*num2);

//3.greatest of three numbers
// let num;
// let a,b,c
// if(a>b)
// {
//     console.log("a is big")
// }
// else if(b>c)
// {
//     console.log("b is big")
// }
// else{
//     console.log("c is big")
// }

//4.vowel and consonant
// let ch = 'a';
// if((ch=='k')||(ch=='a')||(ch=='j'))
// {
//     console.log("vowel")
// }
// else{
//     console.log("not a vowel");
// }

// 5.Even number
// let num1 = 20;
// if(num1%2==0)
// {
//     console.log("Even number")
// }
// else{
//     console.log("not even number")
// }

// 6. positive or negative 
// let num = 12;
//     if(num>0)
//     {
//         console.log("Positive number")
//     }
//     else{
//         console.log("negative number")
//     }

// 7. prime or not
// let num = 12;
// let count = 0;

// for(let i = 1; i <= num; i++)
// {
//     if(num % i == 0)
//     {
//         count++;
//     }
// }

// if(count == 2)
// {
//     console.log("Prime number");
// }
// else
// {
//     console.log("Not a prime number");
// }

//8.palindrome
// let num = 121;
// let rev,rem=0,temp
// temp=num;
// while(num>0)
// {
//     rem = num%10;
//     rev = (rev*10)+rem;
//     num = parseInt(num/10);
// }
// if(temp==rev)
// {
//     console.log("palindrome")
// }
// else
// {
//     console.log("not a palindrome")
// }

// 9.Armstrong
// let num = 153;
// let sum=0,rem,temp;
// temp=num;
// while(num>0)
// {
//     rem = num%10;
//     sum = sum+rem*rem*rem;
//     num = parseInt(num/10)
// }
// if(temp==sum)
// {
//     console.log("Armstromg number")
// }
// else
// {
//     console.log("not Armstrong number")
// }

// 10.sum of digits
// let n = 123;
// let sum = 0;
// while(n>0)
// {
//     let digit = n%10;
//     sum = sum+digit;
//     n = parseInt(n/10);
// }
// console.log(sum)

// 11.pattern printng
// let num=5;
// for(let i=0;i<=num;i++)
// {
//     pattern ''
//     for(let j=1;j<=i+1;j++)
//     {
//         pattern = pattern+'*';
//     }
//     console.Log(pattern)
// }

//12.factorial
// let num;
// let factorial = 1;
// for( num=5;num>1;num--)
// {
//   factorial=factorial*num;
// }
// console.log(factorial)

// 13.multiplication table
// let nuu=2;
// for(i=1;i<=10;i++)
// {
//   console.log(num*i)
// }

// 14.sum of first N numbers
// let num = 0;
// for(let i = 1; i <= 100; i++)
// {
//     num = num + i;
// }
// console.log(num);

//15.add of 2 number
// let a =20;
// let b=100;
// console.log(a+b)

//16.swap of two numbers
// let num1=20;
// let num2=30;
// let num3;
//  num3=num1
// num1=num2
// num2=num3
// console.log(num1)
// console.log(num2)

//17.find the sum of digits
// let num=1234;
// let sum=0;
// while(num>0)
// {
//   let digit=num%10;
//   sum = sum+digit;
//   num=parseInt(num/10);
// }
// console.log(num);

//18.gcd
// let a = 12;
// let b = 18;

// while (b !== 0) {
//     let temp = b;
//     b = a % b;
//     a = temp;
// }
// console.log("GCD =", a);

//19.lcm
// let a = 12;
// let b = 18;

// let x = a;
// let y = b;

// while (y !== 0) {
//     let temp = y;
//     y = x % y;
//     x = temp;
// }

// console.log("GCD =", x);

//20.smallest digit
// let n = 58321;
// let smallest = 9;

// while (n > 0) {
//     let digit = n % 10;

//     if (digit < smallest) {
//         smallest = digit;
//     }
//     n = Math.floor(n / 10);
// }
// console.log("Smallest digit =", smallest);

//21.square the number
// let num =30;
// let lak = n*n;
// console.log(lak)

//22.product of numbers
// let n =1234;
// let product = 1;
// while(n>0)
// {
//     let digit = n%10;
//     product = product*digit;
//     n=n/10;
// }
// console.log(product)

//23.largest number
// let n=14627;
// let largest = 0;
// while(n>0)
// {
//     let digit=n%10;
//     if(digit>largest)
//     {
//         largest = digit;
//     }
//     n=paseInt(n/10)
// }

//24.smallest number
// let n = 1345;
// let smallest = 9;
// while(n>0)
// {
//   digit = n%10;
//   if(digit<smallest)
//   {
//     smallest = digit
//   }
//   n = parseInt(n/10)
// }
// console.log(smallest)

//25.Automorphic number
// let num = 5;
// let lak = 25;
// if(lak%10==num)
// {
//     console.log("Automorphic number")
// }
// else
//     console.log("not automorphic number")

//26.neon number
// let n = 9;
// let square = n * n;
// let sum = 0;
// while (square > 0) {
//     let digit = square % 10;
//     sum = sum + digit;
//     square = Math.floor(square / 10);
// }
// if (sum == n) {
//     console.log("Neon Number");
// } else {
//     console.log("Not Neon Number");
// }

//27.reverse a nmame
// let name = "abc";
// let reversename = "";
// for (let i = name.length - 1; i >= 0; i--) {
//     reversename = reversename + name[i];
// }
// console.log(reversename);

//28.count characers in string
// let name = "abcde";
// let count = 0;
// for (let i = 0; i < name.length; i++) {
//     count++;
// }
// console.log("Count =", count);

//29.smallest number in array
// let arr = [10, 5, 20, 3, 15];
// let small = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < small) {
//         small = arr[i];
//     }
// }
// console.log("Smallest =", small);

//30.largest element in array
// let arr = [10, 5, 20, 3, 15];
// let great = arr[0]
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > great) {
//         great = arr[i];
//     }
// }
// console.log("Greatest =", great);

//31.count the even digits
// let n = 123456;
// let count = 0;
// while (n > 0) {
//     let digit = n % 10;

//     if (digit % 2 == 0) {
//         count++;
//     }

//     n = parseInt(n / 10);
// }
// console.log(count);

//32.count the odd digits
// let n = 12345;
// let count =0 ;
// while(n>0)
// {
//     let dig = n%10;
//     if(dig%2!=0)
//     {
//         count++
//     }
//     n = parseInt(n/10)
// }
// console.log(count)

//33.find 1st digit
// let num = 12345;
// while (num >= 10) {
//     num = parseInt(num / 10);
// }
// console.log(num);

//34.descending order of a string
// let lak = "ajfukpo"
// let jak = lak.split("").sort().reverse().join("")
// console.log(jak)

//35.ascending order of a string
// let lak = "ajfukpo"
// let jak = lak.split("").sort().join("")
// console.log(jak)

//36.duplicate of string
// let str = "lakshitha"
// let result  = ""
// for(let i = 0 ; i<str.length ; i++)
// {
//   if(!result.includes(str[i]))
//     result += str[i]
// }
// console.log(result)

//37.find the space in the string
// let num = "hi guys welcome to srm madurai "
// let count = 0;
// for(let i=0;i<num.length;i++)
// {
//   if(num[i]==" ")
//     count++
// }
// console.log(count)

//38.find the duplicate
// let num = "lakshitha neelakandan"
// let revesre = " "
// for(let i=0;i<num.length;i++)
// {
//   if(num.indexOf(num[i])!=num.lastIndexOf(num[i]))
//   {
//     if(!reverse.includes(num[i]))
//     {
//       reverse = reverse+num[i]
//   }
// }
// }
// console.log(reverse)

//39.find the min in array
// let arr = [5, 6, 8, 1];
// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }
// console.log(min);

//40. find max in array
// let arr = [5, 6, 8, 1];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         min = arr[i];
//     }
// }
// console.log(max);

// 41.matrix addition
// var mat1 = [[1,1],[2,2]]
// var mat2  = [[1,1],[2,2]]
// var result = [[0,0],[0,0]]
// for(i=0;i<2;i++)
// {
//   for(j=0;j<2;j++)
//   {
//     result[i][j] = mat1[i][j]*mat2[i][j]
    
//   }

// }
// for(k=0;k<2;k++){
//   var line=" "
//   for(l=0;l<2;l++)
//   {
    
//     line = line + result[k][l]+" "
//   }
//   console.log(line)
// }

//42.matrix mul
// let mat1 = [[1,1],[2,2]]
// let mat2 = [[2,2],[3,3]]
// let result = [[0,0],[0,0]]
// for(let i=0;i<2;i++)
// {
//   for(j=0;j<2;j++)
//   {
//     result[i][j]=mat1[i][j]*mat2[i][j]
//   }
// }
// for(let l=0;l<2;l++)
// {
//   let  line  = " "
//   for(let k=0;k<2;k++)
//   {
//     line = line + result[l][k]+" "
//   }
//   console.log(line)
// }
    
//43.value type
// let a = 10;
// let b = a;

// b = 20;

// console.log(a);
// console.log(b);

//44.reference type
// let person1 = {
//     name: "Lakshitha"
// };
// let person2 = person1;
// person2.name = "Dhan";
// console.log(person1.name);
// console.log(person2.name);

//45.sum of array length
// let arr = [10, 20, 30, 40];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
// }
// console.log(sum);

//46.sum of even number
// let arr = [10, 15, 20, 25, 30];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         sum = sum + arr[i];
//     }
// }
// console.log(sum);

//47.sum of odd number
// let arr = [10, 15, 20, 25, 30];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 != 0) {
//         sum = sum + arr[i];
//     }
// }
// console.log(sum);

//48.sum of the digits in array
// let arr = [10,20,30,40]
// let sum = 0;
// for(let i=0;i<arr.length;i++)
// {
//   sum = sum+arr[i]
// }
// console.log(sum)

//49.sum of the even numbers in array
// let arr = [20,30,56,74,36,200]
// let sum = 0; 
// for(let i=0;i<arr.length;i++)
// {
//   if(arr[i]%2==0)
//     sum=sum+arr[i]
// }
// console.log(sum)

//50. sum of the odd numbers in array
// let a = [10, 15, 20, 25, 30];
// let sum = 0;
// for (let i = 0; i < a.length; i++) {
//     if (a[i] % 2 != 0) {
//         sum = sum + a[i];
//     }
// }
// console.log(sum);

//51.count the even numbers
// let a = [10, 15, 20, 25, 30];
// let count = 0;

// for (let i = 0; i < a.length; i++) {
//     if (a[i] % 2 == 0) {
//         count++;
//     }
// }
// console.log(count);

//52.count the odd number
// let a = [10, 15, 20, 25, 30];
// let count = 0;
// for (let i = 0; i < a.length; i++) {
//     if (a[i] % 2 != 0) {
//         count++;
//     }
// }
// console.log(count);

//53.without parameter without return type
// function greeting(){        //
//   console.log("Hallo world") // function declaration
// }                            // 

// greeting() // Function call 

//54.No Parameter + Return Value
// function hallo(){
//     return "Hi How are you"
// }
// let name = hallo()
// console.log(name)
// console.log(hallo())

//// 55.with parameter , without return type
// function add(num1,num2){
//   console.log(num1+num2)
// }
// add(10,20)

// 53. with Parameter , with return type
// function mul(num1,num2){
//     return num1 * num2
// }
// console.log("mul1",mul(10,20))
// console.log("mul2",mul(100,200))

//54.synchronization
// console.log("A");
// console.log("B");
// console.log("C");

//55.asynchronization
// function factorial(n) {
//     if (n == 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }
// console.log(factorial(5));

//56.factorial using recrussion
// function factorial(n)
// {
//   if(n==1)
//   {
//     return 1
//   }
//   return n * factorial(n-1)
// }
// console.log(factorial(5))

//57.Print 1 to N using Recursion.

// function printNumbers(n) {
//     if (n > 5) return;
//     console.log(n);
//     printNumbers(n + 1);
// }
// printNumbers(1);

//58.sum of the natural numbers using recursion
// function number(n)
// {
//   if(n>5)
//   {
//     return 1;
//   }
//   console.log(n)
//    number (n+1)
// }
// number(1)

//59.sum of digit using recrussion
// function number(n)
// {
//   if(n == 0)
//   {
//     return 0
//   }
//   return (n%10) + number(parseInt(n/10))
// }
// console.log(number(12345))

//60.parameter add
// function name(a,b)
// {
//   return a+b
// }
// console.log(name(10,30))

//61.parameter sub
// function name(a,b)
// {
//   return a-b
// }
// console.log(name(10,30))

//62.square number
// function name(a)
// {
//   return a*a
// }
// console.log(name(10))

//63.Even or odd
// function name(n)
// {
//   if(n%2==0)
//   {
//     return "Even";
//   }
//   else
//   {
//    return "odd";
//   }
// }
// console.log(name(10));

//64.largest of 2 number
// function name (a,b)
// {
//   if(a<b)
//   {
//     console.log("Enter the a")
//     return a;
//   }
//   else
//   {
//     console.log("Enter the b")
//     return b;
//   }
// }
// console.log(name(10,12))

//65.slice using arry
// let fruits = ["banana","apple","berry","mango"]
// let result = fruits.slice(1,2);
// console.log(result)

//66.reverse a sting using recrussion
// let name = "Lakshitha"
// let reverse = "";
// for(let i=name.length-1;i>=0;i--)
// {
//   reverse = reverse+name[i]
// }
// console.log(reverse)

//67.array using largest number
// let arr = [10,20,30,40,50]
// let max = arr[0]
// for(let i=0; i<arr.length;i++)
// {
//   if(arr[i]>max)
//   {
//     max = arr[i]
//   }
// }
// console.log(max)

//68.array using smallest number
// arr = [10,20,30,40,50]
// let min = arr[0]
// for(let i=0;i<arr.length;i++)
// {
//   if(arr[i]<min)
//   {
//     min = arr[i]
//   }
// }
// console.log(min)

//69.calculte the sum of the elements in array
// let arr = [1,2,3,4,5]
// let sum = 0;
// for(let i=0;i<arr.length;i++)
// {
//   if(arr[i]<=5)
//   {
//     sum = sum+arr[i]
//   }
// }
// console.log(sum)

//70.averge in the array
// let arr = [1,2,3,4,5]
// let sum = 0;
// for(let i=0;i<arr.length;i++)
// {
//   if(arr[i]<=5)
//   {
//     sum = sum+arr[i]
//   }
// }
// console.log(sum/arr.length)

//71.count even and odd in array
// let arr = [1,2,3,4,5,6,7]
// let even = 0;
// let odd = 0;
// for(let i=0;i<arr.length;i++)
// {
//   if(arr[i]%2==0)
//   {
//     even++;
//   }
//   else
//   {
//     odd++
//   }
// }
// console.log("Enter the even number:", even)
// console.log("Enter the odd number:", odd)

//72.find the max and min in array
// let arr = [15,25,3,18]
// let max = arr[0]
// let min = arr[0]
// for(let i=0;i<arr.length;i++)
// {
//   if(arr[i]>max)
//   {
//     max = arr[i]
//   }
//   else if (arr[i]<min)
//   {
//     min = arr[i]
//   }
// }
// console.log("Enter the maximum:",max)
// console.log("Enter the minimum:",min)

//73.search an element
// let lak = [10,20,30,40]
// for(let i=0;i<lak.length;i++)
// {
//   if(lak[i]==30)
//   {
//     console.log("Element found",lak[i])
//   }

//74.duplicate remove
// let lak = [1,2,2,3,4,4,5]
// let result = ""
// for(let i=0;i<lak.length;i++)
// {
//   if(!result.includes(lak[i]))
//   {
//     result = result + lak[i]  
//   }
// }
// console.log(result)


 //75.duplicate remove anither method to use
// let arr = [1,2,2,3,4,4,5]
// let newarr = []
// for(let i=0;i<arr.length;i++){
//   let isduplicate = false

//  for(let j=0;j<newarr.length;j++){
//    if(arr[i] === newarr[j]){
//      isduplicate = true
//      break
//    }
//  }
  
//   if(! isduplicate){
//     newarr.push(arr[i])
//   }
// }
// console.log(newarr)

//76.Sum of numbers divisible by 3
// let arr = [3, 5, 6, 8, 9, 12, 14];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//         sum = sum + arr[i];
//     }
// }
// console.log(sum);

//77.merge of 2 array
// let arr1=[1,2,3,4,5]
// let arr2=[6,7,8,9,10]
// let merge = []
// for(let i=0;i<arr1.length;i++)
// {
//   merge.push(arr1[i])
// }
// for(let i=0;i<arr2.length;i++)

// {
//   merge.push(arr2[i])
// }
// console.log(merge)

//78.2nd largest number find
// let lak = [1,2,3,4,5,6]
// let large = lak[0]
// let second = lak[0]
// for(let i=0;i<lak.length;i++)
// {
//   if(lak[i]>large)
//   {
//     second = large
//     large = lak[i]
//   }
// }
// console.log(second)

//79.move 0 at the end
// let arr = [1, 0, 2, 0, 3, 4];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//         result.push(arr[i]);
//     }
// }
// while (result.length < arr.length) {
//     result.push(0);
// }
// console.log(result);

//80.shift of the left 3 element
// let arr1 = [1,2,3,4,5,6,7,8]
// let k = 3
// for(let i=0;i<k;i++)
// {
//   let last = arr1.pop()
//   arr1.unshift(last)
// }
// console.log(arr1)

//81.shift of the right 3 elemnt
// let arr1 = [1,2,3,4,5,6,7,8]
// let k = 3
// for(let i=0;i<k;i++)
// {
//   let first = arr1.shift()
//   arr1.push(first)
// }
// console.log(arr1)

// //82.Right rotate an array by 1 position
// let arr = [1, 2, 3, 4, 5];
// let k = 1;
// for (let i = 0; i < k; i++) {
//     let last = arr.pop();
//     arr.unshift(last);
// }
// console.log(arr);

//82.union and intersection
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 7];
// let union = [];
// let common = [];
// let inarr1 = {};
// let inunion = {};
// // First array
// for (let i = 0; i < arr1.length; i++) {
//     inarr1[arr1[i]] = true;

//     if (!inunion[arr1[i]]) {
//         union.push(arr1[i]);
//         inunion[arr1[i]] = true;
//     }
// }
// // Second array
// for (let i = 0; i < arr2.length; i++) {
//     if (inarr1[arr2[i]]) {
//         common.push(arr2[i]);
//         inarr1[arr2[i]] = false;
//     }

//     if (!inunion[arr2[i]]) {
//         union.push(arr2[i]);
//         inunion[arr2[i]] = true;
//     }
// }

// console.log("Intersection:", common);
// console.log("Union:", union);

//83.union of 2 arrays
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 7];
// let union = [];
// for (let i = 0; i < arr1.length; i++) {
//     if (!union.includes(arr1[i])) {
//         union.push(arr1[i]);
//     }
// }
// for (let i = 0; i < arr2.length; i++) {
//     if (!union.includes(arr2[i])) {
//         union.push(arr2[i]);
//     }
// }
// console.log("Union:", union);

//84.intersection of 2 arrays
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 7];
// let intersection = [];
// for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//         if (arr1[i] === arr2[j]) {
//             if (!intersection.includes(arr1[i])) {
//                 intersection.push(arr1[i]);
//             }
//         }
//     }
// }
// console.log("Intersection:", intersection);

//85.intersection
// let arr1 = [1, 2, 3];
// let arr2 = [2, 3, 4];
// let intersection = [];
// for (let i = 0; i < arr1.length; i++) {
//     if (arr1.includes(arr2[i])) {
//         intersection.push(arr2[i]);
//     }
// }
// console.log("Intersection:", intersection);

//86.union
// let arr1 = [1, 2, 3, 4];
// let arr2 = [3, 4, 5, 6];
// let union = [];
// for (let i = 0; i < arr1.length; i++) {
//     if (!union.includes(arr1[i])) {
//         union.push(arr1[i]);
//     }
// }
// for (let i = 0; i < arr2.length; i++) {
//     if (!union.includes(arr2[i])) {
//         union.push(arr2[i]);
//     }
// }
// console.log("Union:", union);

//87.count occurance
// let arr = [1, 2, 2, 3, 2, 4];
// let target = 2;
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//         count++;
//     }
// }
// console.log(count)

//88.medianof the sorted array
// let num1 = [1,3]
// let num2 = [2]
// let arr = num1.concat(num2)
// arr.sort((a,b)=>a-b)
// let median
// let n = arr.length
// if(n%2==1)
// {
//   let median = arr[parseInt(n/2)]
// }
// else
// {
//   let median = (arr[n/2-1]+[n/2])/2
// }
//  console.log(arr)

//89.three number sum is come 0
// var nums = [-1, 0, 1, 2, -1, -4];
// nums.sort(function(a, b) {
//     return a - b;
// });
// var result = [];
// for (var i = 0; i < nums.length - 2; i++) {
//     var left = i + 1;
//     var right = nums.length - 1;
//     while (left < right) {
//         var sum = nums[i] + nums[left] + nums[right];
//         if (sum === 0) {
//             result.push([nums[i], nums[left], nums[right]]);
//             left++;
//             right--;
//         }
//         else if (sum < 0) {
//             left++;
//         }
//         else {
//             right--;
//         }
//     }
// }
// console.log(result);

//90.another way to 3 sum problem
// let arr = [-1, 0, 1, 2, -1, -4]
// for(let i=0;i<arr.length;i++)
// {
//   for(let j=i+1;j<arr.length;j++)
//   {
//     for(let k = j+1;j<arr.length;k++)
//     {
//     let sum = arr[i]+arr[j]+arr[k]
//     if(sum===0)
//     {
//       console.log([arr[i],arr[j],arr[k]])
//       console.log("Add the results:",arr[i]+arr[j]+arr[k])
//     }
//   }
// }
// }

//91.find the largest consiqutive number
// var nums = [100, 4, 200, 1, 3, 2];
// var set = nums;
// var max = 0;
// for (var i = 0; i < nums.length; i++) {
//     var num = nums[i];
//     if (set.includes(num - 1)) {
//         continue;
//     }
//     var currLength = 0;
//     while (set.includes(num)) {
//         currLength++;
//         num++;
//     }
//     max = Math.max(max, currLength);
// }
// console.log(max);

//92.stock buy and sell optimization

// var prices = [7, 1, 5, 3, 6, 4];
// var profit = 0;
// var buying_price = prices[0];
// for (var i = 1; i < prices.length; i++) {

//     if (prices[i] <= buying_price) {
//         buying_price = prices[i];
//         continue;
//     }
//     profit = Math.max(profit, prices[i] - buying_price);
// }
// console.log(profit);

//93.Count the Frequency of Each Character
// var str = "hello";
// var count = {};

// for (var i = 0; i < str.length; i++) {
//     var ch = str[i];

//     if (count[ch]) {
//         count[ch]++;
//     } else {
//         count[ch] = 1;
//     }
// }

// console.log(count);

//94.Remove Duplicate Characters
// var str = "programming";
// var result = "";
// for (var i = 0; i < str.length; i++) {
//     if (!result.includes(str[i])) {
//         result = result + str[i];
//     }
// }
// console.log(result);

//95.Find the Longest Word in a String
// var str = "I love learning JavaScript";
// var words = str.split(" ");
// var longest = "";
// for (var i = 0; i < words.length; i++) {
//     if (words[i].length > longest.length) {
//         longest = words[i];
//     }
// }
// console.log("Longest word:", longest);

//96.function decleration
// function greeting()
// {
//     console.log("Hello world")
// }
// greeting()

//97. function decleration
// function add (a,b)
// {
//   return a+b
//   return a*b
// }
// console.log(add(10,20))

//98.function expression
// let add = function(a,b)
// {
//   return a/b
// }
// console.log(add(10,20))

// let add = function()
// {
//   console.log("Hello world")
// }
// add()

//99.arrow function
// let add = (a,b)=>
// {
//     return a+b
// }
// console.log(add(10,20))
// let hello = (a,b)=>a+b
// console.log(hello(10,20))

//100.arrow function
// function addition (a,b)
// {
//   console.log(a+b)
// }
// function hello (callback)
// {
//   callback(10,20)
// }
// hello(addition)

//101.map using simple prog
// let number = [10,20,30,40,50,60]
// let happy = number.map(i=>i+10) //i represnt the current element
// console.log(happy)

//102.map usnig the next level prog
// let number = [10,20,30,40,50,60]
// let happy = number.map(function(lak)
//                        {
//                          return lak*10
//                        })
// console.log(happy)

//103.callback //it is used for call the 1st function using the 2nd function as the parameter
// function divya()
// {
//   console.log("hello java")
// }
// function laks(callback)
// {
//   callback()
// }
// laks(divya)

//104.constructor
// class Number
// {
//   constructor(name,age)
//   {
//     this.name = name;
//     this.age = age;
//   }
//   display()
//   {
//     console.log(this.name)
//     console.log(this.age)
//   }
// }
//   const h1 = new Number("lakshitha",18)
// h1.display()

//105 push the empty array the elements
// let numbers = []
// numbers.push(10)
// numbers.push(20)
// numbers.push(30)
// numbers.push(40)
// numbers.push(50)
// console.log(numbers)

//106 push the number
// let dhan = [5,10,17,11]
// dhan.pop(5)
// dhan.pop(10)
// dhan.pop(17)
// dhan.pop(11)
// dhan.push(200)
// console.log(dhan)

//107 class oda problem
// class Lakshitha
// {
//   name = " "
//   address = " "
//   showdata()
//   {
//     console.log(this.name)
//     console.log(this.address)
//   }
// }
// const h1 = new Lakshitha()
// h1.name ="lakshitha"
// h1.address = "madurai"
// h1.showdata()

//108 Find Employee ID
let id = 102;

if (id == 101) {
    console.log("Seyon");
}
else if (id == 102) {
    console.log("Ram");
}
else {
    console.log("Invalid ID");
}

//109. find the unique employee id find
// class Employee
// {
//   constructor(id,name,age,salary)
//   {
//     this.id = id
//     this.name = name
//     this.age = age
//     this.salary = salary
//   }
//   showdata()
//   {
//     console.log(this.id)
//     console.log(this.name)
//     console.log(this.age)
//     console.log(this.salary)
//   }
// }
// const e1 = new Employee(101,"seyon",17,100000)
// const e2 = new Employee(102,"chottu",23,700000)
// const e3 = new Employee(103,"ajith",25,600000)
// const e4 = new Employee(104,"vijay",26,500000)
// let employee = [e1,e2,e3,e4]
// let empid = parseInt(prompt("Enter the id:"))
// let isnotmatch = false
// for(let i=0;i<employee.length;i++)
// {
//   if(employee[i].id === empid)
//   {
//     employee[i].showdata()
//     isnotmatch = true
//   }
// }
// if(isnotmatch === false )
// {
//   console.log("Invalid Employee id")
// }

//110.normal datas print pannanum
class Student
{
  constructor(name,id,mark)
  {
    this.name = name
    this.id = id
    this.mark = mark
  }
  lak()
  {
    console.log(this.name)
    console.log(this.id)
    console.log(this.mark)
  }
}
const h1 = new Student("hello",101,90)
const h2 = new Student("lebi",102,100)
const h3 = new Student("subi",103,98)
h1.lak()
h2.lak()
h3.lak()
