import {useEffect, useContext} from "react";
import { Button, notification } from 'antd';
import Cookie from "js-cookie";
import {PlusSquareOutlined} from '@ant-design/icons';
import Icon from './Icons';
import {StoreContext} from "../store"
import {addToComparisonItem} from "../actions/";
  
  export default function AddToComparison(item){
    const {state:{compareItems,count}, dispatch} =useContext(StoreContext);
    //   console.log(item.item.id);

      const openNotification = () => {
        notification.open({
          message: '加入比較',
          description:
            `${item.item.name}已加入比較`,
          onClick: () => {
            // console.log(compareItems.name);
          },
        }); 
      };
      const openNotification_Full = () => {
        notification.open({
          message: '無法加入比較',
          description:
            "已有三件商品",
          onClick: () => {
            // console.log(compareItems.name);
          },
        }); 
      };

      const addToComparison = () => {
          
          // console.log(item);
        if(count<3){
          openNotification();
          // console.log(item.item);
          addToComparisonItem(dispatch,item.item,count);
        }
        else{
          openNotification_Full();
        }
        
        
      };
      useEffect(()=>{
        Cookie.set("compareItems", JSON.stringify(compareItems));
      }, [compareItems])
       Cookie.set("count",JSON.stringify(count));
      return (
        <Button onClick={addToComparison} className="addcompare-bt" type="default" icon={<PlusSquareOutlined />} />
      );
  }