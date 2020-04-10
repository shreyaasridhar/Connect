import React from "react";
import { Form, Input, Button, Card, Typography, Row, Col, Avatar, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import NavBar from '../NavBar';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 12, span: 16 },
};

const tailTextLayout = {
    wrapperCol: { offset: 10, span: 16 },
};

const { Title, Text, Paragraph } = Typography;

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editEnabled: false,
            name: "Venkat Raman",
            email: "venkat@gmail.com"
        };
    }

    onEditChange = () => {
        const { editEnabled } = this.state;
        this.setState({
            editEnabled: !editEnabled
        });
    };

    fetchUserData = (email) => {
        this.setState({
            name: "Venkat Raman",
            email: "venkat@gmail.com"
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.email !== this.props.email) {
            this.fetchUserData(this.props.email);
        }
    }

    render() {
        const { name, email, editEnabled } = this.state;
        return (
            <React.Fragment>
                <NavBar loggedIn />
                <Card title="User Profile" style={{ width: '70%', marginLeft: '15%', marginTop: '150px' }}>
                    <Row align="middle">
                        <Col>
                            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} size={'large'} />
                        </Col>
                        <Col offset={3}>
                            <Title>{name}</Title>
                            <Paragraph>{email}</Paragraph>
                        </Col>
                        <Col offset={12}>
                            <Button
                                size="medium"
                                type="primary"
                                shape="round"
                                onClick={this.onEditChange}
                            >
                                Edit Profile
                            </Button>
                        </Col>
                    </Row>
                    {
                        editEnabled &&
                        <React.Fragment>
                            <Divider />
                            <Form
                                {...layout}
                                name="basic"
                                initialValues={{ remember: true }}
                            >
                                <Form.Item
                                    label="Name"
                                    name="name"
                                    rules={[{ required: true, message: 'Please input your name!' }]}
                                >
                                    <Input defaultValue={name} />
                                </Form.Item>

                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[{ required: true, message: 'Please input your email!' }]}
                                >
                                    <Input defaultValue={email} disabled />
                                </Form.Item>

                                <Divider />

                                <Form.Item
                                    label="Old Password"
                                    name="old-password"
                                    rules={[{ required: true, message: 'Please input your old password!' }]}
                                >
                                    <Input.Password placeholder="Enter your old password" />
                                </Form.Item>

                                <Form.Item
                                    label="New Password"
                                    name="new-password"
                                    rules={[{ required: true, message: 'Please input your new password!' }]}
                                >
                                    <Input.Password placeholder="Enter your new password" />
                                </Form.Item>

                                <Form.Item
                                    label="Confirm Password"
                                    name="confirm-password"
                                    rules={[{ required: true, message: 'Please confirm your new password!' }]}
                                >
                                    <Input.Password placeholder="Enter confirm new password" />
                                </Form.Item>

                                <Form.Item {...tailLayout}>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </React.Fragment>
                    }
                </Card>
            </React.Fragment>
        );
    }
}

export default Profile;