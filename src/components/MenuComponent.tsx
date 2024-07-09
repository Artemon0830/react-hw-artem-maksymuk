import React from 'react';
import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={''}>Menu</Link></li>
                <li><Link to={'users'}>Users page</Link></li>
                <li><Link to={'posts'}>Posts page</Link></li>
                <li><Link to={'comments'}>Comments page</Link></li>
                <li><Link to={'no click'}>No click</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;