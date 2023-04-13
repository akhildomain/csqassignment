import React, { useState } from 'react';
import '../trendingAssets/trendingAsset.css'

const CryptoAssets = ({
    iconImage,
    iconName,
    iconPrice1,
    iconQty,
    price,
    iconPrice2,
    tvl,
    groupIcon1,
    groupIcon2,
    groupIcon3,
    pairs
}: {
    iconImage: string;
    iconName: string;
    iconPrice1: string;
    iconQty: string;
    price: string;
    iconPrice2: string;
    tvl: string;
    groupIcon1: string;
    groupIcon2: string;
    groupIcon3: string;
    pairs: string;
}) => {

    return (
        <div className='box px-6'>
            <div className='parent-circle' >
                <div className='circle p-4'>
                    <img src={iconImage} className='w-7 h-7' alt='' />
                </div>
            </div>
            <div className='box-content text-center justify-center '>
                <p className='pcolor text-center mb-2'>{iconName}</p>
                <div className='prop-value text-white text-center'>
                    {iconPrice1} <span className={iconQty.includes('-') ? 'market-down' : 'market-up'} >{iconQty}</span>
                </div>
                <p className='pcolor text-center mb-2'>{price}</p>
                <div className='prop-value text-white text-center mb-2'>
                    {iconPrice2}
                </div>
                <p className='pcolor text-center mb-2'>{tvl}</p>
                <div className='prop-value flex justify-evenly w-24 m-auto mb-2'>
                    <img src={groupIcon1} className='w-3 h-3' alt='' />
                    <img src={groupIcon2} className='w-3 h-3' alt='' />
                    <img src={groupIcon3} className='w-3 h-3' alt='' />
                </div>
                <p className='pcolor text-center mb-2'>{pairs}</p>
            </div>
        </div>
    )
}

export default CryptoAssets;