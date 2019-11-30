const markdownRender = require('markdown-it')()
const mdContainer = require('markdown-it-container')

module.exports = {
  parallel: false, // 解决打包问题
  publicPath: '',
  productionSourceMap: false,
  devServer: {
    hot: true,
    open: true
  },
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true,
        use: [
          [
            mdContainer,
            'demo',
            {
              validate: function(params) {
                return params.trim().match(/^demo\s*(.*)$/)
              },
              render: function(tokens, idx) {
                //1、获取第一行的内容使用markdown渲染html作为组件的描述
                const m = tokens[idx].info.trim().match(/^demo\s+(.*)$/)
                if (tokens[idx].nesting === 1) {
                  const description = m && m.length > 1 ? m[1] : ''
                  let descriptionHtml = description
                    ? markdownRender.render(description)
                    : ''
                  // 2、获取代码块的html和js代码
                  let content = tokens[idx + 1].content
                  //3、使用自定义开发组件【demoBlock】来包裹内容并且渲染成案例和代码实例
                  return `<demo-block>
                    <div slot="source">${content}</div>
                   ${descriptionHtml}
                   <div slot="highlight">
                  `
                }
                return `</demo-block>`
              }
            }
          ],
          [mdContainer, 'tip'],
          [mdContainer, 'warning']
        ]
      })
  }
}
