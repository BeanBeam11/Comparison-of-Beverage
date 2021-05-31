// import React from "react";
// import { Input, Space,Button } from 'antd';
// import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { WarningOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { checkLogin, loginToFirebase, rememberLoginUser } from '../actions';
import { StoreContext } from "../store";
export default function Login(redirect) {
  // return (
  //   <div className="login">
  //       <p className="login-title">LOGIN IN</p>
  //       <Space direction="vertical">
  //           <Input  className="login-input" placeholder="Account" />
  //           <Input.Password
  //           className="login-input"
  //           placeholder="Password"
  //           iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
  //           />
  //       </Space>
  //       <Button className="login-bt">登入</Button>
  //   </div>
  // );
  const { state:{ userSignin: { userInfo, loading, error, remember } }, dispatch } = useContext(StoreContext);
  const [form] = Form.useForm();
  const history = useHistory();
 
  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    await loginToFirebase(dispatch, values);
  };

  const onChange = e => {
    rememberLoginUser(dispatch, e.target.checked);
  }

  useEffect(() => {    
    if( userInfo && checkLogin(dispatch) ) history.push("/profile");
  }, [ userInfo ]);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
    <div className="login-quote-wrapper">
      <div className="login-quote-1">天氣好熱 ...</div>
      <div className="login-quote-2">喝杯飲料吧 !</div>
      <img className="img_login_illus" src="./img/login_illus_brown.png"/>
    </div>
    <div className="login-form-wrapper">
      <div className="login-title">Log in</div>
      <Form
        name="normal_login"
        className="login-form"
        form={form}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          className="login-email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
          hasFeedback
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder=" E-mail"
          />
        </Form.Item>
        <Form.Item
          name="password"
          className="login-password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder=" Password"
          />
        </Form.Item>
        <Form.Item
          className="login-option"
        >
          <Form.Item
            name="remember"
            noStyle
          >
            <Checkbox className="remember" onChange={onChange} checked={remember}>記住我</Checkbox>
          </Form.Item>

          <Link className="login-form__forgot" to={"/"}>
            忘記密碼？
          </Link>
        </Form.Item>

        <Form.Item
          className="login-enter"
        >
          {loading ? (
            <Button
              type=""
              htmlType="submit"
              className="login-form__button"
              loading
            >
              登入
            </Button>
          ) : (
            <Button
              type=""
              htmlType="submit"
              className="login-form__button"
            >
              登入
            </Button>
          )}
          <div className="login-or">or</div>
          還沒有帳號嗎？<Link to={"/register?redirect=shipping"}>現在註冊 !</Link>
          {error === "" ? (
            <></>
          ) : (
            <div className="login-form__error-wrap">
              <h3 className="login-form__error-title">
                <WarningOutlined className="site-form-item-icon" />
                {"  "}發生了一點問題...
              </h3>
              <p className="login-form__error-message">{error}</p>
            </div>
          )}
        </Form.Item>
      </Form>
    </div>
    </>
  );
};


