/**
 * Created by 2A on 24-01-17.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather} from '../actions/index';

class SearchBar extends Component {

    constructor(props) {
        console.log('[SearchBar] -> constructor');
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        // console.log('[SearchBar] -> onInputChange');
        // console.log(event.target.value);
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();

        // we need to go and fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        console.log('[SearchBar] -> render');

        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Type the cities..."
                    className="form-control"
                    value={ this.state.term }
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secodanry">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { fetchWeather }, dispatch );
}

export default connect(null, mapDispatchToProps)(SearchBar);