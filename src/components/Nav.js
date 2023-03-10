import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Menu, Dropdown } from 'semantic-ui-react'
import logo from '../assets/pics/logo.png'
import "../css/forNav.css"
import { Icon } from 'semantic-ui-react'
import HomePage from '../pages/HomePage'
import CollaborationsPage from "../pages/CollaborationsPage"
import TeamPage from "../pages/people/TeamPage"
import DescriptionPage from "../pages/projects/DescriptionPage"

class Nav extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Menu stackable borderless id="topNav">
                    <Menu.Item to="/" as={Link}>
                        <img src={logo}/>
                    </Menu.Item>

                    <Menu.Item name='features' to="/" as={Link}>
                        Home
                    </Menu.Item>

                    <Menu.Item name='description' to="/Learning" as={Link}>
                        Learning
                    </Menu.Item>

                    <Menu.Item name='team' to="/Mentorship" as={Link}>
                        Mentorship
                    </Menu.Item>

                    <Menu.Item name='collaborations' position='right' to="/Collaborations" as={Link}>
                        <Icon name="handshake" size="large" />
                        Register / Sign In
                    </Menu.Item>
                </Menu>
                <Route path = "/" exact={true} component={HomePage} />
                <Route path = "/Learning" exact={true} component={DescriptionPage} />
                <Route path = "/Mentorship" exact={true} component={TeamPage} />
                <Route path = "/Collaborations" exact={true} component={CollaborationsPage} />
            </BrowserRouter>
        )
    }
}

export default Nav