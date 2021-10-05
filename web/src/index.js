import React from 'react';
import ReactDOM from 'react-dom';
import Item from './components/Item';
import TodoItems from './TodoItems';
import './styles.css';

class App extends React.Component{
  constructor(){
    super()

    
  }
  render(){
    return(
    <React.Fragment>
      <h1>React Todo App</h1>

    <div className="bevel">
    <ul>

      {[...TodoItems].map(item=><Item name={item.name} class="item" />)}
    </ul>
    </div>
    </React.Fragment>

    )}
  
}

  
ReactDOM.render(<App></App>, 
  document.getElementById('root'));
  
  
   



