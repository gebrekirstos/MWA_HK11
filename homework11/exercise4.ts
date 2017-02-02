class person {
   private _firstName: string ="";

    get firstName(){
        return this._firstName;
    }
    set firstName(value){
        this._firstName= value.toUpperCase();
    }
    enumerable:boolean =true;
    configurable:boolean = true
};
let myperson= new person();
myperson.firstName= "Assad";
console.log(myperson.firstName); 