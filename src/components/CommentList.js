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
        
        </>
    );
}