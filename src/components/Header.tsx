import React from 'react';
import classNames from 'classnames';
import './Header.scss';

import { usePage } from '../store/pageNum';

export default function Header () {
    const store = usePage();

    return (
        <div className='header'>
            <div 
                className={classNames('header-box',{
                    'header-box-action': store.page === 0,
                })}
                onClick={()=>store.setPage(0)}>
                홈
            </div>
            <div 
                className={classNames('header-box',{
                    'header-box-action': store.page === 1,
                })}
                onClick={()=>store.setPage(1)}>
                소개
            </div>
            <div 
                className={classNames('header-box',{
                    'header-box-action': store.page === 2,
                })}
                onClick={()=>store.setPage(2)}>
                기술 스택
            </div>
            <div 
                className={classNames('header-box',{
                    'header-box-action': store.page === 3,
                })}
                onClick={()=>store.setPage(3)}>
                커리어
            </div>
        </div>
    );
}