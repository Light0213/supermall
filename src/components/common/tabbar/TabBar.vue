<template>
     <div id="tab-bar">
         <slot>
         </slot>
    </div>
</template>

<script>
// import TarBarItem from "./TabBarItem"
export default {
  components:{
    //   TarBarItem
  },
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style >
  #tab-bar {
    display: flex;
    position: fixed;
    right: 0; 
    left: 0;
    bottom: 0;
    background-color: #f6f6f6;
    border-top: 1px solid rgba(100,100,100,0.3);
 
  }

</style>