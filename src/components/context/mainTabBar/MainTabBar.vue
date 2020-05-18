<template>
      <tab-bar >
        <tab-bar-item path="/home" activecolor="red">
          <img src="~/assets/img/tabbar/home.svg" alt="" slot="item-icon">
          <img src="~/assets/img/tabbar/home-live.svg" alt="" slot="item-icon-active">
          <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item  path="/category">
          <img src="~/assets/img/tabbar/class.svg" alt="" slot="item-icon">
          <img src="~/assets/img/tabbar/class-live.svg" alt="" slot="item-icon-active">
          <div slot="item-text">分类</div>
        </tab-bar-item >
         <tab-bar-item path="/cart">
          <img src="~/assets/img/tabbar/icon-test.svg" alt="" slot="item-icon">
          <img src="~/assets/img/tabbar/icon-test-live.svg" alt="" slot="item-icon-active">
          <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile">
          <img src="~/assets/img/tabbar/wode.svg" alt="" slot="item-icon">
          <img src="~/assets/img/tabbar/wode-live.svg" alt="" slot="item-icon-active">
          <div slot="item-text">我的</div>
        </tab-bar-item>
    </tab-bar>

</template>

<script>
import TabBar from '../../common/tabbar/TabBar'
import TabBarItem from '..../common/tabbar/TabBarItem'
export default {
  components:{
        TabBar,
        TabBarItem
  },
  props:{},
  data(){
    return {
    }
  }

}
</script>
<style>
</style>