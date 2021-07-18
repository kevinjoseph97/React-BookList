// class comp ... needs its own state 
import React, { Component } from 'react'


import {connect} from 'react-redux'
import { addNewBook } from '../redux/actions/index'



class BookNewForm extends Component {

    //  calling constructor so we don;t mutate state by accident
    constructor(props){
        // super helps to get everything from inheritance
        super(props) 
        // cuz we have constructor above .,.. we have to say this.state because
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
        this.setState({
            title: '',
          author: '',
          image: ''
          });
        
    }

    // onchange makes this a controlled form.... .
    onChangeHandler = (e)=> {
        console.log(e.target.name, ':::', e.target.value)
        this.setState({[e.target.name]: e.target.value} )
    }


    
    render() {
        return (
            <div>
                <h1>Add A Book:</h1>
                <form onSubmit={this.submitHandler}>
                    <input type="text" value={this.state.title} onChange={this.onChangeHandler} name="title" placeholder="Title"/>

                    <br></br>

                    {/* value is for state / name is for whaere it submits */}
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


// const mapDispatchToProps = (dispatch)=> {
//    return{ 
//        addNewBook: newBook => dispatch(addNewBook(newBook))
//    }
// }

// conneect takes in either maptstate or mapdispatch 
// since we are mnapping over using the function above as a action we can put null
export default connect(null, {addNewBook})(BookNewForm)

