import {useEffect, useContext} from "react";
import {StoreContext} from "../store";
import { Button} from "antd";
import {removeComparisonItem} from "../actions";
export default function Comparison(){
    const {state:{compareItems}, dispatch} =useContext(StoreContext);
    console.log(compareItems);
    useEffect(()=>{
        localStorage.setItem("compareItems", JSON.stringify(compareItems));
      }, [compareItems])
    return(
        <>
            <div className="compare">
                <p className="compare-title">飲料比較</p>
                <p className="compare-description">已選擇2件商品，請挑選最多3件來比較。</p>
                <Button className="compare-reset">重設全部</Button>
            </div>
            {compareItems.length===0?(
                <div>Did not add beverage items</div>
            ):( 
                <div className="compare-card">
                {compareItems.map(item=>(
                        <div className="compare-items">
                            <Button className="compare-delete" onClick={()=>removeComparisonItem(dispatch,item.id)}>x</Button>
                            <p className="compare-items-title">{item.id}</p>
                            <p className="compare-items-name">{item.name}</p>
                            <p className="compare-items-price">{item.price}</p>
                            <Button className="compare-add">加入收藏</Button>
                        </div>
                   
                ))}
                </div>)}
            {/* <div className="Comapre-items-1">
                <p className="Compare-items-title">{compareItems.id}</p>
                <p className="Compare-items-name">{compareItems.name}</p>
                <p className="Compare-items-price">{compareItems.price}</p>
                <Button className="Compare-add">加入收藏</Button>
            </div> */}
        </>
    );
}