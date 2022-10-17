import React from 'react'

type personProps={
   name:{
    f_name:string;
    l_name:string;

   }
}

const Person =(props:personProps)=>{

    return (
        <div> {props.name.f_name} {props.name.l_name}</div>
    )
}

export default Person