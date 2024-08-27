function BankAccount(accountNumber,name,type,blance) {
    this.accountNumber=accountNumber;
    this.name=name;
    this.type=type;
    this.blance=blance;
}

BankAccount.prototype.deposit = function(amount=0) {
    console.log(this.blance + amount);
}
BankAccount.prototype.withdraw = function(amount=0) {
    if(this.blance >0){
        console.log(this.blance - amount);
    }
    else{
        console.log("insufint blance");
    }
}
BankAccount.prototype.checkBlance = function() {
    console.log(this.blance);
}
BankAccount.prototype.isActive = function() {
    if (this.blance > 0) {
        console.log("this account is active");
    }
    else{
        console.log("this account is not active");
    }
}

let p1=new BankAccount(54370100011212,"Mahipal","saving",4500)
let p2=new BankAccount(74185296328528,"ram","saving",0)
let p3=new BankAccount(97813121654612,"shyam","saving",-50)
let p4=new BankAccount(89743131341654,"rakesh","saving",5000)
let p5=new BankAccount(97854212319876,"lucky","saving",40)
let p6=new BankAccount(98745613546465,"abhi","saving",-4505)
let p7=new BankAccount(98741574654623,"amit","saving",45450)

// console.log(p1.deposit);
p1.deposit(50)
p1.withdraw(100)
p1.checkBlance()
p1.isActive()
