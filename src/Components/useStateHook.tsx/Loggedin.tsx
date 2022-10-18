import React,{useState} from 'react'

type authUser ={
    name:string;
    email: string
}


const LoggedIn=()=>{
    const [isloggedIn,setIsloggedIn]=useState<authUser | null>(null)

    const handleLogIn=()=>{
        
         setIsloggedIn({
            name:'Ashish',
            email:'Ashish@gmail.com'
         })
    }
    const handleLogOut=()=>{
         setIsloggedIn(null)
    }

    return (
        <div>
            <button onClick={handleLogIn}>Login</button>
            <button onClick={handleLogOut}>LogOut</button>
            <h4>user is {isloggedIn?.name}</h4>
            <h4>user is {isloggedIn?.email}</h4>
        </div>
    )
}

export default LoggedIn