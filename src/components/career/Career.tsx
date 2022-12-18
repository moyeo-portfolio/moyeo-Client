import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Career.scss';

import { backendUrl } from '../../utils/backendUrl';
import { ResizeINF } from '../../utils/interfaceAll';
import { CareerINF } from './CareerINF';
import CareerCard from './CareerCard';


export default function Career ({ resize }: ResizeINF) {
    const [careerData, setCareerData] = useState<CareerINF[]>([]);
    useEffect(()=>{
        let isComponentMounted = true;
        axios({
            url: (backendUrl+'/moyeo/career'),
            method: 'GET',
        }).then((res)=>{
            if (res) {
                if (isComponentMounted) {
                    setCareerData(res.data.data);
                }
            }
        }).catch((err)=>{
            console.log(err);
        })

        return () => {
            isComponentMounted = false
        }
    },[]);
    
    return (
        <div 
            className='all'
            style={{
                height: resize[1] + "px",
            }}>
            <div className='all-inner'>
                <div className='margin-auto'>
                    <div className='block'></div>
                    <div className='career-main'>
                        <div className='career-main-inner'>
                            <div className='career-main-top'>
                                <a href='https://docs.google.com/presentation/d/1uG_IFb-OcIN_pJMaCU3vGsEdyEo1sQm6-QC2IMasfO4/edit#slide=id.g1a12f6b3be9_0_0' target='_blank'>
                                    PPT로 보러가기 &gt;&gt;
                                </a>
                            </div>
                            <CareerCard getData={careerData}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
