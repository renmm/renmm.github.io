const path = require('path');

const iconPath = path.join(process.cwd(), 'dist');

module.exports = {
  title: '嘉言懿行',
  themeConfig: {
    repo: 'renmm/renmm.github.io',
    editLinks: true,
    editLinkText: '帮助改善此页面！',
    nav: [
      { text: '主页', link: '/' },
      {
        text: 'blogs',
        items: [
          { text: '函数式编程术语解析（1）', link: '/2016/fp-learn01' },
          { text: 'gitbook写doc', link: '/2016/gitbook-doc' },
          { text: 'shim在项目中的正确运用', link: '/2016/how-use-shim' },
        ],
      },
      {
        text: '项目',
        items: [
          { text: 'gfm-doc', link: 'http://renmm.github.io/gfm-doc' },
          { text: 'pile-icons', link: 'http://renmm.github.io/pile-icons' },
        ],
      },
    ],
    sidebar: 'auto',
    sidebarDepth: 2,
    serviceWorker: {
      updatePopup: true,
    },
    lastUpdated: 'Last Updated',
  },
  chainWebpack(config) {
    config.module
      .rule('js')
      .use('babel-loader')
      .tap((options) => {
        options.plugins = [
          ...(options.plugins || []),
          [require.resolve('babel-plugin-component'), {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk',
          }],
        ];
        return options;
      });
  },
};
