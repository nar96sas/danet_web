import React from 'react';

export default class Item extends React.Component {
    render() {
      return (
        <div className='item'>
          <a>
            <span className='item-banner' style={{backgroundImage: 'url(/images/' + this.props.children + '.jpg)'}} >
            </span>
            <img src='/images/fake_64x27.png' alt='Danet'/>
          </a>
        </div>
      )
    }
  }