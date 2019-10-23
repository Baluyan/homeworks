//1  prime


function isPrime (num){

	let snum = Math.sqrt(num)

    for(let i = 2;i <= snum; i++){
        
        if(num % i === 0) {return "no"; }
    }

    return "yes";
}

//console.log(isPrime(63))



//2 fibonacci


function fibonacci(n) {

  if (n <= 2) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(2))



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


 //4
 function pAndSum(n){;

 var sum = 0;

 var product = 1;

 while (n != 0) 

        { 
        
             sum = sum + n % 10;

            product=product*(n%10); 

            n =Math.floor( n/10); 
            
        } 

        

        if(product%sum==0){


            	console.log("The Quotient is" +  product/sum)
            }
            else if (product%sum!==0){

            	console.log("the remainder is" +product/sum )
            }

            else{console.log("Cannot calculate")}
   
}
//console.log(pAndSum(1233)) ;

//5
function startEnd(a, b, num) {
  var arr = [];
  var inter = (b - a) / (num - 1);
  for (var i = 0; i < num; i++) {
    arr.push(a + (inter * i));
  }
  return arr;
}

//console.log(startEnd(1,5,6));


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

console.log(secondLargeNumber([23, -98, 0, -456, 12, 8]));

//7
function fillArray(arr,pad,repeat) {
 let result=[...arr];
 let start=arr.slice(0,pad);
 let end=arr.slice(-pad);
 for(let i=0;i<repeat;i++){

 	result=start.concat(result,end);
 }
 	return result;
 
}

console.log(fillArray([1,2,3,4],1,2))




