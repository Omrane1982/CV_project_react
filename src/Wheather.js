import React, {Component} from 'react';
import './Weather.css';
import Form from './form';
import AppWeather from'./AppWeather';
const API_KEY='74ced9f6e880a7052c6a1e1fef5574dd';
//http://api.openweathermap.org/data/2.5/weather?q=cairo,egypt&appid=e36ed364400282e43250b6c4c0274d44
class Wheather extends Component{
    state={
        tempreature:'',
        city:'',
        country:'',
        humidity:'',
        description:'',
        error:''
        
    }
    getWheather= async(e)=>{
        e.preventDefault()
        const city=e.target.elements.city.value;
        const country=e.target.elements.country.value;
        console.log(city,country)

        console.log('get Wheather')
        const api =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&${country}&units=metric&appid=${API_KEY}`)
        const data =await api.json();
        console.log(data)
        if(city&&country){
            this.setState({
                tempreature:data.main.temp,
                city:data.name,
                country:data.sys.country,
                humidity:data.main.humidity,
                description:data.weather[0].description,
                error:''
        
                })
        }
        else{
            this.setState({
        tempreature:'',
        city:'',
        country:'',
        humidity:'',
        description:'',
        error:'Please enter Data'
            })

        }
    }
    render(){
        return(
            <div className="wrapper">
            <Form getWheather={this.getWheather}/>
            <div className="wrapper2">
            <AppWeather 
            tempreature={this.state.tempreature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error=""
            />
            </div>
            </div>
        )
        
    }
}
export default Wheather;
