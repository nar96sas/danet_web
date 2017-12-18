import React from 'react';
import ModuleChapterVertical from '../../components/Series/ModuleChapterVertical.js';
import product from '../../data/product.js';

export default class SeriesPage extends React.Component {
  render() {
    const { episodes } = product;
    const season1 = episodes[0];

    return (
      <div className='wrap-content'>
        <div className='module-program film-series'>
          <div className='title-program title-main'>
            { season1.title }
            <strong> </strong>
          </div>
          <ModuleChapterVertical {...season1} />
        </div>
      </div>
    )
  }
}
