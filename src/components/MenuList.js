import { Link } from "react-router-dom";
import { useContext} from "react";
import {StoreContext} from "../store";
import MenuItem from "./MenuItem";
import {menuContentSet} from "../actions";
import {Select,Button} from 'antd';
import {getJSON} from "../api";
const {Option} =Select;

export default function MenuList({menus}) {
const {dispatch} = useContext(StoreContext);
const onClickMenu=(value)=>{ 
    menuContentSet(dispatch,getJSON(value.key));
    console.log(value.key);
}
  return (
    <>
    <div className="menu-select-box">
      <Select
        className="menu-select"
        labelInValue
        defaultValue={{ value: '可不可熟成紅茶' }}  
        style={{ width: 150 }}
        onChange={onClickMenu}
      >
        <Option value="/kebuke">可不可熟成紅茶</Option>
        <Option value="/fiftylan"> 五十嵐</Option>
        <Option value="/macu">麻古茶坊</Option>
        <Option value="/milkshop">迷客夏</Option>
        <Option value="/chingshin">清心福全</Option>
      </Select>
    </div>
    <div className="menu">
            <MenuItem menu={menus}/>
    </div>
    <div className="menu-compare-bt-box">
      <Link to='/compare'>
        <Button className="menu-compare-bt" shape="round"  >
          開始比較
        </Button>
      </Link>
    </div> 
    </>
  );
}

