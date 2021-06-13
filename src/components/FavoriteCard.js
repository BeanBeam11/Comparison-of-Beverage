import React, { useContext,useEffect } from "react";
import { useHistory } from "react-router-dom";
import { checkLogin, loginToFirebase, rememberLoginUser } from '../actions';
import { StoreContext } from "../store";
import { Link } from "react-router-dom";

const FavoriteCard= () => {

  const {
    state: {
      userSignin: { userInfo },
    },
    dispatch,
  } = useContext(StoreContext);
  const history = useHistory();

    const { displayName, email } = userInfo;
    useEffect(() => {    
        if( userInfo && checkLogin(dispatch) ) history.push("/favorite");
      }, [ userInfo ]);// eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
    <div className="profile-nav-wrapper header-mt">
      <div className="profile-img-box">
        <img className="profile-img" src="./img/user_note.png"/>
      </div>
      <div className="profile-name">{displayName}</div>
      <div className="profile-nav">
        <Link to='/profile' className="profile-nav-item" >
          個人資料
        </Link>
        <Link to='/favorite' className="profile-nav-item" >
          收藏清單
        </Link>
      </div>
    </div>
   
    </>
  );
};
export default FavoriteCard;
