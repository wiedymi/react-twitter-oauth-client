import React, { Component } from 'react'
import { Container } from 'semantic-ui-react';
import UserInfo from './UserInfo';
import Followers from './Followers';

class Content extends Component {
    render() {
        return (
            <Container>
                <UserInfo />
                <Followers />
            </Container>
        )
    }
}

export default Content;