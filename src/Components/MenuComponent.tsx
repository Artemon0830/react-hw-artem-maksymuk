import React from 'react';
import {Link} from "react-router-dom";
import styles from '../СSS-project/Project.module.css'

const MenuComponent = () => {
    return (
        <div className={styles.menu}>
            <p><Link to={''}>Menu</Link></p>
            <p><Link to={'users'}>Users</Link></p>
            <p><Link to={'posts'}>Posts</Link></p>
            <p><Link to={'comments'}>Comments</Link></p>
            <p><Link to={'click'}>Other</Link></p>
        </div>
    );
};

export default MenuComponent;