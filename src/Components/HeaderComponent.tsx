import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <ul><li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/users'}>UsersPage</Link></li>
                <li><Link to={'/posts'}>PostsPage</Link></li>
                <li><Link to={'/comment'}>CommentsPage</Link></li>
                <hr/>

            </ul>
        </div>
    );
};

export default Header;
