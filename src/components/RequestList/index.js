import React from "react";
import { List, Modal } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import RequestDetail from "../RequestDetail";


class RequestList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    showModal = (data) => {
        this.setState({
            isOpen: true,
            data: data
        });
    }

    handleOk = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleCancel = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const { data } = this.props;
        const { isOpen } = this.state;
        return (
            <React.Fragment>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item
                            actions={[<InfoCircleOutlined style={{ fontSize: '20px' }}  onClick = {() => this.showModal(item)} />]}>
                            <List.Item.Meta
                                title={item.id}
                                description={item.description}
                            />
                        </List.Item>
                )}
                />
                <Modal
                    title="Basic Modal"
                    visible={isOpen}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <RequestDetail data={this.state.data} />
                </Modal>
            </React.Fragment>
        );
    }
}

export default RequestList;