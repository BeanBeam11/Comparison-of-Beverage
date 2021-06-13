import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { Link } from "react-router-dom";
import { Input } from "antd";

const { Search } = Input;
export default function NavBar(){
  const [visible, setVisible] = useState(false);
  const onSearch = value => console.log(value);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Button className="drawer-btn" onClick={showDrawer}>
        <img className="drawer-icon" src="./img/icon_ham_menu_brown.png"/>
      </Button>
      <Drawer
        title=""
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <div className="header-item">
          <Search placeholder="想喝什麼？" className='navbar-search' allowClear onSearch={onSearch} />
        </div>
        <Link to='/menu' >
          <p className="drawer-item drawer-item-top">菜單</p>
        </Link>
        <Link to='/compare' >
          <p className="drawer-item">飲料比較</p>
        </Link>
        <Link to='/comment' >
          <p className="drawer-item">評論區</p>
        </Link>
      </Drawer>
    </>
  );
};
