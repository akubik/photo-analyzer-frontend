import React from 'react';
import { connect } from 'react-redux';

import { Menu, Segment } from 'semantic-ui-react';

const MenuComponent = (props) => (
    <Segment inverted basic>
        <Menu inverted secondary pointing>
            {props.isLoggedIn ? <React.Fragment>
                <Menu.Item name='Convert'
                    onClick={() => console.log('Convert')}></Menu.Item>
                <Menu.Item name='Images'
                    onClick={() => console.log('Images')}></Menu.Item>
            </React.Fragment> : null}
            <Menu.Menu position="right">
                {!props.isLoggedIn ? <React.Fragment>
                    <Menu.Item name='Login'
                        onClick={() => console.log('Login')}></Menu.Item>
                    <Menu.Item name='Register'
                        onClick={() => console.log('Register')}></Menu.Item>
                </React.Fragment> : null}
                {props.isLoggedIn ? <Menu.Item name='Logout'
                    onClick={() => console.log('Logout')}></Menu.Item> : null}
            </Menu.Menu>
        </Menu>

    </Segment>
);

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(MenuComponent);