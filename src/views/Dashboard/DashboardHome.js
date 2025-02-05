import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Statistic, Button } from 'antd';
import { BarChartOutlined, RobotOutlined, DatabaseOutlined } from '@ant-design/icons';

const DashboardHome = () => {
  return (
    <div className="dashboard-home">
      <h1>Dashboard Overview</h1>
      <Row gutter={16}>
        <Col span={8}>
          <Card
            title="Chatbot Status"
            extra={<Link to="/dashboard/chatbot-stats">View Details</Link>}
            bordered={false}
            style={{ height: '100%' }}
          >
            <Statistic
              title="Active Conversations"
              value={128}
              prefix={<RobotOutlined />}
              style={{ marginBottom: 16 }}
            />
            <Statistic
              title="Chatbot Uptime"
              value="99.9%"
              prefix={<DatabaseOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Performance Analytics"
            extra={<Link to="/dashboard/chatbot-stats">View Details</Link>}
            bordered={false}
            style={{ height: '100%' }}
          >
            <Statistic
              title="Average Response Time"
              value="2.4s"
              prefix={<BarChartOutlined />}
              style={{ marginBottom: 16 }}
            />
            <Statistic
              title="Tasks Completed"
              value="235"
              suffix="tasks"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Workflows Overview"
            extra={<Link to="/dashboard/workflow-overview">View Details</Link>}
            bordered={false}
            style={{ height: '100%' }}
          >
            <Statistic
              title="Active Workflows"
              value={3}
              prefix={<BarChartOutlined />}
              style={{ marginBottom: 16 }}
            />
            <Statistic
              title="Completed Workflows"
              value={45}
              suffix="workflows"
            />
          </Card>
        </Col>
      </Row>

      <div className="quick-actions" style={{ marginTop: '20px' }}>
        <h3>Quick Actions</h3>
        <Row gutter={16}>
          <Col span={8}>
            <Button type="primary" block>
              Manage Integrations
            </Button>
          </Col>
          <Col span={8}>
            <Button type="primary" block>
              View Chatbot Logs
            </Button>
          </Col>
          <Col span={8}>
            <Button type="primary" block>
              Configure Automation
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DashboardHome;
