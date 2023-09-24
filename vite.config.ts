import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import KumaUI from "@kuma-ui/vite";

// https://vitejs.dev/config/
export default ({ mode }) => {
  // https://qiita.com/r-katayama01/items/28ae477774e44aae9432
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  console.log(process.env.VITE_APP_PATH);
  return defineConfig({
    plugins: [
      react(),
      KumaUI(),
    ],
    base: process.env.VITE_APP_PATH,
  });
};
