import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

export default function Echarts(props: any) {
  function getConfig(data: any) {
    const lineConfig: echarts.LineSeriesOption = {
      showSymbol: false,
      type: 'line',
      smooth: true,
      color: '#81ddca',
      symbolSize: 20,
      lineStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          {
            offset: 0,
            color: '#5dcbae',
          },
          {
            offset: 0.5,
            color: '#81ddca',
          },
          {
            offset: 1,
            color: '#fff',
          },
        ]),
        width: 6,
      },
    };
    return {
      axisPointer: {},
      legend: {
        x: 'left',
        selectedMode: 'single', // 设置单选多选模式
        data: props.data.y.map((obj: any) => obj.name),
        icon: 'rect',
        itemHeight: 13,
        itemWidth: 13,
        padding: [0, 0, 0, 50],
        textStyle: {
          color: '#fff',
          fontSize: '13',
        },
        itemStyle: {
          color: '#81ddca',
        },
        inactiveColor: '#fff',
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgb(0,0,0)',
        borderColor: 'rgb(0,0,0)',
        padding: 15,
        textStyle: {
          color: 'rgb(261,261,261)',
        },
        formatter: (params: Array<any>, ticket: string, callback: Function) => {
          const target = params[0];
          const obj = `<div class="">
            <div>${target.seriesName}（ ${target.axisValue} ）</div>
            <div style="font-size:'16px'">￥${target.value}</div>
          </div>`;
          return obj;
        },
      },
      grid: {
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: ['09.14', '09.15', '09.16', '09.17', '09.18', '09.19', '09.20'],
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#fff',
          },
        },
        textStyle: {
          color: '#fff',
        },
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
      series: props.data.y.map((obj: any) => ({
        data: obj.data,
        name: obj.name,
        ...lineConfig,
      })),
    };
  }
  const [option, setOption] = useState({});

  useEffect(() => {
    const res = getConfig(props.data);

    setOption(res);
  }, [props.data]);
  return <ReactECharts notMerge option={option} {...props} />;
}
