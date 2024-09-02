import {Table,Spin } from 'antd';
import { StoreContext } from "../store"
import { useContext,useEffect } from "react";
import AddToComparison from "./AddToComparison";
import { LoadingOutlined } from '@ant-design/icons';
import Aos from "aos";

export default function MenuItem() {


  const { state: { menus,menurequest:{loading} } } = useContext(StoreContext);

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
 
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
  
  useEffect(() => {
    Aos.init({duration: 800});
  }, [])
  
  return (  
    <>
      
      <div className="menu-content">
       
          {menus.length==0 ?(
            <div className="menu-init-wrapper">
              <div className="menu-init">
                <div className="menu-init-text">決定好要喝什麼了嗎？</div>
                <div className="menu-init-text">請點選上方選單選擇飲料菜單...</div>
                <img data-aos="fade-up" className="menu-init-img"src="./img/intro_1_new.png"/>
              </div>
            </div>
          ):(
            <>
          {loading
            ? (
              <div className="spinner-wrap">
                <Spin className="spinner" indicator={antIcon} />
              </div>
          ):(
          <Table value={menus} columns={columns} dataSource={menus} pagination={{ pageSize: 25 }} scroll={{ y: 500 }} />
            )}
              </>
         
            
          )}
          
       
      </div>

    
 </>
  );
}
