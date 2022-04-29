import React from 'react';
import { Card, Typography, Button, Row, Col } from 'antd';

import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from '@ant-design/icons';

const { Meta } = Card;
const { Title } = Typography;

const HomeComponent = () => {
  return (
    <>
    <Row>
      <Col span={24}>
        <Title level={2}>General</Title>
      </Col>
    </Row>
    <Row>
      <Col span={8}>
        <Card title="Button">
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <br />
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Icon">
          <HomeOutlined style={{ fontSize: '150%' }} />
          <SettingFilled style={{ fontSize: '150%' }} />
          <SmileOutlined style={{ fontSize: '150%' }} />
          <SyncOutlined spin style={{ fontSize: '150%' }} />
          <SmileOutlined rotate={180} style={{ fontSize: '150%' }} />
          <LoadingOutlined style={{ fontSize: '150%' }} />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Icon">
          <Title>h1. Ant Design</Title>
          <Title level={2}>h2. Ant Design</Title>
          <Title level={3}>h3. Ant Design</Title>
          <Title level={4}>h4. Ant Design</Title>
          <Title level={5}>h5. Ant Design</Title>
        </Card>
      </Col>
    </Row>
    </>
  );
};

export default HomeComponent;