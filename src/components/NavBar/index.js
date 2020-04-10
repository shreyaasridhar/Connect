import React from "react";
import { Layout, Menu, Avatar, } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Header } = Layout;



class NavBar extends React.Component {

    render() {
        const { loggedIn } = this.props;
        return (
            <Header className="header">
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="0" >Connect</Menu.Item>
                    {loggedIn && 
                        <Menu.Item key="1">
                            <Link to="/dashboard">Dashboard</Link>
                        </Menu.Item>}
                    {loggedIn && <Menu.Item key="2">Map View</Menu.Item>}
                    {loggedIn && 
                        <Link to="/profile">
                            <Avatar style={{ backgroundColor: '#87d068', float: 'right', marginTop: '15px' }} icon={<UserOutlined />} />
                        </Link>
                    }
                </Menu>
            </Header>
        );
    }
}

export default NavBar;