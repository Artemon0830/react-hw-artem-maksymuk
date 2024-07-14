import React from 'react';
import {Outlet} from "react-router-dom";
import MenuComponent from "../Components/MenuComponent";
import styles from '../СSS-project/Project.module.css'

const MainLayout = () => {
    return (
        <div >
            <p className={styles.page} >Main Layout</p>
            <MenuComponent/>
            <Outlet/>

        </div>
    );
};

export default MainLayout;