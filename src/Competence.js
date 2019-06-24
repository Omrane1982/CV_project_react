import React,{Component} from 'react';



class Competence extends Component{
    state = {
        items:[
         
            {id:1,competence:"Fournir à la direction le résultat de mes analyses économiques et financières"},
            {id:2,competence:"Pilotage opérationnel et stratégique de l'entreprise"},
            {id:3,competence:"Élaborer le plan à moyen terme."},
            {id:4,competence:"Établir des prévisions de fin d'année sur la base des budgets corrigés des événements de la période en cours."},
            {id:5,competence:"Construire les principaux états financiers sur 3 ou 5 ans en projetant les résultats actuels de l'entreprise, les estimations de l'année en cours et les objectifs stratégiques définis par la direction générale.."},
          
    
        ],
        competence:""
      }
     
      deleteComp =(id) => {
        console.log(id)
        let items=this.state.items;
        let i=items.findIndex(item=>item.id===id)
        items.splice(i,1)
        this.setState({items:items})
      }     
     
      AddItem=(item)=>{
        item.id=Math.random()
      
        let items= this.state.items;
        items.push(item)
        this.setState({items})
        console.log(this.setState({items}))
    
      }
      
    HadndleChange=(e)=> {
        console.log(e.target.value)
        this.setState({
            [e.target.id]:e.target.value
           

        })
        
   
    }
    HandleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state)
        if (e.target.competence.value===''){
            return false
        }
        else{
    this.AddItem(this.state)
    this.setState({
       competence:'',
     
        

    })
    }
}
      
    render(){
    
    return(
      <div>

      <form onSubmit={this.HandleSubmit}>
       <input type="text" placeholder="Enter your Competence" id="competence" onChange={this.HadndleChange} value={this.state.competence}></input>
       
       
       <input type="submit" value="Add"/>

      </form>
      <h1>Mes Competences</h1>
       
        
            {this.state.items.map(item=>
              <ul><li> {item.competence}
              <span className="action icon" onClick={()=>this.deleteComp(item.id)}>&times;</span>
              </li></ul>
              
              
            )}
            </div>
                  
)
}
}
                   
export default Competence;