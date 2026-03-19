import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Depending on your setup, you might also need this to ensure 
  // the development server opens on port 3000 like CRA did:
  base: '/resumesite',
  server: {
    port: 3000,
  },
});