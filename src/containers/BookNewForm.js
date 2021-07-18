// class comp ... needs its own state 
import React, { Component } from 'react'
import { addNewBook } from '../redux/actions/index'

import {connect} from 'react-redux'










class BookNewForm extends Component {
    constructor(props){
        // super helps to get everything from inheritance
        super(props) 
        // cuz we have constructor above .,.. we have to say this.state becas
        // constructor is constructing state
        this.state = {
          title: '',
          author: '',
          image: ''
        }
    }

    submitHandler = (e)=>{
        e.preventDefault() 
        console.log(e.target.value)

        this.props.addNewBook( this.state )
        
    }

    onChangeHandler = (e)=> {
        console.log(e.target.name, ':::', e.target.value)
        this.setState({[e.target.name]: e.target.value} )
    }


    
    render() {
        return (
            <div>
                <h1>Add A Book:</h1>
                <form onSubmit={this.submitHandler}>
                    <input type="text" value={this.state.nameInputValue} onChange={this.onChangeHandler} name="title" placeholder="Title"/>

                    <br></br>

                    <input type="text" value={this.state.author} onChange={this.onChangeHandler} name="author" placeholder="Author"/>

                    <br></br>

                    {/* set up image src */}
                    <input type="text" value={this.state.image} onChange={this.onChangeHandler} name="image" placeholder="Image URL"/>

                    <br></br>

                    <input type="submit" value="ADD THIS BOOK NOW"/>

                </form>

            </div>
        )
    }
}


const mapDispatchToProps = (dispatch)=> {
   return{ 
       addNewBook: newBook => dispatch(addNewBook(newBook))
   }
}


export default connect(null, mapDispatchToProps)(BookNewForm)

