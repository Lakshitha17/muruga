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
let n = 1345;
let smallest = 9;
while(n>0)
{
  digit = n%10;
  if(digit<smallest)
  {
    smallest = digit
  }
  n = parseInt(n/10)
}
console.log(smallest)
