let favFruits = ['Kiwi','Strawberry','Peaches'];
let allFruits = ['Banana','Mango',...favFruits];


allFruits.map((fruit)=>{
    if(favFruits.includes(fruit)){
        console.log(`You really like ${fruit}`)
    }
})
