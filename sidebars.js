// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'download',
    {
      type: 'category',
      label: 'Documentation',
      collapsed: false,
      items: [
        'tocdoc',
        'faq',
        'help',
        'badblockhowto',
        'howto-readsmartctlreports-ata',
        'howto-readsmartctlreports-ata-new',
        'howto-readsmartctlreports-ata-542-1',
        'sat-with-uas-linux',
        'links',
        'man/index',
      ],
    },
    {
      type: 'category',
      label: 'Device support',
      collapsed: false,
      items: [
        'tocsupport',
        'usb',
        'nvme-support',
        'supported-raid-controllers',
        'supported-usb-devices',
        'supported-usb-devices-idvendor-0x1000',
        'unsupported-usb-devices',
      ],
    },
    {
      type: 'category',
      label: 'Development',
      collapsed: true,
      items: [
        'tocdeveloper',
        'developerguide',
        'codingstyle',
        'releasepolicy',
        'history',
        'team',
        'contributedutilities',
      ],
    },
    'news',
  ],
};

module.exports = sidebars;
