import React, {Component} from 'react';
import './Weather.css';
import Form from './form';
class Wheather extends Component{
    fetWheather=()=>{
        console.log('get Wheather')
    }
    render(){
        return(
            <Form getWheather={this.getWheather}/>
        )
        
    }
}
export default Wheather;