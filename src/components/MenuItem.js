import {Table } from 'antd';
import { StoreContext } from "../store"
import { useContext,useEffect } from "react";
import AddToComparison from "./AddToComparison";
export default function MenuItem() {


  const { state: { menus } } = useContext(StoreContext);

  
  console.log(menus);
  
 
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
       
          
          <Table value={menus} columns={columns} dataSource={menus} pagination={{ pageSize: 25 }} scroll={{ y: 500 }} />,
         
       
      </div>

    
 </>
  );
}
