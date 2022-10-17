import React from 'react'

type InputProps={
    value?:string
    
}

const Input =(props:InputProps)=>{
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
          alert('I am onchange prop')
    }
    return (
        <div>
            <input placeholder='Write something...' onChange={handleChange} />
        </div>
    )
}
export default Input