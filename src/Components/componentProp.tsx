import React from 'react'

type ComponentPropType={
    children :React.ReactNode
}

const ComponentProp =(props:ComponentPropType)=>{

    return (
        <div>{props.children}</div>

    )
}
export default ComponentProp