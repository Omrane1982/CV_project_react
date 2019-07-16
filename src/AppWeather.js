import React from'react';
const AppWeather=(props)=>{
return(
    <div>
        {props.tempreature && <p>Tempreature: {props.tempreature}</p>}
        {props.city && <p>City: {props.city}</p>}
        {props.country && <p>Country: {props.country}</p>}
        {props.humidity && <p>Humidity: {props.humidity}</p>}
        {props.description && <p>Description: {props.description}</p>}
        {props.error && <p>error:{props.error}</p>}
    </div>
)
}
    
export default AppWeather;