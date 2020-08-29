<template>
  <div class="mainbox">
    <ul class="clearfix">
      <li>
        <div class="boxall" style="height: 7.4rem">
          <div class="allnav" id="echart1"></div>
          <div class="boxfoot"></div>
        </div>
        <div class="boxall" style="height: 7rem">
          <div class="allnav" id="echart2"></div>
          <div class="boxfoot"></div>
        </div>
      </li>
      <li>
        <div class="bar" style="margin-bottom:1rem">
          <div class="barbox">
            <ul class="clearfix">
              <li class="counter" style="width:100%;line-height: 1rem;font-size:.5rem">行业历史用电量统计分析</li>
            </ul>
          </div>
        </div>

        <!-- 标题 -->
        <div class="bar">
          <div class="barbox">
            <ul class="clearfix">
              <li class="pulll_left counter">12581189</li>
              <li class="pulll_left counter">3912410</li>
            </ul>
          </div>
          <div class="barbox2">
            <ul class="clearfix">
              <li class="pulll_left">2018年总收入情况</li>
              <li class="pulll_left">2018年总支出情况</li>
            </ul>
          </div>
        </div>

        <div class="map">
          <div class="map1">
            <img :src="lbx" />
          </div>
          <div class="map2">
            <img :src="jt" />
          </div>
          <div class="map3">
            <img :src="map" />
          </div>
          <div class="map4" id="map_1"></div>
        </div>
      </li>
      <li>
        <div class="boxall" style="height:7.4rem">
          <div class="allnav" id="echart4"></div>
          <div class="boxfoot"></div>
        </div>
        <div class="boxall" style="height: 7rem">
          <div class="allnav" id="echart5">
            <div class="scollTitle" style="height:1rem">
              <div class="dateTitle" style=" display:inline;line-height: .75rem;margin-left:1rem">
                <span class="title">时间</span>
              </div>
              <div class="nameTitle" style=" display:inline;margin-left:3rem">
                <span class="date">行业</span>
              </div>
              <div class="num" style=" display:inline;margin-left:3.7rem">
                <span class="date">用电量</span>
              </div>
            </div>

            <vue-seamless-scroll :data="listData" class="seamless-warp">
              <ul class="item">
                <li v-for="(item,index) in listData" :key="index" style="color:#ffffff">
                    <span class="title" v-text="item.date" style="width:50px"></span>
                    <span class="date" v-text="item.name" style="width:50px"></span>
                    <span class="date" v-text="item.num"  style="width:50px"></span>
                </li>
              </ul>
            </vue-seamless-scroll>
          </div>
          <div class="boxfoot"></div>
        </div>
        <!-- <div class="boxall" style="height: 3rem">
          <div class="alltitle">模块标题样式</div>
          <div class="allnav" id="echart6"></div>
          <div class="boxfoot"></div>
        </div>-->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FirstPage",
  data() {
    return {
      loading: require("./../assets/img/loading.gif"),
      lbx: require("./../assets/img/lbx.png"),
      jt: require("./../assets/img/jt.png"),
      map: require("./../assets/img/map.png"),
      fontSize: document.documentElement.clientWidth,
      listData: [
        // {
        //   title: "无缝滚动第一行无缝滚动第一行",
        //   date: "2017-12-16"
        // },
        // {
        //   title: "无缝滚动第二行无缝滚动第二行",
        //   date: "2017-12-16"
        // },
        // {
        //   title: "无缝滚动第三行无缝滚动第三行",
        //   date: "2017-12-16"
        // },
        // {
        //   title: "无缝滚动第四行无缝滚动第四行",
        //   date: "2017-12-16"
        // },
        // {
        //   title: "无缝滚动第五行无缝滚动第五行",
        //   date: "2017-12-16"
        // },
        // {
        //   title: "无缝滚动第六行无缝滚动第六行",
        //   date: "2017-12-16"
        // },
        // {
        //   title: "无缝滚动第七行无缝滚动第七行",
        //   date: "2017-12-16"
        // },
        // {
        //   title: "无缝滚动第八行无缝滚动第八行",
        //   date: "2017-12-16"
        // },
        // {
        //   title: "无缝滚动第九行无缝滚动第九行",
        //   date: "2017-12-16"
        // },
        // {
        //   title: "无缝滚动第九行无缝滚动第九行",
        //   date: "2017-12-16"
        // },
        // {
        //   title: "无缝滚动第九行无缝滚动第九行",
        //   date: "2017-12-16"
        // },
        // {
        //   title: "无缝滚动第九行无缝滚动第九行",
        //   date: "2017-12-16"
        // },
        // {
        //   title: "无缝滚动第九行无缝滚动第九行",
        //   date: "2017-12-16"
        // },
        // {
        //   title: "无缝滚动第九行无缝滚动第九行",
        //   date: "2017-12-16"
        // },
        // {
        //   title: "无缝滚动第九行无缝滚动第九行",
        //   date: "2017-12-16"
        // },
        // {
        //   title: "无缝滚动第九行无缝滚动第九行",
        //   date: "2017-12-16"
        // },
        // {
        //   title: "无缝滚动第九行无缝滚动第九行",
        //   date: "2017-12-16"
        // },
        // {
        //   title: "无缝滚动第九行无缝滚动第九行",
        //   date: "2017-12-16"
        // },
        // {
        //   title: "无缝滚动第九行无缝滚动第九行",
        //   date: "2017-12-16"
        // },
        // {
        //   title: "无缝滚动第九行无缝滚动第九行",
        //   date: "2017-12-16"
        // },
        // {
        //   title: "无缝滚动第九行无缝滚动第九行",
        //   date: "2017-12-16"
        // }
      ]
    };
  },
  mounted() {
    this.drawChart1();
    this.drawChart2();
    this.drawChart4();

    
    this.listData = [
      {
        date: "1aaaaaaaaa行",
        name: "2017-12-16",
        num: "1231313.22"
      },
      {
        date: "2aaaaaaaaa行",
        name: "2017-12-16",
        num: "1231313.22"
      },
      {
        date: "3aaaaaaaaa行",
        name: "2017-12-16",
        num: "1231313.22"
      },
      {
        date: "4aaaaaaaaa行",
        name: "2017-12-16",
        num: "1231313.22"
      },
      {
        date: "5aaaaaaaaa行",
        name: "2017-12-16",
        num: "1231313.22"
      },
      {
        date: "6aaaaaaaaa行",
        name: "2017-12-16",
        num: "1231313.22"
      },
      {
        date: "7aaaaaaaaa行",
        name: "2017-12-16",
        num: "1231313.22"
      },
      {
        date: "8aaaaaaaaa行",
        name: "2017-12-16",
        num: "1231313.22"
      },
      {
        date: "9aaaaaaaaa行",
        name: "2017-12-16",
        num: "1231313.22"
      },
      {
        date: "10aaaaaaaaa行",
        name: "2017-12-16",
        num: "1231313.22"
      },
      {
        date: "11aaaaaaaaa行",
        name: "2017-12-16",
        num: "1231313.22"
      },
      {
        date: "12aaaaaaaaa行",
        name: "2017-12-16",
        num: "1231313.22"
      },
      {
        date: "13aaaaaaaaa行",
        name: "2017-12-16",
        num: "1231313.22"
      }
    ];
    // this.drawChart5();

    // this.drawChartMap1();
    var that = this;
    window.onresize = function() {
      that.$echarts.init(document.getElementById("echart1")).resize();
      that.$echarts.init(document.getElementById("echart2")).resize();
      that.$echarts.init(document.getElementById("echart4")).resize();
      // that.$echarts.init(document.getElementById("echart5")).resize();
    };
  },
  methods: {
    drawChart1() {
      let echart1 = this.$echarts.init(document.getElementById("echart1"));
      var t = this;

      var option = {};

      //echarts折线图

      let dataList = [];

      let dataList2 = [];

      option = {
        backgroundColor: "",
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["汽车", "航空", "机械"],
          textStyle: {
            color: "#fff"
          }
        },
        title: {
          text: "行业历史用电量对比",
          left: 26,
          top: 26,
          textStyle: {
            color: "#FFFFFF",
            fontSize: 15,
            fontWeight: 50000,
            fontFamily: "PingFang SC"
          }
        },
        grid: {
          left: "2%",
          right: "2%",
          bottom: "5%",
          top: "8%",
          containLabel: true
        },
        dataZoom: [
          {
            type: "inside",
            start: 0,
            end: dataList.length > 15 ? 35 : 100
          }
        ],
        xAxis: {
          axisLine: {
            lineStyle: {
              color: "#397cbc"
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          //轴线上的字
          axisLabel: {
            show: true,
            textStyle: {
              color: "#cecece",
              fontSize: "10"
            }
          },
          data: ["2020-08-23", "2222-08-24", "2020-08-25"]
        },
        yAxis: [
          {
            type: "value",
            splitNumber: 4,
            axisTick: {
              show: false
            },
            //轴线上的字
            axisLabel: {
              textStyle: {
                fontSize: "12",
                color: "#cecece"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#397cbc"
              }
            },
            //网格线
            splitLine: {
              lineStyle: {
                color: "#11366e"
              }
            }
          }
        ],
        series: [
          {
            name: "汽车",
            type: "line",
            smooth: true, //是否平滑曲线显示
            showSymbol: false,

            // 最大值
            // markPoint: {
            //   data: [
            //     {
            //       name: "周最高",
            //       value: 320,
            //       xAxis: 4,
            //       yAxis: 320
            //     }
            //   ]
            // },
            itemStyle: {
              color: "#3eb5dd",
              borderColor: "#f1f1f1",
              borderWidth: 1
            },
            lineStyle: {
              normal: {
                width: 4,
                color: {
                  type: "linear",

                  colorStops: [
                    {
                      offset: 0,
                      color: "#57b3e5" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#31a9ea" // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                },
                shadowColor: "rgba(249,165,137, 0.5)",
                shadowBlur: 30,
                shadowOffsetY: 5
              }
            },
            areaStyle: {
              //区域填充样式
              normal: {
                color: new t.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(58,182,224, 0.6)"
                    },
                    {
                      offset: 0.6,
                      color: "rgba(58,182,224, 0.2)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(58,182,224, 0.01)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(58,182,224, 0.1)",
                shadowBlur: 6
              }
            },
            data: dataList
          },
          {
            name: "航空",
            type: "line",
            smooth: true, //是否平滑曲线显示
            showSymbol: false,
            itemStyle: {
              color: "#ff6b71",
              borderColor: "#f1f1f1",
              borderWidth: 1
            },

            //        最大值

            // markPoint: {
            //   data: [{ name: "用电量最高", value: 310, xAxis: 5, yAxis: 310 }]
            // },
            lineStyle: {
              normal: {
                width: 4,
                color: {
                  type: "linear",

                  colorStops: [
                    {
                      offset: 0,
                      color: "#ff874b" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#ff6b71" // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                },
                shadowColor: "rgba(255,107,113, 0.5)",
                shadowBlur: 12,
                shadowOffsetY: 5
              }
            },
            areaStyle: {
              //区域填充样式
              normal: {
                color: new t.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(255,107,113, 0.6)"
                    },
                    {
                      offset: 0.6,
                      color: "rgba(255,107,113, 0.2)"
                    },
                    {
                      offset: 1,
                      color: "rgba(255,107,113, 0.01)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(255,107,113, 0.4)",
                shadowBlur: 6
              }
            },
            data: dataList2
          },
          {
            name: "机械",
            type: "line",
            smooth: true, //是否平滑曲线显示
            showSymbol: false,
            itemStyle: {
              color: "#feb64d",
              borderColor: "#f1f1f1",
              borderWidth: 1
            },
            // markPoint: {
            //   data: [{ name: "用电量最高", value: 310, xAxis: 5, yAxis: 310 }]
            // },
            lineStyle: {
              normal: {
                width: 4,
                color: {
                  type: "linear",

                  colorStops: [
                    {
                      offset: 0,
                      color: "#fed207" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#feb64d" // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                },
                shadowColor: "rgba(254,182,77, 0.5)",
                shadowBlur: 12,
                shadowOffsetY: 5
              }
            },
            areaStyle: {
              //区域填充样式
              normal: {
                color: new t.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(254,182,77, 0.6)"
                    },
                    {
                      offset: 0.6,
                      color: "rgba(254,182,77, 0.2)"
                    },
                    {
                      offset: 1,
                      color: "rgba(254,182,77, 0.01)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(254,182,77, 0.4)",
                shadowBlur: 6
              }
            },
            data: null
          }
        ]
      };

      echart1.setOption(option);

      this.$axios.get("/findElectricityPastList").then(res => {
        let electricityPastDataList = res.data.data.electricityPastDataList;
        let pastElectricityList = res.data.data.pastElectricityList;
        let resoutDataDateStr = [];

        // 汽车数据列表
        let echart1DataList1 = [];
        //航空数据列表
        let echart1DataList2 = [];
        //机械数据列表

        let echart1DataList3 = [];
        console.log(res.data.data.electricityPastDataList);

        pastElectricityList.forEach(element => {
          console.log(element);
          var optionObject = {
            name: element.electricityDateStr,
            value: "" + element.electricityNum
          };

          if (element.electricityName === "汽车") {
            echart1DataList1.push(optionObject);
          } else if (element.electricityName === "航空") {
            echart1DataList2.push(optionObject);
          } else {
            echart1DataList3.push(optionObject);
          }
        });
        // electricityPastDataList.forEach(element => {
        //   console.log(element);
        //   resoutDataDateStr.push(element.electricityDateStr);
        // });

        console.log("ecccccccc1************");
        console.log(echart1DataList1);
        console.log(echart1DataList2);
        console.log(echart1DataList3);

        console.log("ecccccccc1************");

        echart1.setOption({
          xAxis: {
            data: electricityPastDataList
          },
          series: [
            {
              name: "汽车",
              data: echart1DataList1
            },
            {
              name: "航空",
              data: echart1DataList2
            },
            {
              name: "机械",
              data: echart1DataList3
            }
          ]
        });
      });
    },
    drawChart2() {
      let echart2 = this.$echarts.init(document.getElementById("echart2"));
      var option = {};
      var t = this;

      var colorArr = [
        "#218de0",
        "#01cbb3",
        "#85e647",
        "#5d5cda",
        "#05c5b0",
        "#c29927"
      ];
      var colorAlpha = [
        "rgba(60,170,211,0.05)",
        "rgba(1,203,179,0.05)",
        "rgba(133,230,71,0.05)",
        "rgba(93,92,218,0.05)",
        "rgba(5,197,176,0.05)",
        "rgba(194,153,39,0.05)"
      ];
      option = {
        backgroundColor: "",
        grid: {
          left: -100,
          top: 50,
          bottom: 10,
          right: 10,
          containLabel: true
        },
        tooltip: {
          trigger: "item",
          formatter: "{b} : {c} ({d}%)"
        },
        legend: {
          show: false
        },

        polar: {},
        angleAxis: {
          interval: 1,
          type: "category",
          data: [],
          z: 10,
          axisLine: {
            show: false,
            lineStyle: {
              color: "#0B4A6B",
              width: 1,
              type: "solid"
            }
          },
          axisLabel: {
            interval: 0,
            show: true,
            color: "#0B4A6B",
            margin: 8,
            fontSize: 16
          }
        },
        radiusAxis: {
          min: 20,
          max: 120,
          interval: 20,
          axisLine: {
            show: false,
            lineStyle: {
              color: "#0B3E5E",
              width: 1,
              type: "solid"
            }
          },
          axisLabel: {
            formatter: "{value} %",
            show: false,
            padding: [0, 0, 20, 0],
            color: "#0B3E5E",
            fontSize: 16
          },
          splitLine: {
            lineStyle: {
              color: "#07385e",
              width: 2,
              type: "dashed"
            }
          }
        },
        calculable: true,
        series: [
          {
            stack: "a",
            type: "pie",
            radius: "80%",
            roseType: "radius",
            zlevel: 10,
            startAngle: 100,
            label: {
              normal: {
                formatter: ["{b|{b}}", "{d|{d}%}"].join("\n"),
                rich: {
                  b: {
                    color: "#3bd2fe",
                    fontSize: 14,
                    lineHeight: 20
                  },
                  d: {
                    color: "#d0fffc",
                    fontSize: 14,
                    height: 20
                  }
                }
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 10,
                length2: 45,
                lineStyle: {
                  color: "#0096b1"
                }
              },
              emphasis: {
                show: false
              }
            },
            data: [
              // {
              //   value: 0,
              //   name: "汽车行业历史总用电量",
              //   itemStyle: {
              //     borderColor: colorArr[0],
              //     borderWidth: 2,
              //     shadowBlur: 20,
              //     shadowColor: "#41a8f8",
              //     shadowOffsetx: 25,
              //     shadowOffsety: 20,
              //     color: colorAlpha[0]
              //   }
              // },
              // {
              //   value: 27,
              //   name: "汽车行业历史总用电量",
              //   itemStyle: {
              //     borderColor: colorArr[4],
              //     borderWidth: 2,
              //     shadowBlur: 20,
              //     shadowColor: "#41a8f8",
              //     shadowOffsetx: 25,
              //     shadowOffsety: 20,
              //     color: colorAlpha[4]
              //   }
              // },
              // {
              //   value: 0,
              //   name: "航空行业历史总用电量",
              //   itemStyle: {
              //     borderColor: colorArr[2],
              //     borderWidth: 2,
              //     shadowBlur: 20,
              //     shadowColor: colorArr[2],
              //     shadowOffsetx: 25,
              //     shadowOffsety: 20,
              //     color: colorAlpha[2]
              //   }
              // },
              // {
              //   value: 13,
              //   name: "节假日",
              //   itemStyle: {
              //     borderColor: colorArr[3],
              //     borderWidth: 2,
              //     shadowBlur: 20,
              //     shadowColor: colorArr[3],
              //     shadowOffsetx: 25,
              //     shadowOffsety: 20,
              //     color: colorAlpha[3]
              //   }
              // },
              // {
              //   value: 10,
              //   name: "临时用电",
              //   itemStyle: {
              //     borderColor: colorArr[4],
              //     borderWidth: 2,
              //     shadowBlur: 20,
              //     shadowColor: colorArr[4],
              //     shadowOffsetx: 25,
              //     shadowOffsety: 20,
              //     color: colorAlpha[4]
              //   }
              // },
              // {
              //   value: 6,
              //   name: "机械行业历史总用电量",
              //   itemStyle: {
              //     borderColor: colorArr[5],
              //     borderWidth: 2,
              //     shadowBlur: 20,
              //     shadowColor: colorArr[5],
              //     shadowOffsetx: 25,
              //     shadowOffsety: 20,
              //     color: colorAlpha[5]
              //   }
              // }
            ]
          }
        ]
      };
      echart2.setOption(option);

      this.$axios.get("/findElectricityPastList").then(res => {
        console.log("res");
        console.log(res);
        let electricityPastDataList = res.data.data.electricityPastDataList;
        let pastElectricityList = res.data.data.pastElectricityList;
        let resoutDataDateStr = [];

        // 汽车数据列表
        let echart1DataSum1 = 0;

        //航空数据列表
        let echart1DataSum2 = 0;

        //机械数据列表

        let echart1DataSum3 = 0;

        console.log(res.data.data.electricityPastDataList);

        pastElectricityList.forEach(element => {
          console.log(element);
          // var optionObject = {
          //   name: element.electricityDateStr,
          //   value: "" + element.electricityNum
          // };

          if (element.electricityName === "汽车") {
            echart1DataSum1 += element.electricityNum;
          } else if (element.electricityName === "航空") {
            echart1DataSum2 += element.electricityNum;
          } else {
            echart1DataSum3 += element.electricityNum;
          }
        });

        electricityPastDataList.forEach(element => {
          console.log(element);
          resoutDataDateStr.push(element.electricityDateStr);
        });

        echart2.setOption({
          series: [
            {
              data: [
                {
                  value: echart1DataSum1,
                  name: "汽车行业历史总用电量",
                  itemStyle: {
                    borderColor: colorArr[1],
                    borderWidth: 2,
                    shadowBlur: 20,
                    shadowColor: "#41a8f8",
                    shadowOffsetx: 25,
                    shadowOffsety: 20,
                    color: colorAlpha[1]
                  }
                },

                {
                  value: echart1DataSum2,
                  name: "航空行业历史总用电量",
                  itemStyle: {
                    borderColor: colorArr[2],
                    borderWidth: 2,
                    shadowBlur: 20,
                    shadowColor: colorArr[2],
                    shadowOffsetx: 25,
                    shadowOffsety: 20,
                    color: colorAlpha[2]
                  }
                },

                {
                  value: echart1DataSum3,
                  name: "机械行业历史总用电量",
                  itemStyle: {
                    borderColor: colorArr[5],
                    borderWidth: 2,
                    shadowBlur: 20,
                    shadowColor: colorArr[5],
                    shadowOffsetx: 25,
                    shadowOffsety: 20,
                    color: colorAlpha[5]
                  }
                }
              ]
            }
          ]
        });
      });
    },

    drawChart4() {
      let echart4 = this.$echarts.init(document.getElementById("echart4"));
      var option = {};
      var t = this;
      // Generate data
      var category = [];
      var dottedBase = [];
      var lineData = [];
      var barData = [];
      var rateData = [];
      32808;
      // for (var i = 0; i < 33; i++) {
      //   // var date = i+2001;
      //   // category.push(date)
      //   var rate = barData[i] / lineData[i];
      //   rateData[i] = rate.toFixed(2);
      // }

      // option
      option = {
        title: {
          text: "行业历史用电量总和及增长率-单位",
          x: "center",
          y: 0,
          textStyle: {
            color: "#B4B4B4",
            fontSize: 16,
            fontWeight: "normal"
          }
        },
        backgroundColor: "",
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(255,255,255,0.1)",
          axisPointer: {
            type: "shadow",
            label: {
              show: true,
              backgroundColor: "#7B7DDC"
            }
          }
        },
        legend: {
          data: ["行业历史用电量总和", "行业用电量总和增长率"],
          textStyle: {
            color: "#B4B4B4"
          },
          top: "7%"
        },
        grid: {
          x: "12%",
          width: "82%",
          y: "12%"
        },
        xAxis: {
          data: category,
          axisLine: {
            lineStyle: {
              color: "#B4B4B4"
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: [
          {
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: "#B4B4B4"
              }
            },

            axisLabel: {
              formatter: "{value} "
            }
          },
          {
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: "#B4B4B4"
              }
            },
            axisLabel: {
              formatter: "{value} "
            }
          }
        ],

        series: [
          {
            name: "行业用电量总和增长率",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#F02FC2"
              }
            },
            data: rateData
          },

          {
            name: "行业历史用电量总和",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new t.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#956FD4" },
                  { offset: 1, color: "#3EACE5" }
                ])
              }
            },
            data: barData
          }

          // {
          //   name: "计划贯通",
          //   type: "bar",
          //   barGap: "-100%",
          //   barWidth: 10,
          //   itemStyle: {
          //     normal: {
          //       barBorderRadius: 5,
          //       color: new t.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
          //         { offset: 0, color: "rgba(156,107,211,0.5)" },
          //         { offset: 0.2, color: "rgba(156,107,211,0.3)" },
          //         { offset: 1, color: "rgba(156,107,211,0)" }
          //       ])
          //     }
          //   },
          //   z: -12,

          //   data: lineData
          // }
        ]
      };
      echart4.setOption(option);

      this.$axios.get("/findElectricityPastList").then(res => {
        // 日期
        let electricityPastDataList = res.data.data.electricityPastDataList;
        //数据和
        let electricityPastNumSumByDate =
          res.data.data.electricityPastNumSumByDate;

        // 增长率
        let numSumRate = [];
        for (let i = 0; i < electricityPastNumSumByDate.length - 1; i++) {
          numSumRate.push(
            (electricityPastNumSumByDate[i + 1] -
              electricityPastNumSumByDate[i]) /
              electricityPastNumSumByDate[i]
          );
        }

        console.log(numSumRate);

        echart4.setOption({
          xAxis: {
            data: electricityPastDataList
          },
          series: [
            {
              name: "行业用电量总和增长率",
              data: numSumRate
            },
            {
              name: "行业历史用电量总和",
              data: electricityPastNumSumByDate
            }
          ]
        });
      });
    }
  }
};
</script>

<style scoped>
@import "./../assets/css/comon0.css";
</style>
<style scoped>
.seamless-warp {
  height: 220px;
  overflow: hidden;
}
.title {
  color: cadetblue;
  font-size: 0.3rem;
}
.date {
  color: cadetblue;
  font-size: 0.3rem;
}
</style>