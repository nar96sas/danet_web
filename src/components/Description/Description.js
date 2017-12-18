import React from 'react';

export default class Description extends React.Component {
    render() {
        return (
            <div className='desc'>
                <h2 className={(this.props.active == this.props.title ? 'title active' : 'title')
                    + (this.props.normal ? '' : ' ellipsis-1')}>
                    {this.props.title}
                </h2>
                {
                    this.props.episodes != null && this.props.episodes > 0 &&
                    <p> {this.props.episodes + " tập"} </p>
                }
                {
                    this.props.sub != null &&
                    <p className='sub ellipsis-1'> {this.props.sub} </p>
                }
                {
                    this.props.release != null &&
                    <p> <span className='pe-7s-date ic'> </span> {this.props.release} </p>
                }
                {
                    this.props.rating != null &&
                    <p> <span className='pe-7s-star ic'> </span> {this.props.rating} </p>
                }
                {
                    this.props.genres != null &&
                    <p className={this.props.ellipsis ? ' ellipsis-2 clear' : ''}>
                        <span className='pe-7s-ticket ic'> </span>
                        {
                            this.props.genres.map((genre, index) => genre + ", ")
                        }
                    </p>
                }
                {
                    this.props.views != null &&
                    <p>
                        <span className='pe-7s-look'> </span> {this.props.views}
                    </p>
                }
            </div>
        )
    }
}


