import {useEffect, useContext} from "react";
import { Button, notification } from 'antd';
import Cookie from "js-cookie";
import {PlusSquareOutlined} from '@ant-design/icons';
import Icon from './Icons';
import {StoreContext} from "../store"
import {addToComparisonItem} from "../actions/";
  
  export default function AddToComparison(item){
    const {state:{compareItems,count,booladd}, dispatch} =useContext(StoreContext);

      const openNotification = () => {
        notification.open({
          message: '加入比較',
          description:
            `${item.item.name}已加入比較`,
          onClick: () => {
          },
        }); 
      };
      const openNotification_Full = () => {
        notification.open({
          message: '無法加入比較',
          description:
            "已有三件商品",
          onClick: () => {
          },
        }); 
      };

      const addToComparison = () => {
        if(compareItems.length < 3){
          addToComparisonItem(dispatch, item.item, count);
      
          if(!booladd){
            openNotification();
          }
        } else {
          openNotification_Full();
        }
      };

      
      useEffect(()=>{
        Cookie.set("compareItems", JSON.stringify(compareItems));
        Cookie.set("count", JSON.stringify(compareItems.length));
        }, [compareItems]);
      return (
        <Button onClick={addToComparison} className="add-to-compare-bt" type="default" icon={<PlusSquareOutlined />} />
      );
  }