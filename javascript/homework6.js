//1
function largestProduct(arr) {
 
   	var x=0;

  	var y=0;

    var z=0;

 	 for(var i=0;i<arr.length;i++){

   		x=arr[i];

    	y=arr[i+1];

    		if(x*y>z){

   			   z=x*y;
            };
    };
		 return z;
};

console.log(largestProduct([2,8,4,2,20]))

//2 chgitem xndiry chisht em haskacel te che
function missingInteger(arr){

	var count=0;

	for(i=0;i<arr.length-1;i++){

		if(arr[i+1]-arr[i]!==1){

			count++;
		}
	}

	return count;
}

console.log(missingInteger([1,3,5,7,8,10]))


//3

function acr(str){


	var result = str.replace(/(\w)\w*\W*/g, function (_, i) {

    	return i.toUpperCase();
  }
)
	return result;

}
console.log(acr("Have a good night"))


//4

function subsOfDigits(str,n){
 
 var arr=[];
   
for (let i = 0; i <= str.length; i++) {

    var a="";

  for (let j = i; j < str.length; j++) {

       a += str[j];
       if(a.length==n){

          arr.push(a);
       }
    
  }
}
return arr;

}

 console.log(subsOfDigits("abcdfghz", 7))





//5

var treeNodes=[
  {parent:null,id:0},
  {parent:0,id:1},
  {parent:0,id:2},
  {parent:1,id:3},
  {parent:1,id:4},
  {parent:2,id:5},
  {parent:4,id:6},

];


function totree(branches, node) {
  
  if (!branches[node.parent]) {
    
     branches[node.parent] = {};

  }

  branches[node.parent][node.id] = node;

  branches[node.id] = Object.assign(node, branches[node.id]);

  return branches;
}

var tree = treeNodes.reduce(totree, {})['1']; 

console.log(tree);
