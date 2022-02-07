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
  plugins: [
    [
      '@docusaurus/plugin-sitemap',
      {
        id: 'sitemap',
        changefreq: 'weekly',
        priority: 0.5,
        trailingSlash: false,
      },
    ],
  ],
  themeConfig: {
prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    navbar: {
      title: 'GWorks Docs',
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
          href: 'https://g-works.eu',
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
              href: 'https://discord.gg/xVu7dgjVsh',
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GWorks, made with ❤  in Germany and build with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
              "https://github.com/GWorks-eu/Docs/edit/master/",
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
