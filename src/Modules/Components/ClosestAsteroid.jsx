import { Loader } from 'rsuite';

const ClosestAsteroid = (props) => {

    const { neo_reference_id, miss_distance_kilometers, is_loading } = props;

    return (
        <div className="card">
            <div className="card-header">
                Closest Asteroid
            </div>
            <div className="card-body">
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Asteroid ID</th>
                            <th scope="col">Distance KM's</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {is_loading ? <td colSpan={2}><Loader backdrop center size="sm" content="Loading..." /> </td> :
                                <>
                                    <td>{neo_reference_id && neo_reference_id}</td>
                                    <td>{miss_distance_kilometers && miss_distance_kilometers}</td>
                                </>
                            }
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}
export default ClosestAsteroid;