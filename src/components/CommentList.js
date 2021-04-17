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
            <div class="comment-list">
                <p  class="comment-list-txt">{commentList.users}</p>
                <p class="comment-list-txt">{commentList.shop}</p>
                <p class="comment-list-txt">{commentList.product}</p>
                <p class="comment-list-txt">{commentList.description}</p>
            </div>
            <div class="comment-list">
                <p  class="comment-list-txt">{commentList.users}</p>
                <p class="comment-list-txt">{commentList.shop}</p>
                <p class="comment-list-txt">{commentList.product}</p>
                <p class="comment-list-txt">{commentList.description}</p>
            </div>
            <div class="comment-list">
                <p  class="comment-list-txt">{commentList.users}</p>
                <p class="comment-list-txt">{commentList.shop}</p>
                <p class="comment-list-txt">{commentList.product}</p>
                <p class="comment-list-txt">{commentList.description}</p>
            </div>
        </>
    );
}