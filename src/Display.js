import React, {useState, useEffect} from 'react';
import './App.css';
import { MapContainer, 
         TileLayer, 
         Marker, 
         Popup } from 'react-leaflet';
/* import 'leaflet/dist/leaflet.css'; */
import { popupContent, popupHead, popupText, okText } from "./popupStyles";
import { DateTime } from 'luxon';   
import Axios from 'axios';



const Display = ( {ipData} ) => {

    const [countryData, setCountryData] = useState('')
    const [loading , setLoading] = useState(true);

    console.log(ipData)

    const position =  [ipData.location.lat, ipData.location.lng];

    let date = DateTime.now().toLocaleString();
    let time = DateTime.now().toLocaleString(DateTime.TIME_SIMPLE);


let countryCode = ipData.location.country;
  console.log(countryCode); 
  
const fetchRestData = async () => {
  await Axios.get(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
      .then(response=> setCountryData(response.data))
      .catch(e=> console.log(e.message))
      setLoading(false);
}

console.log(countryData);
  
useEffect(() => {
  fetchRestData();
},[])


    return (
        <div className='container'>
            <div className='my-map popupContent'>
                 <div className='user-info'>
                       <div>
{/*                         <h1>Get My IP</h1> */}
                            <p><b>Your Country is: </b> 
                                <span>{countryData.name} </span>
                            </p> 
                            <p><b>Your IP Address is: </b> 
                                <span>{ipData.ip} </span>
                            </p>
                            <p> <b>Date & Time : </b> 
                                <span>{date} & {time}</span>
                            </p>
                        </div>
                    </div>
                <div className='map-container'>
                <MapContainer center={position} zoom={10} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                     />
                    {/* <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                        </Marker> */}

                        <Marker position={position}>
                            <Popup className="request-popup">
                                <div style={popupContent}>
                                    <img
                                        // src="https://cdn3.iconfinder.com/data/icons/basicolor-arrows-checks/24/149_check_ok-512.png"
                                        src={countryData.flag}
                                        width="150"
                                        height="150"
                                    />
                                    <div className="m-2" style={popupHead}>
                                        <p>You current location is: {ipData.location.city}, {countryData.name}</p>
                                    </div>
                                    <span style={popupText}>
                                        <p>The Lat/Long is: [{ipData.location.lat}, {ipData.location.lng}]</p>
                                    </span>
                                    <div className="m-2" style={okText}>
                                        <a target='_blank' href={`https://en.wikipedia.org/wiki/${ipData.location.city}`} >Find Out More about your City </a>
                                    </div>
                                </div>
                            </Popup>
                        </Marker>
                       {/* <DraggableMarker /> */}
                </MapContainer> 
                </div>
            </div>
        </div>
    );
}

export default Display;