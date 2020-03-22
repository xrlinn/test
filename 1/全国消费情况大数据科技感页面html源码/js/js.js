
$(function () {
echarts_1();
echarts_2();
echarts_3();
echarts_4();
echarts_5();
echarts_6();
function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));

        var option = {
            "animation": true,
            "animationThreshold": 2000,
            "animationDuration": 1000,
            "animationEasing": "cubicOut",
            "animationDelay": 0,
            "animationDurationUpdate": 300,
            "animationEasingUpdate": "cubicOut",
            "animationDelayUpdate": 0,
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ],
            "series": [
                {
                    "type": "bar",
                    "name": "\u65b0\u589e\u7528\u6237",
                    "data": [
                        471248,
                        204436,
                        108568,
                        66354,
                        46038,
                        33227,
                        22928,
                        21583,
                        8190
                    ],
                    "barCategoryGap": "20%",
                    "label": {
                        "show": true,
                        "position": "top",
                        "margin": 8
                    }
                }
            ],
            "legend": [
                {
                    "data": [
                        "\u65b0\u589e\u7528\u6237"
                    ],
                    "selected": {
                        "\u65b0\u589e\u7528\u6237": true
                    },
                    "show": true,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0
            },
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": false,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "2017-11-25",
                        "2017-11-26",
                        "2017-11-27",
                        "2017-11-28",
                        "2017-11-29",
                        "2017-11-30",
                        "2017-12-01",
                        "2017-12-02",
                        "2017-12-03"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": false,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "text": "\u6bcf\u65e5\u65b0\u589e\u7528\u6237\u6570\u91cf",
                    "padding": 5,
                    "itemGap": 10
                }
            ]
          };
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));

        var option = {
            "animation": true,
            "animationThreshold": 2000,
            "animationDuration": 1000,
            "animationEasing": "cubicOut",
            "animationDelay": 0,
            "animationDurationUpdate": 300,
            "animationEasingUpdate": "cubicOut",
            "animationDelayUpdate": 0,
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ],
            "series": [
                {
                    "type": "bar",
                    "name": "UV",
                    "data": [
                        471248,
                        482688,
                        472548,
                        470002,
                        480413,
                        488801,
                        498317,
                        636312,
                        630697
                    ],
                    "barCategoryGap": "20%",
                    "label": {
                        "show": false,
                        "position": "top",
                        "margin": 8
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                },
                {
                    "type": "bar",
                    "name": "PV",
                    "data": [
                        935062,
                        957385,
                        903469,
                        884775,
                        921088,
                        935756,
                        971916,
                        1232868,
                        1223302
                    ],
                    "barCategoryGap": "20%",
                    "label": {
                        "show": false,
                        "position": "top",
                        "margin": 8
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                },
                {
                    "type": "line",
                    "name": "\u8df3\u5931\u7387",
                    "connectNulls": false,
                    "yAxisIndex": 1,
                    "symbolSize": 4,
                    "showSymbol": true,
                    "smooth": false,
                    "step": false,
                    "data": [
                        [
                            "2017-11-25",
                            51.15
                        ],
                        [
                            "2017-11-26",
                            50.81
                        ],
                        [
                            "2017-11-27",
                            52.34
                        ],
                        [
                            "2017-11-28",
                            52.94
                        ],
                        [
                            "2017-11-29",
                            52.14
                        ],
                        [
                            "2017-11-30",
                            52.26
                        ],
                        [
                            "2017-12-01",
                            51.45
                        ],
                        [
                            "2017-12-02",
                            52.7
                        ],
                        [
                            "2017-12-03",
                            52.67
                        ]
                    ],
                    "hoverAnimation": true,
                    "label": {
                        "show": true,
                        "position": "top",
                        "margin": 8
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    },
                    "areaStyle": {
                        "opacity": 0
                    },
                    "zlevel": 0,
                    "z": 0
                }
            ],
            "legend": [
                {
                    "data": [
                        "UV",
                        "PV",
                        "\u8df3\u5931\u7387"
                    ],
                    "selected": {
                        "UV": true,
                        "PV": true
                    },
                    "show": true,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0
            },
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": false,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "2017-11-25",
                        "2017-11-26",
                        "2017-11-27",
                        "2017-11-28",
                        "2017-11-29",
                        "2017-11-30",
                        "2017-12-01",
                        "2017-12-02",
                        "2017-12-03"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "margin": 8,
                        "formatter": "{value}"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": false,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                },
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "margin": 8,
                        "formatter": "{value} %"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": false,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "text": "\u6bcf\u65e5UV\u3001PV\u3001\u8df3\u5931\u7387",
                    "padding": 5,
                    "itemGap": 10
                }
            ]
          };
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart3'));
        var option = {
            "animation": true,
            "animationThreshold": 2000,
            "animationDuration": 1000,
            "animationEasing": "cubicOut",
            "animationDelay": 0,
            "animationDurationUpdate": 300,
            "animationEasingUpdate": "cubicOut",
            "animationDelayUpdate": 0,
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ],
            "series": [
                {
                    "type": "funnel",
                    "name": "\u8f6c\u5316\u6bd4\u7387",
                    "data": [
                        {
                            "name": "\u70b9\u51fb:100%",
                            "value": 8965621
                        },
                        {
                            "name": "\u6536\u85cf\u4e0e\u52a0\u5165\u8d2d\u7269\u8f66:9.39%",
                            "value": 842298
                        },
                        {
                            "name": "\u8d2d\u4e70:2.25%",
                            "value": 201600
                        }
                    ],
                    "sort": "descending",
                    "gap": 0,
                    "label": {
                        "show": true,
                        "position": "inside",
                        "margin": 8
                    }
                }
            ],
            "legend": [
                {
                    "data": [
                        "\u6536\u85cf\u4e0e\u52a0\u5165\u8d2d\u7269\u8f66:9.39%",
                        "\u70b9\u51fb:100%",
                        "\u8d2d\u4e70:2.25%"
                    ],
                    "selected": {
                        "\u70b9\u51fb:100%": true,
                        "\u6536\u85cf\u4e0e\u52a0\u5165\u8d2d\u7269\u8f66:9.39%": true,
                        "\u8d2d\u4e70:2.25%": true
                    },
                    "show": true,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0
            },
            "title": [
                {
                    "text": "\u7528\u6237\u884c\u4e3a\u8f6c\u5316\u6f0f\u6597",
                    "padding": 5,
                    "itemGap": 10
                }
            ]
          };
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));

        var option = {
            "animation": true,
            "animationThreshold": 2000,
            "animationDuration": 1000,
            "animationEasing": "cubicOut",
            "animationDelay": 0,
            "animationDurationUpdate": 300,
            "animationEasingUpdate": "cubicOut",
            "animationDelayUpdate": 0,
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ],
            "series": [
                {
                    "type": "bar",
                    "name": "\u8d2d\u4e70\u4eba\u6570",
                    "data": [
                        935062,
                        957385,
                        903469,
                        884775,
                        921088,
                        935756,
                        971916,
                        1232868,
                        1223302
                    ],
                    "barCategoryGap": "20%",
                    "label": {
                        "show": true,
                        "position": "top",
                        "margin": 8
                    }
                },
                {
                    "type": "line",
                    "name": "\u6536\u85cf\u6570",
                    "connectNulls": false,
                    "yAxisIndex": 1,
                    "symbolSize": 4,
                    "showSymbol": true,
                    "smooth": true,
                    "step": false,
                    "data": [
                        [
                            "2017-11-25",
                            30272
                        ],
                        [
                            "2017-11-26",
                            30690
                        ],
                        [
                            "2017-11-27",
                            29163
                        ],
                        [
                            "2017-11-28",
                            29009
                        ],
                        [
                            "2017-11-29",
                            29850
                        ],
                        [
                            "2017-11-30",
                            30371
                        ],
                        [
                            "2017-12-01",
                            30751
                        ],
                        [
                            "2017-12-02",
                            39640
                        ],
                        [
                            "2017-12-03",
                            39528
                        ]
                    ],
                    "hoverAnimation": true,
                    "label": {
                        "show": true,
                        "position": "top",
                        "margin": 8
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    },
                    "areaStyle": {
                        "opacity": 0
                    },
                    "zlevel": 0,
                    "z": 0
                },
                {
                    "type": "line",
                    "name": "\u52a0\u8d2d\u6570",
                    "connectNulls": false,
                    "yAxisIndex": 1,
                    "symbolSize": 4,
                    "showSymbol": true,
                    "smooth": true,
                    "step": false,
                    "data": [
                        [
                            "2017-11-25",
                            56337
                        ],
                        [
                            "2017-11-26",
                            57892
                        ],
                        [
                            "2017-11-27",
                            54167
                        ],
                        [
                            "2017-11-28",
                            53437
                        ],
                        [
                            "2017-11-29",
                            55205
                        ],
                        [
                            "2017-11-30",
                            56409
                        ],
                        [
                            "2017-12-01",
                            62434
                        ],
                        [
                            "2017-12-02",
                            79401
                        ],
                        [
                            "2017-12-03",
                            77742
                        ]
                    ],
                    "hoverAnimation": true,
                    "label": {
                        "show": true,
                        "position": "top",
                        "margin": 8
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    },
                    "areaStyle": {
                        "opacity": 0
                    },
                    "zlevel": 0,
                    "z": 0
                },
                {
                    "type": "line",
                    "name": "\u8d2d\u4e70\u6570\u91cf",
                    "connectNulls": false,
                    "yAxisIndex": 1,
                    "symbolSize": 4,
                    "showSymbol": true,
                    "smooth": true,
                    "step": false,
                    "data": [
                        [
                            "2017-11-25",
                            20123
                        ],
                        [
                            "2017-11-26",
                            20710
                        ],
                        [
                            "2017-11-27",
                            22854
                        ],
                        [
                            "2017-11-28",
                            21202
                        ],
                        [
                            "2017-11-29",
                            22447
                        ],
                        [
                            "2017-11-30",
                            22015
                        ],
                        [
                            "2017-12-01",
                            20691
                        ],
                        [
                            "2017-12-02",
                            25896
                        ],
                        [
                            "2017-12-03",
                            25662
                        ]
                    ],
                    "hoverAnimation": true,
                    "label": {
                        "show": true,
                        "position": "top",
                        "margin": 8
                    },
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    },
                    "areaStyle": {
                        "opacity": 0
                    },
                    "zlevel": 0,
                    "z": 0
                }
            ],
            "legend": [
                {
                    "data": [
                        "\u8d2d\u4e70\u4eba\u6570",
                        "\u6536\u85cf\u6570",
                        "\u52a0\u8d2d\u6570",
                        "\u8d2d\u4e70\u6570\u91cf"
                    ],
                    "selected": {
                        "\u8d2d\u4e70\u4eba\u6570": true
                    },
                    "show": true,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0
            },
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": false,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "2017-11-25",
                        "2017-11-26",
                        "2017-11-27",
                        "2017-11-28",
                        "2017-11-29",
                        "2017-11-30",
                        "2017-12-01",
                        "2017-12-02",
                        "2017-12-03"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "margin": 8,
                        "formatter": "{value}/\u6b21"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": false,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                },
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "margin": 8,
                        "formatter": "{value}/\u6b21"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": false,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "text": "\u6bcf\u65e5\u7528\u6237\u884c\u4e3a\u5206\u6790",
                    "padding": 5,
                    "itemGap": 10
                }
            ]
          };
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));

        var option = {
            "baseOption": {
                "series": [
                    {
                        "type": "bar",
                        "name": "\u6d4f\u89c8\u4eba\u6570",
                        "data": [
                            49410,
                            23022,
                            11874,
                            7821,
                            6285,
                            7584,
                            15050,
                            32097,
                            44325,
                            51125,
                            58982,
                            58148,
                            55425,
                            61188,
                            63400,
                            65213,
                            64573,
                            58470,
                            58570,
                            72761,
                            87346,
                            100656,
                            98468,
                            71509
                        ],
                        "barCategoryGap": "20%",
                        "label": {
                            "show": true,
                            "position": "top",
                            "margin": 8
                        }
                    },
                    {
                        "type": "line",
                        "name": "\u6536\u85cf\u6570",
                        "connectNulls": false,
                        "yAxisIndex": 1,
                        "symbolSize": 4,
                        "showSymbol": true,
                        "smooth": true,
                        "step": false,
                        "data": [
                            [
                                0,
                                1742
                            ],
                            [
                                1,
                                824
                            ],
                            [
                                2,
                                454
                            ],
                            [
                                3,
                                238
                            ],
                            [
                                4,
                                219
                            ],
                            [
                                5,
                                244
                            ],
                            [
                                6,
                                468
                            ],
                            [
                                7,
                                1053
                            ],
                            [
                                8,
                                1514
                            ],
                            [
                                9,
                                1757
                            ],
                            [
                                10,
                                2000
                            ],
                            [
                                11,
                                2001
                            ],
                            [
                                12,
                                1830
                            ],
                            [
                                13,
                                1971
                            ],
                            [
                                14,
                                2007
                            ],
                            [
                                15,
                                2079
                            ],
                            [
                                16,
                                2006
                            ],
                            [
                                17,
                                1817
                            ],
                            [
                                18,
                                1771
                            ],
                            [
                                19,
                                2181
                            ],
                            [
                                20,
                                2530
                            ],
                            [
                                21,
                                2961
                            ],
                            [
                                22,
                                3224
                            ],
                            [
                                23,
                                2637
                            ]
                        ],
                        "hoverAnimation": true,
                        "label": {
                            "show": true,
                            "position": "top",
                            "margin": 8
                        },
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        },
                        "areaStyle": {
                            "opacity": 0
                        },
                        "zlevel": 0,
                        "z": 0
                    },
                    {
                        "type": "line",
                        "name": "\u52a0\u8d2d\u6570",
                        "connectNulls": false,
                        "yAxisIndex": 1,
                        "symbolSize": 4,
                        "showSymbol": true,
                        "smooth": true,
                        "step": false,
                        "data": [
                            [
                                0,
                                3104
                            ],
                            [
                                1,
                                1448
                            ],
                            [
                                2,
                                711
                            ],
                            [
                                3,
                                502
                            ],
                            [
                                4,
                                388
                            ],
                            [
                                5,
                                497
                            ],
                            [
                                6,
                                1035
                            ],
                            [
                                7,
                                2204
                            ],
                            [
                                8,
                                2916
                            ],
                            [
                                9,
                                3347
                            ],
                            [
                                10,
                                3771
                            ],
                            [
                                11,
                                3664
                            ],
                            [
                                12,
                                3387
                            ],
                            [
                                13,
                                3681
                            ],
                            [
                                14,
                                3771
                            ],
                            [
                                15,
                                3973
                            ],
                            [
                                16,
                                4062
                            ],
                            [
                                17,
                                3561
                            ],
                            [
                                18,
                                3532
                            ],
                            [
                                19,
                                4221
                            ],
                            [
                                20,
                                5527
                            ],
                            [
                                21,
                                6430
                            ],
                            [
                                22,
                                6867
                            ],
                            [
                                23,
                                5143
                            ]
                        ],
                        "hoverAnimation": true,
                        "label": {
                            "show": true,
                            "position": "top",
                            "margin": 8
                        },
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        },
                        "areaStyle": {
                            "opacity": 0
                        },
                        "zlevel": 0,
                        "z": 0
                    },
                    {
                        "type": "line",
                        "name": "\u8d2d\u4e70\u6570\u91cf",
                        "connectNulls": false,
                        "yAxisIndex": 1,
                        "symbolSize": 4,
                        "showSymbol": true,
                        "smooth": true,
                        "step": false,
                        "data": [
                            [
                                0,
                                796
                            ],
                            [
                                1,
                                350
                            ],
                            [
                                2,
                                148
                            ],
                            [
                                3,
                                130
                            ],
                            [
                                4,
                                82
                            ],
                            [
                                5,
                                82
                            ],
                            [
                                6,
                                195
                            ],
                            [
                                7,
                                459
                            ],
                            [
                                8,
                                814
                            ],
                            [
                                9,
                                1177
                            ],
                            [
                                10,
                                1783
                            ],
                            [
                                11,
                                1559
                            ],
                            [
                                12,
                                1477
                            ],
                            [
                                13,
                                1497
                            ],
                            [
                                14,
                                1615
                            ],
                            [
                                15,
                                1619
                            ],
                            [
                                16,
                                1512
                            ],
                            [
                                17,
                                1355
                            ],
                            [
                                18,
                                1201
                            ],
                            [
                                19,
                                1452
                            ],
                            [
                                20,
                                1661
                            ],
                            [
                                21,
                                1832
                            ],
                            [
                                22,
                                1657
                            ],
                            [
                                23,
                                1209
                            ]
                        ],
                        "hoverAnimation": true,
                        "label": {
                            "show": true,
                            "position": "top",
                            "margin": 8
                        },
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        },
                        "areaStyle": {
                            "opacity": 0
                        },
                        "zlevel": 0,
                        "z": 0
                    }
                ],
                "timeline": {
                    "axisType": "category",
                    "orient": "horizontal",
                    "autoPlay": false,
                    "controlPosition": "left",
                    "loop": true,
                    "rewind": false,
                    "show": true,
                    "inverse": false,
                    "bottom": "-5px",
                    "data": [
                        "2017-11-25",
                        "2017-11-26",
                        "2017-11-27",
                        "2017-11-28",
                        "2017-11-29",
                        "2017-11-30",
                        "2017-12-01",
                        "2017-12-02",
                        "2017-12-03"
                    ]
                },
                "xAxis": [
                    {
                        "show": true,
                        "scale": false,
                        "nameLocation": "end",
                        "nameGap": 15,
                        "gridIndex": 0,
                        "inverse": false,
                        "offset": 0,
                        "splitNumber": 5,
                        "minInterval": 0,
                        "splitLine": {
                            "show": false,
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            }
                        },
                        "data": [
                            0,
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9,
                            10,
                            11,
                            12,
                            13,
                            14,
                            15,
                            16,
                            17,
                            18,
                            19,
                            20,
                            21,
                            22,
                            23
                        ]
                    }
                ],
                "yAxis": [
                    {
                        "show": true,
                        "scale": false,
                        "nameLocation": "end",
                        "nameGap": 15,
                        "gridIndex": 0,
                        "axisLabel": {
                            "show": true,
                            "position": "top",
                            "margin": 8,
                            "formatter": "{value}/\u6b21"
                        },
                        "inverse": false,
                        "offset": 0,
                        "splitNumber": 5,
                        "minInterval": 0,
                        "splitLine": {
                            "show": false,
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            }
                        }
                    },
                    {
                        "show": true,
                        "scale": false,
                        "nameLocation": "end",
                        "nameGap": 15,
                        "gridIndex": 0,
                        "axisLabel": {
                            "show": true,
                            "position": "top",
                            "margin": 8,
                            "formatter": "{value}/\u6b21"
                        },
                        "inverse": false,
                        "offset": 0,
                        "splitNumber": 5,
                        "minInterval": 0,
                        "splitLine": {
                            "show": false,
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            }
                        }
                    }
                ]
            },
            "options": [
                {
                    "legend": [
                        {
                            "data": [
                                "\u6d4f\u89c8\u4eba\u6570",
                                "\u6536\u85cf\u6570",
                                "\u52a0\u8d2d\u6570",
                                "\u8d2d\u4e70\u6570\u91cf"
                            ],
                            "selected": {
                                "\u6d4f\u89c8\u4eba\u6570": true
                            },
                            "show": true,
                            "padding": 5,
                            "itemGap": 10,
                            "itemWidth": 25,
                            "itemHeight": 14
                        }
                    ],
                    "series": [
                        {
                            "type": "bar",
                            "name": "\u6d4f\u89c8\u4eba\u6570",
                            "data": [
                                30951,
                                14204,
                                7652,
                                5258,
                                4611,
                                5919,
                                12812,
                                24766,
                                32271,
                                37809,
                                43798,
                                43496,
                                42511,
                                46815,
                                47873,
                                50283,
                                49800,
                                45615,
                                46584,
                                57656,
                                69969,
                                77911,
                                76734,
                                59764
                            ],
                            "barCategoryGap": "20%",
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            }
                        },
                        {
                            "type": "line",
                            "name": "\u6536\u85cf\u6570",
                            "connectNulls": false,
                            "yAxisIndex": 1,
                            "symbolSize": 4,
                            "showSymbol": true,
                            "smooth": true,
                            "step": false,
                            "data": [
                                [
                                    0,
                                    1070
                                ],
                                [
                                    1,
                                    541
                                ],
                                [
                                    2,
                                    286
                                ],
                                [
                                    3,
                                    158
                                ],
                                [
                                    4,
                                    143
                                ],
                                [
                                    5,
                                    171
                                ],
                                [
                                    6,
                                    439
                                ],
                                [
                                    7,
                                    797
                                ],
                                [
                                    8,
                                    1072
                                ],
                                [
                                    9,
                                    1272
                                ],
                                [
                                    10,
                                    1511
                                ],
                                [
                                    11,
                                    1466
                                ],
                                [
                                    12,
                                    1356
                                ],
                                [
                                    13,
                                    1515
                                ],
                                [
                                    14,
                                    1537
                                ],
                                [
                                    15,
                                    1649
                                ],
                                [
                                    16,
                                    1687
                                ],
                                [
                                    17,
                                    1514
                                ],
                                [
                                    18,
                                    1448
                                ],
                                [
                                    19,
                                    1710
                                ],
                                [
                                    20,
                                    2061
                                ],
                                [
                                    21,
                                    2385
                                ],
                                [
                                    22,
                                    2378
                                ],
                                [
                                    23,
                                    2106
                                ]
                            ],
                            "hoverAnimation": true,
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            },
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            },
                            "areaStyle": {
                                "opacity": 0
                            },
                            "zlevel": 0,
                            "z": 0
                        },
                        {
                            "type": "line",
                            "name": "\u52a0\u8d2d\u6570",
                            "connectNulls": false,
                            "yAxisIndex": 1,
                            "symbolSize": 4,
                            "showSymbol": true,
                            "smooth": true,
                            "step": false,
                            "data": [
                                [
                                    0,
                                    1761
                                ],
                                [
                                    1,
                                    862
                                ],
                                [
                                    2,
                                    504
                                ],
                                [
                                    3,
                                    350
                                ],
                                [
                                    4,
                                    315
                                ],
                                [
                                    5,
                                    396
                                ],
                                [
                                    6,
                                    817
                                ],
                                [
                                    7,
                                    1581
                                ],
                                [
                                    8,
                                    1952
                                ],
                                [
                                    9,
                                    2324
                                ],
                                [
                                    10,
                                    2698
                                ],
                                [
                                    11,
                                    2590
                                ],
                                [
                                    12,
                                    2492
                                ],
                                [
                                    13,
                                    2746
                                ],
                                [
                                    14,
                                    2835
                                ],
                                [
                                    15,
                                    2876
                                ],
                                [
                                    16,
                                    2786
                                ],
                                [
                                    17,
                                    2831
                                ],
                                [
                                    18,
                                    2705
                                ],
                                [
                                    19,
                                    3207
                                ],
                                [
                                    20,
                                    4104
                                ],
                                [
                                    21,
                                    4695
                                ],
                                [
                                    22,
                                    4813
                                ],
                                [
                                    23,
                                    4097
                                ]
                            ],
                            "hoverAnimation": true,
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            },
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            },
                            "areaStyle": {
                                "opacity": 0
                            },
                            "zlevel": 0,
                            "z": 0
                        },
                        {
                            "type": "line",
                            "name": "\u8d2d\u4e70\u6570\u91cf",
                            "connectNulls": false,
                            "yAxisIndex": 1,
                            "symbolSize": 4,
                            "showSymbol": true,
                            "smooth": true,
                            "step": false,
                            "data": [
                                [
                                    0,
                                    582
                                ],
                                [
                                    1,
                                    219
                                ],
                                [
                                    2,
                                    127
                                ],
                                [
                                    3,
                                    81
                                ],
                                [
                                    4,
                                    68
                                ],
                                [
                                    5,
                                    77
                                ],
                                [
                                    6,
                                    167
                                ],
                                [
                                    7,
                                    416
                                ],
                                [
                                    8,
                                    640
                                ],
                                [
                                    9,
                                    948
                                ],
                                [
                                    10,
                                    1168
                                ],
                                [
                                    11,
                                    1207
                                ],
                                [
                                    12,
                                    1089
                                ],
                                [
                                    13,
                                    1257
                                ],
                                [
                                    14,
                                    1223
                                ],
                                [
                                    15,
                                    1300
                                ],
                                [
                                    16,
                                    1188
                                ],
                                [
                                    17,
                                    1045
                                ],
                                [
                                    18,
                                    996
                                ],
                                [
                                    19,
                                    1152
                                ],
                                [
                                    20,
                                    1296
                                ],
                                [
                                    21,
                                    1499
                                ],
                                [
                                    22,
                                    1343
                                ],
                                [
                                    23,
                                    1035
                                ]
                            ],
                            "hoverAnimation": true,
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            },
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            },
                            "areaStyle": {
                                "opacity": 0
                            },
                            "zlevel": 0,
                            "z": 0
                        }
                    ],
                    "xAxis": [
                        {
                            "show": true,
                            "scale": false,
                            "nameLocation": "end",
                            "nameGap": 15,
                            "gridIndex": 0,
                            "inverse": false,
                            "offset": 0,
                            "splitNumber": 5,
                            "minInterval": 0,
                            "splitLine": {
                                "show": false,
                                "lineStyle": {
                                    "show": true,
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid"
                                }
                            },
                            "data": [
                                0,
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8,
                                9,
                                10,
                                11,
                                12,
                                13,
                                14,
                                15,
                                16,
                                17,
                                18,
                                19,
                                20,
                                21,
                                22,
                                23
                            ]
                        }
                    ],
                    "yAxis": [
                        {
                            "show": true,
                            "scale": false,
                            "nameLocation": "end",
                            "nameGap": 15,
                            "gridIndex": 0,
                            "axisLabel": {
                                "show": true,
                                "position": "top",
                                "margin": 8,
                                "formatter": "{value}/\u6b21"
                            },
                            "inverse": false,
                            "offset": 0,
                            "splitNumber": 5,
                            "minInterval": 0,
                            "splitLine": {
                                "show": false,
                                "lineStyle": {
                                    "show": true,
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "show": true,
                            "scale": false,
                            "nameLocation": "end",
                            "nameGap": 15,
                            "gridIndex": 0,
                            "axisLabel": {
                                "show": true,
                                "position": "top",
                                "margin": 8,
                                "formatter": "{value}/\u6b21"
                            },
                            "inverse": false,
                            "offset": 0,
                            "splitNumber": 5,
                            "minInterval": 0,
                            "splitLine": {
                                "show": false,
                                "lineStyle": {
                                    "show": true,
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid"
                                }
                            }
                        }
                    ],
                    "title": [
                        {
                            "text": "2017-11-25\u65e5\u5404\u65f6\u95f4\u6bb5\u7528\u6237\u884c\u4e3a\u5206\u6790",
                            "padding": 5,
                            "itemGap": 10
                        }
                    ],
                    "tooltip": {
                        "show": true,
                        "trigger": "item",
                        "triggerOn": "mousemove|click",
                        "axisPointer": {
                            "type": "line"
                        },
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0
                    },
                    "color": [
                        "#c23531",
                        "#2f4554",
                        "#61a0a8",
                        "#d48265",
                        "#749f83",
                        "#ca8622",
                        "#bda29a",
                        "#6e7074",
                        "#546570",
                        "#c4ccd3",
                        "#f05b72",
                        "#ef5b9c",
                        "#f47920",
                        "#905a3d",
                        "#fab27b",
                        "#2a5caa",
                        "#444693",
                        "#726930",
                        "#b2d235",
                        "#6d8346",
                        "#ac6767",
                        "#1d953f",
                        "#6950a1",
                        "#918597"
                    ]
                },
                {
                    "legend": [
                        {
                            "data": [
                                "\u6d4f\u89c8\u4eba\u6570",
                                "\u6536\u85cf\u6570",
                                "\u52a0\u8d2d\u6570",
                                "\u8d2d\u4e70\u6570\u91cf"
                            ],
                            "selected": {
                                "\u6d4f\u89c8\u4eba\u6570": true
                            },
                            "show": true,
                            "padding": 5,
                            "itemGap": 10,
                            "itemWidth": 25,
                            "itemHeight": 14
                        }
                    ],
                    "series": [
                        {
                            "type": "bar",
                            "name": "\u6d4f\u89c8\u4eba\u6570",
                            "data": [
                                34662,
                                16769,
                                8828,
                                5648,
                                4760,
                                5887,
                                12325,
                                25825,
                                34205,
                                39954,
                                45808,
                                45115,
                                42721,
                                46431,
                                48535,
                                50054,
                                50027,
                                45821,
                                46075,
                                58325,
                                71075,
                                81196,
                                78765,
                                58574
                            ],
                            "barCategoryGap": "20%",
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            }
                        },
                        {
                            "type": "line",
                            "name": "\u6536\u85cf\u6570",
                            "connectNulls": false,
                            "yAxisIndex": 1,
                            "symbolSize": 4,
                            "showSymbol": true,
                            "smooth": true,
                            "step": false,
                            "data": [
                                [
                                    0,
                                    1250
                                ],
                                [
                                    1,
                                    597
                                ],
                                [
                                    2,
                                    321
                                ],
                                [
                                    3,
                                    193
                                ],
                                [
                                    4,
                                    188
                                ],
                                [
                                    5,
                                    200
                                ],
                                [
                                    6,
                                    347
                                ],
                                [
                                    7,
                                    832
                                ],
                                [
                                    8,
                                    1125
                                ],
                                [
                                    9,
                                    1409
                                ],
                                [
                                    10,
                                    1585
                                ],
                                [
                                    11,
                                    1564
                                ],
                                [
                                    12,
                                    1440
                                ],
                                [
                                    13,
                                    1549
                                ],
                                [
                                    14,
                                    1575
                                ],
                                [
                                    15,
                                    1544
                                ],
                                [
                                    16,
                                    1571
                                ],
                                [
                                    17,
                                    1490
                                ],
                                [
                                    18,
                                    1490
                                ],
                                [
                                    19,
                                    1693
                                ],
                                [
                                    20,
                                    2075
                                ],
                                [
                                    21,
                                    2296
                                ],
                                [
                                    22,
                                    2382
                                ],
                                [
                                    23,
                                    1974
                                ]
                            ],
                            "hoverAnimation": true,
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            },
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            },
                            "areaStyle": {
                                "opacity": 0
                            },
                            "zlevel": 0,
                            "z": 0
                        },
                        {
                            "type": "line",
                            "name": "\u52a0\u8d2d\u6570",
                            "connectNulls": false,
                            "yAxisIndex": 1,
                            "symbolSize": 4,
                            "showSymbol": true,
                            "smooth": true,
                            "step": false,
                            "data": [
                                [
                                    0,
                                    1990
                                ],
                                [
                                    1,
                                    996
                                ],
                                [
                                    2,
                                    520
                                ],
                                [
                                    3,
                                    364
                                ],
                                [
                                    4,
                                    280
                                ],
                                [
                                    5,
                                    384
                                ],
                                [
                                    6,
                                    787
                                ],
                                [
                                    7,
                                    1709
                                ],
                                [
                                    8,
                                    2045
                                ],
                                [
                                    9,
                                    2482
                                ],
                                [
                                    10,
                                    2754
                                ],
                                [
                                    11,
                                    2709
                                ],
                                [
                                    12,
                                    2450
                                ],
                                [
                                    13,
                                    2658
                                ],
                                [
                                    14,
                                    2838
                                ],
                                [
                                    15,
                                    2927
                                ],
                                [
                                    16,
                                    2895
                                ],
                                [
                                    17,
                                    2657
                                ],
                                [
                                    18,
                                    2683
                                ],
                                [
                                    19,
                                    3341
                                ],
                                [
                                    20,
                                    4098
                                ],
                                [
                                    21,
                                    4973
                                ],
                                [
                                    22,
                                    5236
                                ],
                                [
                                    23,
                                    4116
                                ]
                            ],
                            "hoverAnimation": true,
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            },
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            },
                            "areaStyle": {
                                "opacity": 0
                            },
                            "zlevel": 0,
                            "z": 0
                        },
                        {
                            "type": "line",
                            "name": "\u8d2d\u4e70\u6570\u91cf",
                            "connectNulls": false,
                            "yAxisIndex": 1,
                            "symbolSize": 4,
                            "showSymbol": true,
                            "smooth": true,
                            "step": false,
                            "data": [
                                [
                                    0,
                                    519
                                ],
                                [
                                    1,
                                    274
                                ],
                                [
                                    2,
                                    128
                                ],
                                [
                                    3,
                                    90
                                ],
                                [
                                    4,
                                    70
                                ],
                                [
                                    5,
                                    78
                                ],
                                [
                                    6,
                                    146
                                ],
                                [
                                    7,
                                    408
                                ],
                                [
                                    8,
                                    695
                                ],
                                [
                                    9,
                                    945
                                ],
                                [
                                    10,
                                    1203
                                ],
                                [
                                    11,
                                    1239
                                ],
                                [
                                    12,
                                    1163
                                ],
                                [
                                    13,
                                    1216
                                ],
                                [
                                    14,
                                    1265
                                ],
                                [
                                    15,
                                    1212
                                ],
                                [
                                    16,
                                    1255
                                ],
                                [
                                    17,
                                    1083
                                ],
                                [
                                    18,
                                    1012
                                ],
                                [
                                    19,
                                    1169
                                ],
                                [
                                    20,
                                    1422
                                ],
                                [
                                    21,
                                    1610
                                ],
                                [
                                    22,
                                    1445
                                ],
                                [
                                    23,
                                    1063
                                ]
                            ],
                            "hoverAnimation": true,
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            },
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            },
                            "areaStyle": {
                                "opacity": 0
                            },
                            "zlevel": 0,
                            "z": 0
                        }
                    ],
                    "xAxis": [
                        {
                            "show": true,
                            "scale": false,
                            "nameLocation": "end",
                            "nameGap": 15,
                            "gridIndex": 0,
                            "inverse": false,
                            "offset": 0,
                            "splitNumber": 5,
                            "minInterval": 0,
                            "splitLine": {
                                "show": false,
                                "lineStyle": {
                                    "show": true,
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid"
                                }
                            },
                            "data": [
                                0,
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8,
                                9,
                                10,
                                11,
                                12,
                                13,
                                14,
                                15,
                                16,
                                17,
                                18,
                                19,
                                20,
                                21,
                                22,
                                23
                            ]
                        }
                    ],
                    "yAxis": [
                        {
                            "show": true,
                            "scale": false,
                            "nameLocation": "end",
                            "nameGap": 15,
                            "gridIndex": 0,
                            "axisLabel": {
                                "show": true,
                                "position": "top",
                                "margin": 8,
                                "formatter": "{value}/\u6b21"
                            },
                            "inverse": false,
                            "offset": 0,
                            "splitNumber": 5,
                            "minInterval": 0,
                            "splitLine": {
                                "show": false,
                                "lineStyle": {
                                    "show": true,
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "show": true,
                            "scale": false,
                            "nameLocation": "end",
                            "nameGap": 15,
                            "gridIndex": 0,
                            "axisLabel": {
                                "show": true,
                                "position": "top",
                                "margin": 8,
                                "formatter": "{value}/\u6b21"
                            },
                            "inverse": false,
                            "offset": 0,
                            "splitNumber": 5,
                            "minInterval": 0,
                            "splitLine": {
                                "show": false,
                                "lineStyle": {
                                    "show": true,
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid"
                                }
                            }
                        }
                    ],
                    "title": [
                        {
                            "text": "2017-11-26\u65e5\u5404\u65f6\u95f4\u6bb5\u7528\u6237\u884c\u4e3a\u5206\u6790",
                            "padding": 5,
                            "itemGap": 10
                        }
                    ],
                    "tooltip": {
                        "show": true,
                        "trigger": "item",
                        "triggerOn": "mousemove|click",
                        "axisPointer": {
                            "type": "line"
                        },
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0
                    },
                    "color": [
                        "#c23531",
                        "#2f4554",
                        "#61a0a8",
                        "#d48265",
                        "#749f83",
                        "#ca8622",
                        "#bda29a",
                        "#6e7074",
                        "#546570",
                        "#c4ccd3",
                        "#f05b72",
                        "#ef5b9c",
                        "#f47920",
                        "#905a3d",
                        "#fab27b",
                        "#2a5caa",
                        "#444693",
                        "#726930",
                        "#b2d235",
                        "#6d8346",
                        "#ac6767",
                        "#1d953f",
                        "#6950a1",
                        "#918597"
                    ]
                },
                {
                    "legend": [
                        {
                            "data": [
                                "\u6d4f\u89c8\u4eba\u6570",
                                "\u6536\u85cf\u6570",
                                "\u52a0\u8d2d\u6570",
                                "\u8d2d\u4e70\u6570\u91cf"
                            ],
                            "selected": {
                                "\u6d4f\u89c8\u4eba\u6570": true
                            },
                            "show": true,
                            "padding": 5,
                            "itemGap": 10,
                            "itemWidth": 25,
                            "itemHeight": 14
                        }
                    ],
                    "series": [
                        {
                            "type": "bar",
                            "name": "\u6d4f\u89c8\u4eba\u6570",
                            "data": [
                                33210,
                                14549,
                                7679,
                                5373,
                                4589,
                                5924,
                                12793,
                                21344,
                                29007,
                                37261,
                                45093,
                                42853,
                                45371,
                                49477,
                                47576,
                                47357,
                                44872,
                                40880,
                                41854,
                                54045,
                                66365,
                                76578,
                                75004,
                                54415
                            ],
                            "barCategoryGap": "20%",
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            }
                        },
                        {
                            "type": "line",
                            "name": "\u6536\u85cf\u6570",
                            "connectNulls": false,
                            "yAxisIndex": 1,
                            "symbolSize": 4,
                            "showSymbol": true,
                            "smooth": true,
                            "step": false,
                            "data": [
                                [
                                    0,
                                    1139
                                ],
                                [
                                    1,
                                    541
                                ],
                                [
                                    2,
                                    280
                                ],
                                [
                                    3,
                                    200
                                ],
                                [
                                    4,
                                    148
                                ],
                                [
                                    5,
                                    199
                                ],
                                [
                                    6,
                                    406
                                ],
                                [
                                    7,
                                    714
                                ],
                                [
                                    8,
                                    1053
                                ],
                                [
                                    9,
                                    1267
                                ],
                                [
                                    10,
                                    1583
                                ],
                                [
                                    11,
                                    1439
                                ],
                                [
                                    12,
                                    1511
                                ],
                                [
                                    13,
                                    1579
                                ],
                                [
                                    14,
                                    1543
                                ],
                                [
                                    15,
                                    1496
                                ],
                                [
                                    16,
                                    1448
                                ],
                                [
                                    17,
                                    1402
                                ],
                                [
                                    18,
                                    1263
                                ],
                                [
                                    19,
                                    1610
                                ],
                                [
                                    20,
                                    1885
                                ],
                                [
                                    21,
                                    2215
                                ],
                                [
                                    22,
                                    2305
                                ],
                                [
                                    23,
                                    1937
                                ]
                            ],
                            "hoverAnimation": true,
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            },
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            },
                            "areaStyle": {
                                "opacity": 0
                            },
                            "zlevel": 0,
                            "z": 0
                        },
                        {
                            "type": "line",
                            "name": "\u52a0\u8d2d\u6570",
                            "connectNulls": false,
                            "yAxisIndex": 1,
                            "symbolSize": 4,
                            "showSymbol": true,
                            "smooth": true,
                            "step": false,
                            "data": [
                                [
                                    0,
                                    1926
                                ],
                                [
                                    1,
                                    847
                                ],
                                [
                                    2,
                                    480
                                ],
                                [
                                    3,
                                    341
                                ],
                                [
                                    4,
                                    257
                                ],
                                [
                                    5,
                                    359
                                ],
                                [
                                    6,
                                    812
                                ],
                                [
                                    7,
                                    1316
                                ],
                                [
                                    8,
                                    1800
                                ],
                                [
                                    9,
                                    2223
                                ],
                                [
                                    10,
                                    2602
                                ],
                                [
                                    11,
                                    2635
                                ],
                                [
                                    12,
                                    2653
                                ],
                                [
                                    13,
                                    2878
                                ],
                                [
                                    14,
                                    2743
                                ],
                                [
                                    15,
                                    2810
                                ],
                                [
                                    16,
                                    2698
                                ],
                                [
                                    17,
                                    2484
                                ],
                                [
                                    18,
                                    2401
                                ],
                                [
                                    19,
                                    2993
                                ],
                                [
                                    20,
                                    3825
                                ],
                                [
                                    21,
                                    4613
                                ],
                                [
                                    22,
                                    4726
                                ],
                                [
                                    23,
                                    3745
                                ]
                            ],
                            "hoverAnimation": true,
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            },
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            },
                            "areaStyle": {
                                "opacity": 0
                            },
                            "zlevel": 0,
                            "z": 0
                        },
                        {
                            "type": "line",
                            "name": "\u8d2d\u4e70\u6570\u91cf",
                            "connectNulls": false,
                            "yAxisIndex": 1,
                            "symbolSize": 4,
                            "showSymbol": true,
                            "smooth": true,
                            "step": false,
                            "data": [
                                [
                                    0,
                                    1176
                                ],
                                [
                                    1,
                                    287
                                ],
                                [
                                    2,
                                    115
                                ],
                                [
                                    3,
                                    107
                                ],
                                [
                                    4,
                                    74
                                ],
                                [
                                    5,
                                    87
                                ],
                                [
                                    6,
                                    241
                                ],
                                [
                                    7,
                                    477
                                ],
                                [
                                    8,
                                    786
                                ],
                                [
                                    9,
                                    1107
                                ],
                                [
                                    10,
                                    1419
                                ],
                                [
                                    11,
                                    1332
                                ],
                                [
                                    12,
                                    1357
                                ],
                                [
                                    13,
                                    1418
                                ],
                                [
                                    14,
                                    1371
                                ],
                                [
                                    15,
                                    1306
                                ],
                                [
                                    16,
                                    1250
                                ],
                                [
                                    17,
                                    1100
                                ],
                                [
                                    18,
                                    1027
                                ],
                                [
                                    19,
                                    1273
                                ],
                                [
                                    20,
                                    1432
                                ],
                                [
                                    21,
                                    1627
                                ],
                                [
                                    22,
                                    1451
                                ],
                                [
                                    23,
                                    1034
                                ]
                            ],
                            "hoverAnimation": true,
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            },
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            },
                            "areaStyle": {
                                "opacity": 0
                            },
                            "zlevel": 0,
                            "z": 0
                        }
                    ],
                    "xAxis": [
                        {
                            "show": true,
                            "scale": false,
                            "nameLocation": "end",
                            "nameGap": 15,
                            "gridIndex": 0,
                            "inverse": false,
                            "offset": 0,
                            "splitNumber": 5,
                            "minInterval": 0,
                            "splitLine": {
                                "show": false,
                                "lineStyle": {
                                    "show": true,
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid"
                                }
                            },
                            "data": [
                                0,
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8,
                                9,
                                10,
                                11,
                                12,
                                13,
                                14,
                                15,
                                16,
                                17,
                                18,
                                19,
                                20,
                                21,
                                22,
                                23
                            ]
                        }
                    ],
                    "yAxis": [
                        {
                            "show": true,
                            "scale": false,
                            "nameLocation": "end",
                            "nameGap": 15,
                            "gridIndex": 0,
                            "axisLabel": {
                                "show": true,
                                "position": "top",
                                "margin": 8,
                                "formatter": "{value}/\u6b21"
                            },
                            "inverse": false,
                            "offset": 0,
                            "splitNumber": 5,
                            "minInterval": 0,
                            "splitLine": {
                                "show": false,
                                "lineStyle": {
                                    "show": true,
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "show": true,
                            "scale": false,
                            "nameLocation": "end",
                            "nameGap": 15,
                            "gridIndex": 0,
                            "axisLabel": {
                                "show": true,
                                "position": "top",
                                "margin": 8,
                                "formatter": "{value}/\u6b21"
                            },
                            "inverse": false,
                            "offset": 0,
                            "splitNumber": 5,
                            "minInterval": 0,
                            "splitLine": {
                                "show": false,
                                "lineStyle": {
                                    "show": true,
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid"
                                }
                            }
                        }
                    ],
                    "title": [
                        {
                            "text": "2017-11-27\u65e5\u5404\u65f6\u95f4\u6bb5\u7528\u6237\u884c\u4e3a\u5206\u6790",
                            "padding": 5,
                            "itemGap": 10
                        }
                    ],
                    "tooltip": {
                        "show": true,
                        "trigger": "item",
                        "triggerOn": "mousemove|click",
                        "axisPointer": {
                            "type": "line"
                        },
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0
                    },
                    "color": [
                        "#c23531",
                        "#2f4554",
                        "#61a0a8",
                        "#d48265",
                        "#749f83",
                        "#ca8622",
                        "#bda29a",
                        "#6e7074",
                        "#546570",
                        "#c4ccd3",
                        "#f05b72",
                        "#ef5b9c",
                        "#f47920",
                        "#905a3d",
                        "#fab27b",
                        "#2a5caa",
                        "#444693",
                        "#726930",
                        "#b2d235",
                        "#6d8346",
                        "#ac6767",
                        "#1d953f",
                        "#6950a1",
                        "#918597"
                    ]
                },
                {
                    "legend": [
                        {
                            "data": [
                                "\u6d4f\u89c8\u4eba\u6570",
                                "\u6536\u85cf\u6570",
                                "\u52a0\u8d2d\u6570",
                                "\u8d2d\u4e70\u6570\u91cf"
                            ],
                            "selected": {
                                "\u6d4f\u89c8\u4eba\u6570": true
                            },
                            "show": true,
                            "padding": 5,
                            "itemGap": 10,
                            "itemWidth": 25,
                            "itemHeight": 14
                        }
                    ],
                    "series": [
                        {
                            "type": "bar",
                            "name": "\u6d4f\u89c8\u4eba\u6570",
                            "data": [
                                27967,
                                12660,
                                7115,
                                4891,
                                4553,
                                6044,
                                13252,
                                21458,
                                29060,
                                38112,
                                44018,
                                42268,
                                44542,
                                48302,
                                47053,
                                47311,
                                44579,
                                39910,
                                41875,
                                53738,
                                64854,
                                74401,
                                73744,
                                53068
                            ],
                            "barCategoryGap": "20%",
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            }
                        },
                        {
                            "type": "line",
                            "name": "\u6536\u85cf\u6570",
                            "connectNulls": false,
                            "yAxisIndex": 1,
                            "symbolSize": 4,
                            "showSymbol": true,
                            "smooth": true,
                            "step": false,
                            "data": [
                                [
                                    0,
                                    1096
                                ],
                                [
                                    1,
                                    433
                                ],
                                [
                                    2,
                                    247
                                ],
                                [
                                    3,
                                    165
                                ],
                                [
                                    4,
                                    137
                                ],
                                [
                                    5,
                                    205
                                ],
                                [
                                    6,
                                    435
                                ],
                                [
                                    7,
                                    752
                                ],
                                [
                                    8,
                                    1050
                                ],
                                [
                                    9,
                                    1363
                                ],
                                [
                                    10,
                                    1543
                                ],
                                [
                                    11,
                                    1439
                                ],
                                [
                                    12,
                                    1488
                                ],
                                [
                                    13,
                                    1577
                                ],
                                [
                                    14,
                                    1472
                                ],
                                [
                                    15,
                                    1479
                                ],
                                [
                                    16,
                                    1516
                                ],
                                [
                                    17,
                                    1362
                                ],
                                [
                                    18,
                                    1324
                                ],
                                [
                                    19,
                                    1610
                                ],
                                [
                                    20,
                                    1891
                                ],
                                [
                                    21,
                                    2134
                                ],
                                [
                                    22,
                                    2381
                                ],
                                [
                                    23,
                                    1910
                                ]
                            ],
                            "hoverAnimation": true,
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            },
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            },
                            "areaStyle": {
                                "opacity": 0
                            },
                            "zlevel": 0,
                            "z": 0
                        },
                        {
                            "type": "line",
                            "name": "\u52a0\u8d2d\u6570",
                            "connectNulls": false,
                            "yAxisIndex": 1,
                            "symbolSize": 4,
                            "showSymbol": true,
                            "smooth": true,
                            "step": false,
                            "data": [
                                [
                                    0,
                                    1668
                                ],
                                [
                                    1,
                                    757
                                ],
                                [
                                    2,
                                    405
                                ],
                                [
                                    3,
                                    316
                                ],
                                [
                                    4,
                                    281
                                ],
                                [
                                    5,
                                    384
                                ],
                                [
                                    6,
                                    888
                                ],
                                [
                                    7,
                                    1392
                                ],
                                [
                                    8,
                                    1744
                                ],
                                [
                                    9,
                                    2291
                                ],
                                [
                                    10,
                                    2606
                                ],
                                [
                                    11,
                                    2662
                                ],
                                [
                                    12,
                                    2585
                                ],
                                [
                                    13,
                                    2901
                                ],
                                [
                                    14,
                                    2757
                                ],
                                [
                                    15,
                                    2751
                                ],
                                [
                                    16,
                                    2708
                                ],
                                [
                                    17,
                                    2371
                                ],
                                [
                                    18,
                                    2412
                                ],
                                [
                                    19,
                                    3116
                                ],
                                [
                                    20,
                                    3638
                                ],
                                [
                                    21,
                                    4510
                                ],
                                [
                                    22,
                                    4674
                                ],
                                [
                                    23,
                                    3620
                                ]
                            ],
                            "hoverAnimation": true,
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            },
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            },
                            "areaStyle": {
                                "opacity": 0
                            },
                            "zlevel": 0,
                            "z": 0
                        },
                        {
                            "type": "line",
                            "name": "\u8d2d\u4e70\u6570\u91cf",
                            "connectNulls": false,
                            "yAxisIndex": 1,
                            "symbolSize": 4,
                            "showSymbol": true,
                            "smooth": true,
                            "step": false,
                            "data": [
                                [
                                    0,
                                    512
                                ],
                                [
                                    1,
                                    215
                                ],
                                [
                                    2,
                                    115
                                ],
                                [
                                    3,
                                    85
                                ],
                                [
                                    4,
                                    65
                                ],
                                [
                                    5,
                                    88
                                ],
                                [
                                    6,
                                    224
                                ],
                                [
                                    7,
                                    424
                                ],
                                [
                                    8,
                                    703
                                ],
                                [
                                    9,
                                    1045
                                ],
                                [
                                    10,
                                    1376
                                ],
                                [
                                    11,
                                    1263
                                ],
                                [
                                    12,
                                    1273
                                ],
                                [
                                    13,
                                    1290
                                ],
                                [
                                    14,
                                    1281
                                ],
                                [
                                    15,
                                    1339
                                ],
                                [
                                    16,
                                    1214
                                ],
                                [
                                    17,
                                    1028
                                ],
                                [
                                    18,
                                    947
                                ],
                                [
                                    19,
                                    1179
                                ],
                                [
                                    20,
                                    1452
                                ],
                                [
                                    21,
                                    1547
                                ],
                                [
                                    22,
                                    1504
                                ],
                                [
                                    23,
                                    1033
                                ]
                            ],
                            "hoverAnimation": true,
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            },
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            },
                            "areaStyle": {
                                "opacity": 0
                            },
                            "zlevel": 0,
                            "z": 0
                        }
                    ],
                    "xAxis": [
                        {
                            "show": true,
                            "scale": false,
                            "nameLocation": "end",
                            "nameGap": 15,
                            "gridIndex": 0,
                            "inverse": false,
                            "offset": 0,
                            "splitNumber": 5,
                            "minInterval": 0,
                            "splitLine": {
                                "show": false,
                                "lineStyle": {
                                    "show": true,
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid"
                                }
                            },
                            "data": [
                                0,
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8,
                                9,
                                10,
                                11,
                                12,
                                13,
                                14,
                                15,
                                16,
                                17,
                                18,
                                19,
                                20,
                                21,
                                22,
                                23
                            ]
                        }
                    ],
                    "yAxis": [
                        {
                            "show": true,
                            "scale": false,
                            "nameLocation": "end",
                            "nameGap": 15,
                            "gridIndex": 0,
                            "axisLabel": {
                                "show": true,
                                "position": "top",
                                "margin": 8,
                                "formatter": "{value}/\u6b21"
                            },
                            "inverse": false,
                            "offset": 0,
                            "splitNumber": 5,
                            "minInterval": 0,
                            "splitLine": {
                                "show": false,
                                "lineStyle": {
                                    "show": true,
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "show": true,
                            "scale": false,
                            "nameLocation": "end",
                            "nameGap": 15,
                            "gridIndex": 0,
                            "axisLabel": {
                                "show": true,
                                "position": "top",
                                "margin": 8,
                                "formatter": "{value}/\u6b21"
                            },
                            "inverse": false,
                            "offset": 0,
                            "splitNumber": 5,
                            "minInterval": 0,
                            "splitLine": {
                                "show": false,
                                "lineStyle": {
                                    "show": true,
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid"
                                }
                            }
                        }
                    ],
                    "title": [
                        {
                            "text": "2017-11-28\u65e5\u5404\u65f6\u95f4\u6bb5\u7528\u6237\u884c\u4e3a\u5206\u6790",
                            "padding": 5,
                            "itemGap": 10
                        }
                    ],
                    "tooltip": {
                        "show": true,
                        "trigger": "item",
                        "triggerOn": "mousemove|click",
                        "axisPointer": {
                            "type": "line"
                        },
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0
                    },
                    "color": [
                        "#c23531",
                        "#2f4554",
                        "#61a0a8",
                        "#d48265",
                        "#749f83",
                        "#ca8622",
                        "#bda29a",
                        "#6e7074",
                        "#546570",
                        "#c4ccd3",
                        "#f05b72",
                        "#ef5b9c",
                        "#f47920",
                        "#905a3d",
                        "#fab27b",
                        "#2a5caa",
                        "#444693",
                        "#726930",
                        "#b2d235",
                        "#6d8346",
                        "#ac6767",
                        "#1d953f",
                        "#6950a1",
                        "#918597"
                    ]
                },
                {
                    "legend": [
                        {
                            "data": [
                                "\u6d4f\u89c8\u4eba\u6570",
                                "\u6536\u85cf\u6570",
                                "\u52a0\u8d2d\u6570",
                                "\u8d2d\u4e70\u6570\u91cf"
                            ],
                            "selected": {
                                "\u6d4f\u89c8\u4eba\u6570": true
                            },
                            "show": true,
                            "padding": 5,
                            "itemGap": 10,
                            "itemWidth": 25,
                            "itemHeight": 14
                        }
                    ],
                    "series": [
                        {
                            "type": "bar",
                            "name": "\u6d4f\u89c8\u4eba\u6570",
                            "data": [
                                27933,
                                12959,
                                7097,
                                5249,
                                4525,
                                6154,
                                13109,
                                21603,
                                30488,
                                38874,
                                46439,
                                44225,
                                46965,
                                51032,
                                49698,
                                49789,
                                47116,
                                42249,
                                43770,
                                56110,
                                67636,
                                76648,
                                76050,
                                55370
                            ],
                            "barCategoryGap": "20%",
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            }
                        },
                        {
                            "type": "line",
                            "name": "\u6536\u85cf\u6570",
                            "connectNulls": false,
                            "yAxisIndex": 1,
                            "symbolSize": 4,
                            "showSymbol": true,
                            "smooth": true,
                            "step": false,
                            "data": [
                                [
                                    0,
                                    1018
                                ],
                                [
                                    1,
                                    474
                                ],
                                [
                                    2,
                                    231
                                ],
                                [
                                    3,
                                    181
                                ],
                                [
                                    4,
                                    139
                                ],
                                [
                                    5,
                                    206
                                ],
                                [
                                    6,
                                    440
                                ],
                                [
                                    7,
                                    820
                                ],
                                [
                                    8,
                                    1078
                                ],
                                [
                                    9,
                                    1316
                                ],
                                [
                                    10,
                                    1573
                                ],
                                [
                                    11,
                                    1577
                                ],
                                [
                                    12,
                                    1557
                                ],
                                [
                                    13,
                                    1689
                                ],
                                [
                                    14,
                                    1583
                                ],
                                [
                                    15,
                                    1680
                                ],
                                [
                                    16,
                                    1560
                                ],
                                [
                                    17,
                                    1402
                                ],
                                [
                                    18,
                                    1355
                                ],
                                [
                                    19,
                                    1576
                                ],
                                [
                                    20,
                                    1926
                                ],
                                [
                                    21,
                                    2134
                                ],
                                [
                                    22,
                                    2398
                                ],
                                [
                                    23,
                                    1937
                                ]
                            ],
                            "hoverAnimation": true,
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            },
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            },
                            "areaStyle": {
                                "opacity": 0
                            },
                            "zlevel": 0,
                            "z": 0
                        },
                        {
                            "type": "line",
                            "name": "\u52a0\u8d2d\u6570",
                            "connectNulls": false,
                            "yAxisIndex": 1,
                            "symbolSize": 4,
                            "showSymbol": true,
                            "smooth": true,
                            "step": false,
                            "data": [
                                [
                                    0,
                                    1609
                                ],
                                [
                                    1,
                                    775
                                ],
                                [
                                    2,
                                    372
                                ],
                                [
                                    3,
                                    340
                                ],
                                [
                                    4,
                                    275
                                ],
                                [
                                    5,
                                    393
                                ],
                                [
                                    6,
                                    788
                                ],
                                [
                                    7,
                                    1372
                                ],
                                [
                                    8,
                                    1894
                                ],
                                [
                                    9,
                                    2302
                                ],
                                [
                                    10,
                                    2769
                                ],
                                [
                                    11,
                                    2641
                                ],
                                [
                                    12,
                                    2754
                                ],
                                [
                                    13,
                                    2897
                                ],
                                [
                                    14,
                                    2896
                                ],
                                [
                                    15,
                                    2965
                                ],
                                [
                                    16,
                                    2796
                                ],
                                [
                                    17,
                                    2505
                                ],
                                [
                                    18,
                                    2586
                                ],
                                [
                                    19,
                                    3203
                                ],
                                [
                                    20,
                                    3858
                                ],
                                [
                                    21,
                                    4556
                                ],
                                [
                                    22,
                                    4835
                                ],
                                [
                                    23,
                                    3824
                                ]
                            ],
                            "hoverAnimation": true,
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            },
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            },
                            "areaStyle": {
                                "opacity": 0
                            },
                            "zlevel": 0,
                            "z": 0
                        },
                        {
                            "type": "line",
                            "name": "\u8d2d\u4e70\u6570\u91cf",
                            "connectNulls": false,
                            "yAxisIndex": 1,
                            "symbolSize": 4,
                            "showSymbol": true,
                            "smooth": true,
                            "step": false,
                            "data": [
                                [
                                    0,
                                    533
                                ],
                                [
                                    1,
                                    206
                                ],
                                [
                                    2,
                                    120
                                ],
                                [
                                    3,
                                    84
                                ],
                                [
                                    4,
                                    76
                                ],
                                [
                                    5,
                                    85
                                ],
                                [
                                    6,
                                    219
                                ],
                                [
                                    7,
                                    402
                                ],
                                [
                                    8,
                                    706
                                ],
                                [
                                    9,
                                    1089
                                ],
                                [
                                    10,
                                    1452
                                ],
                                [
                                    11,
                                    1344
                                ],
                                [
                                    12,
                                    1389
                                ],
                                [
                                    13,
                                    1407
                                ],
                                [
                                    14,
                                    1367
                                ],
                                [
                                    15,
                                    1373
                                ],
                                [
                                    16,
                                    1261
                                ],
                                [
                                    17,
                                    1107
                                ],
                                [
                                    18,
                                    1041
                                ],
                                [
                                    19,
                                    1284
                                ],
                                [
                                    20,
                                    1519
                                ],
                                [
                                    21,
                                    1681
                                ],
                                [
                                    22,
                                    1569
                                ],
                                [
                                    23,
                                    1133
                                ]
                            ],
                            "hoverAnimation": true,
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            },
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            },
                            "areaStyle": {
                                "opacity": 0
                            },
                            "zlevel": 0,
                            "z": 0
                        }
                    ],
                    "xAxis": [
                        {
                            "show": true,
                            "scale": false,
                            "nameLocation": "end",
                            "nameGap": 15,
                            "gridIndex": 0,
                            "inverse": false,
                            "offset": 0,
                            "splitNumber": 5,
                            "minInterval": 0,
                            "splitLine": {
                                "show": false,
                                "lineStyle": {
                                    "show": true,
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid"
                                }
                            },
                            "data": [
                                0,
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8,
                                9,
                                10,
                                11,
                                12,
                                13,
                                14,
                                15,
                                16,
                                17,
                                18,
                                19,
                                20,
                                21,
                                22,
                                23
                            ]
                        }
                    ],
                    "yAxis": [
                        {
                            "show": true,
                            "scale": false,
                            "nameLocation": "end",
                            "nameGap": 15,
                            "gridIndex": 0,
                            "axisLabel": {
                                "show": true,
                                "position": "top",
                                "margin": 8,
                                "formatter": "{value}/\u6b21"
                            },
                            "inverse": false,
                            "offset": 0,
                            "splitNumber": 5,
                            "minInterval": 0,
                            "splitLine": {
                                "show": false,
                                "lineStyle": {
                                    "show": true,
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "show": true,
                            "scale": false,
                            "nameLocation": "end",
                            "nameGap": 15,
                            "gridIndex": 0,
                            "axisLabel": {
                                "show": true,
                                "position": "top",
                                "margin": 8,
                                "formatter": "{value}/\u6b21"
                            },
                            "inverse": false,
                            "offset": 0,
                            "splitNumber": 5,
                            "minInterval": 0,
                            "splitLine": {
                                "show": false,
                                "lineStyle": {
                                    "show": true,
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid"
                                }
                            }
                        }
                    ],
                    "title": [
                        {
                            "text": "2017-11-29\u65e5\u5404\u65f6\u95f4\u6bb5\u7528\u6237\u884c\u4e3a\u5206\u6790",
                            "padding": 5,
                            "itemGap": 10
                        }
                    ],
                    "tooltip": {
                        "show": true,
                        "trigger": "item",
                        "triggerOn": "mousemove|click",
                        "axisPointer": {
                            "type": "line"
                        },
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0
                    },
                    "color": [
                        "#c23531",
                        "#2f4554",
                        "#61a0a8",
                        "#d48265",
                        "#749f83",
                        "#ca8622",
                        "#bda29a",
                        "#6e7074",
                        "#546570",
                        "#c4ccd3",
                        "#f05b72",
                        "#ef5b9c",
                        "#f47920",
                        "#905a3d",
                        "#fab27b",
                        "#2a5caa",
                        "#444693",
                        "#726930",
                        "#b2d235",
                        "#6d8346",
                        "#ac6767",
                        "#1d953f",
                        "#6950a1",
                        "#918597"
                    ]
                },
                {
                    "legend": [
                        {
                            "data": [
                                "\u6d4f\u89c8\u4eba\u6570",
                                "\u6536\u85cf\u6570",
                                "\u52a0\u8d2d\u6570",
                                "\u8d2d\u4e70\u6570\u91cf"
                            ],
                            "selected": {
                                "\u6d4f\u89c8\u4eba\u6570": true
                            },
                            "show": true,
                            "padding": 5,
                            "itemGap": 10,
                            "itemWidth": 25,
                            "itemHeight": 14
                        }
                    ],
                    "series": [
                        {
                            "type": "bar",
                            "name": "\u6d4f\u89c8\u4eba\u6570",
                            "data": [
                                29644,
                                13540,
                                7532,
                                5278,
                                4565,
                                6157,
                                13330,
                                21715,
                                31006,
                                40292,
                                46881,
                                44501,
                                46934,
                                50313,
                                49400,
                                56277,
                                47193,
                                42603,
                                44571,
                                56219,
                                67459,
                                77268,
                                76979,
                                56099
                            ],
                            "barCategoryGap": "20%",
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            }
                        },
                        {
                            "type": "line",
                            "name": "\u6536\u85cf\u6570",
                            "connectNulls": false,
                            "yAxisIndex": 1,
                            "symbolSize": 4,
                            "showSymbol": true,
                            "smooth": true,
                            "step": false,
                            "data": [
                                [
                                    0,
                                    1034
                                ],
                                [
                                    1,
                                    468
                                ],
                                [
                                    2,
                                    268
                                ],
                                [
                                    3,
                                    178
                                ],
                                [
                                    4,
                                    155
                                ],
                                [
                                    5,
                                    202
                                ],
                                [
                                    6,
                                    496
                                ],
                                [
                                    7,
                                    781
                                ],
                                [
                                    8,
                                    1108
                                ],
                                [
                                    9,
                                    1433
                                ],
                                [
                                    10,
                                    1625
                                ],
                                [
                                    11,
                                    1536
                                ],
                                [
                                    12,
                                    1619
                                ],
                                [
                                    13,
                                    1717
                                ],
                                [
                                    14,
                                    1565
                                ],
                                [
                                    15,
                                    1674
                                ],
                                [
                                    16,
                                    1553
                                ],
                                [
                                    17,
                                    1449
                                ],
                                [
                                    18,
                                    1398
                                ],
                                [
                                    19,
                                    1687
                                ],
                                [
                                    20,
                                    1968
                                ],
                                [
                                    21,
                                    2147
                                ],
                                [
                                    22,
                                    2401
                                ],
                                [
                                    23,
                                    1909
                                ]
                            ],
                            "hoverAnimation": true,
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            },
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            },
                            "areaStyle": {
                                "opacity": 0
                            },
                            "zlevel": 0,
                            "z": 0
                        },
                        {
                            "type": "line",
                            "name": "\u52a0\u8d2d\u6570",
                            "connectNulls": false,
                            "yAxisIndex": 1,
                            "symbolSize": 4,
                            "showSymbol": true,
                            "smooth": true,
                            "step": false,
                            "data": [
                                [
                                    0,
                                    1733
                                ],
                                [
                                    1,
                                    793
                                ],
                                [
                                    2,
                                    422
                                ],
                                [
                                    3,
                                    352
                                ],
                                [
                                    4,
                                    264
                                ],
                                [
                                    5,
                                    410
                                ],
                                [
                                    6,
                                    869
                                ],
                                [
                                    7,
                                    1401
                                ],
                                [
                                    8,
                                    1877
                                ],
                                [
                                    9,
                                    2360
                                ],
                                [
                                    10,
                                    2817
                                ],
                                [
                                    11,
                                    2766
                                ],
                                [
                                    12,
                                    2904
                                ],
                                [
                                    13,
                                    3021
                                ],
                                [
                                    14,
                                    2831
                                ],
                                [
                                    15,
                                    2962
                                ],
                                [
                                    16,
                                    2701
                                ],
                                [
                                    17,
                                    2559
                                ],
                                [
                                    18,
                                    2546
                                ],
                                [
                                    19,
                                    3298
                                ],
                                [
                                    20,
                                    4026
                                ],
                                [
                                    21,
                                    4651
                                ],
                                [
                                    22,
                                    4993
                                ],
                                [
                                    23,
                                    3853
                                ]
                            ],
                            "hoverAnimation": true,
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            },
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            },
                            "areaStyle": {
                                "opacity": 0
                            },
                            "zlevel": 0,
                            "z": 0
                        },
                        {
                            "type": "line",
                            "name": "\u8d2d\u4e70\u6570\u91cf",
                            "connectNulls": false,
                            "yAxisIndex": 1,
                            "symbolSize": 4,
                            "showSymbol": true,
                            "smooth": true,
                            "step": false,
                            "data": [
                                [
                                    0,
                                    529
                                ],
                                [
                                    1,
                                    214
                                ],
                                [
                                    2,
                                    117
                                ],
                                [
                                    3,
                                    86
                                ],
                                [
                                    4,
                                    62
                                ],
                                [
                                    5,
                                    103
                                ],
                                [
                                    6,
                                    227
                                ],
                                [
                                    7,
                                    399
                                ],
                                [
                                    8,
                                    701
                                ],
                                [
                                    9,
                                    1055
                                ],
                                [
                                    10,
                                    1489
                                ],
                                [
                                    11,
                                    1314
                                ],
                                [
                                    12,
                                    1362
                                ],
                                [
                                    13,
                                    1409
                                ],
                                [
                                    14,
                                    1335
                                ],
                                [
                                    15,
                                    1332
                                ],
                                [
                                    16,
                                    1249
                                ],
                                [
                                    17,
                                    1085
                                ],
                                [
                                    18,
                                    1032
                                ],
                                [
                                    19,
                                    1286
                                ],
                                [
                                    20,
                                    1474
                                ],
                                [
                                    21,
                                    1538
                                ],
                                [
                                    22,
                                    1550
                                ],
                                [
                                    23,
                                    1067
                                ]
                            ],
                            "hoverAnimation": true,
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            },
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            },
                            "areaStyle": {
                                "opacity": 0
                            },
                            "zlevel": 0,
                            "z": 0
                        }
                    ],
                    "xAxis": [
                        {
                            "show": true,
                            "scale": false,
                            "nameLocation": "end",
                            "nameGap": 15,
                            "gridIndex": 0,
                            "inverse": false,
                            "offset": 0,
                            "splitNumber": 5,
                            "minInterval": 0,
                            "splitLine": {
                                "show": false,
                                "lineStyle": {
                                    "show": true,
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid"
                                }
                            },
                            "data": [
                                0,
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8,
                                9,
                                10,
                                11,
                                12,
                                13,
                                14,
                                15,
                                16,
                                17,
                                18,
                                19,
                                20,
                                21,
                                22,
                                23
                            ]
                        }
                    ],
                    "yAxis": [
                        {
                            "show": true,
                            "scale": false,
                            "nameLocation": "end",
                            "nameGap": 15,
                            "gridIndex": 0,
                            "axisLabel": {
                                "show": true,
                                "position": "top",
                                "margin": 8,
                                "formatter": "{value}/\u6b21"
                            },
                            "inverse": false,
                            "offset": 0,
                            "splitNumber": 5,
                            "minInterval": 0,
                            "splitLine": {
                                "show": false,
                                "lineStyle": {
                                    "show": true,
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "show": true,
                            "scale": false,
                            "nameLocation": "end",
                            "nameGap": 15,
                            "gridIndex": 0,
                            "axisLabel": {
                                "show": true,
                                "position": "top",
                                "margin": 8,
                                "formatter": "{value}/\u6b21"
                            },
                            "inverse": false,
                            "offset": 0,
                            "splitNumber": 5,
                            "minInterval": 0,
                            "splitLine": {
                                "show": false,
                                "lineStyle": {
                                    "show": true,
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid"
                                }
                            }
                        }
                    ],
                    "title": [
                        {
                            "text": "2017-11-30\u65e5\u5404\u65f6\u95f4\u6bb5\u7528\u6237\u884c\u4e3a\u5206\u6790",
                            "padding": 5,
                            "itemGap": 10
                        }
                    ],
                    "tooltip": {
                        "show": true,
                        "trigger": "item",
                        "triggerOn": "mousemove|click",
                        "axisPointer": {
                            "type": "line"
                        },
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0
                    },
                    "color": [
                        "#c23531",
                        "#2f4554",
                        "#61a0a8",
                        "#d48265",
                        "#749f83",
                        "#ca8622",
                        "#bda29a",
                        "#6e7074",
                        "#546570",
                        "#c4ccd3",
                        "#f05b72",
                        "#ef5b9c",
                        "#f47920",
                        "#905a3d",
                        "#fab27b",
                        "#2a5caa",
                        "#444693",
                        "#726930",
                        "#b2d235",
                        "#6d8346",
                        "#ac6767",
                        "#1d953f",
                        "#6950a1",
                        "#918597"
                    ]
                },
                {
                    "legend": [
                        {
                            "data": [
                                "\u6d4f\u89c8\u4eba\u6570",
                                "\u6536\u85cf\u6570",
                                "\u52a0\u8d2d\u6570",
                                "\u8d2d\u4e70\u6570\u91cf"
                            ],
                            "selected": {
                                "\u6d4f\u89c8\u4eba\u6570": true
                            },
                            "show": true,
                            "padding": 5,
                            "itemGap": 10,
                            "itemWidth": 25,
                            "itemHeight": 14
                        }
                    ],
                    "series": [
                        {
                            "type": "bar",
                            "name": "\u6d4f\u89c8\u4eba\u6570",
                            "data": [
                                31784,
                                14602,
                                8241,
                                5755,
                                5076,
                                6755,
                                14259,
                                23597,
                                32321,
                                39528,
                                47069,
                                44407,
                                46059,
                                50889,
                                49983,
                                49950,
                                47867,
                                43991,
                                46694,
                                59218,
                                71847,
                                83285,
                                83090,
                                65649
                            ],
                            "barCategoryGap": "20%",
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            }
                        },
                        {
                            "type": "line",
                            "name": "\u6536\u85cf\u6570",
                            "connectNulls": false,
                            "yAxisIndex": 1,
                            "symbolSize": 4,
                            "showSymbol": true,
                            "smooth": true,
                            "step": false,
                            "data": [
                                [
                                    0,
                                    1033
                                ],
                                [
                                    1,
                                    524
                                ],
                                [
                                    2,
                                    339
                                ],
                                [
                                    3,
                                    199
                                ],
                                [
                                    4,
                                    169
                                ],
                                [
                                    5,
                                    231
                                ],
                                [
                                    6,
                                    492
                                ],
                                [
                                    7,
                                    789
                                ],
                                [
                                    8,
                                    1075
                                ],
                                [
                                    9,
                                    1348
                                ],
                                [
                                    10,
                                    1567
                                ],
                                [
                                    11,
                                    1458
                                ],
                                [
                                    12,
                                    1489
                                ],
                                [
                                    13,
                                    1663
                                ],
                                [
                                    14,
                                    1690
                                ],
                                [
                                    15,
                                    1562
                                ],
                                [
                                    16,
                                    1534
                                ],
                                [
                                    17,
                                    1344
                                ],
                                [
                                    18,
                                    1385
                                ],
                                [
                                    19,
                                    1786
                                ],
                                [
                                    20,
                                    2041
                                ],
                                [
                                    21,
                                    2391
                                ],
                                [
                                    22,
                                    2462
                                ],
                                [
                                    23,
                                    2180
                                ]
                            ],
                            "hoverAnimation": true,
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            },
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            },
                            "areaStyle": {
                                "opacity": 0
                            },
                            "zlevel": 0,
                            "z": 0
                        },
                        {
                            "type": "line",
                            "name": "\u52a0\u8d2d\u6570",
                            "connectNulls": false,
                            "yAxisIndex": 1,
                            "symbolSize": 4,
                            "showSymbol": true,
                            "smooth": true,
                            "step": false,
                            "data": [
                                [
                                    0,
                                    1905
                                ],
                                [
                                    1,
                                    898
                                ],
                                [
                                    2,
                                    488
                                ],
                                [
                                    3,
                                    368
                                ],
                                [
                                    4,
                                    344
                                ],
                                [
                                    5,
                                    478
                                ],
                                [
                                    6,
                                    1114
                                ],
                                [
                                    7,
                                    1630
                                ],
                                [
                                    8,
                                    2191
                                ],
                                [
                                    9,
                                    2460
                                ],
                                [
                                    10,
                                    3095
                                ],
                                [
                                    11,
                                    2865
                                ],
                                [
                                    12,
                                    2942
                                ],
                                [
                                    13,
                                    3247
                                ],
                                [
                                    14,
                                    3010
                                ],
                                [
                                    15,
                                    3095
                                ],
                                [
                                    16,
                                    3115
                                ],
                                [
                                    17,
                                    2854
                                ],
                                [
                                    18,
                                    2792
                                ],
                                [
                                    19,
                                    3526
                                ],
                                [
                                    20,
                                    4496
                                ],
                                [
                                    21,
                                    5279
                                ],
                                [
                                    22,
                                    5433
                                ],
                                [
                                    23,
                                    4809
                                ]
                            ],
                            "hoverAnimation": true,
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            },
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            },
                            "areaStyle": {
                                "opacity": 0
                            },
                            "zlevel": 0,
                            "z": 0
                        },
                        {
                            "type": "line",
                            "name": "\u8d2d\u4e70\u6570\u91cf",
                            "connectNulls": false,
                            "yAxisIndex": 1,
                            "symbolSize": 4,
                            "showSymbol": true,
                            "smooth": true,
                            "step": false,
                            "data": [
                                [
                                    0,
                                    534
                                ],
                                [
                                    1,
                                    223
                                ],
                                [
                                    2,
                                    128
                                ],
                                [
                                    3,
                                    86
                                ],
                                [
                                    4,
                                    68
                                ],
                                [
                                    5,
                                    75
                                ],
                                [
                                    6,
                                    187
                                ],
                                [
                                    7,
                                    379
                                ],
                                [
                                    8,
                                    701
                                ],
                                [
                                    9,
                                    1001
                                ],
                                [
                                    10,
                                    1400
                                ],
                                [
                                    11,
                                    1252
                                ],
                                [
                                    12,
                                    1235
                                ],
                                [
                                    13,
                                    1305
                                ],
                                [
                                    14,
                                    1319
                                ],
                                [
                                    15,
                                    1294
                                ],
                                [
                                    16,
                                    1153
                                ],
                                [
                                    17,
                                    946
                                ],
                                [
                                    18,
                                    973
                                ],
                                [
                                    19,
                                    1137
                                ],
                                [
                                    20,
                                    1385
                                ],
                                [
                                    21,
                                    1448
                                ],
                                [
                                    22,
                                    1367
                                ],
                                [
                                    23,
                                    1095
                                ]
                            ],
                            "hoverAnimation": true,
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            },
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            },
                            "areaStyle": {
                                "opacity": 0
                            },
                            "zlevel": 0,
                            "z": 0
                        }
                    ],
                    "xAxis": [
                        {
                            "show": true,
                            "scale": false,
                            "nameLocation": "end",
                            "nameGap": 15,
                            "gridIndex": 0,
                            "inverse": false,
                            "offset": 0,
                            "splitNumber": 5,
                            "minInterval": 0,
                            "splitLine": {
                                "show": false,
                                "lineStyle": {
                                    "show": true,
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid"
                                }
                            },
                            "data": [
                                0,
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8,
                                9,
                                10,
                                11,
                                12,
                                13,
                                14,
                                15,
                                16,
                                17,
                                18,
                                19,
                                20,
                                21,
                                22,
                                23
                            ]
                        }
                    ],
                    "yAxis": [
                        {
                            "show": true,
                            "scale": false,
                            "nameLocation": "end",
                            "nameGap": 15,
                            "gridIndex": 0,
                            "axisLabel": {
                                "show": true,
                                "position": "top",
                                "margin": 8,
                                "formatter": "{value}/\u6b21"
                            },
                            "inverse": false,
                            "offset": 0,
                            "splitNumber": 5,
                            "minInterval": 0,
                            "splitLine": {
                                "show": false,
                                "lineStyle": {
                                    "show": true,
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "show": true,
                            "scale": false,
                            "nameLocation": "end",
                            "nameGap": 15,
                            "gridIndex": 0,
                            "axisLabel": {
                                "show": true,
                                "position": "top",
                                "margin": 8,
                                "formatter": "{value}/\u6b21"
                            },
                            "inverse": false,
                            "offset": 0,
                            "splitNumber": 5,
                            "minInterval": 0,
                            "splitLine": {
                                "show": false,
                                "lineStyle": {
                                    "show": true,
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid"
                                }
                            }
                        }
                    ],
                    "title": [
                        {
                            "text": "2017-12-01\u65e5\u5404\u65f6\u95f4\u6bb5\u7528\u6237\u884c\u4e3a\u5206\u6790",
                            "padding": 5,
                            "itemGap": 10
                        }
                    ],
                    "tooltip": {
                        "show": true,
                        "trigger": "item",
                        "triggerOn": "mousemove|click",
                        "axisPointer": {
                            "type": "line"
                        },
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0
                    },
                    "color": [
                        "#c23531",
                        "#2f4554",
                        "#61a0a8",
                        "#d48265",
                        "#749f83",
                        "#ca8622",
                        "#bda29a",
                        "#6e7074",
                        "#546570",
                        "#c4ccd3",
                        "#f05b72",
                        "#ef5b9c",
                        "#f47920",
                        "#905a3d",
                        "#fab27b",
                        "#2a5caa",
                        "#444693",
                        "#726930",
                        "#b2d235",
                        "#6d8346",
                        "#ac6767",
                        "#1d953f",
                        "#6950a1",
                        "#918597"
                    ]
                },
                {
                    "legend": [
                        {
                            "data": [
                                "\u6d4f\u89c8\u4eba\u6570",
                                "\u6536\u85cf\u6570",
                                "\u52a0\u8d2d\u6570",
                                "\u8d2d\u4e70\u6570\u91cf"
                            ],
                            "selected": {
                                "\u6d4f\u89c8\u4eba\u6570": true
                            },
                            "show": true,
                            "padding": 5,
                            "itemGap": 10,
                            "itemWidth": 25,
                            "itemHeight": 14
                        }
                    ],
                    "series": [
                        {
                            "type": "bar",
                            "name": "\u6d4f\u89c8\u4eba\u6570",
                            "data": [
                                40448,
                                19909,
                                10776,
                                7063,
                                5979,
                                7594,
                                15769,
                                31022,
                                41407,
                                49132,
                                56078,
                                56244,
                                54985,
                                60483,
                                61577,
                                64332,
                                64690,
                                60208,
                                61325,
                                75629,
                                91669,
                                105767,
                                105029,
                                85753
                            ],
                            "barCategoryGap": "20%",
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            }
                        },
                        {
                            "type": "line",
                            "name": "\u6536\u85cf\u6570",
                            "connectNulls": false,
                            "yAxisIndex": 1,
                            "symbolSize": 4,
                            "showSymbol": true,
                            "smooth": true,
                            "step": false,
                            "data": [
                                [
                                    0,
                                    1198
                                ],
                                [
                                    1,
                                    657
                                ],
                                [
                                    2,
                                    357
                                ],
                                [
                                    3,
                                    304
                                ],
                                [
                                    4,
                                    224
                                ],
                                [
                                    5,
                                    238
                                ],
                                [
                                    6,
                                    481
                                ],
                                [
                                    7,
                                    1037
                                ],
                                [
                                    8,
                                    1336
                                ],
                                [
                                    9,
                                    1673
                                ],
                                [
                                    10,
                                    1858
                                ],
                                [
                                    11,
                                    2011
                                ],
                                [
                                    12,
                                    1876
                                ],
                                [
                                    13,
                                    1898
                                ],
                                [
                                    14,
                                    1932
                                ],
                                [
                                    15,
                                    2083
                                ],
                                [
                                    16,
                                    2125
                                ],
                                [
                                    17,
                                    2013
                                ],
                                [
                                    18,
                                    1938
                                ],
                                [
                                    19,
                                    2296
                                ],
                                [
                                    20,
                                    2706
                                ],
                                [
                                    21,
                                    3154
                                ],
                                [
                                    22,
                                    3292
                                ],
                                [
                                    23,
                                    2953
                                ]
                            ],
                            "hoverAnimation": true,
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            },
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            },
                            "areaStyle": {
                                "opacity": 0
                            },
                            "zlevel": 0,
                            "z": 0
                        },
                        {
                            "type": "line",
                            "name": "\u52a0\u8d2d\u6570",
                            "connectNulls": false,
                            "yAxisIndex": 1,
                            "symbolSize": 4,
                            "showSymbol": true,
                            "smooth": true,
                            "step": false,
                            "data": [
                                [
                                    0,
                                    2524
                                ],
                                [
                                    1,
                                    1179
                                ],
                                [
                                    2,
                                    643
                                ],
                                [
                                    3,
                                    427
                                ],
                                [
                                    4,
                                    373
                                ],
                                [
                                    5,
                                    475
                                ],
                                [
                                    6,
                                    1088
                                ],
                                [
                                    7,
                                    2229
                                ],
                                [
                                    8,
                                    2825
                                ],
                                [
                                    9,
                                    3346
                                ],
                                [
                                    10,
                                    3589
                                ],
                                [
                                    11,
                                    3597
                                ],
                                [
                                    12,
                                    3461
                                ],
                                [
                                    13,
                                    3758
                                ],
                                [
                                    14,
                                    3835
                                ],
                                [
                                    15,
                                    3969
                                ],
                                [
                                    16,
                                    4077
                                ],
                                [
                                    17,
                                    3715
                                ],
                                [
                                    18,
                                    3772
                                ],
                                [
                                    19,
                                    4705
                                ],
                                [
                                    20,
                                    5664
                                ],
                                [
                                    21,
                                    6893
                                ],
                                [
                                    22,
                                    7056
                                ],
                                [
                                    23,
                                    6201
                                ]
                            ],
                            "hoverAnimation": true,
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            },
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            },
                            "areaStyle": {
                                "opacity": 0
                            },
                            "zlevel": 0,
                            "z": 0
                        },
                        {
                            "type": "line",
                            "name": "\u8d2d\u4e70\u6570\u91cf",
                            "connectNulls": false,
                            "yAxisIndex": 1,
                            "symbolSize": 4,
                            "showSymbol": true,
                            "smooth": true,
                            "step": false,
                            "data": [
                                [
                                    0,
                                    648
                                ],
                                [
                                    1,
                                    292
                                ],
                                [
                                    2,
                                    180
                                ],
                                [
                                    3,
                                    87
                                ],
                                [
                                    4,
                                    86
                                ],
                                [
                                    5,
                                    88
                                ],
                                [
                                    6,
                                    215
                                ],
                                [
                                    7,
                                    485
                                ],
                                [
                                    8,
                                    761
                                ],
                                [
                                    9,
                                    1165
                                ],
                                [
                                    10,
                                    1606
                                ],
                                [
                                    11,
                                    1598
                                ],
                                [
                                    12,
                                    1566
                                ],
                                [
                                    13,
                                    1494
                                ],
                                [
                                    14,
                                    1590
                                ],
                                [
                                    15,
                                    1563
                                ],
                                [
                                    16,
                                    1475
                                ],
                                [
                                    17,
                                    1354
                                ],
                                [
                                    18,
                                    1252
                                ],
                                [
                                    19,
                                    1475
                                ],
                                [
                                    20,
                                    1763
                                ],
                                [
                                    21,
                                    1921
                                ],
                                [
                                    22,
                                    1801
                                ],
                                [
                                    23,
                                    1431
                                ]
                            ],
                            "hoverAnimation": true,
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            },
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            },
                            "areaStyle": {
                                "opacity": 0
                            },
                            "zlevel": 0,
                            "z": 0
                        }
                    ],
                    "xAxis": [
                        {
                            "show": true,
                            "scale": false,
                            "nameLocation": "end",
                            "nameGap": 15,
                            "gridIndex": 0,
                            "inverse": false,
                            "offset": 0,
                            "splitNumber": 5,
                            "minInterval": 0,
                            "splitLine": {
                                "show": false,
                                "lineStyle": {
                                    "show": true,
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid"
                                }
                            },
                            "data": [
                                0,
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8,
                                9,
                                10,
                                11,
                                12,
                                13,
                                14,
                                15,
                                16,
                                17,
                                18,
                                19,
                                20,
                                21,
                                22,
                                23
                            ]
                        }
                    ],
                    "yAxis": [
                        {
                            "show": true,
                            "scale": false,
                            "nameLocation": "end",
                            "nameGap": 15,
                            "gridIndex": 0,
                            "axisLabel": {
                                "show": true,
                                "position": "top",
                                "margin": 8,
                                "formatter": "{value}/\u6b21"
                            },
                            "inverse": false,
                            "offset": 0,
                            "splitNumber": 5,
                            "minInterval": 0,
                            "splitLine": {
                                "show": false,
                                "lineStyle": {
                                    "show": true,
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "show": true,
                            "scale": false,
                            "nameLocation": "end",
                            "nameGap": 15,
                            "gridIndex": 0,
                            "axisLabel": {
                                "show": true,
                                "position": "top",
                                "margin": 8,
                                "formatter": "{value}/\u6b21"
                            },
                            "inverse": false,
                            "offset": 0,
                            "splitNumber": 5,
                            "minInterval": 0,
                            "splitLine": {
                                "show": false,
                                "lineStyle": {
                                    "show": true,
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid"
                                }
                            }
                        }
                    ],
                    "title": [
                        {
                            "text": "2017-12-02\u65e5\u5404\u65f6\u95f4\u6bb5\u7528\u6237\u884c\u4e3a\u5206\u6790",
                            "padding": 5,
                            "itemGap": 10
                        }
                    ],
                    "tooltip": {
                        "show": true,
                        "trigger": "item",
                        "triggerOn": "mousemove|click",
                        "axisPointer": {
                            "type": "line"
                        },
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0
                    },
                    "color": [
                        "#c23531",
                        "#2f4554",
                        "#61a0a8",
                        "#d48265",
                        "#749f83",
                        "#ca8622",
                        "#bda29a",
                        "#6e7074",
                        "#546570",
                        "#c4ccd3",
                        "#f05b72",
                        "#ef5b9c",
                        "#f47920",
                        "#905a3d",
                        "#fab27b",
                        "#2a5caa",
                        "#444693",
                        "#726930",
                        "#b2d235",
                        "#6d8346",
                        "#ac6767",
                        "#1d953f",
                        "#6950a1",
                        "#918597"
                    ]
                },
                {
                    "legend": [
                        {
                            "data": [
                                "\u6d4f\u89c8\u4eba\u6570",
                                "\u6536\u85cf\u6570",
                                "\u52a0\u8d2d\u6570",
                                "\u8d2d\u4e70\u6570\u91cf"
                            ],
                            "selected": {
                                "\u6d4f\u89c8\u4eba\u6570": true
                            },
                            "show": true,
                            "padding": 5,
                            "itemGap": 10,
                            "itemWidth": 25,
                            "itemHeight": 14
                        }
                    ],
                    "series": [
                        {
                            "type": "bar",
                            "name": "\u6d4f\u89c8\u4eba\u6570",
                            "data": [
                                49410,
                                23022,
                                11874,
                                7821,
                                6285,
                                7584,
                                15050,
                                32097,
                                44325,
                                51125,
                                58982,
                                58148,
                                55425,
                                61188,
                                63400,
                                65213,
                                64573,
                                58470,
                                58570,
                                72761,
                                87346,
                                100656,
                                98468,
                                71509
                            ],
                            "barCategoryGap": "20%",
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            }
                        },
                        {
                            "type": "line",
                            "name": "\u6536\u85cf\u6570",
                            "connectNulls": false,
                            "yAxisIndex": 1,
                            "symbolSize": 4,
                            "showSymbol": true,
                            "smooth": true,
                            "step": false,
                            "data": [
                                [
                                    0,
                                    1742
                                ],
                                [
                                    1,
                                    824
                                ],
                                [
                                    2,
                                    454
                                ],
                                [
                                    3,
                                    238
                                ],
                                [
                                    4,
                                    219
                                ],
                                [
                                    5,
                                    244
                                ],
                                [
                                    6,
                                    468
                                ],
                                [
                                    7,
                                    1053
                                ],
                                [
                                    8,
                                    1514
                                ],
                                [
                                    9,
                                    1757
                                ],
                                [
                                    10,
                                    2000
                                ],
                                [
                                    11,
                                    2001
                                ],
                                [
                                    12,
                                    1830
                                ],
                                [
                                    13,
                                    1971
                                ],
                                [
                                    14,
                                    2007
                                ],
                                [
                                    15,
                                    2079
                                ],
                                [
                                    16,
                                    2006
                                ],
                                [
                                    17,
                                    1817
                                ],
                                [
                                    18,
                                    1771
                                ],
                                [
                                    19,
                                    2181
                                ],
                                [
                                    20,
                                    2530
                                ],
                                [
                                    21,
                                    2961
                                ],
                                [
                                    22,
                                    3224
                                ],
                                [
                                    23,
                                    2637
                                ]
                            ],
                            "hoverAnimation": true,
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            },
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            },
                            "areaStyle": {
                                "opacity": 0
                            },
                            "zlevel": 0,
                            "z": 0
                        },
                        {
                            "type": "line",
                            "name": "\u52a0\u8d2d\u6570",
                            "connectNulls": false,
                            "yAxisIndex": 1,
                            "symbolSize": 4,
                            "showSymbol": true,
                            "smooth": true,
                            "step": false,
                            "data": [
                                [
                                    0,
                                    3104
                                ],
                                [
                                    1,
                                    1448
                                ],
                                [
                                    2,
                                    711
                                ],
                                [
                                    3,
                                    502
                                ],
                                [
                                    4,
                                    388
                                ],
                                [
                                    5,
                                    497
                                ],
                                [
                                    6,
                                    1035
                                ],
                                [
                                    7,
                                    2204
                                ],
                                [
                                    8,
                                    2916
                                ],
                                [
                                    9,
                                    3347
                                ],
                                [
                                    10,
                                    3771
                                ],
                                [
                                    11,
                                    3664
                                ],
                                [
                                    12,
                                    3387
                                ],
                                [
                                    13,
                                    3681
                                ],
                                [
                                    14,
                                    3771
                                ],
                                [
                                    15,
                                    3973
                                ],
                                [
                                    16,
                                    4062
                                ],
                                [
                                    17,
                                    3561
                                ],
                                [
                                    18,
                                    3532
                                ],
                                [
                                    19,
                                    4221
                                ],
                                [
                                    20,
                                    5527
                                ],
                                [
                                    21,
                                    6430
                                ],
                                [
                                    22,
                                    6867
                                ],
                                [
                                    23,
                                    5143
                                ]
                            ],
                            "hoverAnimation": true,
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            },
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            },
                            "areaStyle": {
                                "opacity": 0
                            },
                            "zlevel": 0,
                            "z": 0
                        },
                        {
                            "type": "line",
                            "name": "\u8d2d\u4e70\u6570\u91cf",
                            "connectNulls": false,
                            "yAxisIndex": 1,
                            "symbolSize": 4,
                            "showSymbol": true,
                            "smooth": true,
                            "step": false,
                            "data": [
                                [
                                    0,
                                    796
                                ],
                                [
                                    1,
                                    350
                                ],
                                [
                                    2,
                                    148
                                ],
                                [
                                    3,
                                    130
                                ],
                                [
                                    4,
                                    82
                                ],
                                [
                                    5,
                                    82
                                ],
                                [
                                    6,
                                    195
                                ],
                                [
                                    7,
                                    459
                                ],
                                [
                                    8,
                                    814
                                ],
                                [
                                    9,
                                    1177
                                ],
                                [
                                    10,
                                    1783
                                ],
                                [
                                    11,
                                    1559
                                ],
                                [
                                    12,
                                    1477
                                ],
                                [
                                    13,
                                    1497
                                ],
                                [
                                    14,
                                    1615
                                ],
                                [
                                    15,
                                    1619
                                ],
                                [
                                    16,
                                    1512
                                ],
                                [
                                    17,
                                    1355
                                ],
                                [
                                    18,
                                    1201
                                ],
                                [
                                    19,
                                    1452
                                ],
                                [
                                    20,
                                    1661
                                ],
                                [
                                    21,
                                    1832
                                ],
                                [
                                    22,
                                    1657
                                ],
                                [
                                    23,
                                    1209
                                ]
                            ],
                            "hoverAnimation": true,
                            "label": {
                                "show": true,
                                "position": "top",
                                "margin": 8
                            },
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            },
                            "areaStyle": {
                                "opacity": 0
                            },
                            "zlevel": 0,
                            "z": 0
                        }
                    ],
                    "xAxis": [
                        {
                            "show": true,
                            "scale": false,
                            "nameLocation": "end",
                            "nameGap": 15,
                            "gridIndex": 0,
                            "inverse": false,
                            "offset": 0,
                            "splitNumber": 5,
                            "minInterval": 0,
                            "splitLine": {
                                "show": false,
                                "lineStyle": {
                                    "show": true,
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid"
                                }
                            },
                            "data": [
                                0,
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8,
                                9,
                                10,
                                11,
                                12,
                                13,
                                14,
                                15,
                                16,
                                17,
                                18,
                                19,
                                20,
                                21,
                                22,
                                23
                            ]
                        }
                    ],
                    "yAxis": [
                        {
                            "show": true,
                            "scale": false,
                            "nameLocation": "end",
                            "nameGap": 15,
                            "gridIndex": 0,
                            "axisLabel": {
                                "show": true,
                                "position": "top",
                                "margin": 8,
                                "formatter": "{value}/\u6b21"
                            },
                            "inverse": false,
                            "offset": 0,
                            "splitNumber": 5,
                            "minInterval": 0,
                            "splitLine": {
                                "show": false,
                                "lineStyle": {
                                    "show": true,
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid"
                                }
                            }
                        },
                        {
                            "show": true,
                            "scale": false,
                            "nameLocation": "end",
                            "nameGap": 15,
                            "gridIndex": 0,
                            "axisLabel": {
                                "show": true,
                                "position": "top",
                                "margin": 8,
                                "formatter": "{value}/\u6b21"
                            },
                            "inverse": false,
                            "offset": 0,
                            "splitNumber": 5,
                            "minInterval": 0,
                            "splitLine": {
                                "show": false,
                                "lineStyle": {
                                    "show": true,
                                    "width": 1,
                                    "opacity": 1,
                                    "curveness": 0,
                                    "type": "solid"
                                }
                            }
                        }
                    ],
                    "title": [
                        {
                            "text": "2017-12-03\u65e5\u5404\u65f6\u95f4\u6bb5\u7528\u6237\u884c\u4e3a\u5206\u6790",
                            "padding": 5,
                            "itemGap": 10
                        }
                    ],
                    "tooltip": {
                        "show": true,
                        "trigger": "item",
                        "triggerOn": "mousemove|click",
                        "axisPointer": {
                            "type": "line"
                        },
                        "textStyle": {
                            "fontSize": 14
                        },
                        "borderWidth": 0
                    },
                    "color": [
                        "#c23531",
                        "#2f4554",
                        "#61a0a8",
                        "#d48265",
                        "#749f83",
                        "#ca8622",
                        "#bda29a",
                        "#6e7074",
                        "#546570",
                        "#c4ccd3",
                        "#f05b72",
                        "#ef5b9c",
                        "#f47920",
                        "#905a3d",
                        "#fab27b",
                        "#2a5caa",
                        "#444693",
                        "#726930",
                        "#b2d235",
                        "#6d8346",
                        "#ac6767",
                        "#1d953f",
                        "#6950a1",
                        "#918597"
                    ]
                }
            ]
          };
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	

function echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));

        var dataStyle = {
	normal: {
		label: {
			show: false
		},
		labelLine: {
			show: false
		},
		//shadowBlur: 40,
		//shadowColor: 'rgba(40, 40, 40, 1)',
	}
};
var placeHolderStyle = {
	normal: {
		color: 'rgba(255,255,255,.05)',
		label: {show: false,},
		labelLine: {show: false}
	},
	emphasis: {
		color: 'rgba(0,0,0,0)'
	}
};
option = {
	color: ['#0f63d6', '#0f78d6', '#0f8cd6', '#0fa0d6', '#0fb4d6'],
	tooltip: {
		show: true,
		formatter: "{a} : {c} "
	},
	legend: {
		itemWidth: 10,
        itemHeight: 10,
		itemGap: 12,
		bottom: '3%',
		
		data: ['浙江', '上海', '广东', '北京', '深圳'],
		textStyle: {
                    color: 'rgba(255,255,255,.6)',
                }
	},
	
	series: [
		{
		name: '浙江',
		type: 'pie',
		clockWise: false,
		center: ['50%', '42%'],
		radius: ['59%', '70%'],
		itemStyle: dataStyle,
		hoverAnimation: false,
		data: [{
			value: 80,
			name: '01'
		}, {
			value: 20,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	},
		{
		name: '上海',
		type: 'pie',
		clockWise: false,
		center: ['50%', '42%'],
		radius: ['49%', '60%'],
		itemStyle: dataStyle,
		hoverAnimation: false,
		data: [{
			value: 70,
			name: '02'
		}, {
			value: 30,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	}, 
		{
		name: '广东',
		type: 'pie',
		clockWise: false,
		hoverAnimation: false,
		center: ['50%', '42%'],
		radius: ['39%', '50%'],
		itemStyle: dataStyle,
		data: [{
			value: 65,
			name: '03'
		}, {
			value: 35,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	},
		{
		name: '北京',
		type: 'pie',
		clockWise: false,
		hoverAnimation: false,
		center: ['50%', '42%'],
		radius: ['29%', '40%'],
		itemStyle: dataStyle,
		data: [{
			value: 60,
			name: '04'
		}, {
			value: 40,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	}, 
		{
		name: '深圳',
		type: 'pie',
		clockWise: false,
		hoverAnimation: false,
		center: ['50%', '42%'],
		radius: ['20%', '30%'],
		itemStyle: dataStyle,
		data: [{
			value: 50,
			name: '05'
		}, {
			value: 50,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	}, ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
})








