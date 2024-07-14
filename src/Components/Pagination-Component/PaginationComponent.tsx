import React from 'react';
import {useSearchParams} from "react-router-dom";
import styles from '../../СSS-project/Project.module.css'

export const PaginationComponent = () => {
    let [searchParams,setSearchParams] = useSearchParams({page:'1'});
    return (
        <div>
            <button className={styles.buttonPagination} onClick={()=>{
                let pagePrev = +(searchParams.get('page') || '1');
                setSearchParams({page: (pagePrev-1).toString()})
                if((pagePrev-1) < 1){
                    setSearchParams({page: '1'})
                }

            }}>prev</button>
            <button className={styles.buttonPagination} onClick={()=>{
                let pageNext = +(searchParams.get('page') || '1');
                setSearchParams({page: (pageNext+1).toString()})
            }}>next</button>{

        }

        </div>
    );
};

export default PaginationComponent;