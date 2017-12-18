import React from 'react';
import { Link } from 'react-router-dom';
import Category from './Category.js';
import categories from '../../data/categories.js';

export default class Categories extends React.Component {
    render() {
        var selectCategory;
        if (this.props.selectCategory != null)
            selectCategory = categories.filter((category) => category.id == this.props.selectCategory)[0];

        return (
            <div id='z-category' className='menu-inside collapse'>
                <ul className='clearfix'>
                    {
                        selectCategory.category.map((type, index) =>
                            <li key={index}>
                                <Link to={selectCategory.link + "/" + type.slug}> {type.name} </Link>
                            </li>)
                    }
                </ul>
                <a className='close-menu'> Đóng </a>
            </div>
        )
    }

    componentDidMount() {
        $('.close-menu').click(function () {
            $('#z-category').collapse('hide');
        });
    }
}