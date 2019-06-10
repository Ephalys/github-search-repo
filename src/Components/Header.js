import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from '@fortawesome/free-brands-svg-icons'

class Header extends React.Component {

    render() {
        return (
        <header className="App-header">
            <h1>
                <FontAwesomeIcon icon={faGithub} className="App-logo" alt="logo"/>
                Want to find some repositories ?
            </h1>
        </header>
        )
    }
}

export default Header;
