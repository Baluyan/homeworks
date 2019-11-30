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


///2 to be complited
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

   toString() {
        return '(' + this.id + ', ' + this.name + ', ' + this.balance')';
    }

}


//3 to be complited

class Person{
	constructor(age, firstName, lastName,gender) {
	    this.firstName= firstName;
	    this.lastName=lastName;
	    this.gender=gender;
	    this.age=age;
  }

  set firstName(y){
		this.firstName=y;
	}

  set lastName(x){
		this.lastName=x;
	}

  set firstName(z){
		this.age=z;
	}
  set firstName(c){
		this.gender=c;
	}
	get firstName() {
         return this.firstName;
      }

	 get age(){

   		return this.age;

  	 }
    get lastName(){

   		return this.lastName;

   }
   get gender(){

   		return this.gender;

   }

   toString() {
        return '(' + this.firstName + ', ' + this.lastName + ', ' + this.age + ', ' + this.gender')';
    }
}

class Student extends Person{
   constructor(program, year, fee,grade) {
	    this.program= program.split(" ");
	    this.year=year;
	    this.fee=fee;
	    this.grade=grade;
  }

  passExam(program, grade){

      var year=0;
      if(this.garde>=50){

      		this.year++;

      }
return this.year;

  }
}
