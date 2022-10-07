
const createObj = (...args)=>{
    let obj = {}
    for(let i = 0;i<args.length;i++){
        obj[i] = args[i];
    }
    return obj
}

let obj = createObj('Mountain','Tree','Ocean')
console.log("Object created ---",obj)
