var names = ['Hamza','Shehryar','Wasif','Ali'];

for(let i =0; i<names.length;i++){
    console.log(`${names[i]} I would like to invite you to dinner `,)
}
console.log(`${names[3]} will not be attending the dinner`)
names[3] = 'Ahmad'
for(let i =0; i<names.length;i++){
    console.log(`${names[i]} I would like to invite you to dinner `,)
}

console.log("\n We have found a bigger dinner table \n")

names.unshift('Haris');

names.splice(Math.round((names.length - 1) / 2),0,'Ahmad')

for(let i =0; i<names.length;i++){
    console.log(`${names[i]} I would like to invite you to dinner `,)
}


for(let i =0; i<names.length;i++){
    console.log(`${names[i]} I would like to invite you to dinner `,)
}

console.log("----")
console.log("We have a table for only 2")
console.log("---")

while(names.length>2){
    let name = names.pop()
    console.log(`${name} sorry we will unable to cater you`)
}

while(names.length !=0){
    let name = names.pop()
    console.log(`${name} I would like to invite you to dinner `,)
}

