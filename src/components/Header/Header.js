import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.js';
import ButtonSearch from './ButtonSearch.js';
import Avatar from './Avatar.js';
import BoxSearch from './BoxSearch.js';

export default class Header extends React.Component {
    render() {
        return (
            <div className='wrap-header'>
                <div className='box-header'>
                    <Logo />
                    <ButtonSearch />
                    <Avatar />
                    {/* <div className='main-menu'> </div> */}
                </div>
                <BoxSearch />
            </div>
        )
    }
}