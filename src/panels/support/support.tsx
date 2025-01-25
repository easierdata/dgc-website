import React from 'react';
import FFDW from '../../assets/logos/FFDW.png';
import UMD_GIS from '../../assets/logos/UMD_Geog.png'
import intgeocenter from '../../assets/logos/intgeocenter.png';
import styles from './sponsors.module.css';

export default function Support(): JSX.Element {
    return (
        <div className="w-full mt-24 text-center">
            <h1 className='text-2xl font-bold select-none'>With support from</h1>
            <div>
                <div className={styles.logos}>
                    <img src={intgeocenter} alt="logo" className='p-6 md:p-0 mx-auto mt-3 cursor-pointer' onClick={() => window.open("https://intgeocenter.org", "_blank")} />
                    <img src={UMD_GIS} alt="logo" className='p-6 md:p-0 mx-auto mt-3 cursor-pointer' onClick={() => window.open("https://geog.umd.edu/", "_blank")} />
                    <img src={FFDW} alt="logo" className='p-6 md:p-3 mx-auto mt-3 cursor-pointer' onClick={() => window.open("https://ffdweb.org/", "_blank")} />
                </div>
            </div>
        </div>
    )
}