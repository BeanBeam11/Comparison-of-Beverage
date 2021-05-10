import {Table } from 'antd';
import AddToComparison from "./AddToComparison";
export default function MenuItem(menu) {
  console.log(menu);
  console.log(menu.menu)

  
  let productname=[];
  let productdata=[];
  menu.menu.get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
      // console.log(doc.id, doc.data().name);
      productname.push(doc.data().name);
      productdata.push(doc.data());
    });
  });
  console.log(productname);
  console.log(productdata);
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
       
          
          <Table value={productname} columns={columns} dataSource={productdata} pagination={{ pageSize: 25 }} scroll={{ y: 500 }} />,
         
       
      </div>

    
 </>
  );
}
