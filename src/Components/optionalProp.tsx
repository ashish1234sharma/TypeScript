import React from 'react'

type optionalPropType={
    message:string
    messageCount:number
    name?:string
   
}

const OptionalProp=(props:optionalPropType)=>{

    return (
        <div>
          <p>{props.message} </p>
          <p>{props.messageCount}</p>
            
        </div>
    )
}
export default OptionalProp