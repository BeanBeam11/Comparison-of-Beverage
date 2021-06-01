import AddComment from "./AddComment";
import {useEffect, useContext} from "react";
import Cookie from "js-cookie";
import {StoreContext} from "../store"

export default function CommentList() {
    const {state:{commentList},dispatch}= useContext(StoreContext);
    console.log(commentList);
    
    return(
        <>
            <AddComment/>
            <div className="comment-list">
                <p  className="comment-list-txt">{commentList.users}</p>
                <p className="comment-list-txt">{commentList.shop}</p>
                <p className="comment-list-txt">{commentList.product}</p>
                <p className="comment-list-txt">{commentList.description}</p>
            </div>
            <div className="comment-list">
                <p  className="comment-list-txt">{commentList.users}</p>
                <p className="comment-list-txt">{commentList.shop}</p>
                <p className="comment-list-txt">{commentList.product}</p>
                <p className="comment-list-txt">{commentList.description}</p>
            </div>
            <div className="comment-list">
                <p  className="comment-list-txt">{commentList.users}</p>
                <p className="comment-list-txt">{commentList.shop}</p>
                <p className="comment-list-txt">{commentList.product}</p>
                <p className="comment-list-txt">{commentList.description}</p>
            </div>
        </>
    );
}