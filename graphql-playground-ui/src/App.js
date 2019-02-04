import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            welcomeMessage: 'Welcome from the Reacts'
        }
    }

    componentDidMount() {
        fetch("/welcome-message").then(response => {
            return response.text()
        }).then(text => {
            this.setState({welcomeMessage: text})
        })
    }

    render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
              {this.state.welcomeMessage}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
