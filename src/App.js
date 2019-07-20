import React, {Component} from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Home from'./Home';
import Wheather from'./Wheather';
import CV from'./CV';
import Nav from'./Nav';
import Blog from'./blog';
import UploadImage from './UploadImage';

class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      
   <Nav/>
   <Switch>
   <Route exact path="/" component={Home}/>
   <Route  path="/CV" component={CV}/>
   <Route path="/Wheather" component={Wheather}/>
   <Route path="/Blog" component={Blog}/>
   
  
   </Switch>
    </div>
    </BrowserRouter>
  );
}

}

export default App;
