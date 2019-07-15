import React, { Component } from 'react';
import { Menu, Button, Icon, Image } from 'semantic-ui-react';
import { handleGetData, handleCheckLocalStorage } from '../handlers/storage';

class Header extends Component {
    state = { 
        activeItem: 'home',
     };

    handleItemClick = ({ name }) => {
        this.setState({ activeItem: name });
    };
    render() {
        const { activeItem} = this.state;
        let username, photo = undefined;
        if(handleCheckLocalStorage('data')){
            username = handleGetData('data').username;
            photo = handleGetData('data').photo;
        }

        return (
            <div>
                <Menu pointing secondary>
                    <Menu.Menu position="left">
                        <Menu.Item 
                            name="home"
                            active={activeItem === 'twitter'}
                            onClick={this.handleItemClick}
    
                        >
                            <Icon 
                                name='twitter'
                                color='blue'
                                size='big'
                            />
                        </Menu.Item>
                    </Menu.Menu>
                    <Menu.Menu position="right">
                        {
                            (!handleCheckLocalStorage('data')) ? (
                                <Menu.Item 
                                name="login"
                                active={activeItem === 'login'}
                                style={{ alignSelf: 'center' }}
                                >

                                    <Button 
                                        icon
                                        labelPosition='left'
                                        primary
                                        onClick={this.props.startAuth}
                                        
                                    >
                                        <Icon name='twitter' />
                                        Увайсці
                                    </Button>
                                </Menu.Item>
                            ) : (
                                <Menu.Item 
                                    name="logout"
                                    active={activeItem === 'logout'}
                                >
                                    <div style={{ marginRight: '1.5rem'}}>
                                        <Image 
                                            as='a'
                                            href={ 'https://twitter.com/'  + username }
                                            src={photo}
                                            avatar 
                                            style={{overflow: 'hidden'}}
                                        />
                                        <a 
                                            href={ 'https://twitter.com/'  + username }
                                            style={{ marginLeft: '0.3rem' }}
                                        >
                                            <span>
                                                {username}
                                            </span>
                                        </a> 
                                    </div>
                                    <Button 
                                        color='red'
                                        onClick={this.props.closeCard}
                                    >
                                        Выйсці
                                    </Button>
                                </Menu.Item>
                            )
                        }
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}

export default Header;

