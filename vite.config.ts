import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default ({ mode }) => {
  // https://qiita.com/r-katayama01/items/28ae477774e44aae9432
  process.env = {...process.env, ...loadEnv(mode, process.cwd())}
  return defineConfig({
    plugins: [react()],
    base: process.env.VITE_APP_PATH,
  });
}
