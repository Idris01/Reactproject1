import React from 'react';
import ReactDOM from 'react-dom';
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
      <li className="item"> <input type="checkbox" /> Introduction</li>
      <li className="item"> <input type="checkbox" /> Create Components</li>
      <li className="item"> <input type="checkbox" /> Summary</li>
      <li className="item"> <input type="checkbox" /> Cloning from git</li>
      <li className="item"> <input type="checkbox" /> Adding Functionality</li>
      <li className="item"> <input type="checkbox" /> Pushing</li>
      <li className="item"> <input type="checkbox" /> Summary/Next meeeting</li>
    </ul>
    </div>
    </React.Fragment>

    )}
  
}

  
ReactDOM.render(<App></App>, 
  document.getElementById('root'));
  
  
   



