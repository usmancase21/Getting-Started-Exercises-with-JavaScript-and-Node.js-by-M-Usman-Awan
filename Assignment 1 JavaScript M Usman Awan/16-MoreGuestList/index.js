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
