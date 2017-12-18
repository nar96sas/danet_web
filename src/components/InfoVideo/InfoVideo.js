import React from 'react';
import ToggleDetailFilm from '../Toggle/ToggleDetailFilm.js';
import FilmDetail from '../FilmDetail/FilmDetail.js';
import ListArtist from '../FilmDetail/ListArtist.js';

export default class InfoVideo extends React.Component {
    render() {
        return (
            <div className='info-video'>
                <h1 className='title'> {this.props.title + ' - ' + this.props.sub} </h1>
                <p className='sub'> {this.props.views + ' lượt xem'}</p>
                <FilmDetail {...this.props} />
                <ListArtist starings={this.props.starings} />
                <ToggleDetailFilm />
            </div>
        )
    }

    componentDidMount() {
        $('.btn-more').click(function () {
            if ($('.collapse-btn').hasClass('pe-7s-angle-down')) {
                $('.collapse-btn').removeClass('pe-7s-angle-down').addClass('pe-7s-angle-up');
            } else {
                $('.collapse-btn').removeClass('pe-7s-angle-up').addClass('pe-7s-angle-down');
            }
        });
    }
}
