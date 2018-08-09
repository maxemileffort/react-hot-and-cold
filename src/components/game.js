import React from 'react';
import Header from './header'
import Card from './card'

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

    getRandomNum(){
        return Math.floor(Math.random * 100 + 1)
    }

    reset(){
        this.setState({
            feedback: 'Make your first guess!',
            secretNum: this.getRandomNum(),
            guess: null,
            prevTries: []
        })
        console.log('new game!')
    }

    render(){
        return (
            <div>
                <Header 
                    reset={this.reset.bind(this)}
                />
                <Card />
            </div>
        )
    }
}
