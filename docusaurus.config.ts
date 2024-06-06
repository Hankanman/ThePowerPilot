import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import sidebars from './sidebars';

const config: Config = {
  title: 'The Power Pilot',
  tagline: 'Blog, AI, Automation & Code',
  favicon: 'img/logo/favicon.svg',

  // Set the production url of your site here
  url: 'https://thepowerpilot.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Hankanman', // Usually your GitHub org/user name.
  projectName: 'ThePowerPilot', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'projects',
        path: './projects',
        routeBasePath: 'projects',
        blogTitle: 'Projects',
        blogDescription: 'My Projects',
        showReadingTime: true,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social/social_card.png',
    navbar: {
      title: 'The Power Pilot',
      logo: {
        alt: 'Power Pilot Logo',
        src: 'img/logo/ThePowerPilot_Logo.svg',
      },
      items: [
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/projects', label: 'Projects', position: 'left' },
        {
          href: 'https://github.com/Hankanman',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://linkedin.com/in/sebburrell/',
          label: 'LinkedIn',
          position: 'right',
        },
        {
          label: 'About Me',
          items: [
            {
              to: '/speaking-engagements',
              label: 'Speaking',
            },
            {
              to: '/resume',
              label: 'Resume',
            },
          ],
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
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/HYRBxdbKhy',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/hankanman',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Hankanman',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Power Pilot.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
