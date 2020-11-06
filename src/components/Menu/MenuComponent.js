import React from 'react';

import { Menu, Segment } from 'semantic-ui-react';

const MenuComponent = () => (
    <Segment inverted basic>
        <Menu inverted secondary pointing>
            <Menu.Item name='Convert'
                onClick={() => console.log('Convert')}></Menu.Item>
            <Menu.Item name='Images'
                onClick={() => console.log('Images')}></Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item name='Login'
                    onClick={() => console.log('Login')}></Menu.Item>
                <Menu.Item name='Rgister'
                    onClick={() => console.log('Register')}></Menu.Item>
                <Menu.Item name='Logout'
                    onClick={() => console.log('Logout')}></Menu.Item>
            </Menu.Menu>
        </Menu>

    </Segment>
)

export default MenuComponent;