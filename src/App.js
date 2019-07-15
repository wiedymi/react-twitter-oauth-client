import React, { Component } from 'react';
import io from 'socket.io-client';
import { API_URL } from './config';
import OAuth from './components/OAuth';
import { handleCheckLocalStorage, handleGetData} from './handlers/storage';
import { getCurrentTime } from './handlers/time';

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
