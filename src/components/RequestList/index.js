import React from "react";
import { List } from 'antd';
import { EditOutlined, InfoCircleOutlined } from '@ant-design/icons';

class RequestList extends React.Component {

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

    render() {
        const { data } = this.props
        return (
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item
                    actions={[<EditOutlined />, <InfoCircleOutlined />]}>
                        <List.Item.Meta
                            title={item.id}
                            description={item.description}
                        />
                    </List.Item>
                )}
            />
        );
    }
}

export default RequestList;