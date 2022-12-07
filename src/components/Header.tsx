import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './Header.scss';

import { useBase } from '../store/baseStore';

export default function Header ({ resize }) {
    const store = useBase();
    const [mobileShow, setMobileShow] = useState(true);

    useEffect(()=>{
    },[]);

    return (
        <>
            <input 
                type="checkbox" 
                className="open-sidebar-menu" 
                id="open-sidebar-menu" 
                onClick={()=> {
                    if (mobileShow)
                        setMobileShow(false)
                    else
                        setMobileShow(true)
                }}/>
            <label htmlFor="open-sidebar-menu" className="sidebar-icon-toggle">
                <div className="spinner diagonal part-1"></div>
                <div className="spinner horizontal"></div>
                <div className="spinner diagonal part-2"></div>
            </label>
            <div className={classNames('header',{
                    'header-show': mobileShow && resize[0] <= 767,
                })}>
                <div className='header-main'>
                    <hr className='header-hr' />
                    <div 
                        className={classNames('header-box',{
                            'header-box-action': store.page === 0,
                        })}
                        onClick={()=>store.setPage(0)}>
                        홈
                    </div>
                    <hr className='header-hr' />
                    <div 
                        className={classNames('header-box',{
                            'header-box-action': store.page === 1,
                        })}
                        onClick={()=>store.setPage(1)}>
                        소개
                    </div>
                    <hr className='header-hr' />
                    <div 
                        className={classNames('header-box',{
                            'header-box-action': store.page === 2,
                        })}
                        onClick={()=>store.setPage(2)}>
                        기술 스택
                    </div>
                    <hr className='header-hr' />
                    <div 
                        className={classNames('header-box',{
                            'header-box-action': store.page === 3,
                        })}
                        onClick={()=>store.setPage(3)}>
                        커리어
                    </div>
                    <hr className='header-hr' />
                </div>
            </div>
        </>
    );
}