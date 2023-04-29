import { ReactComponent as AvatarIcon } from '../../assets/avatar-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/bar-chart-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/sync-icon.svg';

import SalesSummaryCard from './sales-summary-card';
import './styles.css';

import React from 'react';

function SalesSummary() {
  return (
    <div className="sale-summary-container">
      <SalesSummaryCard value={430} label="Médio" icon={<DoneIcon />} />
      <SalesSummaryCard value={630} label="Quantidade" icon={<SyncIcon />} />
      <SalesSummaryCard value={130} label="Mínimo" icon={<BarChartIcon />} />
      <SalesSummaryCard value={230} label="Máximo" icon={<AvatarIcon />} />
    </div>
  );
}

export default SalesSummary;
