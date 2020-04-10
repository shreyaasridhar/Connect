import React from "react";
import "./ProfileCreation.css";

import { Typography } from "antd";
import { Button } from "antd";
import { Radio } from "antd";

const { Title } = Typography;

const ProfileCreation = () => (
  <div className="ProfileCreation" data-testid="ProfileCreation">
    <Title>Select the service you seek</Title>
    <Radio.Group name="radiogroup" className="Radiosize" defaultValue={1}>
      <Radio value={1}>I can Help!</Radio>
      <Radio value={2}>I need help</Radio>
    </Radio.Group>
  </div>
);

export default ProfileCreation;
