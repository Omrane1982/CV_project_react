import React, {Component} from 'react';
import {storage} from'./ImageFirebase';


class UploadImage extends Component{
    constructor(props) {
        super(props);
        this.state ={
        image:null,
        url:'',
        progress:0

     }}
    // state={
    //     image:null,
    //     url:'',
    //     progress:0

    // }
    
    ondivSubmit=(e)=>{
        e.preventDefault()
        
    const {image}=this.state;
    const uploadTask=storage.ref(`images/${image.name}`).put(image);
    uploadTask.on('state_changed',
    (snapshot)=>{
        const progress=Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100);
        this.setState({progress});
    },
    (error)=>{
        console.log(error)
    },
    ()=>{
        storage.ref('images').child(image.name).getDownloadURL().then(url=>{
            console.log(url)
            this.setState({url})
        })

    });


            }
    
        
    
    onChange=(e)=> {
        if(e.target.files[0]){
            let image=e.target.files[0];
            this.setState({image:image});
            console.log(this.state)
            console.log(e.target.files[0])
        }
      
    }
    deleteImg=()=>{
      
        this.setState({url:null})
        console.log(this.state)
        
    }
      
    render(){
        
        const style4 ={
            marginLeft:'70%',
            borderStyle :'groove'
        }
        return(
            
            
          <div >
                <div style={this.props.style} >
                    <form style={style4}>
                <progress value={this.state.progress} max="100"/>
                <br/>
                <input type="file" name="myImage" onChange= {this.onChange} />
                <button  onClick={this.ondivSubmit}>Upload</button>
                <span className="action icon"style={this.props.style} onClick={()=>this.deleteImg()}>&times;</span>
               
                </form>
                </div>
                
                
                <img src={this.state.url || 'https://via.placeholder.com/250x250'} alt="CV"/>
            </div>
           
        )
    }

}
export default UploadImage;
