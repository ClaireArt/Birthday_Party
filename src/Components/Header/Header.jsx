import React, { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Timer from '../Timer/Timer';
import { background, balloons, five, zero } from '../../Images/Images';
import Language from '../Language/Language';
import './Header.css';
import NumberFirst from '../NumberFirst/NumberFirst';
import NumberSecond from '../NumberSecond/NumberSecond';

function Header() {
    const { t, i18n } = useTranslation();
    const [headerDisplay, setHeaderDisplay] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setHeaderDisplay(true)
        }, 500)
    }, [])

    return (
        <div className='header' style={{ backgroundImage: `url(${background})` }}>
            <div className='container'>
                <Language />
                <div className='header_content'>
                    {
                        headerDisplay &&
                        <div className='birthday_box'>
                            <h1>{t('headertitle.0')}</h1>
                            <h2>{t('headertitle.1')}</h2>
                            <div className='age'>
                                {/* <NumberFirst />
                                <NumberSecond /> */}
                            </div>
                            <span>03 . 08 . 2024</span>
                            <Timer />
                            {
                                headerDisplay &&
                                <div className='balloons'><img src={balloons} alt="not found" /></div>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default memo(Header)