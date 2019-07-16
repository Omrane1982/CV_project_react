import React from 'react';
const Form=(props)=>{
    return(
        <form onSubmit={props.getWheather}>
        <input Type="text" name="city" placeholder="City..."/>
        <input Type="text" name="country" placeholder="Country..."/><br/>
        <button>Get Wheather</button>

    </form>
    )
}
export default Form;