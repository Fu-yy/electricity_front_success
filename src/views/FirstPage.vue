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
          <div class="allnav" id="echart5"></div>
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
      fontSize: document.documentElement.clientWidth
    };
  },
  mounted() {
    // this.$axios.get("/findElectricityPastList").then(res => {
    //   console.log("*********************");
    //   console.log(res.data.electricityPastDataList);
    //   let resoutDataDate = res.data.electricityPastDataList;
    //   console.log("*********************");

    //   let resoutData = res.data.pastElectricityList;

    //   resoutDataDate.forEach(element => {
    //     echart1Data.push(element.electricityDateStr);
    //   });
    //   console.log("echart1Data");
    //   console.log(echart1Data);

    //   resoutData.forEach(element => {
    //     let objectData = {
    //       name: "",
    //       value: ""
    //     };
    //     objectData.name = element.electricityDateStr;
    //     objectData.value = element.electricityNum+"";
    //     if (element.electricityName === "汽车") {
    //       echart1DataList1.push(objectData);
    //     } else if (element.electricityName === "航空") {
    //       echart1DataList2.push(objectData);
    //     }
    //     console.log(element);
    //   });
    //   // 汽车数据列表
    //   console.log("汽车数据列表");
    //   console.log(echart1DataList1);
    //         console.log("汽车数据列表*****************");

    //   // 航空数据列表
    //   console.log(echart1DataList2);
    // });

    this.drawChart1();
    this.drawChart2();
    this.drawChart4();
    this.drawChart5();

    // this.drawChartMap1();
    var that = this;
    window.onresize = function() {
      that.$echarts.init(document.getElementById("echart1")).resize();
      that.$echarts.init(document.getElementById("echart2")).resize();
      that.$echarts.init(document.getElementById("echart4")).resize();
      that.$echarts.init(document.getElementById("echart5")).resize();
    };
  },
  methods: {
    drawChart1() {
      let echart1 = this.$echarts.init(document.getElementById("echart1"));
      var t = this;

      var option = {};

      //echarts折线图

      let dataList = [
        {
          name: "2020-08-23",
          value: "1351143435.5"
        },
        {
          name: "2020-08-24",
          value: "4354343.54"
        },
        {
          name: "2020-08-25",
          value: "4354343.54"
        }
      ];

      let dataList2 = [
        {
          name: "2020-08-23",
          value: "123123.123"
        },
        {
          name: "2020-08-24",
          value: "14124123.1"
        },
        {
          name: "2020-08-25",
          value: "4124122313.1"
        }
      ];

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

        console.log("ecccccccc1************")
        console.log(echart1DataList1);
        console.log(echart1DataList2);
        console.log(echart1DataList3);

        console.log("ecccccccc1************")

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

    drawChart5() {
      let echart5 = this.$echarts.init(document.getElementById("echart5"));
      var option = {};
      var t = this;

      var img =
        "data:image/png;base64,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";
      var trafficWay = [
        {
          name: "优秀学生",
          value: 20
        },
        {
          name: "获得荣誉",
          value: 10
        },
        {
          name: "论文著作",
          value: 30
        }
      ];

      var data = [];
      var color = [
        "#00ffff",
        "#00cfff",
        "#006ced",
        "#ffe000",
        "#ffa800",
        "#ff5b00",
        "#ff3000"
      ];
      for (var i = 0; i < trafficWay.length; i++) {
        data.push(
          {
            value: trafficWay[i].value,
            name: trafficWay[i].name,
            itemStyle: {
              normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor: color[i],
                shadowColor: color[i]
              }
            }
          },
          {
            value: 2,
            name: "",
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                },
                color: "rgba(0, 0, 0, 0)",
                borderColor: "rgba(0, 0, 0, 0)",
                borderWidth: 0
              }
            }
          }
        );
      }
      var seriesOption = [
        {
          name: "",
          type: "pie",
          clockWise: false,
          radius: [105, 109],
          hoverAnimation: false,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: "outside",
                color: "#ddd",
                formatter: function(params) {
                  var percent = 0;
                  var total = 0;
                  for (var i = 0; i < trafficWay.length; i++) {
                    total += trafficWay[i].value;
                  }
                  percent = ((params.value / total) * 100).toFixed(0);
                  if (params.name !== "") {
                    return (
                      params.name + "\n" + "\n" + "占百分比：" + percent + "%"
                    );
                  } else {
                    return "";
                  }
                }
              },
              labelLine: {
                length: 30,
                length2: 100,
                show: true,
                color: "#00ffff"
              }
            }
          },
          data: data
        }
      ];
      option = {
        backgroundColor: "",
        color: color,
        title: {
          text: "广州市天河区教学成果分析",
          top: "48%",
          textAlign: "center",
          left: "49%",
          textStyle: {
            color: "#fff",
            fontSize: 10,
            fontWeight: "400"
          }
        },
        graphic: {
          elements: [
            {
              type: "image",
              z: 3,
              style: {
                image: img,
                width: 178,
                height: 178
              },
              left: "center",
              top: "center",
              position: [100, 100]
            }
          ]
        },
        tooltip: {
          show: false
        },
        legend: {
          icon: "circle",
          orient: "horizontal",
          // x: 'left',
          data: ["优秀学生", "获得荣誉", "论文著作"],
          right: 250,
          bottom: 100,
          align: "right",
          textStyle: {
            color: "#fff"
          },
          itemGap: 20
        },
        toolbox: {
          show: false
        },
        series: seriesOption
      };
      echart5.setOption(option);

      this.$axios.get("/findElectricityPastList").then(res => {
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
      });
    },
    drawChart4() {
      let echart4 = this.$echarts.init(document.getElementById("echart4"));
      var option = {};
      var t = this;
      // Generate data
      var category = [
        "市区",
        "万州",
        "江北",
        "南岸",
        "北碚",
        "綦南",
        "长寿",
        "永川",
        "璧山",
        "江津",
        "城口",
        "大足",
        "垫江",
        "丰都",
        "奉节",
        "合川",
        "江津区",
        "开州",
        "南川",
        "彭水",
        "黔江",
        "石柱",
        "铜梁",
        "潼南",
        "巫山",
        "巫溪",
        "武隆",
        "秀山",
        "酉阳",
        "云阳",
        "忠县",
        "川东",
        "检修"
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
        28348,
        32808,
        36097,
        39867,
        44715,
        48444,
        50415,
        36097,
        39867,
        44715,
        48444,
        50415,
        50061,
        32677,
        49521,
        32808
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
        6500,
        7500,
        8500,
        9900,
        22500,
        14000,
        21500,
        8500,
        9900,
        12500,
        14000,
        21500,
        23200,
        24450,
        25250,
        7500
      ];
      var rateData = [];
      32808;
      for (var i = 0; i < 33; i++) {
        // var date = i+2001;
        // category.push(date)
        var rate = barData[i] / lineData[i];
        rateData[i] = rate.toFixed(2);
      }

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
          for(let i = 0;i < electricityPastNumSumByDate.length - 1;i ++){
            numSumRate.push((electricityPastNumSumByDate[i+1] - electricityPastNumSumByDate[i])/electricityPastNumSumByDate[i]);
          }

          console.log(numSumRate);




        echart4.setOption({
          xAxis: {
          data: electricityPastDataList,
          
          
        },
          series: [{
            name: "行业用电量总和增长率",
            data:numSumRate
          },
          {
             name: "行业历史用电量总和",
             data:electricityPastNumSumByDate
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
.barbox li {
  width: 33%;
}
</style>