module.exports = {
  title: 'TheCrazyBot Docs',
  tagline: '',
  url: 'http://docs.thecrazybot.de',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'TheCrazyBot',
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
      copyright: `TheCrazyBot Docs © ${new Date().getFullYear()}`
<script type="text/javascript">
    var _paq = window._paq = window._paq || [];
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function () {
      var u = "//analytics.g-works.eu/";
      _paq.push(['setTrackerUrl', u + 'matomo.php']);
      _paq.push(['setSiteId', '3']);
      var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
      g.type = 'text/javascript'; g.async = true; g.src = u + 'matomo.js'; s.parentNode.insertBefore(g, s);
    })();
  </script>	,
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
