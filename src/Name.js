import React,{Component} from 'react';



class Name extends Component{
    state = {

       name :"",
        job:""
      }
     
      deleteComp =() => {
        
        
        this.setState({name:'',
        job:''
    })
      }     
     
      
    
      
    HadndleChange=(e)=> {
        console.log(e.target.value)
        this.setState({
            [e.target.id]:e.target.value
           

        })
        
   
    }
    AddItem=()=>{
       
      
        let name = this.state.name;
        let job = this.state.job;
        this.setState({name,job})
       
    
      }
      
    HandleSubmit=(e)=>{
        e.preventDefault();
        if (e.target.competence.value===''){
            return false
        }
        else{
    this.AddItem(this.state)
       
    this.setState({
      name:'',
      job:''
     
        

    })
    
}
    }

      
    render(){
    
    return(
      <div>

      <form onSubmit={this.HandleSubmit}style={this.props.style}>
       <input type="text" placeholder="Enter your name" id="name" onChange={this.HadndleChange} value={this.state.name}></input>
       <input type="text" placeholder="Enter your job" id="job" onChange={this.HadndleChange} value={this.state.job}></input>
       
       

      </form>
      
       
        
            
              <h1><strong>{this.state.name}</strong><span className="action icon" style={this.props.style} onClick={()=>this.deleteComp()}>&times;</span></h1>   
              <p>{this.state.job} </p>
              
           
            </div>
                   

      
   
       
)
  }
}
export default Name;