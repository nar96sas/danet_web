import React from 'react';
import FormSignup from './FormSignup.js';

export default class Signup extends React.Component {
    render() {
        return (
            <div className='signup-modal'>
                <div className='title-bar group'>
                    <div className='head-title-signup'> Đăng ký </div>
                    <ul>
                        <li id='signup-phone'> Số điện thoại </li>
                        <li id='signup-email'> Email </li>
                    </ul>
                </div>
                <FormSignup />
            </div>
        )
    }
}