import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store";
import { Input,Button } from "antd";
import  NavBar from "./NavBar.js";
import UserInfo from "./UserInfo";
import {getCommentAct} from "../actions"
const { Search } = Input;
export default function Header({ }) {
  const { dispatch } = useContext(StoreContext);
  const onSearch = value => console.log(value);
  const Comment=()=>{
    getCommentAct(dispatch);
  }
  return (
    <header className="header">
      <NavBar />
      <div className="header-box-left">
        <Link to='/'>
          <img className="header-logo" src="./img/logo_drink_what.png"/>
        </Link>
      </div>
      <div className="header-box-center">
        <Link to='/menu' className="header-item-center" >
          菜單
        </Link>
        <Link to='/compare' className="header-item-center" >
          飲料比較
        </Link>
        <Link to='/comment' className="header-item-center" >
          評論區
        </Link>
      </div>
      <div className="header-box-right">
        <div className="header-item">
          <Search placeholder="想喝什麼？" className='header-search' allowClear onSearch={onSearch} />
        </div>
        <Link to='/login' >
          <img className='header-item header-icon' src="./img/icon_heart.png"/>
        </Link>
        {/* <Link to='/login' >
          <img className='header-item header-icon' src="./img/icon_user.png"/>
        </Link> */}
        <div className='header-item header-icon'>
        <UserInfo className='header-item header-icon' style={{}} />
        </div>
      </div>
    </header>
  );
}
