import React from 'react';
import './Header.scss';

export default function Header ({ page, setPage }) {
    return (
        <div className='header'>
            <div className='header-box' onClick={()=>setPage(0)}>홈</div>
            <div className='header-box' onClick={()=>setPage(1)}>소개</div>
            <div className='header-box' onClick={()=>setPage(2)}>기술 스택</div>
            <div className='header-box' onClick={()=>setPage(3)}>커리어</div>
        </div>
    );
}