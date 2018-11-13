// import React, { Component } from 'react';


class NameList extends Component{
 
    render(){
        const { data, filterText, addFavourite } = this.props; 
        const nameList = data
        .filter(name=>{
          //remover nombres de la pantalla filtarndo el texto
          return name.name.toLowerCase().indexOf(filterText)>= 0
        })
        .map(name =>{
          return (
            <li 
            key={name.id} 
            className={name.sex}
            onClick={() => addFavourite(name.id)}
            >
            {name.name}
            </li>
          )     
        })
        return (
          <div>
              <ul> 
                {nameList}
              </ul>
          </div>
        );
    }
}

// export default NameList;

// esta es la otramanera de hacer un componente unicamente se da la funcion
import React from 'react';

export default ({data, filterText, addFavourite})=>{
 
      const nameList = data
      .filter(name=>{
        //remover nombres de la pantalla filtarndo el texto
        return name.name.toLowerCase().indexOf(filterText)>= 0
      })
      .map(name =>{
        return (
          <li 
          key={name.id} 
          className={name.sex}
          onClick={() => addFavourite(name.id)}
          >
          {name.name}</li>
        )     
      })
      return (
        <div>
              <ul> 
                {nameList}
              </ul>
        </div>
      );
  }
