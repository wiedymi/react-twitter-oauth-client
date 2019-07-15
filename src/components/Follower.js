import React, { Component }  from 'react'
import { Card, Image, Icon, Loader, Dimmer } from 'semantic-ui-react'
import { handleCheckLocalStorage, handleGetData } from '../handlers/storage';

class Follower extends Component {
    state = {
        followers: []
    }
    componentWillReceiveProps() {
        if(handleCheckLocalStorage('data')){
            const { followers } = handleGetData('data');
            this.setState({ followers });  
        }
    }
    render() {
        const { followers } = this.state;
        return (
            <>
                {
                    followers.length > 0 ? followers.map((follower) => {
                    const { id, username, photo, tweets, name, date } = follower;
                    return (
                        <Card key={id}>
                            <Image as="a" href={ 'https://twitter.com/'  + username } src={ photo } wrapped ui={false} />
                            <Card.Content>
                                <Card.Header><a href={ 'https://twitter.com/'  + name }>{ username }</a></Card.Header>
                                <Card.Meta>
                                    <span className='date'>Далучыўся ў { date.substr(date.length - 4) }</span>
                                </Card.Meta>
                            </Card.Content>
                            <Card.Content extra>
                                <a href={ 'https://twitter.com/'  + name }>
                                    <Icon name='twitter' />
                                    { tweets } допісаў
                                </a>
                            </Card.Content>
                        </Card>
                    )}) : (
                        <div>
                            <Dimmer 
                                active 
                                inverted
                                style={{ minHeight: '30rem' }}       
                            >
                                <Loader content='Загрузка...' />
                            </Dimmer>
                        </div>
                    )
                }
            </>
        )   
    }
}



export default Follower;
