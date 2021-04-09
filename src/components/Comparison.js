import {useEffect, useContext} from "react";
import {StoreContext} from "../store";
import { Button} from "antd";
import {removeComparisonItem} from "../actions";
export default function Comparison(){

    const {state:{compareItems,count},dispatch} =useContext(StoreContext);
    // console.log(compareItems);
    
    useEffect(()=>{
        localStorage.setItem("compareItems", JSON.stringify(compareItems));
      }, [compareItems])
    
    localStorage.setItem("count",JSON.stringify(count));
    console.log(count);
    return(
        <>
            <div className="compare">
                <p className="compare-title">飲料比較</p>
                <p className="compare-description">已選擇{count}件商品，請挑選最多3件來比較。</p>
                <Button className="compare-reset">重設全部</Button>
            </div>
            {compareItems.length===0?(
                <div>Did not add beverage items</div>
            ):( 
                <div className="compare-card">
                
                {compareItems.map(item=>(
                        <div className="compare-items">
                            <Button className="compare-delete" onClick={()=>removeComparisonItem(dispatch,item.id)}>x</Button>
                            <p className="compare-items-title">店家:{item.id}</p>
                            <p className="compare-items-name">名稱:{item.name}</p>
                            <p className="compare-items-price">價格:{item.price}</p>
                            <Button className="compare-add">加入收藏</Button>
                        </div>
                   
                ))}
                </div>)}
        </>
    );
}