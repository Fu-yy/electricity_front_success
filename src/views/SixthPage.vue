<template>
  <div class="mainbox">

        <div class="map1" style="left:36%;top:25%">
              <img :src="lbx" />
          </div>
          <div class="map2" style="left:37.3%;top:27%">
            <img :src="jt" />
          </div>
          <div class="map3" style="left:38.5%;top:30%">
            <img :src="map" />
          </div>
    <ul class="clearfix">
      <li>
         <div class="boxall" style="height: 7.2rem">
          <div class="alltitle"></div>
          <div class="allnav" id="echart2">


              <div><span style="text-align:center;color:#fff">行业用电量及优化后用电量对比</span></div>
              <div class="scollTitle" style="height:1rem">
                <div class="dateTitle" style=" display:inline;line-height: .75rem;margin-left:1rem">
                  <span class="title">时间</span>
                </div>
                <div class="nameTitle" style=" display:inline;margin-left:1.5rem">
                  <span class="date">行业</span>
                </div>
                <div class="num" style=" display:inline;margin-left:2rem">
                  <span class="date">用电量</span>
                </div>
                <div class="num" style=" display:inline;margin-left:2.5rem">
                  <span class="date">涨幅</span>
                </div>
              </div>

              <vue-seamless-scroll :data="listData" class="seamless-warp">
                <ul class="item">
                  <li v-for="(item,index) in listData" :key="index" style="color:#ffffff">
                    <div style="display:inline;">
                      <span class="title" v-text="item.date" style="width:50px"></span>
                    </div>

                    <div style="display:inline;margin-left:1rem">
                      <span class="date" v-text="item.name" style="width:50px"></span>
                    </div>
                    <div style="display:inline;margin-left:1.5rem">
                      <span class="date" v-text="item.num" style="width:50px"></span>
                    </div>
                    <div style="display:inline;margin-left:2rem">
                      <span class="date" v-text="item.increas" style="width:50px"></span>
                    </div>
                  </li>
                </ul>
              </vue-seamless-scroll>
            </div>
          <div class="boxfoot"></div>
        </div>
      </li>
      <li>
        <div class="bar" style="margin-bottom:.5rem">
          <div class="barbox">
            <ul class="clearfix">
              <li class="counter" style="width:100%;line-height: 1rem;font-size:.4rem">需求侧用电量优化</li>
            </ul>
          </div>
        </div>

        <!-- 标题 -->
        <!-- <div class="bar">
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
        </div> -->

        <div class="map" style="height:13rem">
       
          <div class="map4" id="map_1" style="top:35%;bottom:0;"></div>
        </div>
      </li>
      <li>
        <div class="boxall" style="height:6rem">
          <div class="alltitle">表格</div>
          <!-- <div class="allnav" id="echart3"></div> -->
          <div>
            <span style="font-size:.5rem;color:#fff">
              最大值:
            </span>
            </div>
            <div>
            <span style="font-size:.5rem;color:#fff">
              最小值:
            </span>
            </div>
             <div>
            <span style="font-size:.5rem;color:#fff">
             极差:
            </span>
            </div>
          <div class="boxfoot"></div>
        </div>
        <!-- <div class="boxall" style="height: 3.2rem">
          <div class="alltitle">模块标题样式</div>
          <div class="allnav" id="echart5">echart6</div>
          <div class="boxfoot"></div>
        </div>
        <div class="boxall" style="height: 3rem">
          <div class="alltitle">模块标题样式</div>
          <div class="allnav" id="echart6">echart6</div>
          <div class="boxfoot"></div>
        </div>-->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SixthPage",
  data() {
    return {
      loading: require("./../assets/img/loading.gif"),
      lbx: require("./../assets/img/lbx.png"),
      jt: require("./../assets/img/jt.png"),
      map: require("./../assets/img/map.png"),
      fontSize: document.documentElement.clientWidth,
      listData: [
        {
          date: "2017-12-16",
          name: "2017-12-16",
          num: "2017-12-16",
          increas:"1.2"
        },
         {
          date: "2017-12-16",
          name: "2017-12-16",
          num: "2017-12-16",
          increas:"1.2"
        }, {
          date: "2017-12-16",
          name: "2017-12-16",
          num: "2017-12-16",
          increas:"1.2"
        }, {
          date: "2017-12-16",
          name: "2017-12-16",
          num: "2017-12-16",
          increas:"1.2"
        }, {
          date: "2017-12-16",
          name: "2017-12-16",
          num: "2017-12-16",
          increas:"1.2"
        }, {
          date: "2017-12-16",
          name: "2017-12-16",
          num: "2017-12-16",
          increas:"1.2"
        }, {
          date: "2017-12-16",
          name: "2017-12-16",
          num: "2017-12-16",
          increas:"1.2"
        }, {
          date: "2017-12-16",
          name: "2017-12-16",
          num: "2017-12-16",
          increas:"1.2"
        },
      ]
    };
  },
  mounted() {
    // this.drawChart1();
    // this.drawChart2();
    // this.drawChart3();
    this.drawChartMap1();
    // this.drawChart4();
    // this.drawChart5();
    // this.drawChartMap1();
    var that = this;
    window.onresize = function() {
      // that.$echarts.init(document.getElementById("echart1")).resize();
      // that.$echarts.init(document.getElementById("echart2")).resize();
      // that.$echarts.init(document.getElementById("echart3")).resize();
      that.$echarts.init(document.getElementById("map_1")).resize();
    };
  },

  methods: {
    handleClick(row) {
      console.log(row);
    },
    addClass({ row, column, rowIndex, columnIndex }) {
      return "cell-grey";
    },

    drawChartMap1() {
      let map_1 = this.$echarts.init(document.getElementById("map_1"));
      var option = {};
      var t = this;

      // Generate data
      var category = [
        "0:00",
        "1:00",
        "2:00",
        "3:00",
        "4:00",
        "5:00",
        "6:00",
        "7:00",
        "8:00",
        "9:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00"
      ];
      var dottedBase = [];
      var lineData = [
        18092,
        20728,
        24045,
        28348,
        32808,
        36097,
        39867,
        44715,
        48444,
        50415,
        56061,
        62677,
        59521,
        67560,
        18092,
        20728,
        24045,
        28348
      ];
      var barData = [
        4600,
        5000,
        5500,
        6500,
        7500,
        8500,
        9900,
        12500,
        14000,
        21500,
        23200,
        24450,
        25250,
        33300,
        4600,
        5000,
        5500,
        4555
      ];
      var rateData = [
        1832,
        2028,
        2445,
        2838,
        3288,
        3607,
        3967,
        4415,
        4844,
        5045,
        5061,
        6677,
        5521,
        6560,
        1092,
        2028,
        2045,
        2348
      ];
      var rateData1 = [
        460,
        500,
        550,
        1500,
        750,
        850,
        900,
        1200,
        1400,
        2150,
        2320,
        2445,
        2550,
        330,
        460,
        500,
        550,
        455
      ];

      // option
      option = {
        title: {
          text: "实际用电量与优化后用电量对比分析",
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
        toolbox: {
          feature: {
            dataView: {
              show: true,
              readOnly: false
            },
            magicType: {
              show: true,
              type: ["line", "bar", "tiled"]
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            }
          }
        },
        legend: {
          data: ["实际用电量", "优化后用电量", "优化率"],
          textStyle: {
            color: "#ffffff"
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
            splitLine: {
              show: false
            },
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
            splitLine: {
              show: false
            },
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
            name: "实际用电量",
            type: "bar",
            barGap: "-100%",
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new t.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(156,107,211,1)"
                  },
                  {
                    offset: 0.2,
                    color: "rgba(156,107,211,0.5)"
                  },
                  {
                    offset: 1,
                    color: "rgba(156,107,211,0)"
                  }
                ])
              }
            },
            z: -12,

            data: lineData
          },
          {
            name: "优化后用电量",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new t.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#956FD4"
                  },
                  {
                    offset: 1,
                    color: "#3EACE5"
                  }
                ])
              }
            },
            data: barData
          },
          {
            name: "优化率",
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
          // {
          //   name: "商品访问数",
          //   type: "line",
          //   smooth: true,
          //   showAllSymbol: true,
          //   symbol: "emptyCircle",
          //   symbolSize: 8,
          //   yAxisIndex: 1,
          //   itemStyle: {
          //     normal: {
          //       color: "#00ca95"
          //     }
          //   },
          //   data: rateData1
          // }
        ]
      };
      map_1.setOption(option);
       t.$axios.get("/findAlElectricityDo").then((result) => {
        console.log(result);
        
      }).catch((err) => {
        
      });
    }
  }
};
</script>

<style scoped>
  @import "./../assets/css/comon0.css";

  .seamless-warp {
    margin-top: .2rem;
  height: 3rem;
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