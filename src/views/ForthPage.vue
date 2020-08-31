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
              <li class="counter" style="width:100%;line-height: 2rem;">峰谷平电价和行业分时电价</li>
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
        <div class="boxall" style="height: 3.2rem">
          <div class="alltitle">模块标题样式</div>
          <div class="allnav" id="echart4">echart6</div>
          <div class="boxfoot"></div>
        </div>
        <!-- <div class="boxall" style="height: 3rem">
          <div class="alltitle">模块标题样式</div>
          <div class="allnav" id="echart6">echart6</div>
          <div class="boxfoot"></div>
        </div> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ForthPage",
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
    this.drawChart4();
    // this.drawChart5();
    // this.drawChartMap1();
    var that = this;
    window.onresize = function() {
      that.$echarts.init(document.getElementById("echart1")).resize();
      that.$echarts.init(document.getElementById("echart2")).resize();
      that.$echarts.init(document.getElementById("echart3")).resize();
      that.$echarts.init(document.getElementById("echart4")).resize();
      that.$echarts.init(document.getElementById("map_1")).resize();
    };
  },

  methods: {
    drawChart1() {
      let echart1 = this.$echarts.init(document.getElementById("echart1"));
      var option = {};
      var t = this;

      var data = [];
      var labelData = [];
      for (var i = 0; i < 24; ++i) {
        data.push({
          value: Math.random() * 10 + 10 - Math.abs(i - 12),
          name: i + ":00"
        });
        labelData.push({
          value: 1,
          name: i + ":00"
        });
      }

      option = {
        title: {
          text: "24小时用电量分析",
          left: "50%",
          textAlign: "center",
          top: "20%"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color: [
          "#27D38A",
          "#FFCA1C",
          "#5DD1FA",
          "#F88E25",
          "#47A0FF",
          "#FD6565"
        ],
        series: [
          {
            type: "pie",
            data: data,
            roseType: "area",
            itemStyle: {
              normal: {
                color: "white",
                borderColor: "#22C3AA"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              normal: {
                show: false
              }
            }
          },
          {
            type: "pie",
            data: labelData,
            radius: ["75%", "100%"],
            zlevel: -2,
            itemStyle: {
              normal: {
                color: "#22C3AA",
                borderColor: "white"
              }
            },
            label: {
              normal: {
                position: "inside"
              }
            }
          }
        ]
      };

      echart1.setOption(option);

       t.$axios.get("/findAllElectricityTimeSharing").then((result) => {
        console.log(result);
        
      }).catch((err) => {
        
      });
    },

    drawChart2() {
      let echart2 = this.$echarts.init(document.getElementById("echart2"));
      var option = {};
      var t = this;

      var data = [];
      var labelData = [];
      for (var i = 0; i < 24; ++i) {
        data.push({
          value: Math.random() * 10 + 10 - Math.abs(i - 12),
          name: i + ":00"
        });
        labelData.push({
          value: 1,
          name: i + ":00"
        });
      }

      option = {
        title: {
          text: "24小时用电量分析",
          left: "50%",
          textAlign: "center",
          top: "20%"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color: [
          "#27D38A",
          "#FFCA1C",
          "#5DD1FA",
          "#F88E25",
          "#47A0FF",
          "#FD6565"
        ],
        series: [
          {
            type: "pie",
            data: data,
            roseType: "area",
            itemStyle: {
              normal: {
                color: "white",
                borderColor: "#22C3AA"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              normal: {
                show: false
              }
            }
          },
          {
            type: "pie",
            data: labelData,
            radius: ["75%", "100%"],
            zlevel: -2,
            itemStyle: {
              normal: {
                color: "#22C3AA",
                borderColor: "white"
              }
            },
            label: {
              normal: {
                position: "inside"
              }
            }
          }
        ]
      };

      echart2.setOption(option);
    },
    drawChart3() {
      let echart3 = this.$echarts.init(document.getElementById("echart3"));
      var option = {};
      var t = this;

      var data = [];
      var labelData = [];
      for (var i = 0; i < 24; ++i) {
        data.push({
          value: Math.random() * 10 + 10 - Math.abs(i - 12),
          name: i + ":00"
        });
        labelData.push({
          value: 1,
          name: i + ":00"
        });
      }

      option = {
        title: {
          text: "24小时用电量分析",
          left: "50%",
          textAlign: "center",
          top: "20%"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color: [
          "#27D38A",
          "#FFCA1C",
          "#5DD1FA",
          "#F88E25",
          "#47A0FF",
          "#FD6565"
        ],
        series: [
          {
            type: "pie",
            data: data,
            roseType: "area",
            itemStyle: {
              normal: {
                color: "white",
                borderColor: "#22C3AA"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              normal: {
                show: false
              }
            }
          },
          {
            type: "pie",
            data: labelData,
            radius: ["75%", "100%"],
            zlevel: -2,
            itemStyle: {
              normal: {
                color: "#22C3AA",
                borderColor: "white"
              }
            },
            label: {
              normal: {
                position: "inside"
              }
            }
          }
        ]
      };

      echart3.setOption(option);
    },
    drawChart4() {
      let echart4 = this.$echarts.init(document.getElementById("echart4"));
      var option = {};
      var t = this;

      var data = [];
      var labelData = [];
      for (var i = 0; i < 24; ++i) {
        data.push({
          value: Math.random() * 10 + 10 - Math.abs(i - 12),
          name: i + ":00"
        });
        labelData.push({
          value: 1,
          name: i + ":00"
        });
      }

      option = {
        title: {
          text: "24小时用电量分析",
          left: "50%",
          textAlign: "center",
          top: "20%"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color: [
          "#27D38A",
          "#FFCA1C",
          "#5DD1FA",
          "#F88E25",
          "#47A0FF",
          "#FD6565"
        ],
        series: [
          {
            type: "pie",
            data: data,
            roseType: "area",
            itemStyle: {
              normal: {
                color: "white",
                borderColor: "#22C3AA"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              normal: {
                show: false
              }
            }
          },
          {
            type: "pie",
            data: labelData,
            radius: ["75%", "100%"],
            zlevel: -2,
            itemStyle: {
              normal: {
                color: "#22C3AA",
                borderColor: "white"
              }
            },
            label: {
              normal: {
                position: "inside"
              }
            }
          }
        ]
      };

      echart4.setOption(option);
    },

    drawChartMap1() {
      let map_1 = this.$echarts.init(document.getElementById("map_1"));
      var option = {};
      var t = this;

      var xData = (function() {
        var data = [
          "新福利",
          "溢通公司",
          "南沙巴士",
          "从化分公司",
          "花都恒通",
          "二巴一分",
          "二巴二分",
          "番禺片区",
          "佛广集团",
          "客运旅包"
        ];
        return data;
      })();

      option = {
        backgroundColor: "RGBA(7, 28, 51, 1)",
        legend: {
          data: ["岗前培训", "安全例会", "技术培训", "教育约谈", "其它"],
          left: "15%",
          top: 20,
          itemWidth: 60,
          itemHeight: 30,
          type: "plain",
          textStyle: {
            color: "RGBA(154, 209, 253, 1)"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            textStyle: {
              color: "#fff"
            }
          }
        },
        grid: {
          borderWidth: 0,
          top: 110,
          bottom: 95,
          textStyle: {
            color: "#fff"
          }
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.5)"
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitArea: {
              show: false
            },
            axisLabel: {
              interval: 0,
              color: "rgba(255,255,255,0.7)",
              fontSize: 18
            },
            data: xData
          }
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              show: true,
              lineStyle: {
                type: "dashed",
                color: "RGBA(3, 75, 97, 1)"
              }
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              color: "rgba(255,255,255,0.5)",
              fontSize: 20
            },
            splitArea: {
              show: false
            }
          },
          {
            type: "value",
            splitLine: {
              show: false
            },
            min: 0,
            axisLabel: {
              interval: 0,
              color: "rgba(255,255,255,0.5)",
              fontSize: 20
            }
          }
        ],
        series: [
          {
            name: "岗前培训",
            type: "bar",
            stack: "1",
            barMaxWidth: 35,
            barGap: "10%",
            itemStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(0, 214, 255, 0.6)" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(83, 14, 224, 0.15)" // 100% 处的颜色
                    }
                  ],
                  global: false // 缺省为 false
                },
                opacity: 1,
                borderColor: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(0, 214, 255, 0.6)" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(83, 14, 224, 0.15)" // 100% 处的颜色
                    }
                  ],
                  global: false // 缺省为 false
                },
                borderWidth: 4
              }
            },
            data: [16, 11, 8, 14, 17, 16, 11, 8, 14, 17]
          },

          {
            name: "安全例会",
            type: "bar",
            stack: "2",
            itemStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(48, 112, 255, 0.6)" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(83, 14, 224, 0.15)" // 100% 处的颜色
                    }
                  ],
                  global: false // 缺省为 false
                },
                opacity: 1,
                borderColor: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(48, 112, 255, 0.6)" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(83, 14, 224, 0.15)" // 100% 处的颜色
                    }
                  ],
                  global: false // 缺省为 false
                },
                borderWidth: 4
              }
            },
            data: [9, 7, 3, 2, 6, 9, 7, 3, 2, 6]
          },
          {
            name: "技术培训",
            type: "bar",
            stack: "3",
            barMaxWidth: 35,
            barGap: "40%",
            itemStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(255, 0, 132, 0.6)" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(83, 14, 224, 0.15)" // 100% 处的颜色
                    }
                  ],
                  global: false // 缺省为 false
                },
                opacity: 1,
                borderColor: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(255, 0, 132, 0.6)" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(83, 14, 224, 0.15)" // 100% 处的颜色
                    }
                  ],
                  global: false // 缺省为 false
                },
                borderWidth: 4
              }
            },
            data: [13, 19, 6, 12, 15, 13, 19, 6, 12, 15]
          },
          {
            name: "教育约谈",
            type: "bar",
            stack: "4",
            barMaxWidth: 35,
            barGap: "40%",
            itemStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(192, 0, 255, 0.6)" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(83, 14, 224, 0.15)" // 100% 处的颜色
                    }
                  ],
                  global: false // 缺省为 false
                },
                opacity: 1,
                borderColor: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(192, 0, 255, 0.6)" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(83, 14, 224, 0.15)" // 100% 处的颜色
                    }
                  ],
                  global: false // 缺省为 false
                },
                borderWidth: 4
              }
            },
            data: [13, 19, 6, 12, 15, 13, 19, 6, 12, 15]
          },
          {
            name: "其它",
            type: "line",
            yAxisIndex: 1,
            symbolSize: 10,
            symbol: "emptyCircle",
            itemStyle: {
              normal: {
                color: "rgba(0, 255, 180, 1)",
                barBorderRadius: "100%"
              },
              borderWidth: 5
            },
            lineStyle: {
              normal: {
                width: 3,
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(0, 255, 180, 0.5)" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(0, 255, 180, 0.5)" // 100% 处的颜色
                    }
                  ],
                  global: false // 缺省为 false
                }
              }
            },
            data: [28, 20, 15, 10, 9, 7, 6, 4, 3, 0]
          }
        ]
      };
      map_1.setOption(option);
    }
  }
};
</script>

<style scoped>
@import "./../assets/css/comon0.css";
</style>