<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="goods" >商品</router-link> 
      </div>
      <div class="tab-item">
        <router-link to="ratings" >评论</router-link> 
      </div>
      <div class="tab-item">
        <router-link to="seller" >商家</router-link> 
      </div>
    </div>
    
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header.vue';
  export default {
    data() {
      return {
        
      }
    },
    components: {
      'v-header':header,
    }
  }
</script>

<style scoped lang="less">
  #app{
    .tab{
      display: flex;
      height: 40px;
      line-height: 40px;
      border-bottom:1px solid rgba(7,17,27,0.1);
      .tab-item{
        flex:1;
        text-align: center;
        a{
          display:block;
          font-size:14px;
          &.active{
            color:rgb(240, 20, 20);
          }
        }
      }

    }
  }
</style>
