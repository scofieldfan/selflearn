<template>
    <div class="resource-ad">

        <form-card :isHaveHeader="true">
            <template slot="choice-title">
                查找：
            </template>
            <template slot="choice">
                <el-button @click="changeDate(7)">7天数据</el-button>
                <el-button @click="changeDate(30)">30天数据</el-button>
                <el-button @click="changeDate(365)">1年数据</el-button>
            </template>
            <template slot="operation">
                <el-button type="text">
                    <a href="#/resource/demo/aa">测试三级导航</a>
                </el-button>
                <el-button type="text">
                    <a href="#/resource/demo/aa">放主要操作</a>
                </el-button>
            </template>
            <el-form ref="form" :model="form" label-width="100px" :inline="true" slot="form">

                <el-form-item label="所属开发者">
                    <el-select v-model="form.developer" placeholder="所属开发者">
                        <el-option v-for="item in developer" :key="item.value" :label="item.name" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="所属媒体">
                    <el-select v-model="form.media" placeholder="所属媒体">
                        <el-option v-for="item in media" :key="item.value" :label="item.name" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="广告位名称">
                    <el-input v-model="form.name" placeholder="广告位名称"></el-input>
                </el-form-item>

                <el-form-item label="状态">
                    <el-select v-model="form.state" placeholder="状态">
                        <el-option label="已上线" value="0"></el-option>
                        <el-option label="已下线" value="1"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="活动时间">
                    <el-date-picker v-model="form.searchDate" type="daterange" align="center" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd">
                    </el-date-picker>
                </el-form-item>

                <el-form-item label="开关">
                    <el-switch v-model="form.delivery"></el-switch>
                </el-form-item>

                <el-form-item label="活动性质">
                    <el-checkbox-group v-model="form.type">
                        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                        <el-checkbox label="地推活动" name="type"></el-checkbox>
                        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>

                <el-form-item label="特殊资源" class="form-block">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="线上品牌商赞助"></el-radio>
                        <el-radio label="线下场地免费"></el-radio>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="活动形式">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>

                <el-form-item label=" " class="form-block">
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                </el-form-item>
            </el-form>
        </form-card>

        <card>
            <flex-box slot="header" justify="space-between">
                <div>列表数据</div>
                <div>
                    <el-button type="text">
                        <a href="#/resource/ad/aa">次级操作在没有serarch的情况下采用</a>
                    </el-button>
                    <el-button type="text" @click="downLoadExcel">导出表格</el-button>
                </div>
            </flex-box>
            <el-table class="list-table" :data="list" stripe border v-loading="loading" element-loading-text="拼命加载中">
                <el-table-column type="index" label=" " width="45" align="center"></el-table-column>
                <el-table-column prop="date" label="广告位名称" align="center"></el-table-column>
                <el-table-column prop="date" label="广告位ID" align="center"></el-table-column>
                <el-table-column prop="date" label="所属媒体" align="center"></el-table-column>
                <el-table-column prop="date" label="所属开发者" align="center"></el-table-column>
                <el-table-column prop="date" label="结算方式" align="center"></el-table-column>
                <el-table-column prop="date" label="单价(元／次)" align="center"></el-table-column>
                <el-table-column prop="date" label="DSP底价(元／次)" align="center"></el-table-column>
                <el-table-column prop="date" label="状态" align="center"></el-table-column>
                <el-table-column prop="date" label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination class="pagination" background layout="total, prev, pager, next, jumper" :current-page="6" :page-size="10" :total="100">
            </el-pagination>
        </card>

        <chart-line width="400px" height="400px" noDataText="没有数据呀~~~" :options="options">
        </chart-line>
        <chart-pie width="400px" height="400px" noDataText="没有数据呀~~~" :options="optionsPie"></chart-pie>

    </div>
</template>
<style lang="less">
@import '../../assets/css/index';
.resource-ad {
    .form-block {
        display: block;
    }
}
</style>
<script>
import date from '../../util/date';
import excel from '../../util/excel';
import multiRequest from '../../util/multiRequest';
export default {
    data() {
        const data1 = [];
        const data2 = [];
        for (let i = 0; i < 100; i++) {
            data1.push({
                name: i,
                value: (Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5
            });
            data2.push({
                name: i,
                value: (Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5
            });
        }
        return {
            msg: 'hello vue',
            options: {
                title: '充值趋势图',
                subtext: '次/播放完成量',
                name: ['data1', 'data2'],
                itemStyle: [
                    {
                        normal: {
                            color: '#5daf34'
                        }
                    },
                    {
                        normal: {
                            color: '#fe4444'
                        }
                    }
                ],
                type: 'line',
                data: [data1, data2]
            },
            optionsPie: {
                title: '充值趋势图',
                subtext: '副标题',
                data: data1.slice(1, 10)
            },
            loading: false,
            media: [],
            developer: [
                {
                    value: '1',
                    name: '苹果科技'
                },
                {
                    value: '2',
                    name: '志达科技'
                }
            ],
            form: {
                developer: '',
                media: '',
                state: '',
                name: '',
                searchDate: []
            },
            list: [
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }
            ]
        };
    },
    computed: {},
    watch: {},
    mounted() {
        /*
        this.getAdslotsList()
            .then(data => {
                console.log('then vue', data);
            })
            .catch(data => {
                console.log('catch vue', data);
            });
            */
    },
    filter: {},
    methods: {
        edit(row) {
            this.$message({
                message: '点击了编辑' + JSON.stringify(row)
            });
        },
        downLoadExcel() {
            const params = {
                fileName: '文件名称', //导出文件名
                worksheet: ['sheet名称'], //导出excel的sheet名
                data: this.list,
                callback: res => {
                    console.log(res);
                },
                fields: [
                    //直接取数据时直接填字段名，需要格式化时传入格式化函数
                    {
                        name: '游戏id',
                        field: 'ext_id'
                    },
                    {
                        name: '游戏名称',
                        field: 'game_name'
                    },
                    {
                        name: '包名',
                        field: 'package_name',
                        formatter: this.setAddress,
                        format: 'text'
                    } //需要进行格式化的函数名,要以字符串方式展示设置format: 'text'
                ]
            };
            const request = {
                url: '/lookalike/search', //请求地址
                data: {
                    game_name: '官居一品'
                },
                page: 'QueryBegin', // 请求分页参数
                number: 'QueryNumber', // 请求分页参数，（尽量大，减少请求数）
                total: '200', // 最多获取多少条信息，不超过3000
                dataList: 'searchgames' // 返回数据取得数据列表字段名
            };
            multiRequest(request)
                .then(data => {
                    params.data = data;
                    excel(params);
                })
                .catch(res => {
                    console.log('catch', res);
                });
        },
        onSubmit() {},
        changeDate(day) {
            if (!day) {
                return false;
            }
            const endTimestamp = Date.parse(new Date());
            const startTimestamp = endTimestamp - day * 60 * 60 * 24 * 1000;

            this.form.searchDate = [
                date.toFormat(startTimestamp, 'yyyy-MM-dd'),
                date.toFormat(endTimestamp, 'yyyy-MM-dd')
            ];
        }
    },
    components: {}
};
</script>
