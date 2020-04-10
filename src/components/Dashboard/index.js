import React from "react";
import { Button, Card, Tabs } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import NavBar from '../NavBar';
import RequestList from "../RequestList";


const { TabPane } = Tabs;

const operations = <Button type="primary" shape="round" icon={<PlusOutlined />}>Add Requests</Button>;

const data = [
    {
        id: "RQ1001",
        description: "Plumbing work",
        postedOn: "Apr 11, 2020 5:00 PM"
    },
    {
        id: "RQ1012",
        description: "Electrical wiring issue",
        postedOn: "Apr 11, 2020 5:00 PM"
    }
  ];

class Dashboard extends React.Component {

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
        return (
            <React.Fragment>
                <NavBar loggedIn />
                <Tabs
                    defaultActiveKey="1"
                    type="card" size="large"
                    tabBarExtraContent={operations}
                    style={{ marginTop: '50px' }}
                >
                    <TabPane tab="Pending Requests" key="1">
                        <Card title="Pending Requests" style={{ width: '70%', marginLeft: '15%', marginTop: '50px' }}>
                            <RequestList data={data} />
                        </Card>
                    </TabPane>
                    <TabPane tab="Completed Requests" key="2">
                        <Card title="Completed Requests" style={{ width: '70%', marginLeft: '15%', marginTop: '50px' }}>
                        </Card>
                    </TabPane>
                </Tabs>
            </React.Fragment>
        );
    }
}

export default Dashboard;