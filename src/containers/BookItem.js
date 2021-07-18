import React from 'react'




function BookItem(props) {
   
    return (
        <div>
            <h1>{props.b.title}</h1>
            <h5> {props.b.author} </h5>
            <h5> {props.b.image} </h5>
        </div>
    )

}

export default BookItem
