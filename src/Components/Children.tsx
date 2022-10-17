import React from 'react'

type headingProp ={
    children:string
}

const Heading =(props : headingProp)=>{

    return (
        <div>{props.children}</div>
    )
}

export default Heading