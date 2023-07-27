import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';

import {
  TitleComponent,
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  LegendComponent,
  LegendComponentOption
} from 'echarts/components';
import { GraphChart, GraphSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GraphChart,
  CanvasRenderer
]);

type EChartsOption = echarts.ComposeOption<
  | TitleComponentOption
  | TooltipComponentOption
  | LegendComponentOption
  | GraphSeriesOption
>;

interface GraphNode {
  symbolSize: number;
  label?: {
    show?: boolean;
  };
}

const GraphChartComponent: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await fetch('jsonData'); // Replace 'jsonData' with the correct relative path
        const jsonData = await response.json();
        
        if (chartRef.current) {
          const myChart = echarts.init(chartRef.current);
          myChart.showLoading();
          const show = (graph: any) =>{
            myChart.hideLoading();

            graph.nodes.forEach(function (node: GraphNode) {
              node.label = {
                show: node.symbolSize > 30
              };
            });

            const option: EChartsOption = {
              title: {
                text: 'Les Miserables',
                subtext: 'Default layout',
                top: 'bottom',
                left: 'right'
              },
              tooltip: {},
              legend: [
                {
                  data: graph.categories.map(function (a: { name: string }) {
                    return a.name;
                  })
                }
              ],
              animationDuration: 1500,
              animationEasingUpdate: 'quinticInOut',
              series: [
                {
                  name: 'Les Miserables',
                  type: 'graph',
                  layout: 'none',
                  data: graph.nodes,
                  links: graph.links,
                  categories: graph.categories,
                  roam: true,
                  label: {
                    position: 'right',
                    formatter: '{b}'
                  },
                  lineStyle: {
                    color: 'source',
                    curveness: 0.3
                  },
                  emphasis: {
                    focus: 'adjacency',
                    lineStyle: {
                      width: 10
                    }
                  }
                }
              ]
            };

            myChart.setOption(option);
          }
          

          show(jsonData);
        }
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    fetchData();
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '500px' }}></div>;
};

export default GraphChartComponent;
