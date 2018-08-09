import React from 'react'
import Form from './form'
import Tracker from './tracker'
import Feedback from './feedback'
import Header from './header'


export default class Card extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            feedback: 'Make your first guess!',
            secretNum: this.getRandomNum(),
            guess: '',
            prevTries: []
        }
    }

    getRandomNum(){
        return Math.floor(Math.random() * 100 + 1)
    }

    reset(){
        this.setState({
            feedback: 'Make your first guess!',
            secretNum: this.getRandomNum(),
            guess: '',
            prevTries: []
        })
        console.log('new game!')
    }

    changeGuess(num){
        this.setState({
            guess: num
        })
    }

    checkAns(){
        let diff = Math.abs(this.state.guess - this.state.secretNum);
        console.log(diff)
        if(diff === 0){
            this.setState({
                feedback: 'Bingo!'
            })
        } else if(diff>=1 && diff<5){
            this.setState({
                feedback: 'Hot!'
            })
        } else if(diff>=5 && diff<=10){
            this.setState({
                feedback: 'Warm.'
            })
        } else if(diff>10 && diff<=15){
            this.setState({
                feedback: 'Cold.'
            })
        } else if(diff>15){
            this.setState({
                feedback: 'Freezing!'
            })
        }
    }

    addGuess(num){
        this.state.prevTries.push(num);
        console.log(this.state)
    }

    render(){
            return(
            <div>
                <Header 
                    reset={this.reset.bind(this)}
                />
                <Form 
                    feedback={this.state.feedback}
                    guess={this.state.guess}
                    changeGuess={this.changeGuess.bind(this)}
                    checkAns={this.checkAns.bind(this)}
                    addGuess={this.addGuess.bind(this)}
                />
                <Tracker prevTries={this.state.prevTries}/>
                <Feedback feedback={this.state.feedback}/>
            </div>
        )
        
    }
}