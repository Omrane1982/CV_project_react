import React,{Component} from 'react';
import Imagecode from './code.jpg';
import Imagereact from'./react.png';

class Home extends Component{
    render(){
      return(
        <div className="home">
          <p className="home2"><img src={Imagereact } alt="react" /></p>
          <p className="home2"><h1> Demo Day OMRANE RABAH : <strong>REACT JS</strong>  </h1></p>
          <p className="home2"><img src={Imagecode } alt="code" /></p>
        </div>
      )
    }
  
}
export default Home;