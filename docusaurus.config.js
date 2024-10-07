module.exports = {
  title: 'TheCrazyBot Docs',
  tagline: '',
  url: '/DocBotTheCrazyBot',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'TheCrazyBot',
  deploymentBranch: 'gh-pages',
  githubHost: 'github.com',
  githubPort: '22',
  projectName: 'Docs',
  trailingSlash: true,
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
    localeConfigs: {
      de: {
        htmlLang: 'de',
      },
    },
  },
  plugins: [
    [
      '@docusaurus/plugin-sitemap',
      {
        id: 'sitemap',
        changefreq: 'weekly',
        priority: 0.5,
      },
    ],
  ],
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    navbar: {
      title: 'TheCrazyBot Docs',
      logo: {
        alt: 'TheCrazyBot Logo',
        src: 'https://cdn.discordapp.com/attachments/619510627773317124/951438610723397662/crazybot.jpg',
      },
      items: [
        {
          to: 'docs/aWelcomePage/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://www.thecrazybot.de',
          label: 'www.thecrazybot.de',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Socialmedia',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/H9RPzp68Mp',
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TheCrazyBot Docs `,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/Marcel1853/DocBotTheCrazyBot/edit/main/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ],
};
