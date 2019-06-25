import React, {Component} from 'react';
class AddExp extends Component {
    state ={
        date:'',
        experience:''
        
        
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
        if (e.target.experience.value===''){
            return false
        }
        else{
    this.props.AddItem(this.state)
    this.setState({
        date:'',
        experience:''
        

    })
    }
}
    render(){
        return(
            <div>
           <form onSubmit={this.HandleSubmit}>
            <input type="text" placeholder="Enter your periode" id="date" onChange={this.HadndleChange} value={this.state.date}></input>
            <input type="text" placeholder="Enter your Job" id="experience" onChange={this.HadndleChange} value={this.state.experience}></input>
            
            <input type="submit" value="Add"/>

           </form>
            
            </div>
            
        )
    }

}
export default AddExp;