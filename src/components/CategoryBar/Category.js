import React from 'react';
import { Link } from 'react-router-dom';

export default class Category extends React.Component {
    render() {
        const { name, icon, link, id, selectCategory } = this.props;

        return (
            <li>
                <Link to={link} className='ic' style={{ backgroundImage: 'url(' + icon + ')' }}> {name} </Link>
                {
                    selectCategory != null && selectCategory == id &&
                    <a
                        data-toggle='collapse'
                        data-target='#z-category'
                        aria-expanded='false'
                        aria-controls='z-category'
                        className='category-btn'>
                        <span className='pe-7s-angle-down collapse-category-btn'> </span>
                    </a>
                }
                <Link to={link} className='category-name'> {name} </Link>
            </li>
        )
    }
}