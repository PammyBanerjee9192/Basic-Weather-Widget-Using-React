const geocodingAPI="http://api.openweathermap.org/data/2.5/weather";
const API_KEY="eb4c99b50131a8d0382d69d2fad4c191";
const weather_api="https://api.openweathermap.org/data/3.0/onecall";
let getWeatherInfo=async(city)=>{
    try{
        let api=`${geocodingAPI}?q=${city}&appid=${API_KEY}&units=metric`;
        let response=await fetch(api);
        let data=await response.json();
        // return [data[0].lat,data[0].lon];
        let weather_object={
            city:city,
            feelsLike:data.main.feels_like,
            temp:data.main.temp,
            tempmax:data.main.temp_max,
            tempmin:data.main.temp_min,
            humidity:data.main.humidity,
            description:data.weather[0].description,
        }
        return weather_object;
    }catch(err){
        throw err;
    }
}

export default getWeatherInfo;