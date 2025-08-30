import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import {useState} from "react";
import "./SearchBox.css";
import getWeatherInfo from './app.js';
export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let[error,seterror]=useState(false);
    let cityChangeHandler=(event)=>{
        setCity(event.target.value);
    }
    let submitHandler=async(event)=>{
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
        updateInfo(await getWeatherInfo(city));
        seterror(false);
        }catch(err){
            seterror(true);
        }
    }
    return (
        <div className="searchBox">
        <form onSubmit={submitHandler}>
         <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={cityChangeHandler} />
         <br></br>
         <br></br>
        <Button variant="contained" color="secondary" type="submit">Search</Button>
        {error &&<p className="error">No such place found</p>}
        </form>
        </div>
    );
}