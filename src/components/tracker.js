import React from 'react'

export default function Tracker(props){
    const guesses = props.prevTries.map((item, index)=>{
        return(<div key={index}>{item}</div>)
    })
    return(
        <div>
            <p>Guess # {props.prevTries.length}</p>
            <p>Previous Guesses:</p>
            <div>{guesses}</div>
        </div>
    )
}