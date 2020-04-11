import React from "react";
import { Form, Input, Button, Card, Typography } from 'antd';
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

class Login extends React.Component {

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
                <Card title="Login" style={{ width: '50%', marginLeft: '25%', marginTop: '150px' }}>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                <Link to="/dashboard">
                                    Submit
                                </Link>
                            </Button>
                        </Form.Item>


                        <Form.Item {...tailTextLayout}>
                            <Link to="/signup">
                                <Text underline>Don't have an account? Signup</Text>
                            </Link>
                        </Form.Item>
                    </Form>
                </Card>
            </React.Fragment>
        );
    }
}

export default Login;