
import React, { Component } from 'react';
import { UserInput } from './components/UserInput/UserInput';
import { UserOutput } from './components/UserOutput/UserOutput';

class App extends Component {

  // adding of state to the App Component
  state = {
    users: [
      { username: "Wandecoal" },
    ],

    users_two: [
      { username: "Tunde" }
    ]
  }

  // function to add change event handler to manipulate the state of the first user
  switchUserName = (e) => {
    this.setState({
      users: [
        { username: e.target.value },
      ]
    }) 
  }

  // function to add change event handler to manipulate the state of the second user
  switchUserName2 = (e) => {
    this.setState({
      users_two: [
        { username: e.target.value }
      ]
    })
  }
  // function to render the components
  
  render() {
    return (
      <div className=' flex justify-center items-center bg-slate-400 h-screen'>
        <div className=' bg-red-500 p-12 rounded-xl outline-none text-center'>
          <UserOutput username={this.state.users[0].username} />

          <UserInput change={this.switchUserName} />

          <UserOutput username={this.state.users_two[0].username} />

          <UserInput change={this.switchUserName2} />
        </div>
      </div>
    );
  }
}

export default App;

