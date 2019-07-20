import React,{Component} from 'react';

import Experience from './Experience';
import Competence from './Competence';
import UploadImage from'./UploadImage';
import AddExp from './AddExp';
import Formation from './Formation';
import Name from'./Name';




class CV extends Component{
    state ={
      
        exp:[
            {id:1,date:"de Septembre 2007  à maintenant ",experience: "Contrôleur de Gestion STE CARTHAGE GRAINS"},
            {id:2,date:"de Novembre 2005 au Juin 2007",experience:"Comptable STE FRANK MULLER"},
           
          ],
           showing: true 
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
      
      const { showing } = this.state;
      
        const style3={
          fontSize: '30px',
        fontWeight : '900',
        color: 'white', 
        textAlign: 'center',
        borderstyle: 'inset',
        borderWidth: '7px',
        borderColor: 'coral',
          
        }
      
    return(
<div >
     <div className="button"> 
     
     <span  onClick={() => this.setState({ showing: !showing })}> Curriculum Vitae </span>
     </div>
             
 
 <p><UploadImage className="photo sofitel" style={{ display: (showing ? 'block' : 'none') }} /></p>
 <p style={style3}><Name style={{ display: (showing ? 'block' : 'none') }}  /></p>
 
 
         

 <section>
<article>
        <div className="element">
        
        <Formation style={{ display: (showing ? 'block' : 'none') }}/>
   </div>  
     <div className="element">
           <Competence style={{ display: (showing ? 'block' : 'none') }} />
   </div> 
                   
   <div class="element">
   <AddExp AddItem={this.AddExp} style={{ display: (showing ? 'block' : 'none') }} />
                     <h1>Mon expérience</h1>
                     <Experience items={this.state.exp} deleteItem={this.deleteExp} style={{ display: (showing ? 'block' : 'none') }}/>
     
     
                            </div>
                            </article>
                            </section>
                            
        </div>
    )
}
}
export default CV;