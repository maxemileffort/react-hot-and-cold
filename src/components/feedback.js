import React from 'react'

export default function Feedback(props){

    return(
        <div>
            <p>Feedback:</p>
            <p>{props.feedback}</p>
        </div>
    )
}