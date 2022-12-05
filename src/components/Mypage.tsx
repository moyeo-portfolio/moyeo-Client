import React from 'react';
import './Mypage.scss';

const profileImg = require('../assets/choiyeju.png');

export default function Mypage ({ resize }) {
    return (
        <div 
            className='all'
            style={{
                height: resize[1] + "px",
            }}>
                <div className='all-inner'>
                    <div className='margin-auto'>
                        <div className='block'></div>
                        <div className='mypage-main'>
                            <div className='mypage-main-top'>
                                Yeju's Portfolio
                                {/* <div className='mypage-main-top-two'>Introduction</div> */}
                            </div>
                            <div className='mypage-main-middle'>
                                <div className='mypage-main-left'>
                                    <div className='mypage-main-left-img'>
                                        <img src={profileImg} />
                                    </div>
                                </div>
                                <div className='mypage-main-right'>
                                    <div className='mypage-main-right-text'>이름 | 최예주(Yeju Choi)</div>
                                    <div className='mypage-main-right-text'>이메일 | yeju1019@gmail.com</div>
                                    <div className='mypage-main-right-text'>깃허브 | <a href='https://github.com/choiyeju' target="_blank">https://github.com/choiyeju</a></div>
                                    <div className='mypage-main-right-text'>블로그 | <a href='https://velog.io/@cdpwn' target="_blank">https://velog.io/@cdpwn</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}
