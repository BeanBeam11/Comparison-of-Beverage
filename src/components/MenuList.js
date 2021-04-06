
import MenuItem from "./MenuItem";
import {Select} from 'antd'
const {Option} =Select;
function handleChange(value) {
  
}
export default function MenuList({menus}) {
  return (
    <>
    <Select
            className="menu-select"
            labelInValue
            defaultValue={{ value: 'kebuke' }}
            style={{ width: 250 }}
            onChange={handleChange}
          >
          <MenuItem to="/kebueke" value="kebuke" className="menu-item" activeClassName="menu-item--active">
            可不可熟成紅茶
          </MenuItem>
          <MenuItem to="/50lan" value="50lan" className="menu-item" activeClassName="menu-item--active">
            五十嵐
          </MenuItem>
            <Option value="macu">麻古茶坊</Option>
            <Option value="milkshop">迷克夏</Option>
            <Option value="Ching-Shin">清心福全</Option>
          </Select>
    <div className="menu">
      <div className="menu-title">
        <p className="menu-title-name">品項</p>
        <p className="menu-title-price">價格</p>
        <p className="menu-title-compare">加入比較</p>
      </div>
        {menus.map(menu =>(

            <MenuItem menu={menu}/>

        ))}
        </div>
    </>
       
     
  );
}

