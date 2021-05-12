<template>
  <div class="app">
    <div class="home">
      <el-container>
        <el-header class="header">
          <span>Smegalo</span>
          <span style="margin-left: 20px;">{{ initialState.name }}</span>
          <el-button
            type="primary"
            style="margin-left: 20px;"
            size="small"
            @click="actionChangeState"
          >
            通讯子应用
          </el-button>
        </el-header>
        <el-container class="containerBox">
          <el-aside class="aside">
            <el-menu
              router
              :default-active="path"
              class="el-menu-vertical-demo"
            >
              <el-menu-item index="/">
                <i class="el-icon-s-home"></i>
                <span>主应用</span>
              </el-menu-item>
              <el-submenu v-for="sub of menu" :key="sub.id" :index="sub.id">
                <template slot="title">
                  <i :class="sub.icon"></i>
                  <span class="menu-sub-title">{{ sub.title }}</span>
                </template>
                <el-menu-item
                  v-for="item of sub.children"
                  :key="item.id"
                  :index="item.routerBase"
                >
                  <i :class="item.icon"></i>
                  <span class="menu-item-title">{{ item.title }}</span>
                </el-menu-item>
              </el-submenu>
            </el-menu>
          </el-aside>
          <el-main class="main">
            <router-view />

            <div id="childApp"></div>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data(em) {
    return {
      path: em.$route.path,
      initialState: {},
    }
  },
  computed: {
    ...mapState(['menu']),
  },
  watch: {
    $route(newVal) {
      this.path = newVal.path
    },
    menu(newVal) {
      console.log(newVal)
    },
  },
  created() {
    this.$actions.onGlobalStateChange((state) => {
      console.log('主应用 App', state)
      this.initialState = state
    }, true)
  },
  methods: {
    actionChangeState() {
      this.$actions.setGlobalState({ saveAppointmentSuccess: true })
    },
  },
}
</script>
<style lang="scss">
#childApp {
  width: 100%;
  height: 100%;
  overflow: hidden;
  > div {
    width: 100%;
    height: 100%;
  }
}
</style>
<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .header {
      height: 100px;
      line-height: 60px;
      background-color: #ccc;
    }
    .containerBox {
      overflow: hidden;
      .aside {
        width: 200px;
        background-color: #d3dce6;
        overflow-y: auto;

        ::v-deep .el-menu {
          height: 100%;
        }
      }
      .main {
        padding: 0;

        #childApp {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
