import { defineConfig } from 'umi';

export default defineConfig({
  base: '/Alipay-Home/',
  publicPath: '/Alipay-Home/',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  title: '支付宝商家中心-国内领先的第三方支付和金融服务平台',
  favicon: '/assets/favicon.ico',
});
