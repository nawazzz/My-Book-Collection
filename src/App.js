import React from 'react'
import logo from './logo.svg';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ""
    }    
  }
  render() {
    return (
      <div style={{textAlign: "center"}}>
        <h1>My Book Collection</h1>
        <input 
          type={"text"} value={this.state.inputValue} 
          placeholder={"Enter book title"}
        />
      </div>
    );
  }
}

export default App;
