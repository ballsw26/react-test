import React, { Component } from 'react';
import './App.css';
import IndexComponent from './IndexComponent';
import { Firebase } from './firebaseConfig';

class App extends Component {
  constructor() {
    super()
    this.database = Firebase.database().ref().child('hotel');
    this.state = {
      hotel: []
    }
  }
  componentDidMount () {
    this.database.on('value', snap => {
      let cloneObject = Object.keys(snap.val()).map((k) => snap.val()[k])
      this.setState({
        hotel: cloneObject
      })
    });
  }
render() {
  return (
    <div className="App">
      <h1>Room Service Hotel</h1>
      <IndexComponent rawData={this.state.hotel} />
    </div>
    );
  }
}
export default App;
