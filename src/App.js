import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

const App = props => {

  const [personsState,setPersonsState] = useState({
person:[
  {name:'rahul', age:'31'},
  {name:'Rohit', age:'30'},
  {name:'Ankit', age:'29'},
]
  });

  // eslint-disable-next-line
  const[otherState,setotherState] = useState('Some other value');

  console.log(personsState,otherState);


  const switchNameHandler = () => {
    //alert('working');
    setPersonsState({
      person:[
        {name:'rahul1', age:'18'},
        {name:'Rohit1', age:'19'},
        {name:'Ankit1', age:'20'},
      ]
    })
    }

  return (
  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.person[0].name} age={personsState.person[0].age}></Person>
        <Person name={personsState.person[1].name} age={personsState.person[1].age}></Person>
        <Person name={personsState.person[2].name} age={personsState.person[2].age}></Person>
      </header>
    </div>
  );
}

export default App;
