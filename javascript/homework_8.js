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


/2
 class Account{
	constructor(id, name, balance) {
	    this.id = id;
	    this.balance=balance;
	    this.name=name;
  }
	
	set balance(x){	
 	this.balance=x;

 }

	set name(y){
		this.name=y;
	}
	get name() {
         return this.name;
      }

	 get balance(){

   		return this.balance;

  	 }
    get id(){

   		return this.id;

   }


   credit(amount){

   		balance= amount+ this.balance;
   		 return balance;

   }
   debit(amount){

   		if(this.balance>amount){
   		 	return this.balance-amount;
   		}

   		else{

   		   return “Amount exceeded balance.”
   		}
   }


   transferTo(anotherAccount, amount){

   		if(this.balance>amount){
   		 	anotherAccount= this.balance-amount;
   		}

   		else{

   		   return “Amount exceeded balance.”
   		}
return this.balance;
   }

   static identifyAccounts(accountFirst, accountSecond){


   
   }
}
