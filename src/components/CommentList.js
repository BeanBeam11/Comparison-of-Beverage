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
        {check()}
            <AddComment/>
            <>
                {comment.map(content =>(
                    <div className="comment-list">
                    <p  className="comment-list-txt">{content.username}</p>
                    <p className="comment-list-txt">{content.useremail}</p>
                    <p className="comment-list-txt">{content.brand}</p>
                    <p className="comment-list-txt">{content.item}</p>
                    <p className="comment-list-txt">{content.content}</p>
                </div>
                ))}
                
            </>
        </>
    );
}