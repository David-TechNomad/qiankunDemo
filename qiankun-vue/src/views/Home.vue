<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <el-Button type="primary" @click="updateMainApp">更新主应用数据</el-Button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    updateMainApp() {
      this.$parentProps.setGlobalState({
        name: '更新主应用数据',
      })
    },
  },
  components: {},
}
</script>
