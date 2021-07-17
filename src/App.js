import { Component } from 'react';
import './App.css';
import Header from './components/Header';


// function or class??  
// we can make this a function since we wont have to deal with state here
// give it state so we can pass down info
// using a constructor if we are instantiniting a new instance... 


class App extends Component {

  state = {
    BookAll:  [
      {id: 1, title:"HP and SS", author: "JK RWL", image: "blahblhas.com"},
      {id: 2, title:"HP and CS", author: "JK RWL", image: "blahblhas.com"},
      {id: 3, title:"HP and PA", author: "JK RWL", image: "blahblhas.com"},
      {id: 4, title:"HP and GF", author: "JK RWL", image: "blahblhas.com"},
      {id: 5, title:"HP and OP", author: "JK RWL", image: "blahblhas.com"}
    ]
  }
  render() {
    return (
      <div>
          <Header/>
      </div>
    );
  }

}

export default App;


