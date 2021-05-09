import React, {useState, useEffect} from 'react';
import './App.css';
import Display from './Display';
import Axios from 'axios';
import NavBar from './NavBar';




function App() {

  const [ipData, setIpData] = useState('');
  const [loading , setLoading] = useState(true);
  const API_kEY = process.env.REACT_APP_API_KEY;
  // console.log("Key is", API_kEY);
 console.log(ipData);

  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async() => {
    await Axios.get(`https://geo.ipify.org/api/v1?apiKey=${API_kEY}`)
    .then(response=> setIpData(response.data))
    .catch(e=> console.log(e.message))
    setLoading(false)
  }


  return (
    <div className="App">
 <NavBar ipData={ipData} />
      {loading ? <h1> Loading.. </h1> : <Display ipData={ipData}/>}
    </div>
  );
}

export default App;
