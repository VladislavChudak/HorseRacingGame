export default {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'prettier'],
  plugins: ['vue'],
  rules: {
    'vue/multi-word-component-names': 'off',
  },
};
