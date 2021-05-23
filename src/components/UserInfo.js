import { useEffect, useContext } from "react";
import { UserOutlined, UserSwitchOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import Cookie from "js-cookie";
import { StoreContext } from "../store"
import {checkLogin} from "../actions"
export default function UserInfo(props) {

   const { state: { userSignin : { userInfo, remember } },dispatch } = useContext(StoreContext);
   const history = useHistory();

   const goToProfile = () => {
      if(checkLogin(dispatch)){
         history.push("/profile");
      }
      else{
         history.push("/login");
      }
   };

   useEffect(() => {
      if(remember)
        Cookie.set("userInfo", JSON.stringify(userInfo));
      else
       Cookie.removeItem("userInfo");
   }, [userInfo, remember]);

   return (
      <>
         <nav onClick={goToProfile} style={{ ...props.style }} className='header-item header-icon' >
            {userInfo
               ? <img className='header-item header-icon' src="./img/icon_user.png"/>
               : <img className='header-item header-icon' src="./img/icon_user.png"/>

            }
            <p className="cart-summary-text">
               {userInfo
                  ? `${userInfo.displayName}'s`
                  : `請登入`
               }
            </p>
         </nav>
      </>
   );
}
