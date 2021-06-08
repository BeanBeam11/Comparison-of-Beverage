import { Select,Input,Button } from 'antd';
import {useState,useEffect, useContext} from "react";
import kebuke from "../json/kebuke_1.json";
import {menuContentSet,addComment} from "../actions/";
import Cookie from "js-cookie";
import {StoreContext} from "../store"

export default function AddComment() {
  const {state:{commentList,  menus,userSignin: { userInfo}},dispatch}= useContext(StoreContext);
  // const { displayName, email } = userInfo;
  const { Option } = Select;
  const { TextArea } = Input;
  const provinceData = ['可不可熟成紅茶', '五十嵐',"麻古茶坊","迷客夏","清心福全"];
  const [brand,setbrand]=useState("");
  const [item,setitem]=useState("");
  const [description,setdescription]=useState("");

  const Setdescription = e=>{
    setdescription(e.target.value);
   
  }
  const Setitem = value=>{
    console.log(value);
    setitem(value);
    console.log(item);
  }
  const handleProvinceChange = value => {
    console.log(value);
    setbrand(value);
    console.log(brand);
      switch (value){
        case "可不可熟成紅茶":
          console.log("kbk");
          menuContentSet(dispatch,"kebuke");
          break;
        case "五十嵐":
          console.log("50");
          menuContentSet(dispatch,"50lan");
          break;
        case "麻古茶坊":
          console.log("macu");
          menuContentSet(dispatch,"macu");
          break;
        case "迷客夏":
          console.log("milk");
          menuContentSet(dispatch,"milkshop");
          break;
        case "清心福全":
          console.log("ching");
          menuContentSet(dispatch,"chingshin");
          break;
        
      }
    };
  const Publish=()=> {
    const resource={useremail:userInfo.email,username:userInfo.displayName,brand:brand,item:item,content:description};
    addComment(dispatch,resource);
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
            <Select className="comment-select-beverage" defaultValue="請選擇飲料" onChange={Setitem}>
              {menus.map(item => (
                <Option key={item.name}>{item.name}</Option>
              ))}
            </Select>
            <img className="comment-icon-add-img" src="./img/icon_add_picture.png"/>
          </div>
          <div className="comment-input">
            <TextArea rows={4} placeholder="寫點評論..." className="comment-input" onChange={Setdescription}/>
            <Button onClick={Publish} className="comment-bt-publish">發布</Button>
          </div> 
        </div>
      </div>
    </>
  );
}