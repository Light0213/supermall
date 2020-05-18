<template>
  
    <div class="tab-bar-item" @click="itemClick"> 
        <!-- 如果插槽有属性时，把属性放到上一层中，以免插槽被替换后连同属性也一起替换掉了 -->
        <div v-if="!isactive">
            <slot name="item-icon" ></slot>
        </div> 
        <!-- 点击这个tab-bar-item时，红色图片才显示，否则黑色图片显示 -->
        <div  v-else> <slot name="item-icon-active"></slot></div>
        <div :style="activeStyle">
           <slot name="item-text"></slot>
        </div>
    </div>  

  
</template>

<script>
export default {
  components:{},
  props:{
      path:String,
     activecolor: {
            type:String,
            default:'#f2077d'
      }
  },
  data(){
    return {
        // isactive: true,
    }
  },
  computed: {
      isactive(){
          return this.$route.path.indexOf(this.path) !== -1
        //   监听变量 一旦变化了就改变 变量的状态
      },
      activeStyle(){
          return this.isactive ?{ color: this.activecolor}:{}
      }
  },
  methods:{
      itemClick(){
        //   console.log('shye');
          this.$router.replace(this.path);
      }
  }

}
</script>
<style scoped>

.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    margin-top: 5px;
    /* background-color:red; */
  }
 .tab-bar-item img {
      width: 25px;
      height: 25px;
      margin-top: 3px;
      vertical-align: middle;
      margin-bottom: 2px;
  }
 
</style>>
