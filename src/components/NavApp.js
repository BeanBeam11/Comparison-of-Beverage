import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { Link } from "react-router-dom";

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
        <Link to='/menu' >
          <div className="drawer-item drawer-item-top">菜單</div>
        </Link>
        <Link to='/compare' >
          <div className="drawer-item">飲料比較</div>
        </Link>
        <Link to='/comment' >
          <div className="drawer-item">評論區</div>
        </Link>
      </Drawer>
    </>
  );
};