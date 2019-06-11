import React from 'react';
import './Header.scss';
import TweenMax from 'gsap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Header extends React.Component {

    componentDidMount(){
        TweenMax.from(this.headerIcon, .3, {y: 50, opacity: 0});
        TweenMax.from(this.headerTitle, .3, {y: 50, opacity: 0, delay: .3});
    }

    render() {
        return (
        <header className="App-header">
            <div className="header-icon" ref={div => this.headerIcon = div}>
            <FontAwesomeIcon  icon={['fab', 'github']} className="App-logo" alt="logo"/>
            </div>
            <h1 ref={div => this.headerTitle = div}>
                Want to find some repositories ?
            </h1>
        </header>
        )
    }
}

export default Header;
