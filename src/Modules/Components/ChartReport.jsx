import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import { Loader } from 'rsuite';

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Number of Asteroids for Each Day',
        },
    },
};

const ChartReport = (props) => {

    const data = {
        labels: props.dates,
        datasets: [
            {
                id: 1,
                label: 'Asteroid Report',
                data: props.noOfAsteroids,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };

    return (
        <div className="row d-flex justify-content-center mt-4">
            <div className="col-6">
                <div className="card">
                    <div className="card-header">
                        Chart report of Asteroids
                    </div>
                    <div className="card-body">
                        {props.is_loading ? <Loader backdrop center size="sm" content="Loading..." /> :
                            props.dates ? <Line datasetIdKey='id' options={options} data={data} /> : <>No results found</>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ChartReport;
