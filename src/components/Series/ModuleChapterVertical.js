import React from 'react';
import Chapter from './Chapter.js';

export default class ModuleChapterVertical extends React.Component {
    render() {
        const { chapter } = this.props;
        var inverseChapter = chapter.slice(0).reverse();

        return (
            <div className='module-chapter'>
                <div className='module-inside'>
                    {
                        inverseChapter.map((chap, index) => <Chapter key={index} showView={true} {...chap} />)
                    }
                </div>
            </div>
        )
    }
}
