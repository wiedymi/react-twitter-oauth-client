import React, { Component } from 'react';
import io from 'socket.io-client';
import { API_URL } from './config';
import OAuth from './components/OAuth';

const socket = io(API_URL);
const provider = 'twitter';


export default class App extends Component {

  componentDidMount() {
    fetch(`${API_URL}/wake-up`)
      .then(res => {
        if (res.ok) {
          this.setState({ loading: false })  
        }
      });
    if(localStorage.getItem('data') || localStorage.getItem('data') !== null){
      let { expires } = JSON.parse(localStorage.getItem('data'));
      if(expires <= new Date().getTime()){
        this.setState(() => ({ loading: false }));
        localStorage.clear();
      }
    }
  }

  render() {
    return (
        <OAuth provider={provider} socket={socket} />
    )
  }
}
