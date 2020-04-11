import React from "react";
import { Card } from "antd";
import NavBar from "../NavBar";
import { List } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import { MapContainer } from "../MapView";

const data = [
  {
    id: "RQ1001",
    description: "Request for Smoke Detector help",
    lat: "34",
    long: "-110",
    postedOn: "Apr 11, 2020 5:00 PM",
  },
  {
    id: "RQ1012",
    description: "Request Electrical wiring issue",
    lat: "34",
    long: "-118",
    postedOn: "Apr 11, 2020 5:00 PM",
  },
];

class MapDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Venkat Raman",
      email: "venkat@gmail.com",
    };
  }

  fetchUserData = (email) => {
    this.setState({
      name: "Venkat Raman",
      email: "venkat@gmail.com",
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.email !== this.props.email) {
      this.fetchUserData(this.props.email);
    }
  }

  render() {
    return (
      <React.Fragment>
        <NavBar loggedIn />
        <Row>
          <Col span={12}>
            <div
              style={{
                height: "500px",
                marginLeft: "15%",
                marginTop: "50px",
              }}
            >
              {this.props.MapContainer}
            </div>
          </Col>
          <Col span={12}>
            <Card
              title="Requests"
              style={{ width: "70%", marginLeft: "15%", marginTop: "50px" }}
            >
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                  <List.Item actions={[<InfoCircleOutlined />]}>
                    <List.Item.Meta
                      title={item.id}
                      description={item.description}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default MapDashboard;
