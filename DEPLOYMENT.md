# Deployment Guide

This guide will help you deploy your Godbreakers Wiki to GitHub Pages.

## Method 1: Automatic Deployment with GitHub Actions (Recommended)

This is the easiest method. Every time you push to the `main` branch, your site will automatically rebuild and deploy.

### Setup Steps:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial wiki setup"
   git push origin main
   ```

2. **Configure GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages** (in the left sidebar)
   - Under "Build and deployment":
     - **Source**: Select "GitHub Actions"
   - That's it! The workflow in `.github/workflows/deploy.yml` will handle everything

3. **Wait for deployment:**
   - Go to the **Actions** tab in your repository
   - You'll see the "Deploy to GitHub Pages" workflow running
   - Once it completes (usually 1-2 minutes), your site will be live!

4. **Access your site:**
   - Your wiki will be available at: `https://[your-username].github.io/godbreakers-wiki/`
   - For example: `https://NoctisNex.github.io/godbreakers-wiki/`

### Future Updates:

Simply push to main and it will automatically redeploy:
```bash
git add .
git commit -m "Updated fragment descriptions"
git push origin main
```

## Method 2: Manual Deployment

If you prefer to deploy manually:

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **The `dist` folder contains your built site**

3. **Deploy using GitHub Pages:**
   ```bash
   # Install gh-pages package
   npm install -D gh-pages

   # Add deploy script to package.json:
   # "deploy": "npm run build && gh-pages -d dist"

   # Deploy
   npm run deploy
   ```

## Updating the Base URL

If your repository name is different from "godbreakers-wiki", update the `base` option in `vite.config.js`:

```js
export default defineConfig({
  base: '/your-repo-name/',  // Change this
  // ...
});
```

## Testing Before Deployment

Always test your build locally before deploying:

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

This will start a local server showing exactly how your site will look when deployed.

## Troubleshooting

### Images not loading

Make sure all image paths in your JSON files start with `/public/`:
```json
"image": "/public/Media/Fragments/Arms/Example.png"
```

### 404 on navigation

If you get 404 errors when navigating, make sure:
1. The `base` in `vite.config.js` matches your repository name
2. You're using hash-based routing (URLs like `#fragments`)

### Build fails on GitHub Actions

Check the Actions tab for error messages. Common issues:
- Node version mismatch (workflow uses Node 20)
- Missing dependencies
- JSON syntax errors in data files

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain:
   ```
   wiki.yourdomain.com
   ```

2. Configure DNS with your domain provider:
   - Add a CNAME record pointing to `[your-username].github.io`

3. In GitHub Settings → Pages, enter your custom domain

## Performance Tips

- Keep images optimized (PNGs should be compressed)
- The wiki uses lazy loading and caching for optimal performance
- Initial load includes Pico CSS from CDN for faster caching

## Need Help?

- Check the [GitHub Pages documentation](https://docs.github.com/pages)
- Review the [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html)
- Open an issue in the repository

