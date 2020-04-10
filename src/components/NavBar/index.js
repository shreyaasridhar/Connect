import React from "react";
import { Layout, Menu, Avatar, } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header } = Layout;



class NavBar extends React.Component {

    render() {
        const { loggedIn } = this.props;
        return (
            <Header className="header">
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="0" >Connect</Menu.Item>
                    {loggedIn && <Menu.Item key="1">Dashboard</Menu.Item>}
                    {loggedIn && <Menu.Item key="2">Map View</Menu.Item>}
                    {loggedIn && <Menu.Item key="3">Profile</Menu.Item>}
                    {loggedIn && <Avatar style={{ backgroundColor: '#87d068', float: 'right', marginTop: '15px' }} icon={<UserOutlined />} />}
                </Menu>
            </Header>
        );
    }
}

export default NavBar;