const baseObject={
    width: 0,
    length:0
};
const rectangle = Object.create(baseObject);
rectangle.width=5;
rectangle.length=2;
rectangle.calcSize = function(){
    return this.width * this.length;
};
console.log(rectangle.calcSize());