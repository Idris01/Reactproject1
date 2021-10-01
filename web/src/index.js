import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function App(){
  return (
    <React.Fragment>
    <h1> Todo App</h1>
    
    <ul>
      <li className="item"> <input type="checkbox" /> Introduction</li>
      <li className="item"> <input type="checkbox" /> Create Components</li>
      <li className="item"> <input type="checkbox" /> summary</li>
    </ul>
    </React.Fragment>
  );
}


ReactDOM.render(<App></App>, 
  document.getElementById('root'));