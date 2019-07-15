import React, { Component } from 'react'
import { Item, Header, Statistic, Image, List } from 'semantic-ui-react';
//import './user.css';
import { handleCheckLocalStorage, handleGetData } from '../handlers/storage';

class GetUserInfo extends Component {
    state = {
        color: null,
        date: null
    }
    componentDidMount() {
        if(handleCheckLocalStorage('data')){
           const data = handleGetData('data');
           this.setState(() => {
                const { 
                    username, photo, name, date, country, banner, followers, tweets, following 
                } = data;
                const color = '#' + data.color;
                return {
                    name,
                    username,
                    date,
                    country,
                    photo,
                    banner,
                    color,
                    stat: [
                        { key: 'followers', label: 'падпісчыкі', value: followers.length },
                        { key: 'following', label: 'падпіскі', value: following },
                        { key: 'tweets', label: 'допісы', value: tweets },
                    ]
                }
            })
        }
    }

    render() {
        const { username, photo, name, color, date, country, banner } = this.state;
        const statistic = () => <Statistic.Group widths='three' size='small' items={this.state.stat} />;
        return (
            <>
                <Image src={banner} fluid />
                <Item.Group>
                    <Item>
                        <Item.Image
                            as='a'
                            href={'https://twitter.com/' + username}
                            target='_blank'
                            rel='noopener noreferrer'
                            size='small'
                            src={photo}
                            bordered
                            circular
                            centered
                        />
                        <Item.Content>
                            <Header
                                as="h1"                         
                            >
                                {name}
                            </Header>
                            <Item.Meta>
                                <a
                                    href={'https://twitter.com/' + username}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Header.Subheader as="h4">
                                        @{username}
                                    </Header.Subheader>
                                </a>
                            </Item.Meta>
                            <Item.Description>
                                {
                                    date !== null ? (
                                        <List>
                                            <List.Item icon='calendar alternate outline' content={date.substr(date.length - 4)} />
                                            <List.Item icon='marker' content={country} />
                                            <List.Item icon='tint' style={ { color } } content={color} />
                                        </List>
                                    ) : (
                                            <>
                                            </>
                                        )
                                }
                            </Item.Description>
                        </Item.Content>
                    </Item>
                    { statistic() }
                </Item.Group>
            </>
        )
    }
}

export default GetUserInfo;