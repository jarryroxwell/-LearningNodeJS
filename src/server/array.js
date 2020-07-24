var arr = (a)=>{
    return "length array: " + a.length;
};
var str = (a, b)=>{
    return `${a} + ${b} = ${a+b}`;
};
var x = 145;


module.exports = {
    slark: (a)=>{
        return a*a; 
    },
    axe: ()=>{
        return "axe";
    },
};
module.exports.zero = ()=>{
    return "ZERO";
};

module.exports.arr = arr;
module.exports.x = x;
module.exports.str = str;