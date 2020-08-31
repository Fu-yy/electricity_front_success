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
        </div>-->
      </li>
      <li>
        <div class="bar" style="margin-bottom:1rem">
          <div class="barbox">
            <ul class="clearfix">
              <li class="counter" style="width:100%;line-height: 2rem;">行业用电量关联性分析</li>
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
          <div class="allnav" id="echart3"></div>
          <div class="boxfoot"></div>
        </div>
        <div class="boxall" style="height: 3.2rem">
          <div class="alltitle">模块标题样式</div>
          <div class="allnav" id="echart5"></div>
          <div class="boxfoot"></div>
        </div>
        <div class="boxall" style="height: 3rem">
          <div class="alltitle">模块标题样式</div>
          <div class="allnav" id="echart6"></div>
          <div class="boxfoot"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SecondPage",
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
    // this.drawChart4();
    // this.drawChart5();
    // this.drawChartMap1();
    var that = this;
    window.onresize = function() {
      that.$echarts.init(document.getElementById("echart1")).resize();
      that.$echarts.init(document.getElementById("echart2")).resize();
      that.$echarts.init(document.getElementById("echart3")).resize();
      that.$echarts.init(document.getElementById("map_1")).resize();
    };
  },

  methods: {
    drawChart1() {
      let echart1 = this.$echarts.init(document.getElementById("echart1"));
      var option = {};
      var t = this;

      let dataC1 = [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 260, 280];
      let dataC2 = [220, 182, 191, 210, 230, 270, 270, 201, 154, 140, 240, 250];
      let dataC3 = [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190];
      let dataD1 = [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190];
      let dataD2 = [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190];
      let dataD3 = [200, 232, 201, 200, 190, 190, 210, 190, 182, 201, 154, 190];
      let xData = [
        "01:00",
        "03:00",
        "05:00",
        "07:00",
        "09:00",
        "11:00",
        "13:00",
        "15:00",
        "17:00",
        "19:00",
        "21:00",
        "23:00"
      ];

      for (var i = 0; i < xData.length; i++) {
        dataC1.splice(i, 1, { name: xData[i], value: dataC1[i] });
        dataC2.splice(i, 1, { name: xData[i], value: dataC2[i] });
        dataC3.splice(i, 1, { name: xData[i], value: dataC3[i] });
        dataD1.splice(i, 1, { name: xData[i], value: dataD1[i] });
        dataD2.splice(i, 1, { name: xData[i], value: dataD2[i] });
        dataD3.splice(i, 1, { name: xData[i], value: dataD3[i] });
      }
      console.log(dataC1);
      console.log(dataC2);
      console.log(dataC3);
      console.log(dataD1);
      console.log(dataD2);
      console.log(dataD3);

      var fontColor = "#30eee9";
      option = {
        backgroundColor: "",
        grid: {
          left: "5%",
          right: "2%",
          top: "10%",
          bottom: "15%",
          containLabel: true
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            lineStyle: {
              color: "#57617B"
            }
          }
        },
        legend: {
          data: ["C1", "C2", "C3", "D1", "D2", "D3"],
          itemWidth: 20,
          itemHeight: 10,
          textStyle: {
            fontSize: 14,
            color: "#65aaf1"
          },
          right: "35%", //距离右侧
          top: "5%"
          // left : '50%'
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLabel: {
              color: "#65aaf1"
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#0a2b52",
                width: 1
              }
            },
            /*axisTick:{
	            	show:false,
	            },  
	            splitLine:{
	            	show:true,
		            lineStyle:{
		            	color:'#195384'
		            }
		        },*/
            data: xData
          }
        ],
        yAxis: [
          {
            type: "value",
            // name: 'kw/h',
            nameTextStyle: {
              color: "#65aaf1",
              fontStyle: "normal"
            },
            axisLabel: {
              formatter: "{value}",
              textStyle: {
                color: "#65aaf1"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#0a2b52"
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#0a2b52",
                width: 1,
                type: "solid"
              }
            }
          }
        ],
        series: [
          {
            name: "C1",
            type: "line",
            stack: "总量",
            symbol: "circle",
            showSymbol: false,
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#0092f6",
                lineStyle: {
                  color: "#0092f6",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new t.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0.4,
                      color: "rgba(7,44,90,0.1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0,146,246,0.9)"
                    }
                  ])
                }
              }
            },
            markPoint: {
              itemStyle: {
                normal: {
                  color: "red"
                }
              }
            },
            data: dataC1
          },
          {
            name: "C2",
            type: "line",
            stack: "总量",
            symbol: "circle",
            showSymbol: false,
            symbolSize: 8,

            itemStyle: {
              normal: {
                color: "#00d4c7",
                lineStyle: {
                  color: "#00d4c7",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new t.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0.4,
                      color: "rgba(7,44,90,0.1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0,212,199,0.9)"
                    }
                  ])
                }
              }
            },
            data: dataC2
          },
          {
            name: "C3",
            type: "line",
            stack: "总量",
            symbol: "circle",
            showSymbol: false,
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#aecb56",
                lineStyle: {
                  color: "#aecb56",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new t.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0.4,
                      color: "rgba(7,44,90,0.1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(114,144,89,0.9)"
                    }
                  ])
                }
              }
            },
            data: dataC3
          },
          {
            name: "D1",
            type: "line",
            stack: "总量",
            symbol: "circle",
            showSymbol: false,
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#3A44FB",
                lineStyle: {
                  color: "#3A44FB",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new t.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0.4,
                      color: "rgba(7,46,101,0.1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0,166,246,0.9)"
                    }
                  ])
                }
              }
            },
            data: dataD1
          },
          {
            name: "D2",
            type: "line",
            stack: "总量",
            symbol: "circle",
            symbolSize: 8,
            showSymbol: false,
            itemStyle: {
              normal: {
                color: "#6FE81A",
                lineStyle: {
                  color: "#6FE81A",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new t.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0.4,
                      color: "rgba(7,44,90,0.1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0,212,199,0.9)"
                    }
                  ])
                }
              }
            },
            data: dataD2
          },
          {
            name: "D3",
            type: "line",
            stack: "总量",
            symbol: "circle",
            showSymbol: false,
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#aecb56",
                lineStyle: {
                  color: "#aecb56",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new t.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0.4,
                      color: "rgba(7,44,90,0.1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0,212,199,0.9)"
                    }
                  ])
                }
              }
            },
            data: dataD3
          }
        ]
      };
      echart1.setOption(option);
      t.$axios
        .get("/findAllElectricityRelated")
        .then(result => {
          console.log(result);
          console.log("dasdasd");
        })
        .catch(err => {});
    },
    drawChart2() {
      let echart2 = this.$echarts.init(document.getElementById("echart2"));
      var option = {};
      var t = this;

      let dataC1 = [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 260, 280];
      let dataC2 = [220, 182, 191, 210, 230, 270, 270, 201, 154, 140, 240, 250];
      let dataC3 = [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190];
      let dataD1 = [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190];
      let dataD2 = [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190];
      let dataD3 = [200, 232, 201, 200, 190, 190, 210, 190, 182, 201, 154, 190];
      let dataD4 = [200, 232, 201, 200, 190, 190, 210, 190, 182, 201, 154, 190];
      let dataD5 = [200, 232, 201, 200, 190, 190, 210, 190, 182, 201, 154, 190];

      // let dataC1 = [];
      // let dataC2 = [];
      // let dataC3 = [];
      // let dataD1 = [];
      // let dataD2 = [];
      // let dataD3 = [];
      // let dataD4 = [];
      // let dataD5 = [];

      let xData = [
        "01:00",
        "03:00",
        "05:00",
        "07:00",
        "09:00",
        "11:00",
        "13:00",
        "15:00",
        "17:00",
        "19:00",
        "21:00",
        "23:00"
      ];
      // let xData = [];

      // t.$axios.get("/findAllElectricityRelated").then((result) => {
      //   console.log(result);
      //   console.log("dasdasd");
      //   let dataTime = result.data.data.electricityRelatedServiceAllDate;
      //   let dataResult = result.data.data.electricityRelatedServiceAllRelated;

      //   xData = dataTime;

      //     xData.forEach(dataTime=>{

      //       dataResult.forEach(element => {
      //       // console.log(element);
      //       if(dataTime == element.electDateStr){

      //         if(element.manufacts.owner == "机械制造业"){
      //             if(element.manufacts.manuName == "文化、办公用机械制造"){
      //                 dataC1.push({
      //                     name:dataTime,
      //                     value:element.energy
      //                   });
      //               }
      //           }
      //       }

      //     });
      //   });

      // }).catch((err) => {

      // });
      // console.log(dataC1);
      // console.log("dataC1");

      for (var i = 0; i < xData.length; i++) {
        dataC1.splice(i, 1, { name: xData[i], value: dataC1[i] });
        dataC2.splice(i, 1, { name: xData[i], value: dataC2[i] });
        dataC3.splice(i, 1, { name: xData[i], value: dataC3[i] });
        dataD1.splice(i, 1, { name: xData[i], value: dataD1[i] });
        dataD2.splice(i, 1, { name: xData[i], value: dataD2[i] });
        dataD3.splice(i, 1, { name: xData[i], value: dataD3[i] });
      }
      console.log(dataC1);
      console.log("dataC1");
      console.log(dataC2);
      console.log(dataC3);
      console.log(dataD1);
      console.log(dataD2);
      console.log(dataD3);

      var fontColor = "#30eee9";
      option = {
        backgroundColor: "",
        grid: {
          left: "5%",
          right: "2%",
          top: "10%",
          bottom: "15%",
          containLabel: true
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            lineStyle: {
              color: "#57617B"
            }
          }
        },
        legend: {
          data: ["C1", "C2", "C3", "D1", "D2", "D3"],
          itemWidth: 20,
          itemHeight: 10,
          textStyle: {
            fontSize: 14,
            color: "#65aaf1"
          },
          right: "35%", //距离右侧
          top: "5%"
          // left : '50%'
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLabel: {
              color: "#65aaf1"
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#0a2b52",
                width: 1
              }
            },
            /*axisTick:{
	            	show:false,
	            },  
	            splitLine:{
	            	show:true,
		            lineStyle:{
		            	color:'#195384'
		            }
		        },*/
            data: xData
          }
        ],
        yAxis: [
          {
            type: "value",
            // name: 'kw/h',
            nameTextStyle: {
              color: "#65aaf1",
              fontStyle: "normal"
            },
            axisLabel: {
              formatter: "{value}",
              textStyle: {
                color: "#65aaf1"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#0a2b52"
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#0a2b52",
                width: 1,
                type: "solid"
              }
            }
          }
        ],
        series: [
          {
            name: "C1",
            type: "line",
            stack: "总量",
            symbol: "circle",
            showSymbol: false,
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#0092f6",
                lineStyle: {
                  color: "#0092f6",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new t.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0.4,
                      color: "rgba(7,44,90,0.1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0,146,246,0.9)"
                    }
                  ])
                }
              }
            },
            markPoint: {
              itemStyle: {
                normal: {
                  color: "red"
                }
              }
            },
            data: dataC1
          },
          {
            name: "C2",
            type: "line",
            stack: "总量",
            symbol: "circle",
            showSymbol: false,
            symbolSize: 8,

            itemStyle: {
              normal: {
                color: "#00d4c7",
                lineStyle: {
                  color: "#00d4c7",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new t.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0.4,
                      color: "rgba(7,44,90,0.1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0,212,199,0.9)"
                    }
                  ])
                }
              }
            },
            data: dataC2
          },
          {
            name: "C3",
            type: "line",
            stack: "总量",
            symbol: "circle",
            showSymbol: false,
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#aecb56",
                lineStyle: {
                  color: "#aecb56",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new t.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0.4,
                      color: "rgba(7,44,90,0.1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(114,144,89,0.9)"
                    }
                  ])
                }
              }
            },
            data: dataC3
          },
          {
            name: "D1",
            type: "line",
            stack: "总量",
            symbol: "circle",
            showSymbol: false,
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#3A44FB",
                lineStyle: {
                  color: "#3A44FB",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new t.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0.4,
                      color: "rgba(7,46,101,0.1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0,166,246,0.9)"
                    }
                  ])
                }
              }
            },
            data: dataD1
          },
          {
            name: "D2",
            type: "line",
            stack: "总量",
            symbol: "circle",
            symbolSize: 8,
            showSymbol: false,
            itemStyle: {
              normal: {
                color: "#6FE81A",
                lineStyle: {
                  color: "#6FE81A",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new t.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0.4,
                      color: "rgba(7,44,90,0.1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0,212,199,0.9)"
                    }
                  ])
                }
              }
            },
            data: dataD2
          },
          {
            name: "D3",
            type: "line",
            stack: "总量",
            symbol: "circle",
            showSymbol: false,
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#aecb56",
                lineStyle: {
                  color: "#aecb56",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new t.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0.4,
                      color: "rgba(7,44,90,0.1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0,212,199,0.9)"
                    }
                  ])
                }
              }
            },
            data: dataD3
          }
        ]
      };
      echart2.setOption(option);

      t.$axios
        .get("/findAllElectricityRelated")
        .then(result => {
          console.log(result);
          console.log("dasdasd");
          let dataTime = result.data.data.electricityRelatedServiceAllDate;
          let dataResult = result.data.data.electricityRelatedServiceAllRelated;

          let listData1 = [];
          let listData2 = [];
          let listData3 = [];
          let listData4 = [];
          let listData5 = [];
          let listData6 = [];
          let listData7 = [];
          let listData8 = [];

          dataTime.forEach(time => {
            dataResult.forEach(element => {
              // console.log(element);
              if (time == element.electDateStr) {
                console.log(time);

                if (element.manufacts.owner == "机械制造业") {
                  if (element.manufacts.manuName == "文化、办公用机械制造") {
                    // console.log(element.manufacts.manuName);
                    listData1.push({
                      name: time,
                      value: element.energy
                    });
                  } else if (element.manufacts.manuName == "特种陶瓷制品制造") {
                    listData2.push({
                      name: time,
                      value: element.energy
                    });
                  } else if (element.manufacts.manuName == "金属加工机械制造") {
                    listData3.push({
                      name: time,
                      value: element.energy
                    });
                  } else if (
                    element.manufacts.manuName ==
                    "泵、阀门、压缩机及类似机械制造"
                  ) {
                    listData4.push({
                      name: time,
                      value: element.energy
                    });
                  } else if (
                    element.manufacts.manuName == "电子和电工机械专用设备制造"
                  ) {
                    listData5.push({
                      name: time,
                      value: element.energy
                    });
                  } else if (
                    element.manufacts.manuName == "农、林、牧、渔专用机械制造"
                  ) {
                    listData6.push({
                      name: time,
                      value: element.energy
                    });
                  } else if (
                    element.manufacts.manuName == "其他电气机械及器材制造"
                  ) {
                    listData7.push({
                      name: time,
                      value: element.energy
                    });
                  } else {
                    listData8.push({
                      name: time,
                      value: element.energy
                    });
                  }
                }
              }
            });
          });

          console.log(listData1);

          echart2.setOption({
            legend: {
              data: dataTime
            },
            series: [
              {
                name: "C1",
                type: "line",
                stack: "总量",
                symbol: "circle",
                showSymbol: false,
                symbolSize: 8,
                itemStyle: {
                  normal: {
                    color: "#0092f6",
                    lineStyle: {
                      color: "#0092f6",
                      width: 1
                    },
                    areaStyle: {
                      //color: '#94C9EC'
                      color: new t.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                        {
                          offset: 0.4,
                          color: "rgba(7,44,90,0.1)"
                        },
                        {
                          offset: 1,
                          color: "rgba(0,146,246,0.9)"
                        }
                      ])
                    }
                  }
                },
                markPoint: {
                  itemStyle: {
                    normal: {
                      color: "red"
                    }
                  }
                },
                data: dataC1
              }
            ]
          });
        })
        .catch(err => {});
    },
    drawChart3() {
      let echart3 = this.$echarts.init(document.getElementById("echart3"));
      var option = {};
      var t = this;

      let dataC1 = [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 260, 280];
      let dataC2 = [220, 182, 191, 210, 230, 270, 270, 201, 154, 140, 240, 250];
      let dataC3 = [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190];
      let dataD1 = [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190];
      let dataD2 = [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190];
      let dataD3 = [200, 232, 201, 200, 190, 190, 210, 190, 182, 201, 154, 190];
      let xData = [
        "01:00",
        "03:00",
        "05:00",
        "07:00",
        "09:00",
        "11:00",
        "13:00",
        "15:00",
        "17:00",
        "19:00",
        "21:00",
        "23:00"
      ];

      for (var i = 0; i < xData.length; i++) {
        dataC1.splice(i, 1, { name: xData[i], value: dataC1[i] });
        dataC2.splice(i, 1, { name: xData[i], value: dataC2[i] });
        dataC3.splice(i, 1, { name: xData[i], value: dataC3[i] });
        dataD1.splice(i, 1, { name: xData[i], value: dataD1[i] });
        dataD2.splice(i, 1, { name: xData[i], value: dataD2[i] });
        dataD3.splice(i, 1, { name: xData[i], value: dataD3[i] });
      }
      console.log(dataC1);
      console.log(dataC2);
      console.log(dataC3);
      console.log(dataD1);
      console.log(dataD2);
      console.log(dataD3);

      var fontColor = "#30eee9";
      option = {
        backgroundColor: "",
        grid: {
          left: "5%",
          right: "2%",
          top: "10%",
          bottom: "15%",
          containLabel: true
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            lineStyle: {
              color: "#57617B"
            }
          }
        },
        legend: {
          data: ["C1", "C2", "C3", "D1", "D2", "D3"],
          itemWidth: 20,
          itemHeight: 10,
          textStyle: {
            fontSize: 14,
            color: "#65aaf1"
          },
          right: "35%", //距离右侧
          top: "5%"
          // left : '50%'
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLabel: {
              color: "#65aaf1"
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#0a2b52",
                width: 1
              }
            },
            /*axisTick:{
	            	show:false,
	            },  
	            splitLine:{
	            	show:true,
		            lineStyle:{
		            	color:'#195384'
		            }
		        },*/
            data: xData
          }
        ],
        yAxis: [
          {
            type: "value",
            // name: 'kw/h',
            nameTextStyle: {
              color: "#65aaf1",
              fontStyle: "normal"
            },
            axisLabel: {
              formatter: "{value}",
              textStyle: {
                color: "#65aaf1"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#0a2b52"
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#0a2b52",
                width: 1,
                type: "solid"
              }
            }
          }
        ],
        series: [
          {
            name: "C1",
            type: "line",
            stack: "总量",
            symbol: "circle",
            showSymbol: false,
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#0092f6",
                lineStyle: {
                  color: "#0092f6",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new t.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0.4,
                      color: "rgba(7,44,90,0.1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0,146,246,0.9)"
                    }
                  ])
                }
              }
            },
            markPoint: {
              itemStyle: {
                normal: {
                  color: "red"
                }
              }
            },
            data: dataC1
          },
          {
            name: "C2",
            type: "line",
            stack: "总量",
            symbol: "circle",
            showSymbol: false,
            symbolSize: 8,

            itemStyle: {
              normal: {
                color: "#00d4c7",
                lineStyle: {
                  color: "#00d4c7",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new t.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0.4,
                      color: "rgba(7,44,90,0.1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0,212,199,0.9)"
                    }
                  ])
                }
              }
            },
            data: dataC2
          },
          {
            name: "C3",
            type: "line",
            stack: "总量",
            symbol: "circle",
            showSymbol: false,
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#aecb56",
                lineStyle: {
                  color: "#aecb56",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new t.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0.4,
                      color: "rgba(7,44,90,0.1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(114,144,89,0.9)"
                    }
                  ])
                }
              }
            },
            data: dataC3
          },
          {
            name: "D1",
            type: "line",
            stack: "总量",
            symbol: "circle",
            showSymbol: false,
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#3A44FB",
                lineStyle: {
                  color: "#3A44FB",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new t.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0.4,
                      color: "rgba(7,46,101,0.1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0,166,246,0.9)"
                    }
                  ])
                }
              }
            },
            data: dataD1
          },
          {
            name: "D2",
            type: "line",
            stack: "总量",
            symbol: "circle",
            symbolSize: 8,
            showSymbol: false,
            itemStyle: {
              normal: {
                color: "#6FE81A",
                lineStyle: {
                  color: "#6FE81A",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new t.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0.4,
                      color: "rgba(7,44,90,0.1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0,212,199,0.9)"
                    }
                  ])
                }
              }
            },
            data: dataD2
          },
          {
            name: "D3",
            type: "line",
            stack: "总量",
            symbol: "circle",
            showSymbol: false,
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#aecb56",
                lineStyle: {
                  color: "#aecb56",
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new t.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0.4,
                      color: "rgba(7,44,90,0.1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0,212,199,0.9)"
                    }
                  ])
                }
              }
            },
            data: dataD3
          }
        ]
      };
      echart3.setOption(option);
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
          text: "三大行业总体用电量分析",
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
                    color: "rgba(156,107,211,0.5)"
                  },
                  {
                    offset: 0.2,
                    color: "rgba(156,107,211,0.3)"
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