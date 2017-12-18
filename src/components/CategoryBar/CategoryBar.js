import React from 'react';
import Category from './Category.js';
import categories from '../../data/categories.js';

export default class CategoryBar extends React.Component {
    render() {
        var selectCategory;
        if (this.props.selectCategory != null)
            selectCategory = categories.filter((category) => category.id == this.props.selectCategory)[0];

        return (
            <div className='category-menu'>
                <ul className='clearfix'>
                    {
                        categories.map((category, index) =>
                            <Category
                                key={index}
                                selectCategory={this.props.selectCategory}
                                {...category} />)
                    }
                </ul>
            </div>
        )
    }
}