import React,{Component} from 'react';



class Formation extends Component{
    state = {
        items:[
         
          {id:1,competence:"maîtrise en sciences comptables à l’Institut Supérieur de Gestion de Tunis (ISG) promotion 2005."},
          {id:2,competence:"Certificat  au trading sur le marché des changes «  FOREX »"},
          {id:3,competence:"Certificat   General English British Council"},
          
    
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
       <input type="text" placeholder="Enter your studies" id="competence" onChange={this.HadndleChange} value={this.state.competence}></input>
       
       
       <input type="submit" value="Add"/>

      </form>
      <h1>Ma formation</h1>
       
        
            {this.state.items.map(item=>
              <ul><li> {item.competence}
              <span className="action icon" onClick={()=>this.deleteComp(item.id)}>&times;</span>
              </li></ul>
              
              
            )}
            </div>
                   

      
   
       
)
  }
}
export default Formation;