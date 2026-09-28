import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "e2e",
  timeout: 60_000,
  expect: { timeout: 8_000 },
  fullyParallel: false,
  retries: 0,
  use: {
    baseURL: "http://localhost:3456",
    ...devices["iPhone 14"],
  },
  projects: [
    {
      name: "iphone-14-webkit",
      use: { ...devices["iPhone 14"] },
    },
  ],
  webServer: {
    command: "npm run dev -- --port 3456",
    url: "http://localhost:3456",
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
