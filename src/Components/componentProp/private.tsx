import React from 'react'
import Login from './Login'
import {ProfileProp} from './profile'


type PrivateProp={
    isLoggedIn:boolean;
    Component:React.ComponentType<ProfileProp>
}

const Private=({isLoggedIn,Component}:PrivateProp)=>{

   if(isLoggedIn){
    return <Component name='Ashish' />
   }else{
    return <Login />
   }
}
export default Private