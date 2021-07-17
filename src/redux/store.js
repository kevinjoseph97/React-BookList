import { createStore } from 'redux'

const  BookAllFE =  [
    {id: 1, title:"HP and SS", author: "JK RWL", image: "blahblhas.com"},
    {id: 2, title:"HP and CS", author: "JK RWL", image: "blahblhas.com"},
    {id: 3, title:"HP and PA", author: "JK RWL", image: "blahblhas.com"},
    {id: 4, title:"HP and GF", author: "JK RWL", image: "blahblhas.com"},
    {id: 5, title:"HP and OP", author: "JK RWL", image: "blahblhas.com"}
  ]

// actions are keeping track of functoins we use 
function BookReducer(state= BookAllFE, action) {
    switch(action.type){
        
        default: 
            return state
    }
}



// create the store using book reducer 
let store = createStore(BookReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store


