import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { API_URL } from '../config';
import Header from './Header';
import Content from './Content';
import { handleCheckLocalStorage, handleGetData } from '../handlers/storage';
import { getCurrentTime, getHours } from '../handlers/time';

export default class OAuth extends Component {
  state = {
    user: undefined,
    activeItem: 'home'
  }
  componentDidMount = () => {
    const { socket, provider } = this.props;
    if(!handleCheckLocalStorage('data')){
      socket.on(provider, user => {  
        this.popup.close();
        let follower = [];

        user.data.followers.forEach((value, index) => {
          follower[index] = {
            id: value.id,
            name: value.screen_name,
            photo: value.profile_image_url.replace('_normal',''),
            username: value.name,
            date: value.created_at,
            tweets: value.statuses_count
          }
        },);
        
        let data = {
          name: user.data.prof.displayName,
          username: user.data.prof.username,
          photo: user.data.prof.photos[0]['value'].replace('_normal',''),
          color: user.data.prof['_json']['profile_link_color'],
          country: user.data.prof['_json']['location'],
          date:  user.data.prof['_json']['created_at'],
          banner: user.data.prof['_json']['profile_banner_url'],
          following: user.data.prof['_json']['friends_count'],
          tweets: user.data.prof['_json']['statuses_count'],
          followers: follower,
          expires: getCurrentTime + getHours(2)
        }

        localStorage.setItem('data', JSON.stringify(data));
        this.setState(() => ({ user: data }));
      });

    
    }

    if(handleCheckLocalStorage('data')){
      this.setState({ user: handleGetData('data') });
    }
  }

  checkPopup = () => {
    console.log("Popup function called")
    const check = setInterval(() => {
      const { popup } = this;
      if (!popup || popup.closed || popup.closed === undefined) {
        clearInterval(check);
        this.popup.close();
        this.setState({ disabled: ''});
        console.log("Popup closed")
      }
    }, 1000)
  }
 
  openPopup() {
    const { provider, socket } = this.props;
    const width = 600, height = 600;
    const left = (window.innerWidth / 2) - (width / 2);
    const top = (window.innerHeight / 2) - (height / 2);
    const url = `${API_URL}/${provider}?socketId=${socket.id}`;

    return window.open(url, '',       
      `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
    );
  }

  startAuth = () => {
    if (!this.state.disabled) {
      this.popup = this.openPopup();
      this.checkPopup();
      this.setState({disabled: 'disabled'});
    }
  }

  closeCard = () => {
    this.setState({ user: undefined, disabled: '' })
    localStorage.clear();
  }
  render() {
    return (
      <>
        <Header startAuth={this.startAuth} closeCard={this.closeCard}/>
        <Content />
      </>
    )
  }
}

OAuth.propTypes = {
  provider: PropTypes.string.isRequired,
  socket: PropTypes.object.isRequired
}
