import { Link, useHistory } from "react-router-dom";
import React, { useContext, useEffect } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import { registerToFirebase } from '../actions'
import { StoreContext } from "../store"

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 24,
      offset: 0,
    },
  },
};

const RegisterCard = ({ redirect }) => {
  const { state: { userRegister: { userInfo, loading, error } }, dispatch } = useContext(StoreContext);
  const [form] = Form.useForm();
  const history = useHistory();

  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    await registerToFirebase(dispatch, values);
  };

  useEffect(() => {
    if (userInfo) history.push("./login");
  }, [userInfo]);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
    <div className="login-quote-wrapper header-mt">
      <div className="login-quote-1">天氣好熱 ...</div>
      <div className="login-quote-2">喝杯飲料吧 !</div>
      {/* <img className="img_login_illus" src="./img/login_illus_brown.png"/> */}
    </div>
    <div className="login-form-wrapper register-form-wrapper header-mt">
      <div className="login-title">Register</div>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        className="register-form"
        scrollToFirstError
      >
        <Form.Item
          name="name"
          label="Name"
          tooltip="你想要別人怎麼稱呼你？"
          rules={[
            {
              required: true,
              message: "Please input your name!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
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
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="rePassword"
          label="Re-enter Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please re-enter your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <div className="agreement">
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              我已閱讀此 <Link to={"/"}>同意條款</Link>
            </Checkbox>
          </Form.Item>
        </div>
        <Form.Item 
          {...tailFormItemLayout}
          className="register-enter"
        >
          {loading ? (
            <Button
              type=""
              className="register-form__button"
              htmlType="submit"
              loading
            >
              註冊
            </Button>
          ) : (
            <Button
              type=""
              className="register-form__button"
              htmlType="submit"
            >
              註冊
            </Button>
          )}
          <div className="register-space"></div>
          已經有帳號了嗎？{" "}
          <Link to={"/login?redirect=shipping"}>馬上登入 !</Link>
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
export default RegisterCard;
