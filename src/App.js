import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons/index'
import { faStar } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faStar);


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
