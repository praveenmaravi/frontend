// frontend/src/views/Auth/Signup.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Input, Form, notification } from 'antd'; // Assuming you're using Ant Design for UI components
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import './Signup.css'; // Add your own CSS for styling

const Signup = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const history = useHistory(); // To redirect after signup

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      // You would replace this with your actual signup API call
      const response = await fakeSignupApiCall(values); // Fake API call for now

      if (response.success) {
        notification.success({
          message: 'Signup Successful!',
          description: 'You have successfully created an account. Redirecting to login page...',
        });

        // Redirect to login page after successful signup
        setTimeout(() => {
          history.push('/auth/login');
        }, 2000);
      } else {
        notification.error({
          message: 'Signup Failed',
          description: response.message || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'An unexpected error occurred. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  // Fake API call (replace this with an actual API call)
  const fakeSignupApiCall = async (values) => {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ success: true }), 2000)
    );
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <Form
        form={form}
        name="signup"
        onFinish={handleSubmit}
        layout="vertical"
        initialValues={{ remember: true }}
        className="signup-form"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'The input is not valid E-mail!' },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Choose a username" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: 'Please input your password!' },
            { min: 6, message: 'Password must be at least 6 characters' },
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Enter a password" />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            { required: true, message: 'Please confirm your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords do not match!'));
              },
            }),
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Confirm your password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Sign Up
          </Button>
        </Form.Item>

        <Form.Item>
          <p>
            Already have an account? <a href="/auth/login">Login here</a>
          </p>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
