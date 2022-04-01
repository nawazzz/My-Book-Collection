import React from 'react'
import './App.scss';
import Books from './Books';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: "",
      allBooks: {},
      isLoading: false
    }    
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })
    const url = `https://www.googleapis.com/books/v1/volumes?q="a"`
    fetch(url).then(res => res.json()).then(data => {
      this.setState({
        allBooks: data,
        isLoading: false
      }
      , () => {console.log(this.state)}
      )
    }).catch(error => console.log(error))
  }

  handleInputValue = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  clearInput = (e) => {
    if (this.state.inputValue) {
      this.setState({
        inputValue: ""
      })
    }
  }

  render() {
    return (
      <div style={{textAlign: "center", marginTop: "50px"}}>
        <div>
          <h1>My Book Collection</h1>
          <div className='inputParentContainer'>
            <input 
              type={"text"} value={this.state.inputValue} 
              placeholder={"Enter book title"}
              onChange={this.handleInputValue}
            />
            <span
                onClick={this.clearInput}
                className="clearInput"
              >x</span>
          </div>
        </div>
        <Books inputValue={this.state.inputValue} allBooks={this.state.allBooks} 
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}

export default App;
