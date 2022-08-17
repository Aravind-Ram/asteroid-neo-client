import React from 'react';
import { Loader } from 'rsuite';


const FastestAsteroid = (props) => {

    const { neo_reference_id, kilometers_per_hour, is_loading } = props;

    return (
        <div className="card">
            <div className="card-header">
                Fastest Asteroid
            </div>
            <div className="card-body">
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Asteroid ID</th>
                            <th scope="col">Speed In KM's</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {is_loading ? <td colSpan={2}><Loader backdrop center size="sm" content="Loading..." /> </td> :
                                <>
                                    <td>{neo_reference_id && neo_reference_id}</td>
                                    <td>{kilometers_per_hour && kilometers_per_hour}</td>
                                </>
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default FastestAsteroid;