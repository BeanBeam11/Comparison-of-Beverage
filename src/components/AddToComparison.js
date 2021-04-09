import {useEffect, useContext} from "react";
import { Button, notification } from 'antd';
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
          message: '加入比較',
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
          addToComparisonItem(dispatch,item.item,count);
        }
        else{
          openNotification_Full();
        }
        
        
      };
      useEffect(()=>{
        localStorage.setItem("compareItems", JSON.stringify(compareItems));
      }, [compareItems])
       localStorage.setItem("count",JSON.stringify(count));
      return (
        <Button type="primary" onClick={addToComparison}>
            加入比較
        </Button>
      );
  }