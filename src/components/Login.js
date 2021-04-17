import React from "react";
import { Input, Space,Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
export default function Login() {
  return (
    <div className="login">
        <p className="login-title">LOGIN IN</p>
        <Space direction="vertical">
            <Input  className="login-input" placeholder="input account" />
            <Input.Password
            className="login-input"
            placeholder="input password"
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
        </Space>
        <Button className="login-bt">登入</Button>
    </div>
  );
}

