import React from 'react';
import { Link } from 'react-router-dom';
import { showModal } from '../../static/js/utils.js';

export default class Avatar extends React.Component {
    render() {
        return (
            <div className='wrap-avatar'>
                <div className='user-login'>
                    <a className='avatar' onClick={showModal.bind(this, 'modal-login')}>
                        <span className='pe-7s-user'> </span>
                    </a>
                </div>
            </div>
        )
    }
}