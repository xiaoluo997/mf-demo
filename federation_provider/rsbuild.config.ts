import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3000,
  },
  dev: {
    // 必须要配置 assetPrefix，在生产环境需要配置 output.assetPrefix
    assetPrefix: true,
  },
  tools: {
    rspack: {
      output: {
        // 需要设置一个唯一值，不能和其他应用相等
        uniqueName: 'federation_provider',
      },
      plugins: [
        new ModuleFederationPlugin({
          name: 'federation_provider',
          exposes: {
            './button': './src/Button.tsx',
            './fib': './src/utils/fib.ts',
            './proField': './src/components/ProField.tsx',
            './table': './src/components/Table.tsx',
            './proTable': './src/components/ProTable.tsx',
            './form': './src/components/Form.tsx',
          },
          shared: ['react', 'react-dom'],
        }),
      ],
    },
  },
});
