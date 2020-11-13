import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { logout } from '../../store/actions/actions';

const featureLinksRenderer = isLoggedIn => (
    isLoggedIn ? <React.Fragment>
        <Menu.Item name='Convert'
            onClick={() => console.log('Convert')}></Menu.Item>
        <Menu.Item name='Images' as={Link} to="/"
            onClick={() => console.log('Images')}></Menu.Item>
    </React.Fragment> : null
);

const authLinksRenderer = (isLoggedIn) => (
    !isLoggedIn ? <React.Fragment>
        <Menu.Item name='Login' as={Link} to='/login'
            onClick={() => console.log('Login')}></Menu.Item>
        <Menu.Item name='Register' as={Link} to="/register"
            onClick={() => console.log('Register')}></Menu.Item>
    </React.Fragment> : null
)

const logoutLinkRenderer = (isLoggedIn, logoutFn) => (
    isLoggedIn ? <Menu.Item name='Logout'
        onClick={logoutFn}></Menu.Item> : null
)

const MenuComponent = (props) => (
    <Segment inverted basic>
        <Menu inverted secondary pointing>
            {featureLinksRenderer(props.isLoggedIn)}
            <Menu.Menu position="right">
                {authLinksRenderer(props.isLoggedIn)}
                {logoutLinkRenderer(props.isLoggedIn, props.onLogout)}
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

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);