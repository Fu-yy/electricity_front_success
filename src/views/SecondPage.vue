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
          <div class="boxall" style="height: 5rem">
            <div style="height:100%; width: 100%;">
              <div class="sy" id="fb1"></div>
              <div class="sy" id="fb2"></div>
              <div class="sy" id="fb3"></div>
            </div>
            <div class="boxfoot"></div>
          </div>
        </li>
        <li>
          <div class="bar" style="margin-bottom:1rem">
            <div class="barbox">
              <ul class="clearfix">
                <li class=" counter" style="width:100%;line-height: 2rem;">行业用电量关联性分析</li>
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
            <div class="allnav" id="echart4">echart6</div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall" style="height: 3.2rem">
            <div class="alltitle">模块标题样式</div>
            <div class="allnav" id="echart5">echart6</div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall" style="height: 3rem">
            <div class="alltitle">模块标题样式</div>
            <div class="allnav" id="echart6">echart6</div>
            <div class="boxfoot"></div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
name:"secondPage",
data() {
    return {
      loading: require("./../assets/img/loading.gif"),
      lbx: require("./../assets/img/lbx.png"),
      jt: require("./../assets/img/jt.png"),
      map: require("./../assets/img/map.png"),
      fontSize: document.documentElement.clientWidth
    };
  },
}
</script>

<style scoped>
@import "./../assets/css/comon0.css";

</style>