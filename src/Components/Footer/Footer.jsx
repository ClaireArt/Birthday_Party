import React, { memo } from 'react';
import './Footer.css';
import Form from '../Form/Form';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t, i18n } = useTranslation()

    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer_content'>
                    <h1>{t('footertitle')}</h1>
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default memo(Footer)