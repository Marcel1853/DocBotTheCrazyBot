module.exports = {
  title: 'TheCrazyBot Docs',
  tagline: '',
  url: 'http://docs.thecrazybot.de',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://cdn.g-works.eu/img/gworks/logo.png',
  organizationName: 'TheCrazyBot',
  projectName: 'Docs',
  trailingSlash: true,
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
        alt: 'GWorks Logo',
        src: 'https://cdn.g-works.eu/img/gworks/logo.png',
      },
      items: [
        {
          to: 'docs/aWelcomePage/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://thecrazybot.de',
          label: 'Website',
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
      copyright: `©  ${new Date().getFullYear()}`,
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