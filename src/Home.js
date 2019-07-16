import React,{Component} from 'react';
import Imagecode from './code.jpg';
import Imagereact from'./react.png';
import './home.css';
import UploadImage from'./UploadImage';

class Home extends Component{
    render(){
      return(
       
    <div id="container">
        <div className="home">
          <p className="home2"><img src={Imagereact } className="image react" /></p>
          <p className="home2"><h1> Demo Day <br/> OMRANE RABAH <br/>  <strong>/REACT JS/</strong>  </h1></p>
          <p className="home2"><img src={Imagecode } className="image code" /></p>
        </div>
        
        </div>
        
      )
    }
  
}
export default Home;