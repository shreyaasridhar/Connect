import React from "react";

import { Form, Input, Radio, DatePicker } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const { RangePicker } = DatePicker;

class NewRequest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    updateData = (field, value) => {

    }

    onChange = (value, dateString) => {
        console.log(value);
        console.log(dateString);
        let { data } = this.state;
        data.availability = dateString;
        this.setState({
            data
        });
    }

    onOk = (value) => {
        console.log('onOk: ', value);
    }

    render() {
        const { data } = this.state;
        return (
            <React.Fragment>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="Request Description"
                        name="description"
                        rules={[{ required: true, message: 'Please enter your description!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Availability Time"
                        name="time"
                        rules={[{ required: true, message: 'Please input your availability!' }]}
                    >
                        <RangePicker
                            showTime={{ format: 'HH:mm' }}
                            format="YYYY-MM-DD HH:mm"
                            onChange={this.onChange}
                            onOk={this.onOk}
                        />
                    </Form.Item>
                    
                    <Form.Item
                        label="Exposure to Risk"
                        name="exposureToRisk"
                        rules={[{ required: true, message: 'Please enter your exposure information!' }]}
                    >
                            <Radio.Group name="radiogroup" className="Radiosize" defaultValue={2}>
                                <Radio value={1}>Yes</Radio>
                                <Radio value={2}>No</Radio>
                            </Radio.Group>
                    </Form.Item>
                </Form>
            </React.Fragment>
        );
    }
}

export default NewRequest;