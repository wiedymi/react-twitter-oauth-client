import React, { Component } from 'react';
import { Menu, Button, Icon, Image } from 'semantic-ui-react';


class Header extends Component {
    state = { 
        activeItem: 'home',
        color: 'none'
     };

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
    };
    componentDidMount(){
        if(localStorage.getItem('data') !== null){
            let color = '#' + JSON.parse(localStorage.getItem('data')).color;
            this.setState({ color });
        }
    }
    render() {
        const { activeItem } = this.state;
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
                            (localStorage.getItem('data') === null) ? (
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
                                            href={ 'https://twitter.com/'  + JSON.parse(localStorage.getItem('data')).username }
                                            src={JSON.parse(localStorage.getItem('data')).photo}
                                            avatar 
                                            style={ {overflow: 'hidden'}}
                                        />
                                        <a 
                                            href={ 'https://twitter.com/'  + JSON.parse(localStorage.getItem('data')).username }
                                            style={{ marginLeft: '0.3rem' }}
                                        >
                                            <span>
                                                {JSON.parse(localStorage.getItem('data')).username}
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

