import React, {useEffect, useState} from 'react';
import { useParams} from "react-router-dom";
import {IPosts} from "../modules/IPosts";
import {useAppLocation} from "../hooks/useAppLocation";
import {getPostPage} from "../servise/API";
import {IUsers} from "../modules/IUsers";

const PostPage = () => {
    let {id} = useParams();
  let location = useAppLocation<IPosts>();
   let state = location.state;
    const [user, setUser] = useState<IUsers>()
    useEffect(() => {
        getPostPage(state.userId).then((value:IUsers)=>{
            setUser(value)
        })
    }, []);

    return (
        <div>
           id : {id}
            {JSON.stringify(user)}

        </div>
    );
};

export default PostPage;