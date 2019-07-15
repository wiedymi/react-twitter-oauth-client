import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import GetUserInfo from './GetUserInfo';
import { handleCheckLocalStorage } from '../handlers/storage';

class UserInfo extends Component {
    state = {
        loading: true,
        user: false
    }
    componentDidMount(){
        if(localStorage.getItem('data') !== null){
            this.setState({ user: true });
        }
        this.setState(() => { 
            return { loading: false };
        });
    }
    componentDidUpdate(){
        const { user } = this.state;
        if(!handleCheckLocalStorage('data') && user){
            this.setState({ ...this.state, user: false });
        } 
        if(handleCheckLocalStorage('data') && !user){
            this.setState({  ...this.state, user: true });
        } 
    }
    render() {
        return (
            <Segment    
                style={{ marginTop: '20px' }}
                loading={this.state.loading}
            >
                {
                    this.state.user ? (
                        <GetUserInfo />
                    ) : (
                        <p>Трэба ўвайсці, каб адтрымаць звесці пра карыстальніка</p>
                    )
                }
            </Segment>
        )
    }
}

export default UserInfo;