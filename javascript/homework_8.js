//1

class Auther {

  constructor(name,email,gender) {
    this.name = name;
    this.email=email;
    this.gender=gender;
  }

  get name() {
         return this.name;
      }

   get email(){

   		return this.email;

   }
    get gender(){

   		return this.gender;

   }

  set name(x) {
         this.name = x;
      }

   set email(y){

   		this.email=y;

   }

	set email(z){

   		this.email=z;

   }


   toString() {
        return '(' + this.name + ', ' + this.emial + ', ' + this.gender ')';
    }


}

class Book {
	var reused_auther=new Auther;
	constructor(title, auther, price, quantity) {
	    this.title = title;
	    this.auther=reused_auther;
	    this.price=price;
	    this.quantity=quantity;
  }
 
 set quantity(x){	
 	this.quantity=x;

 }

set price(y){
	this.price=y;
}


  get getProfit(){

  	return this.quantity * this.price;

  }

 toString() {
        return '(' + this.title + ', ' + this.auther + ', ' + this.price +', ' + this.quantity')';
    }


}

//2
