import {Table } from 'antd';
import { useContext } from "react";
import { StoreContext } from "../store"
import AddToComparison from "./AddToComparison";
export default function MenuItem(menu) {
  const { state: { menuList:{menus} }}= useContext(StoreContext);
  
  console.log(menus)
  // console.log(menu.menu.id)
 
  const columns = [
    {
      title: '品項',
      dataIndex: 'name',
      width: '45%'
    },
    {
      title: '價格',
      dataIndex: 'price',
      width: '25%'
    },
    {
      title: '加入比較',
      key: 'operation',
      width: '30%',
      
      // render:()=><Button className="menu-addbt" type="default" icon={<PlusSquareOutlined />}  />,
      render:(value)=><AddToComparison item={value}/>
                
    }
  ];
  
  
  return (
    <>
      
      <div className="menu-content">
       
          
          <Table value={menus.id} columns={columns} dataSource={menus} pagination={{ pageSize: 25 }} scroll={{ y: 500 }} />,
         
       
      </div>

    
 </>
  );
}
