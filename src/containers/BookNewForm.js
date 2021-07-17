// class comp ... needs its own state 
import React, { Component } from 'react'

class BookNewForm extends Component {
    constructor(props){
        super(props) 

        this.state = {
           nameInputValue
        }
    }

    submitHandler = (e)=>{
        e.preventDefault() 
        console.log(e.target.value)
        
    }







   
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default BookNewForm
