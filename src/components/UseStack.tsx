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
                        <div className='usestack-main-top'>
                            프론트엔드<br/>
                            사용 툴 | visual studio code
                        </div>
                        <div className='usestack-main-middle'>
                            <div className='usestack-lang'>
                                <div className='usestack-title'>React</div><br/>
                                제가 프론트엔드 개발할 때 주로 사용하는 라이브러리 입니다.
                                가장 주력 언어이고 이를 이용한 프로젝트를 많이 참여해왔습니다.
                            </div>
                            <div className='usestack-lang'>
                                <div className='usestack-title'>TypeScript</div><br/>
                                새 프로젝트 만들 때 세팅할 수 있고 리액트 이용하는 내내 같이 사용합니다.
                            </div>
                            <div className='usestack-lang'>
                                <div className='usestack-title'>Webpack</div><br/>
                                기본적인 세팅만 하는 정도 입니다.
                            </div>
                            <div className='usestack-lang'>
                                <div className='usestack-title'>SCSS(SASS)</div><br/>
                                리액트 이용 시 퍼블리싱할 때 사용합니다.
                            </div>
                            <div className='usestack-lang'>
                                <div className='usestack-title'>HTML/CSS</div><br/>
                                프론트엔드 개발하는데 기본적으로 사용합니다.
                            </div>
                            <div className='usestack-lang'>
                                <div className='usestack-title'>JavaScript</div><br/>
                                기본적인 과제 정도는 자바스크립트로 풀 수 있는 정도 입니다.
                            </div>
                            <div className='usestack-lang'>
                                <div className='usestack-title'>JQuery</div><br/>
                                바닐라JS로 과제할 때 사용하긴 하지만 리액트 이용할 땐 사용하지 않습니다.
                                기존의 코드를 리액트로 바꿔야 할 때 JQuery에 대한 이해가 필요한데, 기존 JQuery 코드를 보고 이해하는 수준입니다.
                            </div>
                        </div>
                        <div className='usestack-main-top'>
                            백엔드<br/>
                            사용 툴 | 이클립스, 인텔리제이, 디비버
                        </div>
                        <div className='usestack-main-middle'>
                            <div className='usestack-lang'>
                                <div className='usestack-title'>Java</div><br/>
                                백, 프론트 간 연계 구조 작업 시 사용했습니다.
                            </div>
                            <div className='usestack-lang'>
                                <div className='usestack-title'>Spring + Apache Tomcat</div><br/>
                                백엔드 환경 세팅 시 사용한 프레임워크 입니다.
                            </div>
                            <div className='usestack-lang'>
                                <div className='usestack-title'>PostgreSQL</div><br/>
                                DB 다룰 때 사용했습니다.
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
