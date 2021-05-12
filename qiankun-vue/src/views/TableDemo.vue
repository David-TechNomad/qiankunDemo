<template>
  <div>
    <div>
      主应用名: {{ parentAppInitialState && parentAppInitialState.name }}
    </div>
    <el-table :data="tableData" style="width: 100%;">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    <div class="mt-10">
      <el-button type="primary" size="mini" @click="updateMainAppName"
        >子应用更新子应用名</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      parentAppInitialState: {},
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
    }
  },
  created() {
    const {
      onGlobalStateChange,
      initialState,
      setGlobalState,
    } = this.$parentProps

    this.parentAppInitialState = initialState
    this.setGlobalState = setGlobalState

    onGlobalStateChange((state) => {
      this.parentAppInitialState = state
    }, true)
  },
  methods: {
    updateMainAppName() {
      this.setGlobalState({
        name: '子应用修改主应用的名字',
      })
    },
  },
}
</script>

<style scoped lang="scss">
.mt-10 {
  margin-top: 10px;
}
</style>
