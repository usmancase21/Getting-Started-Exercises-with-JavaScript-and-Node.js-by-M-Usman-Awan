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

magicians = make_great(magicians);

show_magicians(magicians)
