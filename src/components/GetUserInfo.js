import React, { Component } from 'react'
import { Item, Header, Statistic, Image, List } from 'semantic-ui-react';
import './GetUserInfo.css';

class GetUserInfo extends Component {
    state = {
        color: null,
        date: null
    }
    componentDidMount() {
        let data = localStorage.getItem("data");
        data = JSON.parse(data);
        let color = '#' + data.color;
        this.setState(() => {
            return {
                name: data.name,
                username: data.username,
                date: data.date,
                country: data.country,
                photo: data.photo,
                banner: data.banner,
                color: color,
                stat: [
                    { key: 'followers', label: 'падпісчыкі', value: data.followers.length },
                    { key: 'following', label: 'падпіскі', value: data.following },
                    { key: 'tweets', label: 'допісы', value: data.tweets },
                ]

            }
        })
    }

    StatisticExampleGroupShorthand = () => <Statistic.Group widths='three' size='small' items={this.state.stat} />;
    render() {
     
        return (
            <>
                <Image src={this.state.banner} fluid />
                <Item.Group>
                    <Item>
                        <Item.Image
                            as='a'
                            href={'https://twitter.com/' + this.state.username}
                            target='_blank'
                            size='small'
                            src={this.state.photo}
                            bordered
                            circular
                            centered
                        />
                        <Item.Content>
                            <Header
                                as="h1"                         
                            >
                                {this.state.name}
                            </Header>
                            <Item.Meta>
                                <a
                                    href={'https://twitter.com/' + this.state.username}
                                    target='_blank'
                                >
                                    <Header.Subheader as="h4">
                                        @{this.state.username}
                                    </Header.Subheader>
                                </a>
                            </Item.Meta>
                            <Item.Description>
                                {
                                    this.state.date !== null ? (
                                        <List>
                                            <List.Item icon='calendar alternate outline' content={this.state.date.substr(this.state.date.length - 4)} />
                                            <List.Item icon='marker' content={this.state.country} />
                                            <List.Item icon='tint' style={ {color: this.state.color} }content={this.state.color} />
                                        </List>
                                    ) : (
                                            <>
                                            </>
                                        )
                                }
                            </Item.Description>
                        </Item.Content>
                    </Item>
                    {this.StatisticExampleGroupShorthand()}
                </Item.Group>
            </>
        )
    }
}

export default GetUserInfo;