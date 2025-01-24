import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
    projectRoot: './src',
    projectName: 'naatukodiblog',
    distFolder: './dist/naatukodiblog', // output directory of your Angular build artifacts
    outDir: './dist/static', // directory for scully build artifacts
    defaultPostRenderers: [],
    routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },},
  puppeteerLaunchOptions: {
    executablePath: "/usr/bin/chromium-browser" // Ensure Puppeteer uses installed Chromium
  }
};
