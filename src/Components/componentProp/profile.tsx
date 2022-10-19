import React from 'react'

 export type ProfileProp ={
    name:string
}
const Profile=({name}:ProfileProp)=>{

    return(
        <div>I am profile Page</div>
    )
}
export default Profile