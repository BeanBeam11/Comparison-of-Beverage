import {useEffect, useContext} from "react";
import { Button, notification } from 'antd';
import {StoreContext} from "../store"
import {addToComparisonItem} from "../actions/";
  
  export default function AddToComparison(item){
    const {state:{compareItems}, dispatch} =useContext(StoreContext);
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
      useEffect(()=>{
        localStorage.setItem("compareItems", JSON.stringify(compareItems));
      }, [compareItems])

      const addToComparison = () => {
          openNotification();
          console.log(item);
        addToComparisonItem(dispatch,item);
      };
      return (
        <Button type="primary" onClick={addToComparison}>
            加入比較
        </Button>
      );
  }