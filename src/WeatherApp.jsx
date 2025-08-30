import SearchBox from "./SearchBox.jsx";
import WeatherBoard from "./WeatherBoard.jsx";
import {useState} from "react";
export default function WeatherApp(){
    let [weatherinfo,setweatherinfo]=useState({
        city: "durgapur",
        description: "overcast clouds",
        feelsLike: 30.35,
        humidity: 87,
        temp: 26.97,
        tempmax: 26.97,
        tempmin: 26.97,
    });
    let updateInfo=(information)=>{
        setweatherinfo(information);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h1><u>Basic Weather App Using React</u></h1>
            <SearchBox updateInfo={updateInfo}/>
            <WeatherBoard info={weatherinfo}/>
        </div>
    );
}