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
        <div class="boxall" style="height: 8.2rem">
          <div class="alltitle"></div>
          <div class="allnav" id="echart1"></div>
          <div class="boxfoot"></div>
        </div>
        <div class="boxall" style="height: 6.2rem">
          <div class="alltitle"></div>
          <div class="allnav" id="echart2"></div>
          <div class="boxfoot"></div>
        </div>
      </li>
      <li style="height:14.5rem">
        <div class="bar" style>
          <div class="barbox">
            <ul class="clearfix">
              <li class="counter" style="width:100%;line-height: 1rem;font-size:.4rem">行业用电量关联性分析</li>
            </ul>
          </div>

          <!-- 滚动窗口 -->
          <div class="boxall" style="height: 5rem;top:0.3rem">
            <div class="alltitle"></div>
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

                <!-- <ul class="item">
                  <li v-for="(item,index) in listData" :key="index" style="color:#ffffff">
                    <div style="display:inline;">
                      <span class="title" v-text="item.date" style="width:50px"></span>
                    </div>

                    <div style="display:inline;margin-left:1rem">
                      <span class="date" v-text="item.name" style="width:50px"></span>
                    </div>
                    <div style="display:inline;margin-left:2rem">
                      <span class="date" v-text="item.num" style="width:50px"></span>
                    </div>
                  </li>
                </ul> -->


                <el-row :gutter="20" type="flex" v-for="(item,index) in listData" :key="index" justify="center">
                  <el-col :span="8" style="text-align:center"><span class="grid-content bg-purple" style="color:#fff"  v-text="item.date"></span></el-col>
                  <el-col :span="8" style="text-align:center"><span class="grid-content bg-purple " style="color:#fff" v-text="item.name"></span></el-col>
                  <el-col :span="8" style="text-align:center"><span class="grid-content bg-purple " style="color:#fff" v-text="item.num"></span></el-col>
                </el-row>
              </vue-seamless-scroll>
            </div>
            <div class="boxfoot"></div>
          </div>
        </div>

        <!-- 标题 -->
        <!-- <div class="bar">
          <div class="barbox">
            <ul class="clearfix">
              <div style="height:3.3rem"> 滚屏</div>
            </ul>
          </div>
        </div>-->

        <div class="map" style="height:7.4rem">
          <div class="map4" id="map_1" style="left:0%;top:4%;bottom:0;"></div>
          <!-- <div class="map4" id="map_2" style="top:4%;bottom:0;width:20%">aaaaa</div> -->
        </div>
      </li>
      <li>
        <div class="boxall" style="height:7rem">
          <div class="alltitle"></div>
          <div class="allnav" id="echart3"></div>
          <div class="boxfoot"></div>
        </div>
        <!-- <div class="boxall" style="height: 3.2rem">
          <div class="alltitle">模块标题样式</div>
          <div class="allnav" id="echart5"></div>
          <div class="boxfoot"></div>
        </div>
        <div class="boxall" style="height: 3rem">
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
  name: "SecondPage",
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
          name: "2017-1dddddddddd2-16",
          num: "201dddd7-12-16"
        },
        {
          date: "2017-12-16",
          name: "2017-1ddddddddd2-16",
          num: "2017-12-16"
        },{
          date: "2017-12-16",
          name: "2017-12-16",
          num: "2017-12-16"
        },{
          date: "2017-d12-16",
          name: "2017-1dd2-16",
          num: "201ddd7-12-16"
        },{
          date: "2017-12-16",
          name: "2017d-12-16",
          num: "2017-12-16"
        },{
          date: "2017-12-16",
          name: "2017-12-16",
          num: "2017-12-16"
        },{
          date: "2017-12-16",
          name: "2017-12-16",
          num: "2017-12-16"
        },{
          date: "2017-12-16",
          name: "2017-12-16",
          num: "2017-12-16"
        },{
          date: "2017-12-16",
          name: "2017-12-16",
          num: "2017-12-16"
        },{
          date: "2017-12-16",
          name: "2017-12-16",
          num: "2017-12-16"
        },{
          date: "2017-12-16",
          name: "2017-12-16",
          num: "2017-12-16"
        },{
          date: "2017-12-16",
          name: "2017-12-16",
          num: "2017-12-16"
        },
      ]
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

      // let dataC1 = [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 260, 280];
      // let dataC2 = [220, 182, 191, 210, 230, 270, 270, 201, 154, 140, 240, 250];
      // let dataC3 = [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190];
      // let dataD1 = [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190];
      // let dataD2 = [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190];
      // let dataD3 = [200, 232, 201, 200, 190, 190, 210, 190, 182, 201, 154, 190];
      // let dataD4 = [200, 232, 201, 200, 190, 190, 210, 190, 182, 201, 154, 190];
      // let dataD5 = [200, 232, 201, 200, 190, 190, 210, 190, 182, 201, 154, 190];

      let dataC1 = [];
      let dataC2 = [];
      let dataC3 = [];
      let dataD1 = [];
      let dataD2 = [];
      let dataD3 = [];
      let dataD4 = [];
      let dataD5 = [];

      let xData = [];
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

      // for (var i = 0; i < xData.length; i++) {
      //   dataC1.splice(i, 1, { name: xData[i], value: dataC1[i] });
      //   dataC2.splice(i, 1, { name: xData[i], value: dataC2[i] });
      //   dataC3.splice(i, 1, { name: xData[i], value: dataC3[i] });
      //   dataD1.splice(i, 1, { name: xData[i], value: dataD1[i] });
      //   dataD2.splice(i, 1, { name: xData[i], value: dataD2[i] });
      //   dataD3.splice(i, 1, { name: xData[i], value: dataD3[i] });
      // }
      // console.log(dataC1);
      // console.log("dataC1");
      // console.log(dataC2);
      // console.log(dataC3);
      // console.log(dataD1);
      // console.log(dataD2);
      // console.log(dataD3);

      var fontColor = "#30eee9";
      option = {
        backgroundColor: "",
        title: {
          show: true, //显示策略，默认值true,可选为：true（显示） | false（隐藏）
          text: "机械制造业", //主标题文本，'\n'指定换行
          textStyle: { fontSize: 18, fontWeight: "bolder", color: "#fff" },
          // fontFamily: 'Arial, Verdana, sans...',
          // fontSize: 12,
          // fontStyle: 'normal',
          // fontWeight: 'normal',
          // fontColor: '#fff'

          x: "center"
        },
        grid: {
          left: "5%",
          right: "2%",
          top: "30%",
          bottom: "0%",
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
          data: [
            "文化、办公用机械制造",
            "特种陶瓷制品制造",
            "金属加工机械制造",
            "泵、阀门、压缩机及类似机械制造",
            "电子和电工机械专用设备制造",
            "农、林、牧、渔专用机械制造",
            "其他电气机械及器材制造",
            "增材制造装备制造"
          ],
          itemWidth: 15,
          itemHeight: 10,
          textStyle: {
            fontSize: 14,
            color: "#65aaf1"
          },
          right: "0%", //距离右侧
          top: "10%"
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
            name: "文化、办公用机械制造",
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
            data: null
          },
          {
            name: "特种陶瓷制品制造",
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
            data: null
          },
          {
            name: "金属加工机械制造",
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
            data: null
          },
          {
            name: "泵、阀门、压缩机及类似机械制造",
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
            data: null
          },
          {
            name: "电子和电工机械专用设备制造",
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
            data: null
          },
          {
            name: "农、林、牧、渔专用机械制造",
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
            data: null
          },
          {
            name: "其他电气机械及器材制造",
            type: "line",
            stack: "总量",
            symbol: "circle",
            showSymbol: false,
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#b81b83",
                lineStyle: {
                  color: "#b81b83",
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
            data: null
          },
          {
            name: "增材制造装备制造",
            type: "line",
            stack: "总量",
            symbol: "circle",
            showSymbol: false,
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#702aaa",
                lineStyle: {
                  color: "#702aaa",
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
            data: null
          }
        ]
      };
      echart1.setOption(option);

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
          console.log(dataTime);
          console.log("dataTime");

          echart1.setOption({
            xAxis: [
              {
                data: dataTime
              }
            ],
            series: [
              {
                name: "文化、办公用机械制造",

                data: listData1
              },
              {
                name: "特种陶瓷制品制造",

                data: listData2
              },
              {
                name: "金属加工机械制造",

                data: listData3
              },
              {
                name: "泵、阀门、压缩机及类似机械制造",

                data: listData4
              },
              {
                name: "电子和电工机械专用设备制造",

                data: listData5
              },
              {
                name: "农、林、牧、渔专用机械制造",

                data: listData6
              },
              {
                name: "其他电气机械及器材制造",

                data: listData7
              },
              {
                name: "增材制造装备制造",

                data: listData8
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

      // let dataC1 = [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 260, 280];
      // let dataC2 = [220, 182, 191, 210, 230, 270, 270, 201, 154, 140, 240, 250];
      // let dataC3 = [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190];
      // let dataD1 = [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190];
      // let dataD2 = [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190];
      // let dataD3 = [200, 232, 201, 200, 190, 190, 210, 190, 182, 201, 154, 190];
      // let dataD4 = [200, 232, 201, 200, 190, 190, 210, 190, 182, 201, 154, 190];
      // let dataD5 = [200, 232, 201, 200, 190, 190, 210, 190, 182, 201, 154, 190];

      let dataC1 = [];
      let dataC2 = [];
      let dataC3 = [];
      let dataD1 = [];
      let dataD2 = [];
      let dataD3 = [];
      let dataD4 = [];
      let dataD5 = [];

      let xData = [];
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

      var fontColor = "#30eee9";
      option = {
        backgroundColor: "",
        title: {
          show: true, //显示策略，默认值true,可选为：true（显示） | false（隐藏）
          text: "航空制造业", //主标题文本，'\n'指定换行
          textStyle: { fontSize: 18, fontWeight: "bolder", color: "#fff" },
          // fontFamily: 'Arial, Verdana, sans...',
          // fontSize: 12,
          // fontStyle: 'normal',
          // fontWeight: 'normal',
          // fontColor: '#fff'

          x: "center"
        },
        grid: {
          left: "5%",
          right: "2%",
          top: "30%",
          bottom: "0%",
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
          data: [
            "铁路、船舶、航空航天等运输设备修理",
            "航空、航天器及设备制造"
          ],
          itemWidth: 15,
          itemHeight: 10,
          textStyle: {
            fontSize: 14,
            color: "#65aaf1"
          },
          right: "30%", //距离右侧
          top: "10%"
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
            name: "铁路、船舶、航空航天等运输设备修理",
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
            data: null
          },
          {
            name: "航空、航天器及设备制造",
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
            data: null
          }
        ]
      };
      echart3.setOption(option);

      t.$axios
        .get("/findAllElectricityRelated")
        .then(result => {
          console.log(result);
          console.log("dasdasd");
          let dataTime = result.data.data.electricityRelatedServiceAllDate;
          let dataResult = result.data.data.electricityRelatedServiceAllRelated;

          let listData1 = [];
          let listData2 = [];

          dataTime.forEach(time => {
            dataResult.forEach(element => {
              // console.log(element);
              if (time == element.electDateStr) {
                console.log(time);

                if (element.manufacts.owner == "航空制造业") {
                  if (
                    element.manufacts.manuName ==
                    "铁路、船舶、航空航天等运输设备修理"
                  ) {
                    // console.log(element.manufacts.manuName);
                    listData1.push({
                      name: time,
                      value: element.energy
                    });
                  } else if (
                    element.manufacts.manuName == "航空、航天器及设备制造"
                  ) {
                    listData2.push({
                      name: time,
                      value: element.energy
                    });
                  }
                }
              }
            });
          });

          console.log(listData1);
          console.log(dataTime);
          console.log("dataTime");

          echart3.setOption({
            xAxis: [
              {
                data: dataTime
              }
            ],
            series: [
              {
                name: "铁路、船舶、航空航天等运输设备修理",

                data: listData1
              },
              {
                name: "航空、航天器及设备制造",

                data: listData2
              }
            ]
          });
        })
        .catch(err => {});
    },
    drawChart2() {
      let echart2 = this.$echarts.init(document.getElementById("echart2"));
      var option = {};
      var t = this;

      // let dataC1 = [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 260, 280];
      // let dataC2 = [220, 182, 191, 210, 230, 270, 270, 201, 154, 140, 240, 250];
      // let dataC3 = [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190];
      // let dataD1 = [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190];
      // let dataD2 = [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190];
      // let dataD3 = [200, 232, 201, 200, 190, 190, 210, 190, 182, 201, 154, 190];
      // let dataD4 = [200, 232, 201, 200, 190, 190, 210, 190, 182, 201, 154, 190];
      // let dataD5 = [200, 232, 201, 200, 190, 190, 210, 190, 182, 201, 154, 190];

      let dataC1 = [];
      let dataC2 = [];
      let dataC3 = [];
      let dataD1 = [];
      let dataD2 = [];
      let dataD3 = [];
      let dataD4 = [];
      let dataD5 = [];

      let xData = [];
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

      // for (var i = 0; i < xData.length; i++) {
      //   dataC1.splice(i, 1, { name: xData[i], value: dataC1[i] });
      //   dataC2.splice(i, 1, { name: xData[i], value: dataC2[i] });
      //   dataC3.splice(i, 1, { name: xData[i], value: dataC3[i] });
      //   dataD1.splice(i, 1, { name: xData[i], value: dataD1[i] });
      //   dataD2.splice(i, 1, { name: xData[i], value: dataD2[i] });
      //   dataD3.splice(i, 1, { name: xData[i], value: dataD3[i] });
      // }
      // console.log(dataC1);
      // console.log("dataC1");
      // console.log(dataC2);
      // console.log(dataC3);
      // console.log(dataD1);
      // console.log(dataD2);
      // console.log(dataD3);

      var fontColor = "#30eee9";
      option = {
        backgroundColor: "",
        title: {
          show: true, //显示策略，默认值true,可选为：true（显示） | false（隐藏）
          text: "机械制造业", //主标题文本，'\n'指定换行
          textStyle: { fontSize: 18, fontWeight: "bolder", color: "#fff" },
          // fontFamily: 'Arial, Verdana, sans...',
          // fontSize: 12,
          // fontStyle: 'normal',
          // fontWeight: 'normal',
          // fontColor: '#fff'

          x: "center"
        },
        grid: {
          left: "5%",
          right: "2%",
          top: "30%",
          bottom: "0%",
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
          data: [
            "汽车制造",
            "城市轨道交通设备制造",
            "改装汽车制造",
            "低速汽车制造",
            "汽车车身、挂车制造",
            "汽车零部件及配件制造"
          ],
          itemWidth: 15,
          itemHeight: 10,
          textStyle: {
            fontSize: 14,
            color: "#65aaf1"
          },
          right: "0%", //距离右侧
          top: "10%"
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
            name: "汽车制造",
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
            data: null
          },
          {
            name: "城市轨道交通设备制造",
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
            data: null
          },
          {
            name: "改装汽车制造",
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
            data: null
          },
          {
            name: "低速汽车制造",
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
            data: null
          },
          {
            name: "汽车车身、挂车制造",
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
            data: null
          },
          {
            name: "汽车零部件及配件制造",
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
            data: null
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

          dataTime.forEach(time => {
            dataResult.forEach(element => {
              // console.log(element);
              if (time == element.electDateStr) {
                console.log(time);

                if (element.manufacts.owner == "汽车制造业") {
                  if (element.manufacts.manuName == "汽车制造") {
                    // console.log(element.manufacts.manuName);
                    listData1.push({
                      name: time,
                      value: element.energy
                    });
                  } else if (
                    element.manufacts.manuName == "城市轨道交通设备制造"
                  ) {
                    listData2.push({
                      name: time,
                      value: element.energy
                    });
                  } else if (element.manufacts.manuName == "改装汽车制造") {
                    listData3.push({
                      name: time,
                      value: element.energy
                    });
                  } else if (element.manufacts.manuName == "低速汽车制造") {
                    listData4.push({
                      name: time,
                      value: element.energy
                    });
                  } else if (
                    element.manufacts.manuName == "汽车车身、挂车制造"
                  ) {
                    listData5.push({
                      name: time,
                      value: element.energy
                    });
                  } else if (
                    element.manufacts.manuName == "汽车零部件及配件制造"
                  ) {
                    listData6.push({
                      name: time,
                      value: element.energy
                    });
                  }
                }
              }
            });
          });

          console.log(listData1);
          console.log(dataTime);
          console.log("dataTime");

          echart2.setOption({
            xAxis: [
              {
                data: dataTime
              }
            ],
            series: [
              {
                name: "汽车制造",

                data: listData1
              },
              {
                name: "城市轨道交通设备制造",

                data: listData2
              },
              {
                name: "改装汽车制造",

                data: listData3
              },
              {
                name: "低速汽车制造",

                data: listData4
              },
              {
                name: "汽车车身、挂车制造",

                data: listData5
              },
              {
                name: "汽车零部件及配件制造",

                data: listData6
              }
            ]
          });
        })
        .catch(err => {});
    },

    drawChartMap1() {
      let map_1 = this.$echarts.init(document.getElementById("map_1"));

      var option = {};
      var t = this;

      option = {
        backgroundColor: "",
        color: ["#ffd285", "#ff733f", "#ec4863"],

        title: [
          {
            text: "三大行业用电量总和",
            left: "1%",
            top: "6%",
            textStyle: {
              color: "#fff"
            }
          },
          {
            text: "三大行业用电量总和对比",
            left: "83%",
            top: "6%",
            textAlign: "center",
            textStyle: {
              color: "#fff"
            }
          }
        ],
        tooltip: {
          trigger: "axis"
        },
        legend: [
          {
            x: 300,
            top: "7%",
            textStyle: {
              color: "#ffd285"
            },
            data: [
              "汽车制造业各行业和",
              "航空制造业各行业和",
              "机械制造业各行业和"
            ]
          },
          {
            textStyle: {
              color: "#ffd285"
            },
            width: "50%",
            left: "70%",
            right: "0%",
            top: "16%",
            bottom: "7%",
            data: ["汽车制造业", "航空制造业", "机械制造业"]
          }
        ],
        grid: [
          {
            left: "1%",
            right: "35%",
            top: "16%",
            bottom: "6%",
            containLabel: true
          },
          {
            left: "83%",
            right: "0%",
            top: "16%",
            bottom: "6%"
          }
        ],
        toolbox: {
          show: false,
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#FF4500"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#fff"
            }
          },
          boundaryGap: false,
          data: null
        },
        angleAxis: {
          type: "category",
          data: null,
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          },

          z: 10
        },
        polar: {
          center: ["85%", "55%"],
          radius: 140
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#fff"
            }
          },
          axisTick: {
            show: true
          },
          axisLabel: {
            textStyle: {
              color: "#fff"
            }
          },
          type: "value"
        },

        radiusAxis: {
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          }
        },

        series: [
          {
            name: "航空制造业各行业和",
            smooth: true,
            type: "line",
            symbolSize: 8,
            symbol: "circle",
            data: null
          },
          {
            name: "汽车制造业各行业和",
            smooth: true,
            type: "line",
            symbolSize: 8,
            symbol: "circle",
            data: null
          },
          {
            name: "机械制造业各行业和",
            smooth: true,
            type: "line",
            symbolSize: 8,
            symbol: "circle",
            data: null
          },

          {
            type: "bar",
            data: null,
            label: {
              normal: {
                position: "center"
              }
            },
            coordinateSystem: "polar",
            name: "汽车制造业",
            stack: "a"
          },
          {
            type: "bar",
            data: null,
            coordinateSystem: "polar",
            label: {
              normal: {
                position: "center"
              }
            },
            name: "航空制造业",
            stack: "a"
          },
          {
            type: "bar",
            data: null,
            coordinateSystem: "polar",
            label: {
              normal: {
                position: "center"
              }
            },
            name: "机械制造业",
            stack: "a"
          }
        ]
      };
      map_1.setOption(option);

      t.$axios
        .get("/findAllElectricityRelated")
        .then(result => {
          console.log(result);
          console.log("dasdasd");
          let dataTime = result.data.data.electricityRelatedServiceAllDate; //日期
          let mechanicalSum = result.data.data.mechanicalSum; //机械行业和
          let carSum = result.data.data.carSum; //汽车行业和
          let aviationSum = result.data.data.aviationSum; //航空行业和

          console.log("mechanicalSum");
          console.log(mechanicalSum);
          console.log("mechanicalSum");

          let angleAxisDataTime = [
            {
              textStyle: {
                color: "#fff"
              }
            }
          ];

          for (var item of dataTime) {
            angleAxisDataTime.push(item);
          }
          map_1.setOption({
            xAxis: {
              data: dataTime
            },
            angleAxis: {
              type: "category",
              data: dataTime,
              axisLine: {
                lineStyle: {
                  color: "#fff"
                }
              },

              z: 10
            },
            series: [
              {
                name: "航空制造业各行业和",
                data: aviationSum
              },
              {
                name: "汽车制造业各行业和",
                data: carSum
              },
              {
                name: "机械制造业各行业和",
                data: mechanicalSum
              },
              {
                type: "bar",
                data: carSum,
                label: {
                  normal: {
                    position: "center"
                  }
                },
                coordinateSystem: "polar",
                name: "汽车制造业",
                stack: "a"
              },
              {
                type: "bar",
                data: aviationSum,
                coordinateSystem: "polar",
                label: {
                  normal: {
                    position: "center"
                  }
                },
                name: "航空制造业",
                stack: "a"
              },
              {
                type: "bar",
                data: mechanicalSum,
                coordinateSystem: "polar",
                label: {
                  normal: {
                    position: "center"
                  }
                },
                name: "机械制造业",
                stack: "a"
              }
            ]
          });
        })
        .catch(err => {});
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