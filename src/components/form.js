import React from 'react'

export default class Form extends React.Component{
    handleSubmit(event){
        event.preventDefault()
        document.getElementById('guess').value = ''
    }

    render(){

        if(this.props.feedback === 'Bingo!'){
            return(
                <form onSubmit={this.handleSubmit}>
                    <input type="number" min="1" max="100" id="guess" placeholder="Guess"
                        onChange={(e)=>this.props.changeGuess(e.target.value)}
                    />
                    <input type="submit" value="Guess"
                        onClick={()=>{
                            this.props.checkAns();
                            this.props.addGuess(this.props.guess)
                        }}
                        disabled="disabled"
                    />
                </form>
            )
            
        }
        
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="number" min="1" max="100" id="guess" placeholder="Guess"
                    onChange={(e)=>this.props.changeGuess(e.target.value)}
                />
                <input type="submit" value="Guess"
                    onClick={()=>{
                        this.props.checkAns();
                        this.props.addGuess(this.props.guess)
                    }}
                    
                />
            </form>
        )
    }
    
}


//attempted to make stateless form, and failed XD
// const Form = props => {
//     let guess = React.createRef();
 
//     const handleSubmit = event => {
//         event.preventDefault();
//         guess.value = '';
//     }   
 
//     return (
//       <form onSubmit={handleSubmit}>
//         <input type="number" min="1" max="100" 
//             onChange={()=>{props.changeGuess(guess)}}
//             ref={guess}
//             placeholder="Guess" />
//         <input type="submit" value="Guess" 
//             onClick={()=>{
//                 props.checkAns()
//                 props.addGuess(guess)
//             }}
//         />
//       </form>
//     );
// }

// export default Form;