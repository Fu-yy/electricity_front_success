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
        <div class="boxall" style="height: 7.2rem;text-align:center">
          <div class="alltitle"></div>

          <p  style="color:#fff;font-size:.5rem">
                同比：*****

          </p>
           <p style="color:#fff;font-size:.5rem">
                环比: *****

          </p>
         
          <div class="allnav" id="echart1">

          </div>
          <div class="boxfoot"></div>
        </div>
        <div class="boxall" style="height: 7.2rem">
          <div class="alltitle"></div>
          <div class="allnav" id="echart2">
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
                      <span class="date" v-text="item.increase" style="width:50px"></span>
                    </div>
                  </li>
                </ul>
              </vue-seamless-scroll>
            </div>
          <div class="boxfoot"></div>
        </div>
        <!-- <div class="boxall" style="height: 5rem">
          <div style="height:100%; width: 100%;">
            <div class="sy" id="fb1"></div>
            <div class="sy" id="fb2"></div>
            <div class="sy" id="fb3"></div>
          </div>
          <div class="boxfoot"></div>
        </div>-->
      </li>
      <li style="height:14.5rem">
        <div class="bar">
          <div class="barbox">
            <ul class="clearfix">
              <li class="counter" style="width:100%;line-height: 1rem;font-size:.4rem">行业用电趋势预测</li>
            </ul>
          </div>

          <div class="boxall" style="height: 5rem;top:0.3rem">
            <div class="alltitle"></div>
            <!-- <div class="allnav" id="echart2">
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
            </div> -->
            <div class="boxfoot"></div>
          </div>
        </div>

        <div class="map" style="height:7.4rem">
          <div class="map4" id="map_1" style="left:0%;top:4%;bottom:0;"></div>
        </div>
      </li>
      <li>
        <div class="boxall" style="height:7rem">
          <div class="alltitle"></div>
          <div class="allnav" id="echart3"></div>
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
      fontSize: document.documentElement.clientWidth,
      listData: [
        {
          date: "2017-12-16",
          name: "汽车制造业",
          num: "1000",
          increase: "1.5"
        },
        {
          date: "2017-12-16",
          name: "汽车制造业",
          num: "1000",
          increase: "1.5"
        }, {
          date: "2017-12-16",
          name: "汽车制造业",
          num: "1000",
          increase: "1.5"
        }, {
          date: "2017-12-16",
          name: "汽车制造业",
          num: "1000",
          increase: "1.5"
        }, {
          date: "2017-12-16",
          name: "汽车制造业",
          num: "1000",
          increase: "1.5"
        }, {
          date: "2017-12-16",
          name: "汽车制造业",
          num: "1000",
          increase: "1.5"
        }, {
          date: "2017-12-16",
          name: "汽车制造业",
          num: "1000",
          increase: "1.5"
        }, {
          date: "2017-12-16",
          name: "汽车制造业",
          num: "1000",
          increase: "1.5"
        }, {
          date: "2017-12-16",
          name: "汽车制造业",
          num: "1000",
          increase: "1.5"
        }, {
          date: "2017-12-16",
          name: "汽车制造业",
          num: "1000",
          increase: "1.5"
        },
      ]
    };
  },
  mounted() {
    // this.drawChart1();
    // this.drawChart2();
    // this.drawChart3();
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
      let echart1 = this.$echarts.init(document.getElementById("echart1"));
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

      t.$axios
        .get("/findElectricityForecastList")
        .then(result => {
          console.log(result);
        })
        .catch(err => {});
    },
    drawChart2() {
      let echart2 = this.$echarts.init(document.getElementById("echart2"));
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
      let echart3 = this.$echarts.init(document.getElementById("echart3"));
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
      let map_1 = this.$echarts.init(document.getElementById("map_1"));
      var t = this;
      var option = {};

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

      map_1.setOption(option);

      this.$axios.get("/findElectricityForecastList").then(res => {

        let electricityForecastDataList = res.data.data.electricityForecastDataList;
        let electricityForecastList = res.data.data.electricityForecastList;
        let resoutDataDateStr = [];

        // 汽车数据列表
        let echart1DataList1 = [];
        //航空数据列表
        let echart1DataList2 = [];
        //机械数据列表

        let echart1DataList3 = [];
        console.log(electricityForecastDataList);
        console.log("res.data.data.electricityForecastDataList");

        electricityForecastList.forEach(element => {
          console.log("sdasda");
          console.log(element);
          var optionObject = {
            name: element.forecastDateStr,
            value: "" + element.forecastNum
          };

          if (element.forecastName === "汽车") {
            echart1DataList1.push(optionObject);
          } else if (element.forecastName === "航空") {
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

        map_1.setOption({
          xAxis: {
            data: electricityForecastDataList
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
    }
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