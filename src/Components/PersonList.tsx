import React from 'react'

type personProps ={
    NameList:{
    f_name:string,
    l_name:string
    }[]
}

const PersonList=(props:personProps)=>{

    return (
        <div>
            {props.NameList.map((e)=>{
                return (
                    <p key={e.l_name}>{e.f_name} {e.l_name}</p>
                )
            })}
            
        </div>
    )
}

export default PersonList