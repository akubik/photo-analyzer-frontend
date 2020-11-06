import React from 'react';

import { Menu, Segment } from 'semantic-ui-react';

const MenuComponent = () => (
    <Segment inverted basic>
        <Menu inverted secondary>
            <Menu.Item name='Convert'
                onClick={() => console.log('Works')}></Menu.Item>
            <Menu.Item name='Images'
                onClick={() => console.log('Works')}></Menu.Item>
        </Menu>
    </Segment>
)

export default MenuComponent;