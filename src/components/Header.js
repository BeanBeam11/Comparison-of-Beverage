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
      <div className="header-wrap">
        <div className="header-text" >
          <Link to='/'>
            <img className="header-logo" src="./img/logo_tea_da.png"/>
          </Link>
          <Link to='/menu' >
            <p className='header-left-navbar'>菜單</p>
          </Link>
          <Link to='/compare' >
            <p className='header-left-navbar'>飲料比較</p>
          </Link>
          <Link to='/comment' >
            <p className='header-left-navbar'>評論區</p>
          </Link>
          <Link to='/' className='header-right-navbar'>
              <Search placeholder="input search text" className='header-right-search' allowClear onSearch={onSearch} style={{ width: 200 }} />
          </Link>
          <Link to='/' className='header-right-navbar'>
              <img className='header-right-navbar-icon' src="./img/icon_heart.png"/>
          </Link>
          <Link to='/' >
          <img className='header-right-navbar-icon' src="./img/icon_user.png"/>
          </Link>
        </div>
      </div>
    </header>
  );
}
