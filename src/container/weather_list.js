/**
 * Created by 2A on 26-01-17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

    renderWeather(cityData) {

        let name = cityData.city.name;

        return (
            <tr key={name}>
                <td>{ name }</td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temp</th>
                        <th>Press</th>
                        <th>Hum</th>
                    </tr>
                </thead>
                <tbody>
                { this.props.weather.map(this.renderWeather) }
                </tbody>
            </table>
        );
    }

}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);