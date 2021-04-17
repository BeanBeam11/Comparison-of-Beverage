import {useEffect, useContext} from "react";
import {StoreContext} from "../store";
import { Button} from "antd";
import Cookie from "js-cookie";
import {removeComparisonItem,removeall} from "../actions";
export default function Comparison(){

    const {state:{compareItems,count},dispatch} =useContext(StoreContext);
    // console.log(compareItems);
    
    useEffect(()=>{
        Cookie.set("compareItems", JSON.stringify(compareItems));
      }, [compareItems])
    useEffect(()=>{
        Cookie.get("count",JSON.stringify(count));
    },[count])
    
    console.log(count);
    return(
        <>
            <div className="compare">
                <p className="compare-title">飲料比較</p>
                <p className="compare-description">已選擇{count}件商品，請挑選最多3件來比較。</p>
                <Button className="compare-reset" onClick={()=>removeall(dispatch,count,compareItems)}>重設全部</Button>
            </div>
            {compareItems.length===0?(
                <div>Did not add beverage items</div>
            ):( 
                <div className="compare-area">
                
                {compareItems.map(item=>(
                        <div className="compare-items-box">
                            <Button className="compare-delete" onClick={()=>removeComparisonItem(dispatch,item.id)}>x</Button>
                            <img className="compare-img" src={item.image}/>
                            <p className="compare-items">店家：{item.company}</p>
                            <p className="compare-items">名稱：{item.name}</p>
                            <p className="compare-items">價格：{item.price}</p>
                            <p className="compare-items">評分：{item.grade}</p>
                            <Button className="compare-items compare-add">加入收藏</Button>
                        </div>
                   
                ))}
                </div>)}
        </>
    );
}