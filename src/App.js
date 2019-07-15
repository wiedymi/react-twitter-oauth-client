import React, { Component } from 'react';
import io from 'socket.io-client';
import { API_URL } from './config';
import OAuth from './components/OAuth';
import { handleCheckLocalStorage, handleGetData, getCurrentTime } from './handlers/storage';

const socket = io(API_URL);
const provider = 'twitter';


export default class App extends Component {

  componentDidMount() {
    if(handleCheckLocalStorage('data')){
      const { expires } = handleGetData('data');
      if(expires <= getCurrentTime()){
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
