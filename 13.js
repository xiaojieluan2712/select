(function() {
    var a = b = 5;
})();   
console.log(b);
console.log(a);
/**
 * var a=b=5相当于拆解成var a=b; b=5; 然后，b=5前面没有var，相当于声明为全局变量（这种方式在严格模式下会报错，此题不考虑)。
 * a声明的是函数的局部变量，在函数结束是就销毁了，所以在全局下找不到a，于是报错。
 */