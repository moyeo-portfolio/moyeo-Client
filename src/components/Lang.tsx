import React from 'react';

export default function Lang ({ getData }) {
    return (
        <div className='flex'>
        {getData.map((data: string, idx: number)=> {
            return (
                <div key={idx}>
                    <div className={'career-lang career-lang-box-'+idx}>{data}</div>
                </div>
            );
        })}
        </div>
    );
}