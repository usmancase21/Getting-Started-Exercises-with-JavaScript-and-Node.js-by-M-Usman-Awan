let magicians = ['Albert','Robert','Clive','Richard']


const show_magicians = (all_magicians)=>{
   all_magicians.map(magician=>{
      console.log(magician)
   })
}

show_magicians(magicians)

const make_great = (all_magicians)=>{
  return all_magicians.map(magician=>{
      return `${magician} the great`
   })
}

let greatMagicians = make_great(magicians);


console.log("--------")
console.log("Great Magicians")
console.log("--------")
show_magicians(greatMagicians)
console.log("--------")
console.log("Original Magicians")
console.log("--------")
show_magicians(magicians)

