import { defineConfig } from 'vitest/config'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  // Vitest runs in Node by default, which is an issue for
  // functions like `render()` that expect to be ran in a browser,
  // where `document` is available. So, we change the environment:
  // https://vitest.dev/config/#environment
  test: {
      environment: 'jsdom'
  }
})
