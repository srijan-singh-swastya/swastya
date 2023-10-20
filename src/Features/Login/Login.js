import React from 'react';
import styles from './Login.module.css';
import LoginMain from '../../AllPages/Login/LoginMain/LoginMain';
import LoginOtp from '../../AllPages/Login/LoginOtp/LoginOtp';
import { Route, Routes } from 'react-router-dom';

const Login = () => {
    return (
        <div className={styles.loginLayout}>
            <div className={styles.loginLayoutTop}>Swastya.ai</div>
            <div className={styles.loginLayoutMid}>
                <Routes>
                    <Route path="/" element={<LoginMain />} />
                    <Route path="loginOtp" element={<LoginOtp />} />
                </Routes>
            </div>
        </div>
    );
};

export default Login;
