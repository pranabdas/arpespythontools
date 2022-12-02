/** @type {import('@docusaurus/types').DocusaurusConfig} */
const math = require("remark-math");
/** @type {import('@docusaurus/types').Config} */
async function config() {
  const katex = (await import("rehype-katex")).default;
  return {
    title: "ARPES Python Tools",
    tagline: "Import, analyze and visualize ARPES data",
    url: "https://pranabdas.github.io",
    baseUrl: "/arpespythontools/", // must have a trailing "/"
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "pranabdas", // Usually your GitHub org/user name.
    projectName: "arpespythontools", // Usually your repo name.
    titleDelimiter: "•",
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        metadata: [{name: 'theme-color', content: '#006bb3'}],
        prism: {
          theme: require("prism-react-renderer/themes/github"),
          darkTheme: require("prism-react-renderer/themes/nightOwl"),
          additionalLanguages: ["docker"],
        },
        docs: {
          sidebar: {
            hideable: true,
            autoCollapseCategories: true,
          }
        },
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
                  label: "C and C++ Programming",
                  to: "https://pranabdas.github.io/c-cpp/",
                  target: "_self",
                },
                {
                  label: "Condensed Matter Notes",
                  to: "https://pranabdas.github.io/condmat-notes/",
                  target: "_self",
                },
                {
                  label: "Fortran Programming",
                  to: "https://pranabdas.github.io/fortran/",
                  target: "_self",
                },
                {
                  label: "Javascript Tutorial",
                  to: "https://pranabdas.github.io/javascript/",
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
                  label: "Rust Programming",
                  to: "https://pranabdas.github.io/rust/",
                  target: "_self",
                },
                {
                  label: "SUV ARPES Manual",
                  to: "https://pranabdas.github.io/arpes-manual/",
                  target: "_self",
                },
                {
                  label: "SUV Python Tools",
                  to: "https://pranabdas.github.io/suvtools/",
                  target: "_self",
                },
              ],
            },
            {
              href: "https://github.com/pranabdas/arpespythontools",
              position: "right",
              className: "header-github-link",
              "aria-label": "GitHub repository",
              title: "Go to project repository in GitHub",
              target: "_self",
            },
            {
              to: "https://pranabdas.github.io",
              "aria-label": "About me",
              position: "right",
              target: "_self",
              className: "header-homepage-link",
              title: "Go to Pranab's Homepage",
            },
          ],
        },
        footer: {
          style: "dark",
          copyright: `Copyright © ${new Date().getFullYear()} Pranab Das. All rights
      reserved.`,
        },
      }),

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            editUrl:
              "https://github.com/pranabdas/arpespythontools/blob/main/",
            remarkPlugins: [math],
            rehypePlugins: [katex],
            breadcrumbs: true,
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themes: [
      [
        // https://github.com/easyops-cn/docusaurus-search-local
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          hashed: true,
          docsRouteBasePath: "/docs",
          indexBlog: false,
          indexPages:true,
          highlightSearchTermsOnTargetPage: true,
        },
      ],
    ],

    stylesheets: [
      {
        href: "https://pranabdas.github.io/drive/webfonts/katex/katex.min.css",
        type: "text/css",
      },
    ],
  };
}

module.exports = config;
