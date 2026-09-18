import { defineConfig, devices } from '@playwright/test';

const BRAVE_EXECUTABLE = process.env.BRAVE_PATH || 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  workers: 1,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'http://localhost:5173',
    launchOptions: {
      executablePath: BRAVE_EXECUTABLE,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    },
    trace: 'retain-on-failure',
  },
  webServer: {
    command: 'npm run dev',
    port: 5173,
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
  projects: [
    {
      name: 'brave-desktop',
      use: {
        viewport: { width: 1440, height: 900 },
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
