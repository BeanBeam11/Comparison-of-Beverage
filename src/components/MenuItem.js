import { Card } from "antd"
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import { Button, Radio } from 'antd';
import {PlusSquareOutlined } from '@ant-design/icons';
export default function MenuItem(menu) {
  
  
  return (
    <>
      
      <div className="menu-content">
        
        <p className="menu-content-name">{menu.menu.name}</p>
        <p className="menu-content-price">{menu.menu.price}</p>
        <Button className="menu-addbt" type="default" icon={<PlusSquareOutlined />}  />
      </div>
    
    
 </>
  );
}
