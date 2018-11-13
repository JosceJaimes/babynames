import React, { Component } from 'react';
import './App.css';
import NameList from './components/NameList'
import Credit from './components/Credits';
import Search from './components/Search'
import ShortList from './components/ShortLIst';

class App extends Component {
    constructor(props){
      super(props)
      this.state={
        filterText: '',
        favourites:[]
      }
    }

    filterUpdate=(value)=>{
      this.setState({
        filterText:value
      });
    }

    addFavourite=(id)=>{
      const favoriteList= this.state.favourites.concat([id])
      this.setState({
        favourites: favoriteList
      })
      
    }
  render() {
      console.log('filtertText state from parent component', this.state.filterText);
      
    return(
    <div>
      <Search 
      filterText ={this.state.filterText}
      filterUpdate={this.filterUpdate} 
      />
      <main>
        <ShortList
        favourites={this.state.favourites}
        data={this.props.data}
        />
      <NameList 
      data={this.props.data}
      filterText={this.state.filterText}
      addFavourite={this.addFavourite}
      />
        <Credit />
      </main>

    </div>
    )
  }
}

export default App;


// Se tiene que hacer una funcion con la cual hay que eliminar el nombre seleccionado
// y tambien una vista mas que te indique el significado de los nombres
// en una siguiente pagina.
