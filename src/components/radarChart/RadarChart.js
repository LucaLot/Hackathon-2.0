import classes from './RadarChart.module.css';
import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';

const options = {
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

    state = {
        regional: {},
        global: {}
    };

    constructor(props) {
        super(props);

    }

    async componentDidMount() {

        let region = "Region name"; // get users region
        let global;
        let regional;

        let r1 = fetch('http://localhost:3001/global-averages')
            .then(function (response) {
                if (!response.ok) throw Error(response.statusText);
                return response.json();
            })
            .then(function (json) {
                global = json;
            })
            .catch(function (error) {
                console.log(error);
            });

        let r2 = fetch(`http://localhost:3001/regional-averages?region=${region}`)
            .then(function (response) {
                if (!response.ok) throw Error(response.statusText);
                return response.json();
            })
            .then(function (json) {
                regional = json;
            })
            .catch(function (error) {
                console.log(error);
            });

        await (r1);
        await (r2);

        this.setState({ global, regional });
    }


    render() {
        return (
            <div className={classes.container}>
                <Radar data={this.getData()} options={options} />
            </div>
        );
    }

    getData() {
        let datasets = [];

        if (this.props) {
            datasets.push(
                {
                    label: "Me",
                    data: [this.props.physical, this.props.psychological, this.props.social, this.props.spiritual, this.props.professional],
                    backgroundColor: 'rgba(132, 99, 255, 0.2)',
                    borderColor: 'rgba(132, 99, 255, 1)',
                    borderWidth: 3,
                },
            )
        }

        if (this.state.regional) {
            datasets.push(
                {
                    label: "Regional",
                    data: [this.state.regional.physical_avg, this.state.regional.psychological_avg, this.state.regional.social_avg, this.state.regional.spiritual_avg, this.state.regional.professional_avg],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 3,
                },
            );
        }

        if (this.state.global) {
            datasets.push(
                {
                    label: "Global",
                    data: [this.state.global.physical_avg, this.state.global.psychological_avg, this.state.global.social_avg, this.state.global.spiritual_avg, this.state.global.professional_avg],
                    backgroundColor: 'rgba(99, 255, 132, 0.2)',
                    borderColor: 'rgba(99, 255, 132, 1)',
                    borderWidth: 3,
                }
            );

        }



        return ({
            labels: ['Physical', 'Psychological', 'Social', 'Spiritual', 'Professional'],
            datasets,
        });
    }
}

export default RadarChart;
