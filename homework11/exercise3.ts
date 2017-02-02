class baseObject{
    
    width: number=0;
    length:number=0;

    constructor(width:number, length:number){
        this.width=width;
        this.length=length;
    }
    calSize(){
        console.log(this.width * this.length);
    }
};
class rectangle extends baseObject{
    constructor(width:number,length:number){
    super(width,length);
    }

}

const myrec= new rectangle(5,2);
console.log(myrec.calSize());