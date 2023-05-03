>[success] # ES6 -- 实现多继承
~~~
let SerializableMixin = {
    serialize(){
        return JSON.stringify(this);
    }
};

let AreaMixin = {
    getArea(){
        return this.length*this.width
    }
}

function mixin(...mixins){
    var base = function(){};
    Object.assign(base.prototype,...mixins);
    return base;
}

class Square extends mixin(AreaMixin, SerializableMixin){
    constructor(length){
        super();
        this.length = length;
        this.width = length;
    }
}

var x = new Square(3);   
console.log(x.getArea());  // 9
console.log(x.Serialize())   //{"length":3,"width":3}
~~~