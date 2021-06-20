import React, { useContext,useEffect,useState } from "react";
import { useHistory } from "react-router-dom";
import { checkLogin,getFavoritetAct,removeFavoriteAct,getSingleFavoriteAct} from '../actions';
import { StoreContext } from "../store";
import { Button,Modal} from "antd";
import { Link } from "react-router-dom";

const FavoriteCard= () => {

  const {
    state: {
      userSignin: { userInfo },
      favorite,
      favoriteList,
      singlefavorite
    },
    dispatch,
  } = useContext(StoreContext);
  const history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const check=()=>{
    if(/*!checkLogin(dispatch) && !*/(userInfo==null)){
      alert("請先登入");
      history.push("/login");
      console.log("nologin")
    }
    else{
      console.log("login")
    }
  } 
  const remove=(item,id,email)=>{
    const removeres={
      item: item,
      id:id,
      email:email
    };
    removeFavoriteAct(dispatch, removeres);
  }
useEffect(()=>{getFavoritetAct(dispatch)},[favoriteList]);

const showModal = (item) => {
    getSingleFavoriteAct(dispatch,item);
    console.log(singlefavorite);
    setIsModalVisible(true);
  };

const handleOk = () => {
    setIsModalVisible(false);
    console.log("change"+isModalVisible)
  };

const handleCancel = () => {
    setIsModalVisible(false);
    console.log("change"+isModalVisible)
  };
useEffect(()=>{console.log("effect"+isModalVisible)},[isModalVisible]);
  return (
    <>
    {check()}
    <div className="fav-nav-wrapper header-mt">
      <div className="profile-img-box">
        <img className="profile-img" src="./img/user_note.png"/>
      </div>
      <div className="profile-name">{userInfo.displayName}</div>
      <div className="profile-nav">
        <Link to='/profile' className="profile-nav-item" >
          個人資料
        </Link>
        <Link to='/favorite' className="profile-nav-item" >
          收藏清單
        </Link>
        <Modal className="fav-modal" title="詳細資訊" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <div className="fav-img-box">
            <img  className="fav-img" src={singlefavorite.image}/>
          </div>
          <div className="fav-modal-info">
            <div>名稱：{singlefavorite.item}</div>
            <div>店家：{singlefavorite.brand}</div>
            <div>價格：{singlefavorite.price}</div>
            <div>評分：{singlefavorite.rate}</div>
            <div>介紹：...</div>
            <div>熱量：...</div>
          </div>
        </Modal>
      </div>
    </div>
    <div className="fav-wrapper header-mt">
      {favorite.map(content =>(
        <div className="fav-box">
          <Button className="fav-box-remove" onClick={()=>remove(content.item,content.id,content.email)}>x</Button>
          <div  onClick={()=>showModal(content.item)}>
            <div className="fav-img-box">
              <img  className="fav-img" src={content.image}/>
            </div>
            <div className="fav-text">{content.item}</div>
            <div className="fav-text fav-text-brand">{content.brand}</div>
            </div>
          </div>
      ))}
       
    </div>
    
    </>
  );
};
export default FavoriteCard;
