import React from 'react';
import { Link } from 'react-router-dom';
import Chapter from './Chapter.js';
import { customSeries } from '../../static/js/carousel.js';

export default class ModuleChapter extends React.Component {
    render() {
        const { chapter, sub, slug } = this.props;
        const displayChapter = chapter.slice(chapter.length - 10, chapter.length);

        return (
            <div className='module-chapter'>
                <div className='title-chapter title-main active'> Danh sách xem </div>
                {
                    chapter.length > 10 &&
                    <div className='see-more'>
                        <Link to={'/series/' + slug} className='btn-more-text'>
                            Xem thêm
                        </Link>
                    </div>
                }

                <div className='module-inside series'>
                    {
                        displayChapter.map((chap, index) => <Chapter key={index} currentChapter={sub} {...chap} />)
                    }
                </div>
            </div>
        )
    }

    componentDidMount() {
        var initialSlide = 0;

        for (var i = 0; i < this.props.chapter.length; i++) {
            if (this.props.chapter[i].sub === this.props.sub) {
                initialSlide = i;
                break;
            }
        }

        customSeries(initialSlide);
    }

    componentWillUnmount() {
        $('.series').slick('unslick');
    }
}
