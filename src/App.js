import React from 'react';
import './App.scss';
import Header from './Components/Header';
import Form from './Components/Form';

class App extends React.Component {

    render() {
        return(
            <div className="App">
                <Header />
                <Form />
            </div>
        );
    }
}

export default App;
