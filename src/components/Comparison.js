import {useEffect, useContext} from "react";
import {StoreContext} from "../store";
import { Button} from "antd";
export default function Comparison(){
    const {state:{compareItems}, dispatch} =useContext(StoreContext);
    console.log(compareItems);
    useEffect(()=>{
        localStorage.setItem("compareItems", JSON.stringify(compareItems));
      }, [compareItems])
    return(
        <>
            <div className="Compare">
                <p className="Compare-title">飲料比較</p>
                <p className="Compare-secription">已選擇2件商品，請挑選最多3件來比較。</p>
                <Button className="Compare-reset">重設全部</Button>
            </div>
            {compareItems.length===0?(
                <div>Did not add beverage items</div>
            ):(
                compareItems.map(item=>(
                    <div className="Comapre-items-1">
                    <p className="Compare-items-title">{item.id}</p>
                    <p className="Compare-items-name">{item.name}</p>
                    <p className="Compare-items-price">{item.price}</p>
                    <Button className="Compare-add">加入收藏</Button>
                </div>
                ))
            )}
            {/* <div className="Comapre-items-1">
                <p className="Compare-items-title">{compareItems.id}</p>
                <p className="Compare-items-name">{compareItems.name}</p>
                <p className="Compare-items-price">{compareItems.price}</p>
                <Button className="Compare-add">加入收藏</Button>
            </div> */}
        </>
    );
}