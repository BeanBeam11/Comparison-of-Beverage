import React from "react";
import { Input, Space,Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
export default function Login() {
  return (
    <div className="login">
        <p className="login-title">LOGIN IN</p>
        <Space direction="vertical" className="login-input">
            <Input placeholder="input account" />
            <Input.Password
            placeholder="input password"
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
        </Space>
        <Button className="login-click">登入</Button>
    </div>
  );
}

