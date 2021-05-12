<template>
  <div>
    <div>{{ parentAppInitialState.name }}</div>
    <el-button type="success" size="mini" class="mb-20" @click="updateMain"
      >表单子应用修改主应用数据</el-button
    >
    <el-form ref="form" :model="form" label-width="80px" size="mini">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      parentAppInitialState: {},
    }
  },
  created() {
    if (window.__POWERED_BY_QIANKUN__) {
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
    }
  },
  methods: {
    updateMain() {
      this.setGlobalState({
        name: '表单子应用修改主应用数据',
      })
    },
    onSubmit() {},
  },
}
</script>

<style style="scss" scoped>
.mb-20 {
  margin-bottom: 20px;
}
</style>
