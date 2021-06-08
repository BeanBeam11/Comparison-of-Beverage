import AddComment from "./AddComment";
import {useEffect, useContext} from "react";
import Cookie from "js-cookie";
import {getCommentAct} from "../actions";
import {StoreContext} from "../store"

export default function CommentList() {
   
    const {state:{commentList,comment},dispatch}= useContext(StoreContext);
    useEffect(()=>{getCommentAct(dispatch)},[commentList]);
    console.log(comment);
    
    return(
        <>
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