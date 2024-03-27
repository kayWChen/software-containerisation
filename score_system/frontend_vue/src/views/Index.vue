<template>
    <div>
        <el-container style="height: 1000px; border: 1px solid #eee">
          <el-aside width="200px" style="background-color: rgb(238, 241, 246)">

            <el-menu router :default-openeds="['0','1']">
              <el-submenu v-for="(item, index) in $router.options.routes" :index="index+''" v-if="item.show">
                <template slot="title"><i class="el-icon-setting"></i>{{item.name}}</template>
                <el-menu-item v-for="(sub_item, sub_index) in item.children" :index="sub_item.path"
                :class="$route.path == sub_item.path ? 'is-active': ''">
                    <template slot="title">{{sub_item.name}}</template>
                </el-menu-item>
              </el-submenu>
            </el-menu>
          </el-aside>
          <el-main>
              <router-view></router-view>
          </el-main>

        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style scoped>

</style>