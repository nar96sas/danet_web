import React from 'react';

export default class Image extends React.Component {
    render() {
        return (
            <div className='img'>
                <span
                    className='img-ins'
                    style={{ backgroundImage: 'url(' + this.props.image + ')' }}>
                </span>
                <img
                    src={'//zingtv-static.zadn.vn/skins/tv/images/avatar_default_' + this.props.size + '.jpg'}
                    alt='Danet' />
            </div>
        )
    }
}


