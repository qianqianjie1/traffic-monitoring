<template>
    <common-layout :breadcrumb="breadcrumb">
        <div style="height:100%">
            <div class="wrap">
                <div class="top">
                    <a-button class="top-left-btn">选择监控点</a-button>
                    <div class="flex-top-item top-left">
                        <a-select :size="size" default-value="" style="width: 350px" @change="inspectionPosChange">
                            <a-select-option v-for="i in inspectionPos" :key="i.name">
                                {{ i.name }}
                            </a-select-option>
                        </a-select>
                    </div>
                    <a-button class="top-middle-btn">选择时间范围</a-button>
                    <div class="flex-top-item top-middle">
                        <a-range-picker
                            :ranges="{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }"
                            show-time
                            format="YYYY/MM/DD HH:mm:ss"
                            @change="onDateChange"
                        />
                    </div>
                    <div class="flex-top-item top-right">
                        <a-button class="top-right-btn" type="primary" :size="size" v-on:click="submit">
                            查询
                        </a-button>
                    </div>
                </div>
                <a-divider />
                <a-row>
                    <a-col :span="10">
                        <div ref="bar" style="height: 350px;padding-left:20px"></div>
                    </a-col>
                    <a-col :offset="3" :span="10">
                        <div ref="pie" style="height: 350px;padding-right:40px"></div>
                    </a-col>
                </a-row>
            </div>
        </div>
    </common-layout>
</template>

<script>
import CommonLayout from '@/components/CommonLayout.vue'
import moment from 'moment';

export default {
    data () {
        return {
            size: 'default',
            dateFormat: 'YYYY/MM/DD',
            monthFormat: 'YYYY/MM',
            breadcrumb:['数据统计'],
            inspectionPos: [
                {name: '1'},
                {name: '2'},
                {name: '3'},
            ],
            toSubmit: [],
            barChartData: [1,2,3,4,5],
            barChartTitle: '',
            pieChartData: [{value: 335, name: '直接访问'},
                            {value: 310, name: '邮件营销'},
                            {value: 274, name: '联盟广告'},
                            {value: 235, name: '视频广告'},
                            {value: 400, name: '搜索引擎'}],
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.drawBar();
            this.drawPie();
        });
        
    },
    methods: {
        inspectionPosChange(value) {
            console.log(`Selected: ${value}`);
            this.toSubmit.push({'inspectionPos': value});
        },
        moment,
        onDateChange(dates, dateStrings) {
            console.log('From: ', dates[0], ', to: ', dates[1]);
            console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
            this.toSubmit.push({'startDate': dateStrings[0], 'endDate': dateStrings[1]});
        },
        handleSizeChange(e) {
            this.size = e.target.value;
        },
        submit: function () {
            // console.log(this.toSubmit[0]['inspectionPos'], this.toSubmit[1]['startDate'], this.toSubmit[1]['endDate']);
            this.barChartData = [4,5,6,7,8];
            this.barChartTitle = '1';
            this.drawBar();
        },
        drawBar() {
            let barChart = this.$echarts.init(this.$refs.bar);
            
            let barOption = {
                    title: {
                        text: this.barChartTitle + '交通事故类型统计',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            dataView: {readOnly: false},
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            name: '事故类型',
                            type: 'category',
                            data: ['车辆受损', '翻车', '非机动车翻车', '人被撞倒', '车辆失火'],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis: [
                        {
                            name: '发生次数',
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '次数',
                            type: 'bar',
                            barWidth: '50%',
                            data: this.barChartData
                        }
                    ]
                };
            
            barChart.setOption(barOption);
            
        },
        drawPie() {
            let pieChart = this.$echarts.init(this.$refs.pie);
            let pieOption = {
                backgroundColor: '#FAFAFA',

                title: {
                    text: '项目监测点事故发生总次数统计',
                    left: 'center',
                    top: 20,
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataView: {readOnly: false},
                        restore: {},
                        saveAsImage: {}
                    }
                },
                tooltip: {
                    trigger: 'item'
                },

                visualMap: {
                    show: false,
                    min: 80,
                    max: 600,
                    inRange: {
                        colorLightness: [0, 1]
                    }
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '50%'],
                        data: this.pieChartData.sort(function (a, b) { return a.value - b.value; }),
                        roseType: 'radius',
                        label: {
                            color: 'rgba(0, 0, 0, 0.8)'
                        },
                        labelLine: {
                            lineStyle: {
                                color: 'rgba(0, 0, 0, 0.3)'
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        },
                        itemStyle: {
                            color: '#c23531',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },

                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                        animationDelay: function () {
                            return Math.random() * 200;
                        }
                    }
                ]
            };
            pieChart.setOption(pieOption);
        }
    },
    name: 'statistic',
    components:{
        CommonLayout
    }
}
</script>

<style scoped>
    .wrap {
        padding: 15px;
        width: 100%;
        height: 100%;
        background: #fff;
    }

    .top {
        display: flex;
        padding-top: 10px;
        width: 100%;
        height: 40px;
    }

    .flex-top-item {
        width: 50%;
    }

    .flex-top-item:nth-of-type(1){
        padding-right:50px;
    }

    .flex-top-item:nth-of-type(2){
        padding-right:25px;
    }      

    .flex-top-item:nth-of-type(3){
        padding-left:120px;
    }   

    .top-left-btn,.top-middle-btn {
        width: 116px;
    }
    
    
</style>