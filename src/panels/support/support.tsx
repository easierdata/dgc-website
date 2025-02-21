import React from 'react';

import FFDW from '../../assets/logos/FFDW.png';
import UMD_GIS from '../../assets/logos/UMD_Geog.png'
import intgeocenter from '../../assets/logos/intgeocenter.png';
import Gitcoin from '../../assets/logos/Gitcoin.png'
import Astral from '../../assets/logos/astral.svg'
import Celo from '../../assets/logos/celo.png'
import ClimateCollective from '../../assets/logos/climate-collective.gif'
import Arbitrum from '../../assets/logos/arbitrum.png'
import OGC from '../../assets/logos/OGC.png'

import styles from './sponsors.module.css';


export default function Support(): JSX.Element {
    return (
        <div className="w-full mt-24 text-center">
            <h1 className='text-4xl font-bold select-none'>Collaborating Entities</h1>
            <div className='space-y-6 mt-6 mb-24'>
                <div className={styles.logos}>
                    <img src={OGC} alt="logo" className='p-6 md:p-0 mx-auto mt-3 cursor-pointer' onClick={() => window.open("https://www.ogc.org/", "_blank")} />
                    <img src={UMD_GIS} alt="logo" className='p-6 md:p-0 mx-auto mt-3 cursor-pointer' onClick={() => window.open("https://geog.umd.edu/", "_blank")} />
                    <img src={Astral} alt="logo" className='p-6 md:p-3 mx-auto mt-3 cursor-pointer' onClick={() => window.open("https://www.astral.global", "_blank")} />
                </div>
            </div>

            <h1 className='text-4xl font-bold select-none'>With support from</h1>
            <div className='space-y-6 mt-6 mb-24'>
                <div className={styles.logos}>
                    <img src={Gitcoin} alt="logo" className='p-6 md:p-0 mx-auto mt-3 cursor-pointer' onClick={() => window.open("https://gitcoin.co/", "_blank")} />
                    <img src={Celo} alt="logo" className='p-6 md:p-0 mx-auto mt-3 cursor-pointer' onClick={() => window.open("https://celo.org/", "_blank")} />
                    <img src={Arbitrum} alt="logo" className='p-6 md:p-0 mx-auto mt-3 cursor-pointer' onClick={() => window.open("https://arbitrum.io", "_blank")} />
                </div>
                <div className={styles.logos}>
                    <img src={FFDW} alt="logo" className='p-6 md:p-3 mx-auto mt-3 cursor-pointer' onClick={() => window.open("https://ffdweb.org/", "_blank")} />
                    <img src={ClimateCollective} alt="logo" className='p-6 md:p-0 mx-auto mt-3 cursor-pointer' onClick={() => window.open("https://climatecollective.org", "_blank")} />
                    <img src={intgeocenter} alt="logo" className='p-6 md:p-0 mx-auto mt-3 cursor-pointer' onClick={() => window.open("https://intgeocenter.org", "_blank")} />
                </div>
            </div>
        </div>
    )
}