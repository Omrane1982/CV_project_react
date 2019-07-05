import React, {Component} from 'react';
const Form=(props)=>{
    return(
        <form onSubmit={props.getWheather}>
        <input Type="text" placeholder="City..."/>
        <input Type="text" placeholder="Country..."/>
        <button>Get Wheather</button>

    </form>
    )
}
export default Form;