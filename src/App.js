import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customers';

const customers = [
  {
  'id': 1,
  'name': '황대건',
  'phoneNumber': '01055',
  'doctor': '심인보',
  'birthday': '900604',
  'visitDay': '20210130'
  },
  {
    'id': 2,
    'name': '이상태',
    'phoneNumber': '0105651',
    'doctor': '심인보',
    'birthday': '900604',
    'visitDay': '20210130'
  },
]

class App extends Component{
  render(){
    return(
      <div>
        {customers.map(c => {
          return <Customer
          id={c.id}
          name={c.name}
          phoneNumber={c.phoneNumber}
          doctor={c.doctor}
          birthday={c.birthday}
          visitDay={c.visitDay}
        />
        })}
      </div>
      
    )
  }
};

export default App;
