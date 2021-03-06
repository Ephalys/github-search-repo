import React from 'react';
import TweenMax from 'gsap';
import './Repos.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Repos extends React.Component {

    componentDidMount(){
        TweenMax.from(this.repoBlock, .3, {y: 50, opacity: 0, delay: .3});
    }

    render() {
        return(
            <div className="repo-block" key={ this.props.itemKey } ref={div => this.repoBlock = div}>
                <div className="repo">
                    <a href={ this.props.url } target="_blank" rel="noopener noreferrer">
                        { this.props.fullname }
                    </a>
                    <p className="description">
                        { this.props.description }
                    </p>
                    <p className="score">
                        <FontAwesomeIcon icon="star" />
                        { this.props.score }
                    </p>

                </div>
            </div>
        );
    }
}

export default Repos;
