import React, { useContext,useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { logoutFromFirebase, updateUserInfo } from "../actions";
import { StoreContext } from "../store";
import { Link } from "react-router-dom";

const ProfileCard = () => {

  const {
    state: {
      userSignin: { userInfo },
    },
    dispatch,
  } = useContext(StoreContext);
  const history = useHistory();

    const { displayName, email } = userInfo;
  const [form] = Form.useForm();

  const handleUpdate = (values) => {
    console.log(values)
    updateUserInfo(dispatch, values);
  };

  const handleLogout = () => {
    logoutFromFirebase(dispatch);
    history.push("/");
  };

  return (
    <>
    <div className="profile-nav-wrapper header-mt">
      <div className="profile-img-box">
        <img className="profile-img" src="./img/user_note.png"/>
      </div>
      <div className="profile-name">{displayName}</div>
      <div className="profile-nav">
        <Link to='/' className="profile-nav-item" >
          個人資料
        </Link>
        <Link to='/' className="profile-nav-item" >
          收藏清單
        </Link>
      </div>
    </div>
    <div className="profile-form-wrapper header-mt">
      <div className="profile-title"></div>
      <Form
        onFinish={handleUpdate}
        name="normal_login"
        className="profile-form"
        form={form}
        initialValues={userInfo}
      >
        <Form.Item
          label="Name: "
          name="name"
          rules={[
            {
              type: "string",
              message: "The input is not valid name!",
            },
            {
              message: "Please input your name!",
            },
          ]}
          hasFeedback
        >
          <Input placeholder={displayName} />
        </Form.Item>
        <Form.Item
          label="Email: "
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              message: "Please input your E-mail!",
            },
          ]}
          hasFeedback
        >
          <Input placeholder={email} />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
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

        <Form.Item className="profile-btn-wrapper">
          <Button
            type=""
            htmlType="submit"
            className="profile-form__button"
          >
            更新
          </Button>

          <Button
            type="danger"
            style={{ marginTop: "0.8rem" }}
            className="profile-form__button"
            onClick={handleLogout}
          >
            登出
          </Button>
        </Form.Item>
      </Form>
    </div>
    </>
  );
};
export default ProfileCard;
