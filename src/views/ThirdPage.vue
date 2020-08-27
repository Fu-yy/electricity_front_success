<template>
  <div class="mainbox">
    <ul class="clearfix">
      <li>
        <div class="boxall" style="height: 5.2rem">
          <div class="alltitle">模2222式</div>
          <div class="allnav" id="echart1"></div>
          <div class="boxfoot"></div>
        </div>
        <div class="boxall" style="height: 4.2rem">
          <div class="alltitle">模块标题样式</div>
          <div class="allnav" id="echart2"></div>
          <div class="boxfoot"></div>
        </div>
        <!-- <div class="boxall" style="height: 5rem">
          <div style="height:100%; width: 100%;">
            <div class="sy" id="fb1"></div>
            <div class="sy" id="fb2"></div>
            <div class="sy" id="fb3"></div>
          </div>
          <div class="boxfoot"></div>
        </div> -->
      </li>
      <li>
        <div class="bar" style="margin-bottom:1rem">
          <div class="barbox">
            <ul class="clearfix">
              <li class="counter" style="width:100%;line-height: 2rem;">行业用电趋势预测</li>
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
        <div class="boxall" style="height:3.4rem">
          <div class="alltitle">模块标题样式</div>
          <div class="allnav" id="echart3">echart6</div>
          <div class="boxfoot"></div>
        </div>
    
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ThirdPage",
  data() {
    return {
      loading: require("./../assets/img/loading.gif"),
      lbx: require("./../assets/img/lbx.png"),
      jt: require("./../assets/img/jt.png"),
      map: require("./../assets/img/map.png"),
      fontSize: document.documentElement.clientWidth
    };
  },
  mounted() {
    this.drawChart1();
    this.drawChart2();
    this.drawChart3();
    this.drawChartMap1();
     var that = this;
    window.onresize = function() {
      that.$echarts.init(document.getElementById("echart1")).resize();
      that.$echarts.init(document.getElementById("echart2")).resize();
      that.$echarts.init(document.getElementById("echart3")).resize();
      that.$echarts.init(document.getElementById("map_1")).resize();
     
    };
    // this.drawChart4();
    // this.drawChart5();
    // this.drawChartMap1();
  },

  methods: {
    drawChart1() {
      let echart1 = this.$echarts.init(
        document.getElementById("echart1")
      );
      var option = {};
      var t = this;

      var option = {
        angleAxis: {
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          min: 0,
          max: 160,
          boundaryGap: ["0", "100"],
          startAngle: 202.5
        },
        radiusAxis: {
          type: "category",
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          data: ["a", "b", "c"],
          z: 10
        },
        polar: {},
        series: [
          {
            type: "bar",
            data: [, , 40],
            coordinateSystem: "polar",
            barMaxWidth: 40,
            z: 2,
            name: "已交割",
            roundCap: true,
            color: "#4A90E2",
            barGap: "-100%"
          },
          {
            type: "bar",
            data: [, , 50],
            z: 1,
            coordinateSystem: "polar",
            barMaxWidth: 40,
            name: "执行中",
            roundCap: true,
            color: "#3768a2",
            barGap: "-100%"
          },
          {
            type: "bar",
            data: [, , 100],
            z: 0,
            silent: true,
            coordinateSystem: "polar",
            barMaxWidth: 40,
            name: "C",
            roundCap: true,
            color: "#F1F3F8",
            barGap: "-100%"
          }
        ],
        legend: {
          show: true,
          icon: "circle",
          itemWidth: 20,
          itemHeight: 20,
          textStyle: {
            fontSize: 16,
            color: "#c0c0c0"
          },
          top: "35%",
          left: "center",
          data: ["已交割", "执行中"]
        },
        tooltip: {
          show: false
        },
        graphic: [
          {
            type: "group",
            top: "middle",
            left: "center",
            id: "data",
            children: [
              {
                type: "text",
                id: "current",
                top: 0,
                style: {
                  text: "5,390",
                  font: 'bolder 4em "Microsoft YaHei", sans-serif',
                  fill: "#000000",
                  textAlign: "center"
                }
              },
              {
                type: "text",
                id: "all",
                top: 100,
                style: {
                  text: "of 10,000",
                  font: 'bolder 2em "Microsoft YaHei", sans-serif',
                  fill: "#c0c0c0",
                  textAlign: "center"
                }
              }
            ]
          },
          {
            type: "text",
            bottom: 390,
            left: 400,
            style: {
              text: "0%",
              font: 'bolder 1em "Microsoft YaHei", sans-serif',
              fill: "#c0c0c0"
            }
          },
          {
            type: "text",
            bottom: 390,
            right: 400,
            style: {
              text: "100%",
              font: 'bolder 1em "Microsoft YaHei", sans-serif',
              fill: "#c0c0c0"
            }
          }
        ]
      };
      echart1.setOption(option);
    },
    drawChart2() {
      let echart2 = this.$echarts.init(
        document.getElementById("echart2")
      );
      var option = {};
      var t = this;

      var option = {
        angleAxis: {
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          min: 0,
          max: 160,
          boundaryGap: ["0", "100"],
          startAngle: 202.5
        },
        radiusAxis: {
          type: "category",
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          data: ["a", "b", "c"],
          z: 10
        },
        polar: {},
        series: [
          {
            type: "bar",
            data: [, , 40],
            coordinateSystem: "polar",
            barMaxWidth: 40,
            z: 2,
            name: "已交割",
            roundCap: true,
            color: "#4A90E2",
            barGap: "-100%"
          },
          {
            type: "bar",
            data: [, , 50],
            z: 1,
            coordinateSystem: "polar",
            barMaxWidth: 40,
            name: "执行中",
            roundCap: true,
            color: "#3768a2",
            barGap: "-100%"
          },
          {
            type: "bar",
            data: [, , 100],
            z: 0,
            silent: true,
            coordinateSystem: "polar",
            barMaxWidth: 40,
            name: "C",
            roundCap: true,
            color: "#F1F3F8",
            barGap: "-100%"
          }
        ],
        legend: {
          show: true,
          icon: "circle",
          itemWidth: 20,
          itemHeight: 20,
          textStyle: {
            fontSize: 16,
            color: "#c0c0c0"
          },
          top: "35%",
          left: "center",
          data: ["已交割", "执行中"]
        },
        tooltip: {
          show: false
        },
        graphic: [
          {
            type: "group",
            top: "middle",
            left: "center",
            id: "data",
            children: [
              {
                type: "text",
                id: "current",
                top: 0,
                style: {
                  text: "5,390",
                  font: 'bolder 4em "Microsoft YaHei", sans-serif',
                  fill: "#000000",
                  textAlign: "center"
                }
              },
              {
                type: "text",
                id: "all",
                top: 100,
                style: {
                  text: "of 10,000",
                  font: 'bolder 2em "Microsoft YaHei", sans-serif',
                  fill: "#c0c0c0",
                  textAlign: "center"
                }
              }
            ]
          },
          {
            type: "text",
            bottom: 390,
            left: 400,
            style: {
              text: "0%",
              font: 'bolder 1em "Microsoft YaHei", sans-serif',
              fill: "#c0c0c0"
            }
          },
          {
            type: "text",
            bottom: 390,
            right: 400,
            style: {
              text: "100%",
              font: 'bolder 1em "Microsoft YaHei", sans-serif',
              fill: "#c0c0c0"
            }
          }
        ]
      };
      echart2.setOption(option);
    },
    drawChart3() {
      let echart3 = this.$echarts.init(
        document.getElementById("echart3")
      );
      var option = {};
      var t = this;

      var option = {
        angleAxis: {
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          min: 0,
          max: 160,
          boundaryGap: ["0", "100"],
          startAngle: 202.5
        },
        radiusAxis: {
          type: "category",
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          data: ["a", "b", "c"],
          z: 10
        },
        polar: {},
        series: [
          {
            type: "bar",
            data: [, , 40],
            coordinateSystem: "polar",
            barMaxWidth: 40,
            z: 2,
            name: "已交割",
            roundCap: true,
            color: "#4A90E2",
            barGap: "-100%"
          },
          {
            type: "bar",
            data: [, , 50],
            z: 1,
            coordinateSystem: "polar",
            barMaxWidth: 40,
            name: "执行中",
            roundCap: true,
            color: "#3768a2",
            barGap: "-100%"
          },
          {
            type: "bar",
            data: [, , 100],
            z: 0,
            silent: true,
            coordinateSystem: "polar",
            barMaxWidth: 40,
            name: "C",
            roundCap: true,
            color: "#F1F3F8",
            barGap: "-100%"
          }
        ],
        legend: {
          show: true,
          icon: "circle",
          itemWidth: 20,
          itemHeight: 20,
          textStyle: {
            fontSize: 16,
            color: "#c0c0c0"
          },
          top: "35%",
          left: "center",
          data: ["已交割", "执行中"]
        },
        tooltip: {
          show: false
        },
        graphic: [
          {
            type: "group",
            top: "middle",
            left: "center",
            id: "data",
            children: [
              {
                type: "text",
                id: "current",
                top: 0,
                style: {
                  text: "5,390",
                  font: 'bolder 4em "Microsoft YaHei", sans-serif',
                  fill: "#000000",
                  textAlign: "center"
                }
              },
              {
                type: "text",
                id: "all",
                top: 100,
                style: {
                  text: "of 10,000",
                  font: 'bolder 2em "Microsoft YaHei", sans-serif',
                  fill: "#c0c0c0",
                  textAlign: "center"
                }
              }
            ]
          },
          {
            type: "text",
            bottom: 390,
            left: 400,
            style: {
              text: "0%",
              font: 'bolder 1em "Microsoft YaHei", sans-serif',
              fill: "#c0c0c0"
            }
          },
          {
            type: "text",
            bottom: 390,
            right: 400,
            style: {
              text: "100%",
              font: 'bolder 1em "Microsoft YaHei", sans-serif',
              fill: "#c0c0c0"
            }
          }
        ]
      };
      echart3.setOption(option);
    },
     drawChartMap1() {
      let map_1 = this.$echarts.init(
        document.getElementById("map_1")
      );
      var t = this;
      var option = {};

      //echarts折线图

      let dataList = [
        {
          name: "2020-06-10",
          value: "150"
        },
        {
          name: "2020-06-11",
          value: "170"
        },
        {
          name: "2020-06-12",
          value: "210"
        },
        {
          name: "2020-06-13",
          value: "240"
        },
        {
          name: "2020-06-14",
          value: "320"
        },
        {
          name: "2020-06-15",
          value: "272"
        },
        {
          name: "2020-06-16",
          value: "220"
        },
        {
          name: "2020-06-17",
          value: "160"
        }
      ];
      let dataList2 = [
        {
          name: "2020-06-10",
          value: "240"
        },
        {
          name: "2020-06-11",
          value: "220"
        },
        {
          name: "2020-06-12",
          value: "185"
        },
        {
          name: "2020-06-13",
          value: "175"
        },
        {
          name: "2020-06-14",
          value: "220"
        },
        {
          name: "2020-06-15",
          value: "310"
        },
        {
          name: "2020-06-16",
          value: "222"
        },
        {
          name: "2020-06-17",
          value: "135"
        }
      ];

      option = {
        backgroundColor: "",
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["摸鱼时长", "学习时长"],
          textStyle: {
            color: "#fff"
          }
        },
        title: {
          text: "今天你摸鱼了吗",
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
              fontSize: "14"
            }
          },
          data: [
            "2020-06-10",
            "2020-06-11",
            "2020-06-12",
            "2020-06-13",
            "2020-06-14",
            "2020-06-15",
            "2020-06-16",
            "2020-06-17"
          ]
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
            name: "摸鱼时长",
            type: "line",
            smooth: true, //是否平滑曲线显示
            showSymbol: false,
            markPoint: {
              data: [
                {
                  name: "周最高",
                  value: 320,
                  xAxis: 4,
                  yAxis: 320
                }
              ]
            },
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
            name: "学习时长",
            type: "line",
            smooth: true, //是否平滑曲线显示
            showSymbol: false,
            itemStyle: {
              color: "#ff6b71",
              borderColor: "#f1f1f1",
              borderWidth: 1
            },
            markPoint: {
              data: [{ name: "周最高", value: 310, xAxis: 5, yAxis: 310 }]
            },
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
          }
        ]
      };

      map_1.setOption(option);
    },

  }
};
</script>

<style scoped>
@import "./../assets/css/comon0.css";
</style>