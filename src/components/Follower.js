import React  from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'

const Follower = ({ followers }) => {
    return (
        <>
            {
                followers ? followers.map((follower) => {
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
                    </div>
                )
            }
        </>
    )
}

export default Follower;
