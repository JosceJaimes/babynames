import React from 'react';

export default ({data, favourites})=>{
    const nameList= favourites.map(id=>{
            const {name, sex} = data[id]
            console.log(name)
            return(
                <li key={id} className={sex}>{name}</li>
            )
    });
    
    return(
        <div className="favourites  ">
            <h4>Click on a name</h4>
            <ul>
                {nameList}
            </ul>
        </div>
    )
}