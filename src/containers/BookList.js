// functional 
import React from 'react'
import BookItem from './BookItem'
// get connection to store
import { connect } from 'react-redux'


// suse props from the global store
function BookList(props) {

     const allBooks = props.reduxBooks.map( (book) =>{
        //  key used to keep track of smae as dataset id.. 
         return  <BookItem key={book.id} b={book}/>
     })
  
    return (
        <div>
            <h1>This should be all the books: </h1>
            {allBooks}
        </div>
    )

}


// gives us access to the globl state in the store as if it was props
// reduxBooks is where all the state is getting mapped to the props we call here 
const mapStateToProps=(state=>{
    return {reduxBooks: state }
})


export default  connect(mapStateToProps)(BookList);