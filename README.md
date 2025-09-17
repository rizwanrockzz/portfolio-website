# Rizwan's Portfolio Website

Created with the help of [VITE](https://vite.dev/guide/) : ReactJS + SWC

## Site Depoly Process To Github Pages

- Install the github pages package
```shell
    npm install gh-pages --save-dev
```

- Add homepage in package.json as this is deployed with custom domain directly adding domain.

```diff
{
   "name": "latest-portfolio-website",
   "version": "1.0.0",
+  "homepage": "https://rizwanrockzz.tech/",
  ....
}
```

- Added base in vite.config.js but can be left blank as it defaults to '/'

```diff
export default defineConfig({
   plugins: [react()],
+  base: '/',
})
```

- Added two new commands in scripts section of package.json
    - Copying CNAME file with every deploy as the dist folder will be updated in gh-pages branch

```diff
 "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
+   "predeploy": "npm run build && cp CNAME dist/",
+   "deploy": "gh-pages -d dist"
  },
```

- Run the final command for deployment

```shell
    npm run deploy -- -m "custom message"
```

- In the pages section select option deploy from branch and select gh-pages branch and click save in the bottom add custom domain and check the enforce https check box for SSL

- In a few minutes site will be live on our custom domain