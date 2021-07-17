import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import BookList from './containers/BookList';



// function or class??  
// we can make this a function since we wont have to deal with state here
// give it state so we can pass down info
// using a constructor if we are instantiniting a new instance... 


class App extends Component {

  state = {}

  
  render() {
    return (
      <div>
          <Header/>
          <Navbar/>
          <BookList/>
          
      </div>
    );
  }

}

export default App;


