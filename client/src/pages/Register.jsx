import React from "react";
import { Button, Checkbox, Form, Input, notification } from "antd";
import { createUserApi } from "../util/api";
const onFinish = async (values) => {
  const { email, password, name } = values;

  const res = await createUserApi(email, password, name);
  if (res) {
    notification.success({
      message: "CREATE USER",
      description: "Success",
    });
  } else {
    notification.error({
      message: "CREATE USER",
      description: "error",
    });
  }
  console.log("Success:", res);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const RegisterPage = () => {
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
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
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

export default RegisterPage;
