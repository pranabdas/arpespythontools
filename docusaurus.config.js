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
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/nightOwl"),
      additionalLanguages: ["docker"],
    },
    hideableSidebar: true,
    // colorMode: {
    //   defaultMode: "dark",
    //   switchConfig: {
    //     // darkIcon: '☾',
    //     // lightIcon: "☀️"
    //   },
    //   respectPrefersColorScheme: true,
    // },
    navbar: {
      title: "ARPES Python Tools",
      hideOnScroll: true,
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
          items: [
            {
              label: "ARPES Python Tools",
              to: "docs/",
            },
            {
              label: "~ ~ ~  Other Docs  ~ ~ ~",
              to: "https://pranabdas.github.io/docs/",
              target: "_self",
            },
            {
              label: "Fortran Programming",
              to: "https://pranabdas.github.io/fortran/",
              target: "_self",
            },
            {
              label: "Linux Tutorial",
              to: "https://pranabdas.github.io/linux/",
              target: "_self",
            },
            {
              label: "Machine Learning Notes",
              to: "https://pranabdas.github.io/machine-learning/",
              target: "_self",
            },
            {
              label: "OpenMX tutorial",
              to: "https://pranabdas.github.io/openmx/",
              target: "_self",
            },
            {
              label: "Python Tutorial",
              to: "https://pranabdas.github.io/python-tutorial/",
              target: "_self",
            },
            {
              label: "Quantum Espresso Tutorial",
              to: "https://pranabdas.github.io/espresso/",
              target: "_self",
            },
            {
              label: "SUV Python Tools",
              to: "https://pranabdas.github.io/suvtools/",
              target: "_self",
            },
            {
              label: "Condensed Matter Notes",
              href: "https://pranabdas.github.io/docs/condmat-notes/",
            },
            {
              label: "FullProf Tutorial",
              href: "https://pranabdas.github.io/docs/fullprof/",
            },
            {
              label: "Javascript Tutorial",
              href: "https://pranabdas.github.io/docs/js-learning/",
            },
            {
              label: "SUV ARPES Manual",
              href: "https://pranabdas.github.io/docs/arpes-suv-man/",
            },
          ],
        },
        {
          to: "https://pranabdas.github.io",
          label: "About me",
          position: "left",
          target: "_self",
        },
        {
          href: "https://github.com/pranabdas/arpespythontools",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
          // target: "_self",
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
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.min.css",
      type: "text/css",
      integrity: "sha384-RZU/ijkSsFbcmivfdRBQDtwuwVqK7GMOw6IMvKyeWL2K5UAlyp6WonmB8m7Jd0Hn",
      crossorigin: "anonymous",
    },
  ],
};
