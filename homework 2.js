//1  prime


function isPrime (num){

	let snum = Math.sqrt(num)

    for(let i = 2;i <= snum; i++){
        
        if(num % i === 0) {return "no"; }
    }

    return "yes";
}

console.log(isPrime(63))



//2 fibonacci


function fibonacci(n) {

  if (n <= 2) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

//console.log(fibonacci(3))



//3

function fib (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var arr = fib(n - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
  }
};

 //console.log(fib(3));


 //4 help!!!!!!!!!!!!!!!!!!!!!!!!!
 function pAndSum(num){

var temp = num,
 sum = 0, 
 product = 1;
 var d = temp % 10; 
  temp = Math.floor(temp / 10);
 sum += d; 
 product *= d; 

 console.log(sum);
 console.log(product)
   
}
 pAndSum(1233)

// 5 help!!!!!!!!!!!!

function arrByNum(a,b,num){

	var arr=[];

      for (var i=a; i<=b; i++) {

           var arr = new Array(num).fill(i)
}
return arr;
}

console.log(arrByNum(10,100,3))


//6

function secondLargeNumber(arr){
	
	var firstNum = 0;
	var secondNum = 0;
	
	for(var i=0; i<arr.length; i++){
		if(firstNum < arr[i]){
			seconsNum = firstNum;
			firstNum = arr[i];			
		}else if(secondNum < arr[i]){
			secondNum = arr[i];
		}
	}
	
	return (arr.indexOf(secondNum) )
	
}

//console.log(secondLargeNumber([23, -98, 0, -456, 12, 8]));


//7 cant deal
function fillArray(arr,pad,repeat) {
 
 	
 	var first=arr[0];
 	var last=arr[arr.length - 1];
 	var lastArr=new Array(repeat).fill(last);
    var firstArr=new Array(repeat).fill(first);

   return firstArr.concat(arr,lastArr)
}

console.log(fillArray([1,2,3,4], 3))


