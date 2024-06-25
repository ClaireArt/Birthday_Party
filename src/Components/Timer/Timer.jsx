import React, { memo, useEffect, useState } from 'react';
import './Timer.css';
import { useTranslation } from 'react-i18next';

function Timer() {
    const [sec, setSec] = useState(null);
    const [min, setMin] = useState(null);
    const [hour, setHour] = useState(null);
    const [day, setDay] = useState(null);
    const { t, i18n } = useTranslation()

    useEffect(() => {
        const targetDate = new Date(2024, 4, 31).getTime();

        const updateTimer = () => {
            const now = new Date().getTime();
            const remainingTime = targetDate - now;

            if (remainingTime < 0) {
                setSec(0);
                setMin(0);
                setHour(0);
                setDay(0);
                return;
            }

            const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            setDay(days);
            setHour(hours);
            setMin(minutes);
            setSec(seconds);
        };

        const timer = setInterval(updateTimer, 1000);

        // Initialize the timer immediately
        updateTimer();

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='timer'>
            <h1>{t('timer.0')}</h1>
            <div className='timer_content'>
                <div>
                    <span>{day}</span>
                    <span>{t('timer.1')}</span>
                </div>
                <div>
                    <span>{hour}</span>
                    <span>{t('timer.2')}</span>
                </div>
                <div>
                    <span>{min}</span>
                    <span>{t('timer.3')}</span>
                </div>
                <div>
                    <span>{sec}</span>
                    <span>{t('timer.4')}</span>
                </div>
            </div>
        </div>
    );
}

export default memo(Timer);