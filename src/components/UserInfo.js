import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import GetUserInfo from './GetUserInfo';

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
        if(localStorage.getItem('data') === null && this.state.user === true){
            this.setState({ user: false });
        }
        if(localStorage.getItem('data') !== null && this.state.user === false){
            this.setState({ user: true });
        }
    }
    render() {
        return (
            <Segment    
                style={{ marginTop: '20px'/*, minHeight: '360px'*/ }}
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