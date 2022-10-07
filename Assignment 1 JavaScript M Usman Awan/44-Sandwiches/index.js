

const sandwich_ingredients = (...args)=>{
   console.log("-------")
   console.log("Sandwich ingredients")
   console.log("-------")
  return args.map(ingredient=>{
      console.log(ingredient)
   })
}


sandwich_ingredients('Bread','Cheese','ketchup');
sandwich_ingredients('Bread','Meat Loaf','ketchup');
sandwich_ingredients('Bread','pickles','halepenos','sausage');

