import React from 'react';
import { Link } from 'react-router-dom';

export default class ToggleDetailFilm extends React.Component {
    render() {
        return (
            <a
                data-toggle='collapse'
                data-target='.multi-collapse'
                aria-expanded='false'
                aria-controls='film-detail artists'
                className='btn-more'>
                <span className='pe-7s-angle-down collapse-btn'> </span>
            </a>
        )
    }
}
