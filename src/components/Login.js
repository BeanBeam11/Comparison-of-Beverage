import React from "react";
import {useState} from "react"
import { Input, Space,Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import {SignIn} from "../api";

export default function Login() {
  const [email,setEmail] =useState("");
  const [password,setPassword] = useState("");
  const onchangeEmail = e => {
    setEmail(e);
  };
  const onchangePassword = e => {
    setPassword(e);
  };
  return (
    
    <div className="login">
        <p className="login-title">LOGIN IN</p>
        <Space direction="vertical">
            <Input onChange={onchangeEmail} className="login-input" placeholder="Account" />
            <Input.Password
            onChange={onchangePassword}
            className="login-input"
            placeholder="Password"
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
        </Space>
        <Button onClick={SignIn(email,password)} className="login-bt">登入</Button>
    </div>
  );
}

