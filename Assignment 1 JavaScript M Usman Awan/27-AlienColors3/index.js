let alien_color = 'green';

console.log("color -->",alien_color)

let score_check = (color)=>{
    if(color === 'green'){
        console.log("You have earned 5 points")
    }else if(color==='yellow'){
        console.log("You have earned 10 points")
    }
    else if(color==='red'){
        console.log("You have earned 15 points")
    }
}

score_check(alien_color)


alien_color = 'yellow'
console.log("color -->",alien_color)

score_check(alien_color)



alien_color = 'red'
console.log("color -->",alien_color)
score_check(alien_color)