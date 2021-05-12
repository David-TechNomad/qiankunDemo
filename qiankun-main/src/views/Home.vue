<template>
  <div>
    <div class="mb-10">乾坤主页</div>
    <el-button
      class="updateChildApp"
      @click="updateChildApp('/table')"
      size="mini"
      type="success"
      >弹出子应用表格弹窗</el-button
    >

    <el-button
      class="updateChildApp"
      @click="updateChildApp('/form')"
      size="mini"
      type="primary"
      >弹出子应用表单弹窗</el-button
    >

    <el-button
      class="updateChildApp"
      @click="updateScrmChildApp('/couponDetail?couponDefinitionId=77')"
      size="mini"
      type="success"
      >弹出Scrm子应用表单弹窗</el-button
    >

    <el-button
      class="updateChildApp"
      @click="updateHISChildApp"
      size="mini"
      type="success"
      >弹出HIS子应用表单弹窗</el-button
    >

    <el-button
      class="updateChildApp"
      @click="updateHISVueChildApp"
      size="mini"
      type="success"
      >弹出HIS_mirco_vue子应用弹窗</el-button
    >

    <el-dialog
      title="子应用弹窗"
      :visible.sync="dialogVisible"
      width="700px"
      :before-close="handleClose"
    >
      <div v-loading="!microApp">
        <div ref="modalForm" class="modalFormLoading"></div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { loadMicroApp } from 'qiankun'

export default {
  name: 'Home',
  data() {
    return {
      initialState: {},
      dialogVisible: false,
      microApp: null,
    }
  },
  created() {},
  mounted() {},
  methods: {
    updateChildApp(path, url) {
      this.dialogVisible = true

      setTimeout(() => {
        this.microApp = loadMicroApp({
          name: 'vue',
          entry: '//localhost:10003',
          container: this.$refs.modalForm,
          props: { path },
        })
      }, 20)
    },
    handleClose() {
      this.microApp.unmount()
      this.dialogVisible = false
    },
    updateScrmChildApp(path) {
      this.dialogVisible = true

      console.log('path', path)

      setTimeout(() => {
        this.microApp = loadMicroApp({
          name: 'scrm_vue',
          // entry: 'http://uat.scrm.laoganma.fun',
          entry: '/scrm',
          container: this.$refs.modalForm,
          props: {
            path,
            token: '27169f2421f3436392c8a9ccab719333',
            mode: 'abstract',
            theme: 'his',
            USER_ID: 1619,
            MEDICAL_INSTITUTION_ID: 800,
          },
        })
      }, 20)
    },
    updateHISChildApp() {
      this.dialogVisible = true

      setTimeout(() => {
        this.microApp = loadMicroApp({
          name: 'dpms-web-[name]',
          entry: 'http://uat-tx.dental.his.laoganma.fun/', //http://192.168.1.7:7001/
          // entry: 'http://192.168.1.7:7001/',
          container: this.$refs.modalForm,
          props: {
            baseParams: {
              TOKEN: 'c5c3c99039f447a080349401ce98f928',
              REFRESH_TOKEN: 'b2c9fb99114e4dc8b8f01444a11ac3f0',
              USER_ID: 1619,
              MEDICAL_INSTITUTION_ID: 798,
              tenantId: 481,
              topParentId: 797,
              institutionChainType: 2,
            },
            businessParams: {
              path: 'appointmentView',
            },
          },
        })
      }, 20)
    },
    updateHISVueChildApp() {
      this.dialogVisible = true

      setTimeout(() => {
        this.microApp = loadMicroApp({
          name: 'dpms-web-mirco-vue',
          // entry: 'http://dev-tx.dental.his.laoganma.fun/dpms_mirco_vue/',
          entry: '//localhost:9011/dpms_mirco_vue/',
          container: this.$refs.modalForm,
          props: {
            baseParams: {
              mode: 1,
              pathId: 104,
              theme: 'his',
            },

            systemParams: {
              TOKEN: '2fb28f46411d43378d190f864fb6b233',
              USER_ID: 3232,
              MEDICAL_INSTITUTION_ID: 809,
              tenantId: 483,
              topParentId: 808,
              institutionChainType: 2,
              medicalInstitution: {
                institutionTypeId: 2,
              },
              staff: {
                belongsInstitutionId: 1043,
              },
            },
          },
        })
      }, 20)
    },
  },
  components: {},
}
</script>

<style lang="scss" scoped>
.mb-10 {
  margin-bottom: 10px;
}
.updateChildApp {
  display: inline-block;
  width: min-content;
}

.modalFormLoading {
  width: 100%;
  min-height: 100px;
}
</style>
