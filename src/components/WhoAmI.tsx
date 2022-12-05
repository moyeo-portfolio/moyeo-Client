import React from 'react';
import './WhoAmI.scss';

export default function WhoAmI ({ resize }) {
    return (
        <div 
            className='all'
            style={{
                height: resize[1] + "px",
            }}>
            <div className='all-inner'>
                <div className='margin-auto'>
                    <div className='block'></div>
                    <div className='whoami-main'>
                        <div className='whoami-main-middle'>
                            <div className='whoami-main-middle-text'>○ 저는 숭실대학교 IT대학 글로벌미디어학부에 재학중이며 졸업예정자 입니다.</div>
                            <div className='whoami-main-middle-text'>○ 프로젝트에 참여해 웹/앱 만드는 것을 좋아합니다.</div>
                            <div className='whoami-main-middle-text'>○ 맡게 된 프로젝트는 책임감 있게 참여하고 마지막까지 최선을 다하기에 팀원들에게 인정받아왔습니다.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
