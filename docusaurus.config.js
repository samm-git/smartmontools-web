// @ts-check
// https://docusaurus.io/docs/configuration

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'smartmontools',
  tagline: 'Control and monitor storage systems using S.M.A.R.T.',
  favicon: 'img/smart_logo.gif',

  url: 'https://samm-git.github.io',
  baseUrl: '/smartmontools-web/',

  organizationName: 'samm-git',
  projectName: 'smartmontools-web',
  trailingSlash: true,

  onBrokenLinks: 'warn',

  // Treat .md as CommonMark (not MDX) so the migrated raw HTML keeps working.
  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
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
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'smartmontools',
        logo: {
          alt: 'smartmontools',
          src: 'img/smart_logo.gif',
        },
        items: [
          { to: '/download', label: 'Download', position: 'left' },
          { to: '/tocdoc', label: 'Documentation', position: 'left' },
          { to: '/tocsupport', label: 'Device support', position: 'left' },
          { to: '/tocdeveloper', label: 'Development', position: 'left' },
          { to: '/news', label: 'News', position: 'left' },
          {
            href: 'https://github.com/smartmontools/smartmontools',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              { label: 'Download & install', to: '/download' },
              { label: 'Frequently asked questions', to: '/faq' },
              { label: 'Man pages', to: '/man/' },
            ],
          },
          {
            title: 'Device support',
            items: [
              { label: 'USB devices', to: '/supported-usb-devices' },
              { label: 'RAID controllers', to: '/supported-raid-controllers' },
              { label: 'NVMe', to: '/nvme-support' },
            ],
          },
          {
            title: 'Project',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/smartmontools/smartmontools',
              },
              {
                label: 'Report an issue',
                href: 'https://github.com/smartmontools/smartmontools/issues',
              },
              {
                label: 'Mailing lists',
                href: 'https://listi.jpberlin.de/mailman/listinfo/smartmontools-support',
              },
            ],
          },
        ],
        copyright: 'smartmontools is published under the GNU GPL.',
      },
      prism: {
        additionalLanguages: ['bash', 'diff', 'ini', 'c', 'cpp'],
      },
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
