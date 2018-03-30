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
    box-shadow: 0px 0px 3px 0px #ccc;
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
const echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/pie');
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
        options: {
            type: Object,
            default: function() {
                return {
                    title: '',
                    subtext: '',
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
            const options = this.options;
            if (!options.data || (options.data && !options.data.length)) {
                return true;
            }
            return false;
        },
        myOptions() {
            const noData = this.noData;
            const options = this.options;
            let dataOptions = {};
            const defaultOptions = {
                tooltip: {
                    trigger: 'item',
                    confine: true,
                    formatter: '{b} : {c} ({d}%)'
                },
                toolbox: {
                    show: true,
                    feature: {
                        restore: {},
                        saveAsImage: {}
                    }
                }
            };

            if (!noData) {
                dataOptions = {
                    title: {
                        text: options.title,
                        subtext: options.subtext,
                        x: 'center'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: options.data.map(item => item.name)
                    },
                    series: [
                        {
                            type: 'pie',
                            selectedMode: 'single',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: options.data,
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 5,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };
            }
            const returnOptions = { ...defaultOptions, ...dataOptions };
            return noData ? {} : returnOptions;
        }
    },
    watch: {
        myOptions() {
            this.draw();
        }
    },
    mounted() {
        const t = this;
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
