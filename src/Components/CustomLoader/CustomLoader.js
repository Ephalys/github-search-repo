import React from 'react';
import Loader from 'react-loader-spinner'
import './CustomLoader.scss';

class Header extends React.Component {

    render() {
        return (
            <div className="header-overlay">
                <Loader
                    type="ThreeDots"
                    color="#fff"
                    height="40"
                    width="40"
                />
            </div>
        )
    }
}

export default Header;
