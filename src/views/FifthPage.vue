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
        <div class="boxall" style="height: 7rem">
          <div class="alltitle">模2222式</div>
          <div class="allnav" id="echart1"></div>
          <div class="boxfoot"></div>
        </div>
        <!-- <div class="boxall" style="height: 4.2rem">
          <div class="alltitle">模块标题样式</div>
          <div class="allnav" id="echart2"></div>
          <div class="boxfoot"></div>
        </div> -->
        <!-- <div class="boxall" style="height: 5rem">
          <div style="height:100%; width: 100%;">
            <div class="sy" id="fb1"></div>
            <div class="sy" id="fb2"></div>
            <div class="sy" id="fb3"></div>
          </div>
          <div class="boxfoot"></div>
        </div>-->
      </li>
      <li>
        <div class="bar" style="margin-bottom:.5rem">
          <div class="barbox">
            <ul class="clearfix">
              <li class="counter" style="width:100%;line-height: 1rem;font-size:.4rem">行业用电量关联性分析</li>
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

        <div class="map"  style="height:10.4rem">
   
          <div class="map4" id="map_1" style="left:-110%;top:25%;bottom:0;"></div>
        </div>
      </li>
      <li>
         <div class="boxall" style="height:7rem">
          <div class="alltitle">
            
            <div class="allnav" id="echart2">
              <div class="scollTitle" style="height:1rem">
                <div class="dateTitle" style=" display:inline;line-height: .75rem;margin-left:1rem">
                  <span class="title">时间</span>
                </div>
                <div class="nameTitle" style=" display:inline;margin-left:3rem">
                  <span class="date">行业</span>
                </div>
                <div class="num" style=" display:inline;margin-left:3.5rem">
                  <span class="date">用电量</span>
                </div>
              </div>

              <vue-seamless-scroll :data="listData" class="seamless-warp">
                <ul class="item">
                  <li v-for="(item,index) in listData" :key="index" style="color:#ffffff">
                    <span class="title" v-text="item.date" style="width:50px"></span>
                    <span class="date" v-text="item.name" style="width:50px"></span>
                    <span class="date" v-text="item.num" style="width:50px"></span>
                  </li>
                </ul>
              </vue-seamless-scroll>
            </div>

          </div>
          <div class="allnav" id="echart3"></div>
          <div class="boxfoot"></div>
        </div>
        <!--
        <div class="boxall" style="height: 3.2rem">
          <div class="alltitle">模块标题样式</div>
          <div class="allnav" id="echart5">echart6</div>
          <div class="boxfoot"></div>
        </div>
        <div class="boxall" style="height: 3rem">
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
  name: "FifthPage",
  data() {
    return {
      loading: require("./../assets/img/loading.gif"),
      lbx: require("./../assets/img/lbx.png"),
      jt: require("./../assets/img/jt.png"),
      map: require("./../assets/img/map.png"),
      fontSize: document.documentElement.clientWidth,
      listData: [
        {
          title: "无缝滚动第一行无缝滚动第一行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第二行无缝滚动第二行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第三行无缝滚动第三行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第四行无缝滚动第四行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第五行无缝滚动第五行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第六行无缝滚动第六行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第七行无缝滚动第七行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第八行无缝滚动第八行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          date: "2017-12-16"
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          date: "2017-12-16"
        }
      ]
    };
  },
  mounted() {
    this.drawChart1();
    // this.drawChart2();
    // this.drawChart3();
    this.drawChartMap1();
    var that = this;
    window.onresize = function() {
      that.$echarts.init(document.getElementById("echart1")).resize();
      // that.$echarts.init(document.getElementById("echart2")).resize();
      // that.$echarts.init(document.getElementById("echart3")).resize();
      that.$echarts.init(document.getElementById("map_1")).resize();
    };

    // this.drawChart4();
    // this.drawChart5();
    // this.drawChartMap1();
  },

  methods: {
    drawChart1() {
      let echart1 = this.$echarts.init(document.getElementById("echart1"));
      var option = {};
      var t = this;

      // 纹理
      var piePane =
        "data:image/jpeg;base64,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";
      var piePatternImg = new Image();
      piePatternImg.src = piePane;
      var tipLine =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAADCAYAAAAQnhYVAAAAAXNSR0IArs4c6QAAAGNJREFUGBlj/P//vxIDAwMTEN9nZGT8C+QrANksQExv8Bxo/1eg/RJAi3mA+AUDkPMOiEFAFOQaIP0czKM/4Q+1fw3U6nBQCJ0CYj4g/g2SBILTQCwCZtGXeAe17iaQPg7EbwAOmKTp8gqpPgAAAABJRU5ErkJggg==";
      var tipLineImg = new Image();
      tipLineImg.src = tipLine;
      option = {
        backgroundColor: "",
        tooltip: {
          trigger: "axis",
          formatter: "{b}<br />{a0}: {c0}<br />{a1}: {c1}",
          axisPointer: {
            type: "shadow",
            label: {
              backgroundColor: "#6a7985"
            }
          },
          textStyle: {
            color: "#fff",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: 14
          }
        },
        calculable: true,
        grid: {
          left: "2%",
          right: "2%",
          bottom: "0%",
          top: "5%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: [1, 2, 3, 4, 5, 6, 7],
            axisLabel: {
              interval: 0,
              textStyle: {
                color: "#fff",
                fontStyle: "normal",
                fontFamily: "微软雅黑",
                fontSize: 14
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "#fff",
                opacity: 0.2,
                show: false
              }
            },
            splitLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            splitNumber: 5,
            axisLabel: {
              textStyle: {
                show: false,
                color: "#a8aab0",
                fontStyle: "normal",
                fontFamily: "微软雅黑",
                fontSize: 16
              }
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#fff"],
                opacity: 0.06
              }
            }
          }
        ],
        series: [
          {
            name: "今日空车",
            type: "bar",
            data: [1, 2, 3, 4, 5, 6, 7],
            barWidth: 20,
            barGap: 0.5, // 柱间距离
            showBackground: true,
            backgroundStyle: {
              // color: 'rgba(15,106,223, 0.2)'
              color: {
                image: piePatternImg,
                repeat: "repeat"
              },
              opacity: 0.2
            },
            itemStyle: {
              normal: {
                show: true,
                color: new t.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(38,171,255,0.86)"
                  },
                  {
                    offset: 1,
                    color: "rgba(38,171,255,0.39)"
                  }
                ])
              }
            },
            label: {
              show: true,
              position: "insideTop",
              distance: -10,
              rich: {
                a: {
                  color: "#fff",
                  fontSize: 14,
                  align: "left",
                  padding: [0, 0, -5, 0],
                  width: 25,
                  height: 3,
                  lineHeight: 16,
                  backgroundColor: {
                    image: tipLineImg
                  }
                }
              },
              formatter: params => {
                return "{a|" + "" + "}";
              }
            }
          },
          {
            name: "今日重车",
            type: "bar",
            data: [4, 1, 2, 1, 2, 6, 7],
            barWidth: 20,
            barGap: 0.5, // 柱间距离
            showBackground: true,
            backgroundStyle: {
              // color: 'rgba(15,106,223, 0.2)'
              color: {
                image: piePatternImg,
                repeat: "repeat"
              },
              opacity: 0.2
            },
            itemStyle: {
              normal: {
                show: true,
                color: new t.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(237,111,81,0.88) "
                  },
                  {
                    offset: 1,
                    color: "rgba(255,140,5,0.49)"
                  }
                ]),
                borderWidth: 0
              }
            },
            label: {
              show: true,
              position: "insideTop",
              distance: -10,
              rich: {
                a: {
                  color: "#fff",
                  fontSize: 14,
                  align: "left",
                  padding: [0, 0, -5, 0],
                  width: 25,
                  height: 3,
                  lineHeight: 16,
                  backgroundColor: {
                    image: tipLineImg
                  }
                }
              },
              formatter: params => {
                return "{a|" + "" + "}";
              }
            }
          }
        ]
      };
      echart1.setOption(option);
       t.$axios.get("/findAllElectrElectricityTso").then((result) => {
        console.log(result);
        
      }).catch((err) => {
        
      });
    },

    drawChartMap1() {
      let map_1 = this.$echarts.init(document.getElementById("map_1"));
      var t = this;
      var option = {};

      var xData = (function() {
        var data = [];
        for (var i = 1; i < 13; i++) {
          data.push(i + "月份");
        }
        return data;
      })();

      option = {
        backgroundColor: "",
        tooltip: {
          axisPointer: {
            type: "shadow",
            textStyle: {
              color: "#fff"
            }
          }
        },
        grid: {
          borderWidth: 0,
          top: 10,
          bottom: 40,
          left: 90,
          textStyle: {
            color: "#fff"
          }
        },
        legend: {
          icon: "circle",
          right: "4%",
          top: "8%",
          textStyle: {
            color: "#90979c"
          },
          data: ["一级", "二级", "三级"]
        },
        calculable: true,
        xAxis: [
          {
            type: "value",
            trigger: "axis",
            axisLine: {
              lineStyle: {
                color: "#fff"
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
              interval: 0
            },
            data: xData
          }
        ],
        yAxis: [
          {
            type: "category",
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0
            },
            splitArea: {
              show: false
            },
            data: ["一级", "二级", "三级", "四级", "五级"]
          }
        ],
        series: [
          {
            name: "一级",
            type: "bar",
            stack: "总量",
            barMaxWidth: 15,
            barGap: "10%",
            itemStyle: {
              normal: {
                color: new t.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: "rgba(245,221,111,1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(245,221,111,0)"
                  }
                ]),
                borderColor: new t.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: "rgba(245,221,111,1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(245,221,111,0)"
                  }
                ])
              }
            },
            data: [709, 1917, 2455, 2610, 1719]
          },
          {
            name: "二级",
            type: "bar",
            stack: "总量",
            itemStyle: {
              normal: {
                color: new t.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: "rgba(24,191,207,1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(24,191,207,0)"
                  }
                ]),
                borderColor: new t.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: "rgba(24,191,207,1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(24,191,207,0)"
                  }
                ])
              }
            },
            data: [327, 1776, 507, 1200, 800]
          },
          {
            name: "三级",
            type: "bar",
            stack: "总量",
            itemStyle: {
              normal: {
                color: new t.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: "rgba(98,113,228,1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(40,54,117,0)"
                  }
                ]),
                borderColor: new t.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: "rgba(98,113,228,1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(40,54,117,0)"
                  }
                ]),
                barBorderRadius: 0
              }
            },
            data: [327, 1776, 507, 1200, 800]
          },
           {
            name: "三级",
            type: "line",
            stack: "总量",
            itemStyle: {
              normal: {
                color: new t.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: "rgba(98,113,228,1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(40,54,117,0)"
                  }
                ]),
                borderColor: new t.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: "rgba(98,113,228,1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(40,54,117,0)"
                  }
                ]),
                barBorderRadius: 0
              }
            },
            data: [327, 1776, 507, 1200, 800]
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
.seamless-warp {
  height: 3.7rem;
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