import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { style } from './index.less';
const grayColor = `#666666`;
const lineColor = `#5de0c9`;
export default function Echarts(props: any) {
  const DEFAULT_OPTION = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['成交金额', '成交笔数', '退款金额'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      lineColor: lineColor,
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
    series: [
      {
        data: [123, 232, 401, 934, 673, 243, 111],
        type: 'line',
        smooth: true,
        name: '成交金额',
      },
      {
        data: [820, 562, 601, 854, 129, 43, 323],
        type: 'line',
        smooth: true,
        name: '成交笔数',
      },
      {
        data: [234, 932, 323, 754, 190, 345, 530],
        type: 'line',
        smooth: true,
        name: '退款金额',
      },
    ],
  };
  const [option, setOption] = useState(DEFAULT_OPTION);

  useEffect(() => {
    setOption(option);
  });
  return <ReactECharts option={option} {...props} />;
}
