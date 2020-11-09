import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { Menu, Segment } from 'semantic-ui-react';

const featureLinksRenderer = isLoggedIn => (
    isLoggedIn ? <React.Fragment>
        <Menu.Item name='Convert'
            onClick={() => console.log('Convert')}></Menu.Item>
        <Menu.Item name='Images'
            onClick={() => console.log('Images')}></Menu.Item>
    </React.Fragment> : null
);

const authLinksRenderer = isLoggedIn => (
    !isLoggedIn ? <React.Fragment>
        <Menu.Item name='Login'
            onClick={() => console.log('Login')}></Menu.Item>
        <Menu.Item name='Register'
            onClick={() => console.log('Register')}></Menu.Item>
    </React.Fragment> : null
)

const logoutLinkRenderer = isLoggedIn => (
    isLoggedIn ? <Menu.Item name='Logout'
        onClick={() => console.log('Logout')}></Menu.Item> : null
)

const MenuComponent = (props) => (
    <Segment inverted basic>
        <Menu inverted secondary pointing>
            {featureLinksRenderer(props.isLoggedIn)}
            <Menu.Menu position="right">
                {authLinksRenderer(props.isLoggedIn)}
                {logoutLinkRenderer(props.isLoggedIn)}
            </Menu.Menu>
        </Menu>
    </Segment>
);

MenuComponent.propTypes = {
    isLoggedIn: PropTypes.bool
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(MenuComponent);