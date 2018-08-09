import React from 'react';

export default class Game extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            feedback: 'Make your first guess!',
            secretNum: this.getRandomNum(),
            guess: null,
            prevTries: []
        }
    }

    render(){
        return (
            <div>
                <Header />
                <Card />
            </div>
        )
    }
}
