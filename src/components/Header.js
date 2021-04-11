import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store";
import {  Input} from "antd";
const { Search } = Input;
export default function Header({ }) {
  const { dispatch } = useContext(StoreContext);
  const onSearch = value => console.log(value);
  return (
    <header className="header">
      <div className="header-wrap-left">
        <Link to='/'>
          <img className="header-logo" src="./img/logo_tea_da.png"/>
        </Link>
      </div>
      <div className="header-wrap-center">
        <Link to='/menu' >
          <p className='header-navbar-center'>菜單</p>
        </Link>
        <Link to='/compare' >
          <p className='header-navbar-center'>飲料比較</p>
        </Link>
        <Link to='/comment' >
          <p className='header-navbar-center'>評論區</p>
        </Link>
      </div>
      <div className="header-wrap-right">
        <Link to='/' >
          <div className="header-item">
            <Search placeholder="想喝什麼？" className='header-search' allowClear onSearch={onSearch} />
          </div>
        </Link>
        <Link to='/' >
          <img className='header-item header-icon' src="./img/icon_heart.png"/>
        </Link>
        <Link to='/' >
          <img className='header-item header-icon' src="./img/icon_user.png"/>
        </Link>
      </div>
    </header>
  );
}
