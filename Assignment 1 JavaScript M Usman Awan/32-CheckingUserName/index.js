let current_users = ['Eric','David','Admin','Peter','Mike'];
let new_users = ['Albert','David','John','Michael','Mike'];



new_users.map((new_user)=>{
    let user=  current_users.find(curr_user=>new_user.toLowerCase() === curr_user.toLowerCase())
    if(user){
        console.log(`${user} is not available, please enter a new username`)
    }else{
        console.log('User name is available !')
    }
  
})



