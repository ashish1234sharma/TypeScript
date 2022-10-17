import React from 'react'
type statusprops={
    status:'loading' | 'success' | 'processing'

}


const Status=(props : statusprops)=>{

    let message
    if(props.status == 'loading'){
       message = 'message is loading'
    }else if(props.status == "success"){
        message ='message is success'
    }else if(props.status == 'processing'){
        message ='message is in preocess'
    }

    return (
        <div> {message}</div>
    )
}

export default Status