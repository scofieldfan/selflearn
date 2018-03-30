<!-- 调用说明
   折现/柱状图 封装
   Created on 2017/12/18.

   使用方法
   options: {
       title: '充值趋势图',
       name: ['data1', 'data2'],
       type: 'bar',
       data: [data1, data2]
   }
-->
<template>
    <div class="charts" :style="{width: width, height: height}">
        <div id="main" class="charts-draw" ref="chart" v-show="!noData">

        </div>
        <div class="charts-no" v-show="noData">
            {{noDataText}}
        </div>
    </div>
</template>
<style lang="less" scoped>
.charts {
    display: inline-block;
    padding: 10px;
    background-color: #ffffff;
    box-shadow: 0px 0px 3px 0px #cccccc;
    position: relative;
    .charts-draw {
        width: 100%;
        height: 100%;
    }
    .charts-no {
        position: absolute;
        top: 50%;
        width: 100%;
        text-align: center;
        font-size: 14px;
        color: #666;
    }
}
</style>
<script>
var echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/bar');
require('echarts/lib/chart/line');
require('echarts/lib/component/legendScroll');
require('echarts/lib/component/toolbox');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

export default {
    props: {
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '350px'
        },
        noDataText: {
            type: String,
            default: '暂无数据'
        },
        // 是否显示顶部工具
        haveToolbox: {
            type: Boolean,
            default: true
        },
        // 是否显示说明
        haveLegend: {
            type: Boolean,
            default: false
        },
        options: {
            type: Object,
            default: function() {
                return {
                    title: '',
                    name: [],
                    type: 'bar',
                    data: []
                };
            }
        }
    },
    data() {
        return {};
    },
    computed: {
        noData() {
            var options = this.options;
            if (!options.data || (options.data && !options.data.length)) {
                return true;
            }
            return false;
        },

        myOptions() {
            // const noData = this.noData;
            const options = this.options;
            const haveToolbox = this.haveToolbox;
            const haveLegend = this.haveLegend;
            let dataOptions = {};
            const defaultOptions = {
                toolbox: {
                    show: haveToolbox,
                    right: '20px',
                    feature: {
                        magicType: {
                            type: ['line', 'bar']
                        },
                        dataView: false,
                        saveAsImage: {
                            pixelRatio: 2
                        }
                    }
                },
                yAxis: {},
                tooltip: {
                    trigger: 'axis',
                    confine: true,
                    axisPointer: {
                        type: 'line' // line || shadow
                    }
                },
                grid: {
                    left: '3%',
                    right: '27px',
                    bottom: '3%',
                    containLabel: true
                }
            };
            // if (!noData) {
            options.name = options.name || [];
            options.name =
                typeof options.name === 'string'
                    ? [options.name]
                    : options.name;
            options.type = options.type || 'line';
            options.data =
                options.data[0] && options.data[0].slice
                    ? options.data
                    : [options.data];
            dataOptions = {
                title: {
                    text: options.title,
                    subtext: options.subtext
                },
                legend: haveLegend
                    ? {
                          data: options.name,
                          align: 'left'
                      }
                    : {},
                xAxis: {
                    boundaryGap: options.type === 'line' ? false : true,
                    data: options.data[0].map(item => item.name)
                },
                series: options.data.map((item, index) => {
                    return {
                        itemStyle: options.itemStyle
                            ? options.itemStyle[index]
                            : {},
                        name: options.name[index],
                        type: options.type,
                        data: item.map(item => item.value),
                        animationDelay: function(idx) {
                            return idx * 10;
                        }
                    };
                }),
                animationEasing: 'elasticOut',
                animationDelayUpdate: function(idx) {
                    return idx * 5;
                }
            };
            // }
            const returnOptions = { ...defaultOptions, ...dataOptions };
            return returnOptions;
        }
    },
    watch: {
        myOptions() {
            this.draw();
        }
    },
    mounted() {
        var t = this;
        t.myChart = echarts.init(t.$refs.chart);
        t.draw();
    },
    methods: {
        draw(options) {
            this.myChart.clear();
            this.myChart.setOption(options || this.myOptions);
        }
    }
};
</script>
