import React from 'react';
import {Link} from "react-router-dom";
import styles from '../css-Menu/Menu.module.css'

const MenuComponent = () => {
    return (
        <div className={styles.menu}>
                <p><Link to={''}>Menu</Link></p>
                <p><Link to={'users'}>Users page</Link></p>
                <p><Link to={'posts'}>Posts page</Link></p>
                <p><Link to={'comments'}>Comments page</Link></p>
                <p><Link to={'no click'}>No click</Link></p>

        </div>
    );
};

export default MenuComponent;