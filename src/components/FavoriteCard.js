import React, { useContext,useEffect } from "react";
import { useHistory } from "react-router-dom";
import { checkLogin, loginToFirebase, rememberLoginUser,getFavoritetAct} from '../actions';
import { StoreContext } from "../store";
import { Link } from "react-router-dom";

const FavoriteCard= () => {

  const {
    state: {
      userSignin: { userInfo },
      favorite,
      favoriteList
    },
    dispatch,
  } = useContext(StoreContext);
  const history = useHistory();
  
  const check=()=>{
    if(!checkLogin(dispatch) && !(userInfo!=null)){
        alert("請先登入");
        history.push("/login");
     }
}
useEffect(()=>{getFavoritetAct(dispatch)},[favoriteList]);
  // useEffect(() => {    
  //   if( userInfo && checkLogin(dispatch) ) history.push("/favorite");
  // }, [ userInfo ]);// eslint-disable-line react-hooks/exhaustive-deps
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
      </div>
    </div>
    {/*以下為加入最愛要排版的部分*/}
    <div className="fav-wrapper header-mt">
      {favorite.map(content =>(
        <div className="fav-box">
          <div className="fav-img-box">
            <img className="fav-img" src={content.image}/>
          </div>
          <div className="fav-text">{content.item}</div>
          <div className="fav-text fav-text-brand">{content.brand}</div>
        </div>
      ))}
    </div>
   
    </>
  );
};
export default FavoriteCard;
