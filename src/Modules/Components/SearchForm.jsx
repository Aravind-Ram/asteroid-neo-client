import React, { useState } from 'react'
import DateRangePicker from 'rsuite/DateRangePicker';
import { Message, useToaster} from 'rsuite';
import axios from 'axios';

const SearchForm = ({callBackResult, is_loading}) => {
    
    const toaster = useToaster();

    const [dateRange, setDateRange] = useState(null);

    const submit = (e) => {
        e.preventDefault();
        if(dateRange === null) {
            toaster.push(message, "top" );
            return ;
        }
        const startDate = dateRange[0].getFullYear()  + "-" + (dateRange[0].getMonth()+1) + "-" + dateRange[0].getDate();
        const endDate = dateRange[1].getFullYear()  + "-" + (dateRange[1].getMonth()+1) + "-" + dateRange[1].getDate();

        callBackResult({is_loading: true});
        axios.post('https://prefetchwebtech.com/api/neo-feed', {
            start_date: startDate,
            end_date: endDate
        }, {'Content-Type': 'text/plain'})
        .then(function (response) {
            if(response.status === 200) {      
                toaster.push(<Message showIcon type="success" duration="3000">Success: {response.data.message}</Message>, "top" );   
                callBackResult(response.data.data);
            }
        })
        .catch(function (error) {
            callBackResult({is_loading: false});
            toaster.push(<Message showIcon type="error" duration="3000">Error: {error.message}</Message>, "top" );   
        });          
    }

    const message = (
        <Message showIcon type="error" duration="3000">
          Error: Please selecte date range to get result.
        </Message>
      );
    

    const { allowedMaxDays } = DateRangePicker;

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="d-flex justify-content-center">
                    <div className="card" style={{ width: "40%" }}>
                        <div className="card-header">
                            Pick a Date Range
                        </div>
                        <div className="card-body">
                            <form onSubmit={(e) => submit(e) }>
                                <div className="mb-3">
                                    <DateRangePicker defaultValue={dateRange} disabled={is_loading} disabledDate={allowedMaxDays(7)} onChange={ (dateRange) => setDateRange(dateRange) } onClean={ () => setDateRange(null)}/>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-primary mb-3" disabled={!dateRange || is_loading}>{is_loading ? 'Loading...' : 'Get Results'}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchForm;