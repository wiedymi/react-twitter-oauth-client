import React, { Component }  from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'




class Follower extends Component {
    state = {
        followers: {
            
        }
    }
    componentWillMount(){
        this.setState(() => ({
            followers: this.props.followers
        }));
    }

    render(){
        return (
            <>
                {
                    this.state.followers ? this.state.followers.map((follower) => (
                        <Card key={follower.id}>
                            <Image as="a" ref={ 'https://twitter.com/'  + follower.username } src={ follower.photo } wrapped ui={false} />
                            <Card.Content>
                                <Card.Header><a href={ 'https://twitter.com/'  + follower.name }>{ follower.username }</a></Card.Header>
                                <Card.Meta>
                                    <span className='date'>Далучыўся ў { follower.date.substr(follower.date.length - 4) }</span>
                                </Card.Meta>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='twitter' />
                                    { follower.tweets } допісаў
                                </a>
                            </Card.Content>
                        </Card>
                    )) : (
                        <div>
                        </div>
                    )
                }
            </>
        )
    }
}

export default Follower;
