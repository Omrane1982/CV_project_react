import React, {Component} from 'react';
import {storage} from'./ImageFirebase';


class UploadImage extends Component{
    // constructor(props) {
    //     super(props);
    //     this.state ={
    //         image: null,
    //         url:'',
    //     };
    //     // this.ondivSubmit = this.ondivSubmit.bind(this);
    //     // this.onChange = this.onChange.bind(this);
    // }
    state={
        image:null,
        url:''
    }
    
    ondivSubmit=()=>{
        
        
    const {image}=this.state;
    const uploadTask=storage.ref(`images/${image.name}`).put(image);
    uploadTask.on('state_changed',
    (snapshot)=>{

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
        let {url}= this.state;
        this.setState({url:null})
        console.log(this.state)
        
    }
    render(){
        return(
            
          <div >
                <div style={this.props.style}>
                <input type="file" name="myImage" onChange= {this.onChange} />
                <button  onClick={this.ondivSubmit}>Upload</button>
                </div>
                <img src={this.state.url || 'https://via.placeholder.com/200x150'} alt="image"/>
                <span className="action icon"style={this.props.style} onClick={()=>this.deleteImg()}>&times;</span>
            </div>
           
        )
    }

}
export default UploadImage;
