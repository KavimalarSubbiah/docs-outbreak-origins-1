// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Outbreak Origins',
  tagline: 'They are coming',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.outbreak.pragyan.org/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Delta', // Usually your GitHub org/user name.
  projectName: 'Outbreak Origins Documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/favicon.ico',
      navbar: {
        title: 'Outbreak Origins',
        logo: {
          alt: 'Outbreak Origins',
          src: 'img/plague.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://outbreak.pragyan.org/',
            position: 'left',
            label: 'Game',
          },
          {
            href: 'https://github.com/Delta/',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discord.com/',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/',
              },
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/delta_nitt/?hl=en',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/',
              },
              {
                label: 'Our Website',
                href: 'https://delta.nitt.edu/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Delta',
              },
            ],
          },
        ],
        copyright: `Made with &#10084; by <a href="https://delta.nitt.edu/" target="_blank">Delta Force</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
