import React from 'react'
const Experience = (props) =>{
    const {items,deleteItem} = props;
    let length =items.length;

    const ListItems = length?(
    items.map(item =>{
        return(
            <ul key={item.id}>
            <li className="name" > {item.date}: {item.experience}
            
            <span className="action icon" onClick={()=>deleteItem(item.id)}>&times;</span>
            </li>
            </ul>
        )
    }
        )
    ):(
        <li> There is no Items</li>
    )

        return(
            <div className="ListItems">
            <div>
            

            </div>
                {ListItems}
            </div>
        )
}
export default Experience;