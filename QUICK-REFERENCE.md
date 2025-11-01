# Quick Reference Card

## 🚀 Essential Commands

```bash
npm run dev              # Start development (http://localhost:5173)
npm run build            # Build for production
npm run preview          # Preview production build
npm run generate-data    # Regenerate JSON from images
```

## 📁 Where to Edit

| What | Where |
|------|-------|
| Item data | `src/data/*.json` |
| Colors/styling | `src/styles/main.css` |
| Page content | `src/pages/*.js` |
| Site structure | `index.html` |

## 📝 Data Entry Workflow

1. **Start dev server**: `npm run dev`
2. **Open helper**: http://localhost:5173/data-entry-helper.html
3. **Paste screenshot** (Ctrl+V)
4. **Select item** from dropdown
5. **Fill descriptions**
6. **Save to file**
7. **Replace** file in `src/data/`

## 🎨 Color Customization

Edit `src/styles/main.css`:
```css
--godbreaker-primary: #e63946;    /* Main color */
--godbreaker-secondary: #457b9d;  /* Secondary */
--godbreaker-dark: #1d3557;       /* Dark theme */
```

## 🚢 Deploy to GitHub Pages

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Update wiki"
   git push origin main
   ```

2. **Enable Pages**:
   - Settings → Pages → Source: "GitHub Actions"

3. **Live at**: https://NoctisNex.github.io/godbreakers-wiki/

## 📊 Current Stats

- ✅ 106 Fragments
- ✅ 19 Equipment  
- ✅ 30 Conditions
- ✅ 16 Abilities
- ✅ **171 Total Items**

## 🔗 URLs

| What | URL |
|------|-----|
| Local dev | http://localhost:5173 |
| Data helper | http://localhost:5173/data-entry-helper.html |
| Live site | https://NoctisNex.github.io/godbreakers-wiki/ |

## 📁 JSON Structure

```json
{
  "id": "item-id",
  "name": "Display Name",
  "category": "category",
  "image": "/public/Media/Path/Image.png",
  "description": "Main description",
  "baseDescription": "Base effect",
  "upgradedDescription": "Upgraded"
}
```

## 🐛 Common Issues

**Images not loading?**
- Check path: `/public/Media/...`

**Build fails?**
- Check JSON syntax
- Run: `npm run build`

**Server won't start?**
- Delete `node_modules`
- Run: `npm install`

---

**Need more details?** See README.md, DEPLOYMENT.md, or SETUP-COMPLETE.md

