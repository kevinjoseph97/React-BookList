import React from 'react'

// connect to store so we can delete book with button
import { connect } from 'react-redux'
import { deleteBook } from '../redux/actions/index'


function BookItem(props) {


    const clickHandler=(e)=> {
        if(e.target.matches("h1")) {console.log(e.target.innerText) }

        if(e.target.matches("button")) {console.log(e.target.innerText) }
            // import connect to map delete action with store 
            props.deleteBook(props.b)


  
    }

   
    return (
        <div>
            <h1 onClick={clickHandler}>{props.b.title}</h1>
            <h5> {props.b.author} </h5>
            <h5> {props.b.image} </h5>
            

            {/* throw onlcikc on this wiht an annyom function */}
            <button onClick={(clickHandler) }>DELETE BOOK</button>
        </div>
    )

}

export default connect(null, {deleteBook})(BookItem)
