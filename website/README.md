# XR1 官网（单页）

B 端团餐后厨机器人 XR1 的单页官网。**版式对标 [1X](https://www.1x.tech)**（见项目 `ui/` 截图）；当前阶段以**文字 + 灰色占位块**搭框架，图片后续填入 `public/images/` 或替换 `.media-placeholder`。

## 本地开发

必须在 **`website/`** 目录（或 XR1 项目根目录）执行，不要在 `~` 家目录运行。

```bash
cd /path/to/XR1/website
npm install
npm run dev
```

或在 XR1 根目录：`npm install --prefix website && npm run dev`

浏览器打开终端提示的地址（默认 `http://localhost:5173`）。

## 构建与部署

```bash
npm run build
```

### Netlify（推荐）

仓库根目录已包含 [`netlify.toml`](../netlify.toml)：

| 项 | 值 |
|----|-----|
| Base directory | `website` |
| Build command | `npm ci && npm run build` |
| Publish directory | `dist` |

1. [Netlify](https://app.netlify.com/) → **Add new site** → **Import from Git** → 选择 GitHub 仓库 `xr1-website`
2. 确认上述构建设置（一般由 `netlify.toml` 自动填入）
3. Deploy

GitHub 仓库：`https://github.com/yerxiiiii/xr1-website`

将 `dist/` 目录上传至 Vercel、Cloudflare Pages 或任意静态托管。`vite.config.js` 中 `base: './'` 支持相对路径部署。

## 替换图片（底图 / 配图）

**完整对照表、推荐软件、文件名与代码行号：**

👉 **[docs/图片替换指南.md](docs/图片替换指南.md)**（建议打印或收藏）

| 你要做的事 | 去哪里 |
|------------|--------|
| 用 PS / Figma 导出 JPG、PNG | 导出后放进 `public/images/` |
| 指定网页用哪张图 | 改 **`index.html`**，搜索 `[图-` 看每处备注 |
| 改整页灰白底色 | 改 **`src/styles/tokens.css`** 里 `--color-bg` |
| 文案、电话、邮箱 | 改 **`index.html`** 对应段落 |

设计规范见 [docs/design-notes.md](docs/design-notes.md)，品牌占位见 [docs/brand-decisions.md](docs/brand-decisions.md)。

## 上线前检查

- [ ] 替换 `business@xr1.robot` 与 `400-000-0000`
- [ ] 上传微信二维码图
- [ ] 确认机身主色素材（当前为 brochure 蓝灰渲染）
- [x] 图片已用 `sips -Z 1400` 压缩至约 3MB 总量（可进一步转 WebP）
