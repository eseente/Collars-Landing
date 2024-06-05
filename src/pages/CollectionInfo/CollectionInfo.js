import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { ReactComponent as Chart } from '../../assets/chart.svg';
import { ReactComponent as Point } from '../../assets/point.svg';

const CollectionInfo = () => {
  return (
    <div className="collection-info-container" >
      <Chart className='collection-info-chart'/>
      <Point className='collection-info-point'/>
      <div className="collection-info-text-container">
        <h1 className="collection-info-title" >11,658,467</h1>
        <h1 className="collection-info-text">Shoes Collected</h1>
      </div>
    </div>
  );
}

export default CollectionInfo;
