import React, {FC} from 'react';
import styles from './error.module.css'
const CustomErrorLayout:FC = () => {
    return (
        <div>
            <p className={styles.errorPage}>ERROR</p>
        </div>
    );
};

export default CustomErrorLayout;