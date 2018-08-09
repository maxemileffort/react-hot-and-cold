import React from 'react'

export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            instructions: 'hide'
        }
    }

    render(){
        if(this.state.instructions === 'display'){
            return(
                <div>
                    <h3>How to Play</h3>
                    <p>If you're close, you're hot. Guess again!</p>
                    <p>If you're not, you're cold. Guess again!</p>
                    <p>If you're right, bingo! You win!</p>
                    <p>Hint: Number is between 1 and 100.</p>
                </div>
            )
        }
        else {
            return(
            <div>
                <h1>Hot or Cold</h1>
                <h3>How to Play</h3>
                <h3>New Game</h3>
            </div>
        )
        }
    }
}