# Eurotrip

一个轻量、响应式的欧洲旅行主题静态网站，可直接通过 GitHub 集成部署到 Cloudflare Workers。

## 本地预览

```bash
npx wrangler dev
```

然后访问 `http://localhost:8787`。

## 部署

在 Cloudflare Workers 中连接此 GitHub 仓库：

- 构建命令：留空（纯静态站点无需构建）
- 部署命令：`npx wrangler deploy`
- 静态资源目录：`./public`（已在 `wrangler.jsonc` 中配置）

## 技术栈

- HTML5
- CSS3
- Vanilla JavaScript
- Cloudflare Workers Static Assets
