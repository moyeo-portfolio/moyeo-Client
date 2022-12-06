import React from 'react';
import { Link } from "react-router-dom";
import './Career.scss';

import $ from 'jquery';
import Lang from './Lang';

export default function Career ({ resize }) {
    const sub = 10;
    return (
        <div 
            className='all'
            style={{
                height: resize[1] + "px",
            }}>
            <div className='all-inner'>
                <div className='margin-auto'>
                    <div className='block'></div>
                    <div className='career-main-top'>
                        <a href='https://docs.google.com/presentation/d/1uG_IFb-OcIN_pJMaCU3vGsEdyEo1sQm6-QC2IMasfO4/edit#slide=id.g1a12f6b3be9_0_0' target='_blank'>
                            PPT로 보러가기 &gt;&gt;
                        </a>
                    </div>
                    <div className='career-main'>
                        <div className='career-main-box'>
                            <div className='career-main-box-top'>
                                <div className='career-ball'></div>
                                <div 
                                    className='career-line'
                                    style={{
                                        height: ($('.career-main-box-middle-0').height()-sub)+"px",
                                    }}>
                                </div>
                            </div>
                            <div className='career-main-box-middle career-main-box-middle-0'>
                                <div className='career-time'>2021.03~ </div>
                                <div className='career-title'>Moyeo</div>
                                <Lang getData={["React", "TypeScript", "Java", "Spring + Apache Tomcat", "PostgreSQL"]} />
                                <div className='career-content'>
                                    개인 포트폴리오 저장하는 웹사이트<br/>
                                    백엔드와 프론트엔드 간 연계 구조 함께 구성<br/>
                                </div>
                                <a href="https://github.com/choiyeju/5-_finally" target="_blank" className='career-link'>깃허브 | https://github.com/moyeo-portfolio/moyeo-client</a><br />
                            </div>
                        </div>
                        <div className='career-main-box'>
                            <div className='career-main-box-top'>
                                <div className='career-ball'></div>
                                <div 
                                    className='career-line'
                                    style={{
                                        height: ($('.career-main-box-middle-1').height()-sub)+"px",
                                    }}>
                                </div>
                            </div>
                            <div className='career-main-box-middle career-main-box-middle-1'>
                                <div className='career-time'>2021.03~ 2021.07</div>
                                <div className='career-title'>계절 추천 노래</div>
                                <Lang getData={["HTML", "CSS", "JavaScript", "JQuery"]} />
                                <div className='career-content'>
                                    계절에 따른 노래 소개해주는 서비스<br/>
                                    백엔드 제외한 전체적인 프론트엔드 개발<br/>
                                </div>
                                <a href="https://github.com/choiyeju/5-_finally" target="_blank" className='career-link'>깃허브 | https://github.com/choiyeju/5-_finally</a><br />
                                <Link to="/season/index.html" target="_blank" className='career-link'>바로가기 | <span>http://www.moyeo.org/season/index.html</span></Link>
                            </div>
                        </div>
                        <div className='career-main-box'>
                            <div className='career-main-box-top'>
                                <div className='career-ball'></div>
                                <div 
                                    className='career-line'
                                    style={{
                                        height: ($('.career-main-box-middle-2').height()-sub)+"px",
                                    }}>
                                </div>
                            </div>
                            <div className='career-main-box-middle career-main-box-middle-2'>
                                <div className='career-time'>2022.03~ 2022.07</div>
                                <Lang getData={["React", "JavaScript", "axios"]} />
                                <div className='career-title'>Pick-IT</div>
                                <div className='career-content'>
                                    프로그래밍 강의를 정리하고 추천해주는 서비스<br/>
                                    2개월 간 서버 유지 후 서비스 중단<br/>
                                    axios 이용한 REST api 연동<br/>
                                </div>
                                <a href="https://github.com/moyeo-portfolio/moyeo-pickit-client" target="_blank" className='career-link'>깃허브 | https://github.com/moyeo-portfolio/moyeo-pickit-client</a><br />
                                <Link to="/pickit/" target="_blank" className='career-link'>바로가기 | <span>http://www.moyeo.org/pickit/</span></Link>
                            </div>
                        </div>
                        <div className='career-main-box'>
                            <div className='career-main-box-top'>
                                <div className='career-ball'></div>
                                <div 
                                    className='career-line'
                                    style={{
                                        height: ($('.career-main-box-middle-3').height()-sub)+"px",
                                    }}>
                                </div>
                            </div>
                            <div className='career-main-box-middle career-main-box-middle-3'>
                                <div className='career-time'>2022.07~ 2022.10</div>
                                <Lang getData={["React", "TypeScript", "Webpack", "axios", "SCSS"]} />
                                <div className='career-title'>KCOOK</div>
                                <div className='career-content'>
                                    커스텀케이크 판매를 도와주는 서비스<br/>
                                    프록시 서버 세팅<br/>
                                    라이브러리(FullCalendar, 카카오맵)과 같은 라이브러리 사용<br/>
                                    오픈 api 사용<br/>
                                    axios 이용한 REST api 연동<br/>
                                    서버 배포<br/>
                                </div>
                                <a href="https://github.com/kcook-cake/K.Cook-Client" target="_blank" className='career-link'>깃허브 | https://github.com/kcook-cake/K.Cook-Client</a><br />
                                <Link to="/kcook/" target="_blank" className='career-link'>바로가기 | <span>http://www.moyeo.org/kcook/</span></Link>
                            </div>
                        </div>
                        <div className='career-main-box'>
                            <div className='career-main-box-top'>
                                <div className='career-ball'></div>
                                <div 
                                    className='career-line'
                                    style={{
                                        height: ($('.career-main-box-middle-4').height()-sub)+"px",
                                    }}>
                                </div>
                            </div>
                            <div className='career-main-box-middle career-main-box-middle-4'>
                                <div className='career-time'>2022.11~ 2022.11</div>
                                <Lang getData={["React", "TypeScript", "Webpack", "SCSS"]} />
                                <div className='career-title'>SantaRun</div>
                                <div className='career-content'>
                                    누구나 자신의 소원을 적을 수 있고 누구나 소원을 이뤄주는 산타가 될 수 있는 크리스마스 한정 이벤트 웹서비스<br/>
                                    webpack 설정해봄<br/>
                                    context 이용한 상태 관리<br/>
                                </div>
                                <a href="https://github.com/moyeo-portfolio/moyeo-santarun-client" target="_blank" className='career-link'>깃허브 | https://github.com/moyeo-portfolio/moyeo-santarun-client</a><br />
                                <Link to="/santarun/" target="_blank" className='career-link'>바로가기 | <span>http://www.moyeo.org/santarun/</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
