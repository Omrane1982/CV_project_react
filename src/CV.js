import React,{Component} from 'react';
import TheImage from './sofitel_mini.jpg';
import Experience from './Experience';
import Competence from './Competence';

import AddExp from './AddExp';
import Formation from './Formation';


class CV extends Component{
    state ={
      
        exp:[
            {id:1,date:"de Septembre 2007  à maintenant ",experience: "Contrôleur de Gestion STE CARTHAGE GRAINS"},
            {id:2,date:"de Novembre 2005 au Juin 2007",experience:"Comptable STE FRANK MULLER"},
           
          ]
      }
       
      deleteExp =(id) => {
        console.log(id)
        let exp=this.state.exp;
        let i=exp.findIndex(item=>item.id===id)
        exp.splice(i,1)
        this.setState({exp:exp})
      }     
     
      AddExp=(item)=>{
        item.id=Math.random()
      
        let exp= this.state.exp;
        exp.push(item)
        this.setState({exp})
        console.log(this.setState({exp}))
    
      }
    render(){
    return(
        <div>
 
 <p><img src={TheImage} className="photo sofitel" /></p>
 <h1><strong>OMRANE RABAH</strong></h1>   
 <p>Contrôleur de Gestion</p>
 <aside>
            <p></p>
        </aside>
         

 <section>
<article>
        <div className="element">
        
        <Formation/>
   </div>  
     <div className="element">
           <Competence />
   </div> 
                   
   <div class="element">
   <AddExp AddItem={this.AddExp}/>
                     <h1>Mon expérience</h1>
                     <Experience items={this.state.exp} deleteItem={this.deleteExp}/>
     
     
                            </div>
                            </article>
                            </section>
        </div>
    )
}
}
export default CV;