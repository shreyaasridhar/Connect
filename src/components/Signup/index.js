import React from "react";
import { Form, Input, Button, Card, Typography, Radio } from 'antd';
import NavBar from '../NavBar';
import { Link } from "react-router-dom";

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

const { Text } = Typography;

class Signup extends React.Component {

    onFinish = values => {
        console.log('Success:', values);
    };

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Card title="Sign Up" style={{ width: '50%', marginLeft: '25%', marginTop: '150px' }}>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input placeholder="Enter your name" />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input placeholder="Enter your email id" />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password placeholder="Enter your password" />
                        </Form.Item>

                        <Form.Item
                            label="Confirm Password"
                            name="confirm-password"
                            rules={[{ required: true, message: 'Please confirm your password!' }]}
                        >
                            <Input.Password placeholder="Confirm your password" />
                        </Form.Item>

                        <Form.Item
                            label="Profile"
                            name="profile"
                            rules={[{ required: true, message: 'Please confirm your profile preference!' }]}
                        >
                            <Radio.Group name="radiogroup" className="Radiosize" defaultValue={2}>
                                <Radio value={1}>I can help!</Radio>
                                <Radio value={2}>I need help</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
                        </Button>
                        </Form.Item>


                        <Form.Item {...tailTextLayout}>
                            <Link to="/login">
                                <Text underline>Have an account? Log in</Text>
                            </Link>
                        </Form.Item>

                    </Form>
                </Card>
            </React.Fragment>
        );
    }
}

export default Signup;