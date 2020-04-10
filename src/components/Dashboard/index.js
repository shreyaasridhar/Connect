import React from "react";
import { Button, Card, Tabs } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import NavBar from '../NavBar';
import RequestList from "../RequestList";


const { TabPane } = Tabs;

const operations = <Button type="primary" shape="round" icon={<PlusOutlined />} style={{ marginRight: '20px' }}>Add Requests</Button>;

const pendingData = [
    {
        id: "RQ1001",
        description: "Plumbing work",
        postedOn: "Apr 11, 2020 5:00 PM",
        status: "InProgress",
        requestedBy: "Venkat Raman"
    },
    {
        id: "RQ1012",
        description: "Electrical wiring issue",
        postedOn: "Apr 11, 2020 5:00 PM",
        status: "InProgress",
        requestedBy: "Venkat Raman"
    }
];

const completedData = [
    {
        id: "RQ0095",
        description: "Plumbing work",
        postedOn: "Apr 10, 2020 5:00 PM",
        status: "Completed",
        requestedBy: "Venkat Raman"
    },
    {
        id: "RQ0092",
        description: "Broken furniture issue",
        postedOn: "Apr 10, 2020 5:00 PM",
        status: "Completed",
        requestedBy: "Venkat Raman"
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
                            <RequestList data={pendingData} />
                        </Card>
                    </TabPane>
                    <TabPane tab="Completed Requests" key="2">
                        <Card title="Completed Requests" style={{ width: '70%', marginLeft: '15%', marginTop: '50px' }}>
                            <RequestList data={completedData} />
                        </Card>
                    </TabPane>
                </Tabs>
            </React.Fragment>
        );
    }
}

export default Dashboard;