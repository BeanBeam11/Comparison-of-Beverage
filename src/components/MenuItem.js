import { Card } from "antd"
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import { Button, Radio } from 'antd';
import {PlusSquareOutlined } from '@ant-design/icons';
export default function MenuItem(menu) {
  
  console.log(menu.menu)
  // console.log(menu.menu.name)
  
  return (
    <>
       {menu.menu.map(item=>(
      <div className="menu-content">
       
          <p className="menu-content-name">{item.name}</p>
          <p className="menu-content-price">{item.price}</p> 
        
         
        <Button className="menu-addbt" type="default" icon={<PlusSquareOutlined />}  />
      </div>
    ))}
    
 </>
  );
}
