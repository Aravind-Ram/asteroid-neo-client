import React from 'react';
import { Loader } from 'rsuite';

const AverageSize = ({ average_size, is_loading }) => {

    return (
        <div className="card">
            <div className="card-header">
                Average Size of Asteroid
            </div>
            <div className="card-body">
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Average Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {is_loading ? <td><Loader backdrop center size="sm" content="Loading..." /></td> :
                                <td>{average_size}</td>
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AverageSize;