import React, {Component} from 'react';
import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';
import logo from './logo.svg';
import './App.css';
import Book1Name from "./Book1Name";

const client = new ApolloClient({
    uri: '/graphql'
})

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
            <ApolloProvider client={client}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
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
                        <Book1Name/>
                    </header>
                </div>

            </ApolloProvider>
        );
    }
}

export default App;
