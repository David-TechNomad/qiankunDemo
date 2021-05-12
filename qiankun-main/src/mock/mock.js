const appConfig = [
  // {
  //   id: '1',
  //   title: 'vue子组件',
  //   icon: 'el-icon-monitor',
  //   module: 'vue',
  //   // isDefault: true,
  //   devEntry: '//localhost:10002',
  //   depEntry: 'http://ui.mfe.wlui.com.cn/',
  //   routerBase: '/portal/vue',
  //   container: '#childApp',
  //   children: [
  //     {
  //       id: '1-1',
  //       title: '表格',
  //       routerBase: '/vue/table',
  //       icon: 'el-icon-document-copy',
  //     },
  //     {
  //       id: '1-2',
  //       title: '表单',
  //       routerBase: '/vue/form',
  //       icon: 'el-icon-files',
  //     },
  //   ],
  // },
  // {
  //   id: '1-1',
  //   title: '卡券包',
  //   icon: 'el-icon-takeaway-box',
  //   module: 'box-vue',
  //   isDefault: true,
  //   // devEntry: 'http://uat.scrm.laoganma.fun/scrm_vue',
  //   devEntry: 'http://ui.mfe.wlui.com.cn/',
  //   depEntry: 'http://ui.mfe.wlui.com.cn/',
  //   routerBase: '/blog',
  //   container: '#childApp',
  //   children: [
  //     {
  //       id: '1-1',
  //       title: '优惠券管理',
  //       routerBase: '/blog',
  //       icon: 'el-icon-document-checked',
  //     },
  //     {
  //       id: '1-2',
  //       title: '优惠券核销记录',
  //       routerBase: '/blog/about',
  //       icon: 'el-icon-coordinate',
  //     },
  //   ],
  // },
  // {
  //   id: '2',
  //   title: 'React子组件',
  //   icon: 'el-icon-monitor',
  //   module: 'react',
  //   devEntry: '//localhost:10003',
  //   depEntry: 'http://ui.mfe.wlui.com.cn/',
  //   routerBase: '/react',
  //   container: '#childApp',
  //   children: [
  //     {
  //       id: '1-1',
  //       title: 'Home',
  //       routerBase: '/react',
  //       icon: 'el-icon-document-copy',
  //     },
  //     {
  //       id: '1-2',
  //       title: 'About',
  //       routerBase: '/react/about',
  //       icon: 'el-icon-document-copy',
  //     },
  //   ],
  // },
  {
    id: '3',
    title: 'His',
    // isDefault: true,
    icon: 'el-icon-monitor',
    module: 'react-his',
    // devEntry: 'http://dev-tx.dental.his.laoganma.fun/dpms_dental/',
    devEntry: '//10.101.99.99:7001/dpms_dental/',
    // devEntry: '//10.101.11.84:7001/dpms_dental/',
    routerBase: '/portal/dpms_dental',
    container: '#childApp',
    children: [
      {
        id: '1-0',
        title: '今日工作',
        routerBase: '/dpms_dental/today-work',
        icon: 'el-icon-document-copy',
      },
      {
        id: '1-1',
        title: '预约视图',
        routerBase: '/dpms_dental/appointment/appointment-view',
        icon: 'el-icon-document-copy',
      },
      {
        id: '1-2',
        title: '预约列表',
        routerBase: '/dpms_dental/appointment/appointment-list',
        icon: 'el-icon-document-copy',
      },
      {
        id: '1-3',
        title: '患者列表',
        routerBase: '/dpms_dental/patient-center/patient-list',
        icon: 'el-icon-document-copy',
      },
      {
        id: '1-4',
        title: '进销存-采购管理',
        routerBase:
          '/dpms_dental/supply-chain-management/apply/purchase-management',
        icon: 'el-icon-document-copy',
      },
      {
        id: '1-5',
        title: '进销存-出库管理',
        routerBase:
          '/dpms_dental/supply-chain-management/warehousing/outbound-management',
        icon: 'el-icon-document-copy',
      },
    ],
    systemParams: {
      TOKEN: '9e3b0e2fcc9e46dfa5f69f55d34072cd',
      REFRESH_TOKEN: '22dedcbfeea9409d803bc28fc699acc4',
      tenantId: 693,
      topParentId: 1539,
      institutionChainType: 1,
      USER_ID: 7258,
      MEDICAL_INSTITUTION_ID: 1539,
    },
  },
  {
    id: '4',
    title: 'His_vue',
    icon: 'el-icon-monitor',
    module: 'vue-his',
    devEntry: 'http://dev-tx.dental.his.laoganma.fun/dpms_mirco_vue/',
    // devEntry: '//localhost:9011/portal/dpms_mirco_vue/',
    routerBase: '/portal/dpms_mirco_vue',
    container: '#childApp',
    children: [
      {
        id: '4-1',
        title: '诊所运营统计',
        routerBase: '/dpms_mirco_vue/clinicStatistics',
        icon: 'el-icon-document-copy',
      },
      {
        id: '4-2',
        title: 'Banner管理',
        routerBase: '/dpms_mirco_vue/bannerManger',
        icon: 'el-icon-document-copy',
      },
    ],
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
]

export default [
  {
    url: '/api/getAppConfigs',
    type: 'post',
    response: () => {
      return {
        code: 200,
        data: appConfig,
      }
    },
  },
]
