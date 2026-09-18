// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const path = require('path');

const BRAVE_EXECUTABLE = process.env.BRAVE_PATH || 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe';

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: false,
  workers: 1,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    launchOptions: {
      executablePath: BRAVE_EXECUTABLE,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    },
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'brave-desktop',
      use: {
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'brave-mobile',
      use: {
        ...devices['Pixel 5'],
        launchOptions: {
          executablePath: BRAVE_EXECUTABLE,
          args: ['--no-sandbox', '--disable-setuid-sandbox']
        }
      },
    },
  ],
});
