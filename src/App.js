import React, {Component} from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Home from'./Home';
import About from'./About';
import CV from'./CV';
import Nav from'./Nav';
import Blog from'./blog';

class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      
   <Nav/>
   <switch>
   <Route exact path="/" component={Home}/>
   <Route  path="/CV" component={CV}/>
   <Route path="/about" component={About}/>
   <Route path="/Blog" component={Blog}/>
   </switch>
    </div>
    </BrowserRouter>
  );
}

}

export default App;
