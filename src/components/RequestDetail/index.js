import React from "react";
import { Typography, PageHeader, Tag } from 'antd';

const { Title, Paragraph } = Typography;

class RequestDetail extends React.Component {

    render() {
        const { data } = this.props;
        return (
            <React.Fragment>
                <PageHeader
                    title={data.id}
                    tags={[<Tag color={data.status === 'Completed' ? 'green' : 'blue'}>{data.status}</Tag>, <Tag color={data.exposureToRisk === true ? 'red' : 'green'}>{data.exposureToRisk === true ? 'Exposed' : 'Safe'}</Tag>]}
                >
                    <Title>{data.description}</Title>
                    <Paragraph>Requested By: {data.requestedBy}</Paragraph>
                    <Paragraph>Requested Posted On: {data.postedOn}</Paragraph>
                    <Paragraph>Requested Time Slot: {data.fromTime} - {data.toTime}</Paragraph>
                </PageHeader>
            </React.Fragment>
        );
    }
}

export default RequestDetail;