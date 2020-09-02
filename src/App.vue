<template>
  <!-- <div class="canvas" style="opacity: .2"> -->
  <!-- <iframe frameborder="0" src="js/index.html" style="width: 100%; height: 100%"></iframe> -->
  <!-- </div> -->
  <!-- <div class="loading">
  <div class="loadbox"> <img :src="loading"> 页面加载中... </div>
  </div>-->
  <div id="app">
    <!-- <el-row class="head" style="text-align:center">


      <el-col :span="2"><a>默认按钮</a></el-col>
      <el-col :span="2"><a>默认按钮</a></el-col>
      <el-col :span="2"><a>默认按钮</a></el-col>
      <el-col :span="12">
        <span class="firstTitleFont">大数据可视化化据可视化据可视化展板通用模板</span>
      </el-col>
        
        <el-col :span="2"><a>默认按钮</a></el-col>
        <el-col :span="2"><a>默认按钮</a></el-col>
        <el-col :span="2"><el-button>默认按钮</el-button></el-col>
      
    </el-row>-->
    <div class="head">
      <div class="firstPageBtn pageBtn">
        <a href="#">
          <router-link to="/firstPage">历史用电量分析</router-link>
        </a>
      </div>
      <div class="secondPageBtn pageBtn">
        <a href="#">
          <router-link to="/secondPage">用电关联性分析</router-link>
        </a>
      </div>
      <div class="thirdPageBtn pageBtn">
        <a href="#">
          <router-link to="/thirdPage">用电趋势预测</router-link>
        </a>
      </div>
      <div class="forthPageBtn pageBtn">
        <a href="#">
          <router-link to="/forthPage">峰谷平和行业分时电价</router-link>
        </a>
      </div>
      <div class="fifthPageBtn pageBtn">
        <a href="#">
          <router-link to="/fifthPage">分时电量优化</router-link>
        </a>
      </div>
      <div class="sixthPageBtn pageBtn">
        <a href="#">
          <router-link to="/sixthPage">需求侧用电量优化</router-link>
        </a>
      </div>
      <h1>需求侧工业用电行为大数据深度分析及优化决策支持</h1>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data: {
    fontSize: 0
  },
  beforeCreate: function() {
    console.log("asdasd");
    console.log(this.fontSize);
    document.getElementsByTagName("body")[0].className = "bgColor";
  },
  beforeDestroy: function() {
    document.body.removeAttribute("class", "bgColor");
  },
  data() {
    return {
      loading: require("./assets/img/loading.gif"),
      lbx: require("./assets/img/lbx.png"),
      jt: require("./assets/img/jt.png"),
      map: require("./assets/img/map.png"),
      fontSize: document.documentElement.clientWidth
    };
  },

  mounted() {
    this.windowHeight();
  },

  methods: {
    windowHeight(value) {
      console.log("calue");
      console.log(value);
      // do something...
      var whei = document.documentElement.clientWidth;
      var section = document.getElementsByName("section");
      this.fontSize = whei / 20;
      console.log("whei");
      console.log(whei);
      console.log("this.fontSize");

      console.log(this.fontSize);
    }
  }
};
</script>

<style scoped>
@import "./assets/css/comon0.css";
.firstTitleFont {
  font-family: "Courier New", Courier, monospace;
  text-align: center;
  font-size: 0.6rem;
  line-height: 1.8rem;
  color: #ffffff;
}
.tabBtnClass {
  width: 0.5rem;
  color: #ffffff;
  border: 1px;
  box-shadow: 1px;
}
.pageBtn {
  position: absolute;
  font-size: 0.1rem;

  border: 1px solid rgba(25, 186, 139, 0.17);
  text-align: center;

  top: 0.3rem;
  line-height: 0.75rem;
}
.firstPageBtn {
  left: 0.3rem;
    width: 2rem;

}
.secondPageBtn {
  left: 2.65rem;
    width: 2rem;

}
.thirdPageBtn {
  width: 2rem;

  left: 5rem;

}

.forthPageBtn {
   width: 2.5rem;

  right: 4.7rem;

}

.fifthPageBtn {

  width: 2rem;

  right: 2.5rem;

}

.sixthPageBtn {
  width: 2rem;

  right: 0.3rem;

}
</style>
