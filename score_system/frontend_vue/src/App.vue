<template>
  <div id="app">
      <router-view></router-view>  <!--  load Page  -->
  </div>
</template>

<script>
  export default {
    data() {
      const item = {
        date: '2024-03-02',
        name: 'kay',
        address: 'Amsterdam'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>

<style>
  .el-header {
    background-color: #bdefaf;
    color: #547c39;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
