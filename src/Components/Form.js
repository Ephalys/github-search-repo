import React from 'react';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = { repositories: [] };
    }

    onClick(event) {
        let apiUrl = 'https://api.github.com/search/repositories?sort=stars&order=desc&q=' + this.searchInput.value;
        fetch(apiUrl)
            .then(blob => blob.json())
            .then(response => {
                console.log(response);
                this.setState({ repositories: response.items });
            });
        event.preventDefault();
    }

    render() {
        return(
            <div className="App-form">
                <form>
                    <input type="text" ref={(input) => { this.searchInput = input; }}/>
                    <button onClick={this.onClick.bind(this)}>Search</button>
                </form>
                <div className="App-response-list">
                    { this.state.repositories.map( ( item, index ) => (
                        <div className="repo-block"  key={ index }>
                            <div className="repo">
                                <a href={ item.html_url } target="_blank" rel="noopener noreferrer">
                                    { item.full_name }
                                </a>
                                <p className="description">
                                    { item.description }
                                </p>
                            </div>
                        </div>
                    )) }
                </div>
            </div>
        );
    }
}

export default Form;
