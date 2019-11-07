//1 recursiayov chi linum, vstah em it has simple solution,
function moveFirstel(arr){

if(arr.length==0){

	return arr;
}
if(arr.length==1){

	return arr;
}
 else{

 	return arr.splice( 1 )
 }

}
console.log( moveFirstel([5]))

//2
function flatten (arr) {

  var newArr = [];

  for (var i = 0; i < arr.length; i++) {

    if (Array.isArray(arr[i])) {

      var temp = flatten(arr[i]);

      temp.forEach(function(value){ newArr.push(value); })

    } else {

      newArr.push(arr[i]);
    }
  }
  return newArr;
}


console.log(flatten([1, [3, 4, [1, 2]], 10]))


//3
function sumDigit(num) {

sum = 0;

while(num > 0 || sum > 9)
    {
        if(num == 0)
        {
            num = sum;
            sum = 0;
        }
        sum = sum+num % 10;
        num = Math.floor(num/10);
    }
  return sum;
}

console.log(sumDigit(999999999999))


//4

function rotLeft(arr, num) {
    var arr_2 = [];
    for (var i = 0; i < arr.length; i++) {
        arr_2.push(arr[i]);
    };
    for (var j = 1; j <= num; j++) {
        arr_2.shift(arr_2.push(arr_2[0]));
    }
    return arr_2;
}

console.log(rotLeft(["a","b","c", "d", "e", "f", "g", "h"] ,3))

//5 stex chem karoghanum lcnem mi hat array i mej, ha bug em talis
function objectFlip(obj) {
  const ret = {};
  let arr=[];
  Object.keys(obj).forEach(key => {
    ret[obj[key]] = key;
    
  });
  return ret;
}
console.log(objectFlip({ a: "1", b:"2",c: "2", d: "2" }))

//6
function objSort(arr){

var arr=[
{ book: "CatcherRye", readStatus: true, percent: 40},
{ book: "AnimalFar", readStatus: true, percent: 20},
{ book: "Solaris", readStatus: false, percent: 90 },
{ book: "TheFall", readStatus: true, percent: 50 },
{ book: "WhiteNights", readStatus: false, percent: 60 } ,
{ book: "AfterDark", readStatus: true, percent: 70 }
];
for(var i=0; i<arr.length-1; i++) {

  if(arr[i].readStatus === true){
 console.log(arr[i]);
function compare( a, b ) {
  

  if ( a.percent < b.percent){
    return -1;
  }
  if ( a.percent > b.percent ){
    return 1;
  }
  return 0;
}

var sorted= (arr.sort( compare ));
}
}

return sorted;

}
console.log(objSort())


