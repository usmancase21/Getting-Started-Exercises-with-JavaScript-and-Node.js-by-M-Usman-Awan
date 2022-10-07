

let stage_life_checker = (age)=>{
    if(age < 2){
        console.log("Baby")
    }else if(age >= 2 && age < 4){
        console.log("Toddler")
    }
    else if(age >= 4 && age < 13){
        console.log("Kid")
    }
    else if(age >= 13 && age < 20){
        console.log("Teenager")
    }
    else if(age >= 20 && age < 65){
        console.log("Adult")
    }
    else if(age >= 65){
        console.log("Elder")
    }
    
   
}

stage_life_checker(2)
stage_life_checker(23)
stage_life_checker(65)
