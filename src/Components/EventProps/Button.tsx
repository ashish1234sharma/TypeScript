import React from 'react'

type ButtonProp ={
    handleClick: (event:React.MouseEvent<HTMLButtonElement>,id:Number)=> void
}

const Button =(props:ButtonProp)=>{

    return (
        <button onClick={(event)=>props.handleClick(event,1)}> CLick me</button>
    )
}
export default  Button