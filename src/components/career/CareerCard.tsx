import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Career.scss';

import $ from 'jquery';
import Lang from './Lang';

export default function CareerCard ({getData}) {  

    return (
        <>
        {getData.map((data, idx: number)=> {
            return (
                <div key={idx} className='career-main-box'>
                    <div className='career-main-box-top'>
                        <div className='career-ball'></div>
                        <div className='career-line'></div>
                    </div>
                    <div className='career-main-box-middle career-main-box-middle-0'>
                        <div className='career-time'>{data.date}</div>
                        <div className='career-title'>{data.title}</div>
                        <Lang getData={data.langs} />
                        <div className='career-content'>
                            {data.contents.map((data2)=>{
                                return (
                                    <div>
                                        ○ {data2}
                                    </div>
                                );
                            })}
                        </div>
                        <a href={data.gitlink} target="_blank" className='career-link'>깃허브 | {data.gitlink}</a>
                        <Link to={data.sitelink} target="_blank" className='career-link'>바로가기 | <span>{"http://www.moyeo.org"+data.sitelink}</span></Link>
                    </div>
                </div>
            );
        })}
        </>
    );
}
