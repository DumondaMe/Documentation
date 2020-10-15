import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#00A198'
  },
  target: 'static',
  router: {
    base: '/<repository-name>/'
  }
})
