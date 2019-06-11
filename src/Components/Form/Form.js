import React from 'react';
import Repos from '../Repos/Repos';
import './Form.scss';
import CustomLoader from '../CustomLoader/CustomLoader';
import TweenMax from 'gsap';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = { repositories: null, loading: false, value: '' };
        this.myElements = [];
    }

    componentDidMount(){
        TweenMax.from(this.formInput, .3, {y: 50, opacity: 0, delay: .6});
        TweenMax.from(this.formSubmit, .3, {y: 50, opacity: 0, delay: .9});
    }


    onClick(event) {
        this.setState({loading: true});
        let apiUrl = 'https://api.github.com/search/repositories?sort=stars&order=desc&q=' + this.state.value;
        fetch(apiUrl)
            .then(blob => blob.json())
            .then(response => {
                this.setState({ repositories: {search: this.state.value, data: response.items}, loading: false });
            });
        event.preventDefault();
    }

    render() {
        const {repositories, loading, value} = this.state;
        return(
            <div className="App-form">
                <form>
                    <input value={value} onChange={(event)=>this.setState({value: event.target.value})} type="text" ref={(input) => { this.formInput = input; }}/>
                    <button onClick={this.onClick.bind(this)} ref={div => this.formSubmit = div}>Search</button>
                </form>
                {loading && <CustomLoader /> }

                {(repositories && !loading) && (
                    <div className="results">
                        <h3>
                            {repositories.data.length} results for "{repositories.search}"
                        </h3>
                    </div>
                )}

                <div className="App-response-list">
                    { (repositories && !loading) && repositories.data.map(
                        ( item, index ) => (
                            <Repos itemKey = {index} key = {index} fullname={ item.full_name } url = { item.html_url } description = { item.description } score = { item.stargazers_count } ref={div => this.myElements[index] = div}/>
                        )
                    )
                    }
                </div>
            </div>
        );
    }
}

export default Form;
