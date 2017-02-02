var money:number;
let bankAccount={
    money:2000,
    deposit(value:number){
        this.money +=value;
    }
};
let myself ={
    name:"gere",
    bankAccount:bankAccount,
    hobbies:["violin","Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself.hobbies);


