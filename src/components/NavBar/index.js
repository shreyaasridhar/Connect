import React from "react";
import { Layout, Menu } from 'antd';

const { Header } = Layout;


class NavBar extends React.Component {

    render() {
        const { showMenu } = this.props;
        return(
            <Header className="header">
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="0" >Connect</Menu.Item>
                    <Menu.Item key="1">Dashboard</Menu.Item>
                    <Menu.Item key="2">Map View</Menu.Item>
                    <Menu.Item key="3">Profile</Menu.Item>
                </Menu>
          </Header>
        );
    }
}

export default NavBar;