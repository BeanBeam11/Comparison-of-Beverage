import { Select,Input,Button } from 'antd';
import {useState,useEffect, useContext} from "react";
import kebuke from "../json/kebuke_1.json";
import fiftylan from "../json/50lan"; 
import milkshop from "../json/milkshop.json";
import macu from "../json/macu.json";
import chingshin from "../json/chingshin.json";
import {addToComment} from "../actions/";
import Cookie from "js-cookie";
import {StoreContext} from "../store"
export default function AddComment() {
  const {state:{commentList},dispatch}= useContext(StoreContext);
  const { Option } = Select;
  const provinceData = ['可不可熟成紅茶', '五十嵐',"麻古茶坊","迷客夏","清心福全"];
  const [shops, setShops] = useState(kebuke);
  const [shopName, setshopName] = useState(kebuke.name);
  const resource={users:"",shop:"",product:"",description:""};
  const handleProvinceChange = value => {
    console.log(value);
      switch (value){
        case "可不可熟成紅茶":
          console.log("kbk");
          setShops(kebuke);
          setshopName(kebuke.name);
          break;
        case "五十嵐":
          console.log("50");
          setShops(fiftylan);
          setshopName(fiftylan.name);
          break;
        case "麻古茶坊":
          console.log("macu");
          setShops(macu);
          setshopName(macu.name);
          break;
        case "迷客夏":
          console.log("milk");
          setShops(milkshop);
          setshopName(milkshop.name);
          break;
        case "清心福全":
          console.log("ching");
          setShops(chingshin);
          setshopName(chingshin.name);
          break;
        
      }
    };
  const Publish=()=> {
    const resource={users:"Json",shop:"可不可",product:"熟成紅茶",description:"好好喝"};
    addToComment(dispatch,resource);
  }
  useEffect(()=>{
    Cookie.set("commentList", JSON.stringify(commentList));
  }, [commentList])
  return(
    <>
      <div className="comment-add">
        <div className="comment-area-right">
          <img className="comment-img-user" src="./img/user_note.png"/>
        </div>
        <div className="comment-area-left">
          <div className="comment-select">
            <Select className="comment-select-company" defaultValue={provinceData[0]} onChange={handleProvinceChange}>
              {provinceData.map(province => (
                <Option key={province}>{province}</Option>
              ))}
            </Select>
            <Select className="comment-select-beverage" defaultValue="請選擇飲料">
              {shops.map(city => (
                <Option key={city.name}>{city.name}</Option>
              ))}
            </Select>
            <img className="comment-icon-add-img" src="./img/icon_add_picture.png"/>
          </div>
          <div className="comment-input">
            <Input placeholder="寫點評論..." className="comment-input"/>
            <Button onClick={Publish} className="comment-bt-publish">發布</Button>
          </div> 
        </div>
      </div>
    </>
  );
}