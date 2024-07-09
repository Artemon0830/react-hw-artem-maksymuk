import React from 'react';
import MenuComponent from "../components/MenuComponent";
import {Outlet} from "react-router-dom";
import styles from '../css-Menu/Menu.module.css'

const MainLayout = () => {
    return (
        <div >
          <h1 className={styles.page} >MainLayout</h1>
            <MenuComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;