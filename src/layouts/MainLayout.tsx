import React from 'react';
import MenuComponent from "../components/MenuComponent";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
          <h1>MainLayout</h1>
            <MenuComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;