/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  template: {
    favicon: './public/favicon/book-favicon.ico',
  },
  theme: {
    color: {
      link: '#170c3a',
      linkHover: 'gray',
    },
    fontFamily: {
      base: '"Source Code Pro", sans-serif',
    },
  },
  pagePerSection: true,
  propsParser: require('react-docgen-typescript').withDefaultConfig().parse,
  title: 'VUTTR - Docs',
  moduleAliases: {
    '~': path.resolve(__dirname, 'src'),
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, './src/ProvidersStyleguide.tsx'),
  },
  sections: [
    {
      name: 'Introdução',
      content: './docs/Introduction/Introduction.md',
      sections: [
        {
          name: 'Adicionando',
          content: './docs/Introduction/AddTool.md',
        },
        {
          name: 'Removendo',
          content: './docs/Introduction/RemoveTool.md',
        },
        {
          name: 'Pesquisando',
          content: './docs/Introduction/SearchTool.md',
        },
        {
          name: 'Pesquisando por Tag',
          content: './docs/Introduction/SearchToolByTag.md',
        },
        {
          name: 'Modo escuro',
          content: './docs/Introduction/DarkMode.md',
        },
      ],
    },
    {
      name: 'Rodando a aplicação',
      content: './docs/GettingStarted/GettingStarted.md',
      sections: [
        {
          name: 'Docker',
          content: './docs/GettingStarted/Docker.md',
        },
        {
          name: 'Node',
          content: './docs/GettingStarted/Node.md',
        },
      ],
    },
    {
      name: 'Componentes',
      content: './docs/Components.md',
      components: path.join(__dirname, './src/components/**/*.tsx'),
    },
  ],
};
