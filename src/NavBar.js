import React, { useState, useEffect } from 'react';
import './App.css';
import { DateTime } from 'luxon';
import Axios from 'axios';
import Display from './Display';

const NavBar = ({ ipData }) => {

/*     const [countryData, setCountryData] = useState('')
    const [loading, setLoading] = useState(true);

    console.log(ipData)

    const position =  [ipData.location.lat, ipData.location.lng];

    let date = DateTime.now().toLocaleString();
    let time = DateTime.now().toLocaleString(DateTime.TIME_SIMPLE);


    let countryCode = ipData.location.country;
    console.log(countryCode);

    const fetchRestData = async () => {
        await Axios.get(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
            .then(response => setCountryData(response.data))
            .catch(e => console.log(e.message))
        setLoading(false);
    }

   console.log(countryData);

    useEffect(() => {
        fetchRestData();
    }, []) 
    */


    return (

        <div className="colorBar">
            <div>
                <p ><h2>Find My Location</h2></p>
            </div>

{/*             <div>

                {loading ? <h1> Loading.. </h1> :
                    <div className='user-info'>
                        <div>
                            <b>Your Country is: </b>  <span>{countryData.name} </span>
                            <b>Your IP Address is: </b> <span>{ipData.ip} </span>
                            <b>Date & Time: </b> <span>{date} & {time}</span>

                        </div>

                    </div>

                }
            </div> */}
        </div>



    )
}

export default NavBar;