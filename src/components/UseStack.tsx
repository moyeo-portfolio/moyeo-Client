import React from 'react';
import './UseStack.scss';

export default function UseStack ({ resize }) {
    return (
        <div 
            className='all'
            style={{
                height: resize[1] + "px",
            }}>
            <div className='all-inner'>
                <div className='margin-auto'>
                    <div className='block'></div>
                    <div className='usestack-main'>
                        <div className='usestack-main-top'>프론트엔드</div>
                        <div className='usestack-main-middle'>
                            <div className='usestack-lang'>
                                <div className='usestack-title'>React</div><br/>
                                제가 프론트엔드 개발할 때 주로 사용하는 라이브러리 입니다.
                                가장 주력 언어이고 이를 이용한 프로젝트를 많이 참여해왔습니다.
                            </div>
                            <div className='usestack-lang'>
                                <div className='usestack-title'>TypeScript</div><br/>
                            </div>
                            <div className='usestack-lang'>
                                <div className='usestack-title'>HTML/CSS</div><br/>
                            </div>
                            <div className='usestack-lang'>
                                <div className='usestack-title'>JavaScript</div><br/>
                            </div>
                            <div className='usestack-lang'>
                                <div className='usestack-title'>JQuery</div><br/>
                            </div>
                        </div>
                        <div className='usestack-main-top'>백엔드</div>
                        <div className='usestack-main-middle'>
                            <div className='usestack-lang'>
                                <div className='usestack-title'>Java</div><br/>
                            </div>
                            <div className='usestack-lang'>
                                <div className='usestack-title'>Spring + Apache Tomcat</div><br/>
                            </div>
                            <div className='usestack-lang'>
                                <div className='usestack-title'>PostgreSQL</div><br/>
                            </div>
                        </div>
                        <div className='usestack-main-top'>그 외에 언어들</div>
                        <div className='usestack-main-middle'>
                            <div className='usestack-lang'>
                                <div className='usestack-title'>Python</div><br/>
                                코딩테스트 위해 사용하는 언어입니다.
                            </div>
                            {/* <div className='usestack-lang'>
                                <div className='usestack-title'>OpenGL</div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
