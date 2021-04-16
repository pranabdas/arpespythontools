/** @type {import('@docusaurus/types').DocusaurusConfig} */
const math = require("remark-math");
const katex = require("rehype-katex");
module.exports = {
  title: "ARPES Python Tools",
  tagline: "Import, analyze and visualize ARPES data",
  url: "https://pranabdas.github.io",
  baseUrl: "/arpespythontools/", // must have a trailing "/"
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "pranabdas", // Usually your GitHub org/user name.
  projectName: "arpespythontools", // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require("prism-react-renderer/themes/dracula"),
    },
    navbar: {
      title: "ARPES Python Tools",
      logo: {
        alt: "Logo",
        src: "img/favicon.ico",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://pranabdas.github.io",
          label: "About me",
          position: "left",
        },
        {
          href: "https://github.com/pranabdas/arpespythontools",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Pranab Das. All rights
      reserved.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/pranabdas/arpespythontools/blob/master/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
  ],
};
