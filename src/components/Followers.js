import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import Follower from './Follower'
import { handleCheckLocalStorage, handleGetData } from '../handlers/storage';

class Followers extends Component {
    state = {
        followers: [],
        visible: false
    }
    componentWillMount() {
        if(handleCheckLocalStorage('data')){
            const data = handleGetData('data');
            const { followers } = data;
            this.setState({  ...this.state, visible: true, followers});
        }
    }

    componentDidUpdate(){
        const { visible } = this.state;
        if(!handleCheckLocalStorage('data') && visible){
            this.setState({ ...this.state, visible: false });
        } 
        if(handleCheckLocalStorage('data') && !visible){
            this.setState({  ...this.state, visible: true });
        } 
    }
    render() { 
        const { visible } = this.state;
        return (
            <>
                {
                    visible ? (
                        <>
                            <Card fluid>
                                <Card.Content>
                                    <Card.Header>Падпісчыкі</Card.Header>
                                </Card.Content>
                            </Card>
                            <Card.Group centered doubling stackable itemsPerRow={4}>
                                <Follower followers={ this.state.followers } />
                            </Card.Group>
                        </>
                    ) : (
                        <>
                        </>
                    )
                }
            </>
        )
    }
}


export default Followers;