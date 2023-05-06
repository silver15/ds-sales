import { ReactComponent as AvatarIcon } from '../../assets/avatar-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/bar-chart-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/sync-icon.svg';
import SalesSummaryCard from './sales-summary-card';
import React, { useEffect, useMemo, useState } from 'react';
import './styles.css';
import { FilterData, SalesSummaryData } from '../../types';
import { buildFilterParams, makeRequest } from '../../utils/request';

type Props = {
  filterData?: FilterData;
};

const initialSummary = {
  avg: 0,
  count: 0,
  max: 0,
  min: 0
};

function SalesSummary({ filterData }: Props) {
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);
  const [summary, setSummary] = useState<SalesSummaryData>(initialSummary);

  useEffect(() => {
    makeRequest
      .get<SalesSummaryData>('/sales/summary', { params })
      .then((response) => {
        setSummary(response.data);
      })
      .catch(() => {
        console.error('Error to fetch sales summary');
      });
  }, [params]);

  return (
    <div className="sale-summary-container">
      <SalesSummaryCard value={summary?.avg.toFixed(2)} label="Médio" icon={<DoneIcon />} />
      <SalesSummaryCard value={summary?.count} label="Quantidade" icon={<SyncIcon />} />
      <SalesSummaryCard value={summary?.min} label="Mínimo" icon={<BarChartIcon />} />
      <SalesSummaryCard value={summary?.max} label="Máximo" icon={<AvatarIcon />} />
    </div>
  );
}

export default SalesSummary;
