import React from 'react';
import CustomModal from '../Modal/Modal.js';
import FormSignin from './FormSignin.js';
import { closeModal } from '../../static/js/utils.js';

export default class Signin extends React.Component {
    render() {
        return (
            <CustomModal id='login' triggerId='modal-login' label='Đăng nhập'>
                <div className='modal-body'>
                    <div className='body-inside popup-login'>
                        <a className='close'><span onClick={closeModal} className='pe-7s-close'> </span> </a>
                        <p className='lstitle-popup'> Đăng nhập </p>
                        <FormSignin />
                    </div>
                </div>
            </CustomModal>
        )
    }
}