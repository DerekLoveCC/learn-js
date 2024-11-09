function AFunc(){

}
console.log(AFunc.prototype); //{}
console.log(AFunc.prototype === Function.prototype);//false
console.log(Object.getPrototypeOf(AFunc) === Function.prototype);//true
console.log(AFunc instanceof Function);

let AFuncInstance = new AFunc();
console.log(AFuncInstance.prototype); //undefined
console.log(Object.getPrototypeOf(AFuncInstance) === AFunc.prototype);//true

console.log(Object.prototype);//[Object: null prototype] {}
console.log(Object.getPrototypeOf({}) === Object.prototype)//true
