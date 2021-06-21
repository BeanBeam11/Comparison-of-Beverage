import {useEffect, useContext} from "react";
import {StoreContext} from "../store";
import { useHistory } from "react-router-dom";
import { Button} from "antd";
import Cookie from "js-cookie";
import {removeComparisonItem,removeall,addFavoriteAct} from "../actions";
export default function Comparison(){

    const {state:{compareItems,count,userSignin: { userInfo},addfavoriterequest:{loading}},dispatch} =useContext(StoreContext);
    // console.log(compareItems);
    const history = useHistory();
    const addToFavorite =(brand,item,image,price,grade)=> {
        if(!check()){
            history.push("/login");
        }
        else{
            console.log("useremail:"+userInfo.email+","+"username:"+userInfo.displayName+"brand:"+brand+"item:"+item+"image:"+image+"price:"+price+"grade:"+grade);
            const resource={useremail:userInfo.email,username:userInfo.displayName,brand:brand,item:item,image:image,price:price,grade:grade};
            addFavoriteAct(dispatch,resource);
        }
      }
      const check=()=>{
        if((userInfo==null)){
            console.log("no login");
            return false;
         }
        else{
          console.log("login");
            return true;
         }
    }
    useEffect(()=>{
        Cookie.set("compareItems", JSON.stringify(compareItems));
      }, [compareItems])
    useEffect(()=>{
        Cookie.get("count",JSON.stringify(count));
    },[count])
    
    console.log(count);
    return(
        <>
            <div className="compare header-mt">
                <p className="compare-title">飲料比較</p>
                <p className="compare-description">已選擇{count}種飲料，請挑選最多3件來比較。</p>
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
                            <div className="compare-items">名稱：{item.name}</div>
                            <div className="compare-items">店家：{item.company}</div>
                            <div className="compare-items">價格：{item.price}</div>
                            <div className="compare-items">評分：{item.grade}</div>
                            <div className="compare-items">介紹：...</div>
                            <div className="compare-items">熱量：...</div>
                            {loading?(
                                <Button className="compare-items compare-fav-btn" loading onClick={()=>addToFavorite(item.company,item.name,item.image,item.price,item.grade)}>加入收藏</Button>
                            ):(
                                <Button className="compare-items compare-fav-btn" onClick={()=>addToFavorite(item.company,item.name,item.image,item.price,item.grade)}>加入收藏</Button>
                            )}
                            
                        </div>
                   
                ))}
                </div>)}
        </>
    );
}