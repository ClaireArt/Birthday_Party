import { Formik } from 'formik';
import React, { memo } from 'react';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import './Form.css';

function Form() {
    const { t, i18n } = useTranslation();

    const validationSchema = yup.object().shape({
        name: yup.string().required(t('form.8')),
        lastName: yup.string().required(t('form.8')),
        radio_group: yup.string().required(t('form.8')),
    })

    const handleRegister = (e, handleSubmit, isValid) => {
        e.preventDefault();
        handleSubmit()
    }

    return (
        <div className='form'>
            <Formik
                initialValues={{
                    name: '',
                    lastName: '',
                    radio_group: '',
                }}

                onSubmit={(values, { resetForm }) => {

                    resetForm()
                }}

                validateOnBlur

                validationSchema={validationSchema}>

                {
                    ({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                        <form className="register" onSubmit={(e) => handleRegister(e, handleSubmit, isValid)}>
                            <div className='full_name_div'>
                                <span>{t('form.0')}</span>
                                <div className="name_inp">
                                    <input type="text" name="name" placeholder={t('form.1')} onChange={handleChange} onBlur={handleBlur} autoComplete='off' />
                                    {touched.name && errors.name && <p className="error">{errors.name}</p>}
                                </div>
                                <div className="lastName_inp">
                                    <input type="text" name="lastName" placeholder={t('form.2')} onChange={handleChange} onBlur={handleBlur} autoComplete='off' />
                                    {touched.lastName && errors.lastName && <p className="error">{errors.lastName}</p>}
                                </div>
                                <textarea placeholder={t('form.3')}></textarea>
                            </div>
                            <div className='radio_inp'>
                                <span> {t('form.4')}</span>
                                <div>
                                    <input type='radio' id="rdo1" className="radio-input" name="radio_group" onChange={handleChange} onBlur={handleBlur} />
                                    <label htmlFor="rdo1" className="radio-label" >
                                        <span className="radio-border"></span>
                                        {t('form.5')}
                                    </label>
                                </div>
                                <div>
                                    <input type='radio' id="rdo2" className="radio-input" name="radio_group" onChange={handleChange} onBlur={handleBlur} />
                                    <label htmlFor="rdo2" className="radio-label" >
                                        <span className="radio-border"></span>
                                        {t('form.6')}
                                    </label>
                                </div>
                                {touched.radio_group && errors.radio_group && <p className="error">{errors.radio_group}</p>}
                            </div>
                            <button type='submit' className='register_btn'>{t('form.7')}</button>
                        </form>
                    )
                }
            </Formik>
        </div>
    )
}

export default memo(Form)