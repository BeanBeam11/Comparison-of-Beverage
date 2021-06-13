import AddComment from "./AddComment";
import {useEffect, useContext} from "react";
import Cookie from "js-cookie";
import {getCommentAct,checkLogin} from "../actions";
import { useHistory } from 'react-router-dom';
import {StoreContext} from "../store"

export default function CommentList() {
    const history = useHistory();
    const {state:{commentList,comment,userInfo},dispatch}= useContext(StoreContext);
    
    console.log(comment);
    const check=()=>{
        if(!checkLogin(dispatch) && !(userInfo!=null)){
            alert("請先登入");
            history.push("/login");
         }
    }
    

    useEffect(()=>{getCommentAct(dispatch)},[commentList]);
    return(
        <>
        {/* {check()}  */}
            <AddComment/>
            <>
                <div className="comment-list-wrapper">
                    {comment.map(content =>(
                        <div className="comment-list">
                            <div className="comment-avatar-box">
                                <img className="comment-avatar" src="./img/user_note.png"/>
                            </div>
                            <div className="comment-info">
                                <div className="comment-user-info">
                                    <span className="comment-user-name">{content.username}</span>
                                    <span className="comment-user-email">{content.useremail}</span>
                                    {/*記得改time的css 下面一行*/}
                                    <span className="comment-user-email">{content.time}</span> 
                                </div>
                                <div className="comment-beverage">
                                    <span className="">{content.brand}</span>
                                    <span className=""> -- {content.item}</span>
                                </div>
                                <div className="comment-list-txt">{content.content}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        </>
    );
}