import React from 'react';
import '../trendingAssets/trendingAsset.css'
import vector from '../images/Vector.png'
import bitcoin from '../images/Bitcoin.png'
import sol from '../images/Solana.png'
import eth from '../images/Ethereum.png'
import bin from '../images/Binance Coin.png'
import CryptoAssets from './CryptoAssets';
import shib from '../images/SHIBA INU.png'

interface AssetData {
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
}

const TrendingAssets = () => {

    const assetData: AssetData[] = [
        {
            iconImage: bitcoin,
            iconName: 'BitCoin (BTC)',
            iconPrice1: '$31,812.80',
            iconQty: '+10%',
            price: 'Price',
            iconPrice2: '$60,000',
            tvl: 'TVL',
            groupIcon1: sol,
            groupIcon2: eth,
            groupIcon3: bin,
            pairs: 'Popular pairs',
        },
        {
            iconImage: sol,
            iconName: 'Solana (SOL)',
            iconPrice1: '$32.83',
            iconQty: '-12%',
            price: 'Price',
            iconPrice2: '$60,000',
            tvl: 'TVL',
            groupIcon1: bitcoin,
            groupIcon2: eth,
            groupIcon3: bin,
            pairs: 'Popular pairs',
        },
        {
            iconImage: eth,
            iconName: 'Ethereum (ETH)',
            iconPrice1: '$1,466.45',
            iconQty: '-11.93%',
            price: 'Price',
            iconPrice2: '$60,000',
            tvl: 'TVL',
            groupIcon1: sol,
            groupIcon2: bitcoin,
            groupIcon3: bin,
            pairs: 'Popular pairs',
        },
        {
            iconImage: bin,
            iconName: 'Binance USD (BUSD)',
            iconPrice1: '$31,812.00',
            iconQty: '+0.26%%',
            price: 'Price',
            iconPrice2: '$60,000',
            tvl: 'TVL',
            groupIcon1: sol,
            groupIcon2: eth,
            groupIcon3: bin,
            pairs: 'Popular pairs',
        },
        {
            iconImage: shib,
            iconName: 'Shiba Inu (SHIB)',
            iconPrice1: '$0.00000001948',
            iconQty: '-8.1%',
            price: 'Price',
            iconPrice2: '$60,000',
            tvl: 'TVL',
            groupIcon1: sol,
            groupIcon2: eth,
            groupIcon3: bin,
            pairs: 'Popular pairs',
        }
    ]

    return (
        <div className='container'>
            <div className='content'>
                <div className='header flex text-white mt-24 mb-24'>
                    <img src={vector} alt='vector' />
                    <p>Trending Assets</p>
                </div>
                <div className='grid grid-cols-5 gap-8'>
                    {assetData.map((asset, index) => (
                        <CryptoAssets
                            key={index}
                            iconImage={asset.iconImage}
                            iconName={asset.iconName}
                            iconPrice1={asset.iconPrice1}
                            iconQty={asset.iconQty}
                            price={asset.price}
                            iconPrice2={asset.iconPrice2}
                            tvl={asset.tvl}
                            groupIcon1={asset.groupIcon1}
                            groupIcon2={asset.groupIcon2}
                            groupIcon3={asset.groupIcon3}
                            pairs={asset.pairs}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TrendingAssets;

