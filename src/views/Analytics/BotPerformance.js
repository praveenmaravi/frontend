import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Statistic, Progress } from 'antd';
import { Line } from '@ant-design/charts';

const BotPerformance = () => {
  const [botData, setBotData] = useState({
    responseTime: 0,
    taskCompletionRate: 0,
    messagesProcessed: 0,
  });

  // Mock API call to fetch bot performance data
  useEffect(() => {
    // Simulating an API call
    const fetchBotPerformance = () => {
      // Replace with actual API call
      setBotData({
        responseTime: 2.5, // in seconds
        taskCompletionRate: 95, // in percentage
        messagesProcessed: 1200, // total messages processed
      });
    };

    fetchBotPerformance();
  }, []);

  // Line chart configuration for response time
  const responseTimeConfig = {
    data: [
      { time: '00:00', value: 2.5 },
      { time: '01:00', value: 2.3 },
      { time: '02:00', value: 2.7 },
      { time: '03:00', value: 2.4 },
      { time: '04:00', value: 2.6 },
    ],
    xField: 'time',
    yField: 'value',
    point: { size: 5, shape: 'diamond' },
    line: { style: { lineWidth: 3 } },
  };

  return (
    <div className="bot-performance">
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Response Time" bordered={false}>
            <Statistic
              title="Average Response Time"
              value={botData.responseTime}
              suffix="s"
              precision={2}
            />
            <Line {...responseTimeConfig} />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Task Completion Rate" bordered={false}>
            <Statistic
              title="Completion Rate"
              value={botData.taskCompletionRate}
              suffix="%"
            />
            <Progress
              percent={botData.taskCompletionRate}
              status="active"
              strokeWidth={20}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Messages Processed" bordered={false}>
            <Statistic
              title="Total Messages"
              value={botData.messagesProcessed}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default BotPerformance;
