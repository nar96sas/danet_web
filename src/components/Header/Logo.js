import React from 'react';
import { Link } from 'react-router-dom';

export default class Logo extends React.Component {
    render() {
        return (
            <Link className='logo-danet' to={'/'}>
                Logo
            </Link>
        )
    }
}