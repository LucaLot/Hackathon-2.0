import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';

const options = {
    plugins: {
        legend: {
            display: false
        }
    },
    scales: {
        r: {
            title: {
                font: {
                    scale: 200
                }
            },
            angleLines: {
                display: true
            },
            suggestedMin: 0,
            suggestedMax: 100
        }
    }


};

class RadarChart extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // /regional-averages?region= /global-averages
        let test;
        fetch('http://localhost:3001/global-averages')
            .then(function (response) {
                if (!response.ok) throw Error(response.statusText);
                return response.json();
            })
            .then(function (json) {
                test = json;
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log(test);
    }


    render() {
        return (<Radar data={this.getData()} options={options} />);
    }

    getData() {
        return ({
            labels: ['Physical', 'Emotional', 'Social', 'Spiritual', 'Professional'],
            datasets: [
                {
                    data: [this.props.physical, this.props.psychological, this.props.social, this.props.spiritual, this.props.professional],
                    backgroundColor: 'rgba(132, 99, 255, 0.2)',
                    borderColor: 'rgba(132, 99, 255, 1)',
                    borderWidth: 3,
                },
            ],
        });
    }
}

export default RadarChart;
