import { defineConfig } from 'umi';

export default defineConfig({
  base: '/docs/',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
