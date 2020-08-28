<template>
  <div class="mainbox">
    <ul class="clearfix">
      <li>
        <div class="boxall" style="height: 5.2rem">
          <div class="alltitle">表格</div>
          <div class="allnav tableClass" id="echart1" style>
            <!-- <table border="1" style="FILTER:   alpha(opacity=40);width:100%;heigh:80%">
             
            </table> -->
            <div style="width:800px">
                   <div class="table-head">
     <table>
         <colgroup>
             <col style="width: 80px;" />
             <col />
         </colgroup>
         <thead>
             <tr><th>序号</th><th>内容</th></tr>
         </thead>
     </table>
     </div>
     <div class="table-body">
     <table>
         <colgroup><col style="width: 80px;" /><col /></colgroup>
         <tbody>
             <tr><td>1</td><td>我只是用来测试的</td></tr>
             <tr><td>2</td><td>我只是用来测试的</td></tr>
             <tr><td>3</td><td>我只是用来测试的</td></tr>
             <tr><td>4</td><td>我只是用来测试的</td></tr>
             <tr><td>5</td><td>我只是用来测试的</td></tr>
             <tr><td>6</td><td>我只是用来测试的</td></tr>
             <tr><td>7</td><td>我只是用来测试的</td></tr>
             <tr><td>8</td><td>我只是用来测试的</td></tr>
             <tr><td>9</td><td>我只是用来测试的</td></tr>
             <tr><td>10</td><td>我只是用来测试的</td></tr>
             <tr><td>11</td><td>我只是用来测试的</td></tr>
             <tr><td>12</td><td>我只是用来测试的</td></tr>
             <tr><td>13</td><td>我只是用来测试的</td></tr>
             <tr><td>14</td><td>我只是用来测试的</td></tr>
             <tr><td>15</td><td>我只是用来测试的</td></tr>
         </tbody>
     </table>
   
 </div>

            </div>
          </div>
          <div class="boxfoot"></div>
        </div>
        <!-- <div class="boxall" style="height: 4.2rem">
          <div class="alltitle">模块标题样式</div>
          <div class="allnav" id="echart2"></div>
          <div class="boxfoot"></div>
        </div>-->
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
        <div class="bar" style="margin-bottom:1rem">
          <div class="barbox">
            <ul class="clearfix">
              <li class="counter" style="width:100%;line-height: 2rem;">需求侧用电量优化</li>
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
          <div class="alltitle">表格</div>
          <div class="allnav" id="echart3"></div>
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
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
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
          data: ["浏览量", "商品浏览量", "访客数", "商品访问数"],
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
            name: "浏览量",
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
            name: "商品浏览量",
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
            name: "访客数",
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
            name: "商品访问数",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#00ca95"
              }
            },
            data: rateData1
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