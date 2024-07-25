import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, notification } from "antd";

import { loginApi } from "../util/api";
const LoginPage = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const { email, password } = values;

    const res = await loginApi(email, password);
    if (res && res.EC === 0) {
      localStorage.setItem("access_token", res.access_token);
      notification.success({
        message: "LOGIN USER",
        description: "Success",
      });
      navigate("/");
    } else {
      notification.error({
        message: "LOGIN USER",
        description: res?.EM ?? "error",
      });
    }
    console.log("Success:", res);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default LoginPage;
