import { Button,Table } from 'antd';
import {PlusSquareOutlined } from '@ant-design/icons';
import AddToComparison from "./AddToComparison";
import { MemoryRouter } from 'react-router';
export default function MenuItem(menu) {
  
  // console.log(menu.menu)
  // console.log(menu.menu.name)
 
  const columns = [
    {
      title: '品項',
      dataIndex: 'name',
      width: 150,
    },
    {
      title: '價格',
      dataIndex: 'price',
      width: 150,
    },
    {
      title:'加入比較',
      key:'operation',
      width: 100,
      // render:()=><Button className="menu-addbt" type="default" icon={<PlusSquareOutlined />}  />,
      render:(value)=><AddToComparison item={value}/>
                
    }
  ];
  
  
  return (
    <>
      
      <div className="menu-content">
       
          
          <Table value={menu.menu.id} columns={columns} dataSource={menu.menu} pagination={{ pageSize: 50 }} scroll={{ y: 500 }} />,
         
       
      </div>

    
 </>
  );
}
