var person ={_firstName:""};
Object.defineProperty(person,"firstName", {
    get:function(){
        return this._firstName;
    },
    set:function(value){
        this._firstName = value.toUpperCase();
    },
    enumerable:true,
    configurable:true
});
person._firstName="Asaad";
console.log(person._firstName);