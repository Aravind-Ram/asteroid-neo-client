import React, { useState, useCallback } from 'react';
import Header from './Layouts/Header';
import { FastestAsteroid, SearchForm, ChartReport, AverageSize, ClosestAsteroid } from './Components';
import 'rsuite/dist/rsuite.min.css'

const Home = () => {


    const [result, setResult] = useState({});

    const getResult = useCallback(
        (data) =>  {
            setResult({...data})
        },
    []);

    return (
        <>
            <Header />
            <SearchForm callBackResult={ getResult } is_loading={result.is_loading}/>
            <div className="container text-center  mt-4">
                <div className="row">
                    <div className="col">
                        <FastestAsteroid {...result.fastest_asteroid} is_loading={result.is_loading}/>
                    </div>
                    <div className="col">
                        <ClosestAsteroid {...result.closest_asteroid} is_loading={result.is_loading}/>
                    </div>
                    <div className="col">
                        <AverageSize average_size={result.average_size} is_loading={result.is_loading}/>
                    </div>
                </div>
                <ChartReport dates={result.dates} noOfAsteroids={result.noOfAsteroids} is_loading={result.is_loading}/>
            </div>
        </>
    )
}

export default Home;