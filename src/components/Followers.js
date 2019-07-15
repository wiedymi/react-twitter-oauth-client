import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import Follower from './Follower'

class Followers extends Component {
    state = {
        followers: [],
        visible: false
    }
    componentWillMount() {
   
        if(localStorage.getItem('data') !== null){
            let data = localStorage.getItem("data");
            data = JSON.parse(data);
            let follower = data.followers;
            this.setState({ visible: true, followers: follower});
        }

    }

    componentDidUpdate(){
        if(localStorage.getItem('data') === null && this.state.visible === true){
            this.setState({ visible: false });
        }
        if(localStorage.getItem('data') !== null && this.state.visible === false){
            this.setState({ visible: true });
        }
    }
    render() { 
        return (
            <>
                {
                    this.state.visible ? (
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