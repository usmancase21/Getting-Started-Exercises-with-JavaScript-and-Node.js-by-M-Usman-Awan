

const call_detail_collector = (manufacturer,model,...args)=>{
   let carObj = {
      manufacturer:manufacturer,
      model:model,
   }
   console.log("args -",args.length)

   if(args.length){
      for (const [key, value] of Object.entries(args)) {
         carObj[Object.keys(value)[0]] = value[Object.keys(value)[0]]
      }
   }
   return carObj

}

console.log(call_detail_collector('Honda','City'))
console.log(call_detail_collector('Honda','Civic',{color:'White'},{Year:'2016'}))
console.log(call_detail_collector('Honda','Civic',{Year:'2022'}))


