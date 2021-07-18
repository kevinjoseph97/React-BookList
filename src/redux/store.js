import { createStore } from 'redux'
import BookItem from '../containers/BookItem'

const  BookAllFE =  [
    {id: 1, title:"HP and SS", author: "JK RWL", image: "blahblhas.com"},
    {id: 2, title:"HP and CS", author: "JK RWL", image: "blahblhas.com"},
    {id: 3, title:"HP and PA", author: "JK RWL", image: "blahblhas.com"},
    {id: 4, title:"HP and GF", author: "JK RWL", image: "blahblhas.com"},
    {id: 5, title:"HP and OP", author: "JK RWL", image: "blahblhas.com"}
  ]

// actions are keeping track of functoins we use 
function BookReducer(state= BookAllFE, action) {

    // mapping back to action 
    const addNewBook = ()=> {
        return{
            ...action.payload
        }
    }


    const deleteBook = ()=> {
        return{
            ...action.payload
        }
    }


    switch(action.type){

        case "ADD_BOOK":
            // return copy of state and the new book added
            return[...state, addNewBook()]

        case "DELETE_BOOK":
            let currentBooks  = state.filter( (BookItem)=> BookItem !== action.payload )
            return [...currentBooks]

        
        default: 
            return state
    }
}



// create the store using book reducer // sp we can user stqte anywhere we need it 
let store = createStore(BookReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store


