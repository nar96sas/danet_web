import React from 'react';
import Type from './Type.js';
import TabBar from '../TabBar/TabBar.js';

export default class ModuleCategory extends React.Component {
    render() {
        const tabHeader = [{
            title: "Mới nhất",
            id: "new"
        }, {
            title: "Xem nhiều",
            id: "most-view"
        }, {
            title: "Trọn bộ",
            id: "collection"
        }];

        const { title, listFilm } = this.props;

        return (
            <div className='module-program category'>
                <div className='title-program'> {title} </div>
                {
                    this.props.haveTabBar &&
                    <TabBar header={tabHeader} />
                }
                <div className='module-inside'>
                    {
                        listFilm.map((film, index) => <Type key={index} showView={true} {...film} />)
                    }
                </div>
            </div>
        )
    }

    componentDidUpdate() {
        $('.category-loading').remove();
    }
}
