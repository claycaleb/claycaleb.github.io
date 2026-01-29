import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Caleb Clay",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: 'goatcounter',
      websiteId: 'calebclay'
    },
    locale: "en-US",
    baseUrl: "www.calebclay.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "published",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Instrument Serif",
        body: "DM Sans",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fcfcfa",        // pale, almost white background
          lightgray: "#e8e8e6",    // subtle borders / panels
          gray: "#b0b0ad",         // muted text / secondary elements
          darkgray: "#4a4a47",     // main body text
          dark: "#1f1f1c",         // headers / icons
        
          secondary: "#7ca392",    // soft, gentle greenish-blue accent for links / current node
          tertiary: "#a3c2b6",     // lighter accent for hover / visited node
        
          highlight: "#f0f7f4",    // pale background highlight
          textHighlight: "#e6f2ef" // subtle markdown highlight
        },
        darkMode: {
          light: "#121210",        // deep charcoal background
          lightgray: "#2c2c28",    // borders / panels
          gray: "#6d6d68",         // muted text / secondary elements
          darkgray: "#c0c0b8",     // main body text
          dark: "#f5f5f0",         // headers / icons
        
          secondary: "#7ca392",    // same gentle greenish-blue accent
          tertiary: "#a3c2b6",     // lighter accent for hover / visited node
        
          highlight: "#2a332f",    // subtle highlight overlay for dark bg
          textHighlight: "#3b4540" // markdown highlight background
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
