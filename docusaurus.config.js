/** @type {import('@docusaurus/types').DocusaurusConfig} */
import { themes } from "prism-react-renderer";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
const site_url = "https://pranabdas.github.io";
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ARPES Python Tools",
  tagline: "Import, analyze and visualize ARPES data",
  url: site_url,
  baseUrl: "/arpespythontools/", // must have a trailing "/"
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "pranabdas", // Usually your GitHub org/user name.
  projectName: "arpespythontools", // Usually your repo name.
  titleDelimiter: "•",
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{ name: "theme-color", content: "#06445c" }],
      prism: {
        theme: themes.github,
        darkTheme: themes.nightOwl,
        additionalLanguages: ["bash", "docker"],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        // defaultMode: "dark",
        // switchConfig: {
        //   darkIcon: "☾",
        //   lightIcon: "☀️",
        // },
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "ARPES Python Tools",
        hideOnScroll: true,
        logo: {
          alt: "Logo",
          src: "img/favicon.png",
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
                to: site_url + "/docs/",
                target: "_self",
              },
              {
                label: "C and C++ Programming",
                to: site_url + "/c-cpp/",
                target: "_self",
              },
              {
                label: "Condensed Matter Notes",
                to: site_url + "/condmat-notes/",
                target: "_self",
              },
              {
                label: "Fortran Programming",
                to: site_url + "/fortran/",
                target: "_self",
              },
              {
                label: "Javascript Tutorial",
                to: site_url + "/javascript/",
                target: "_self",
              },
              {
                label: "Linux Tutorial",
                to: site_url + "/linux/",
                target: "_self",
              },
              {
                label: "Machine Learning Notes",
                to: site_url + "/machine-learning/",
                target: "_self",
              },
              {
                label: "OpenMX tutorial",
                to: site_url + "/openmx/",
                target: "_self",
              },
              {
                label: "Python Tutorial",
                to: site_url + "/python-tutorial/",
                target: "_self",
              },
              {
                label: "Quantum Espresso Tutorial",
                to: site_url + "/espresso/",
                target: "_self",
              },
              {
                label: "Rust Programming",
                to: site_url + "/rust/",
                target: "_self",
              },
              {
                label: "SUV ARPES Manual",
                to: site_url + "/arpes-manual/",
                target: "_self",
              },
              {
                label: "SUV Python Tools",
                to: site_url + "/suvtools/",
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
            to: site_url,
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
          editUrl: "https://github.com/pranabdas/arpespythontools/blob/main/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
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
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  stylesheets: [
    {
      href: "https://pranab.pages.dev/assets/fonts/katex/0.16.18/katex.min.css",
      type: "text/css",
    },
  ],

  future: {
    experimental_faster: true,
  },
};

export default config;
