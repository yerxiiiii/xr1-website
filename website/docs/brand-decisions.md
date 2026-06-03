# 品牌与 CTA 确认记录

**状态**：MVP 已采用下列默认值，上线前请市场/品牌确认。

- **视觉**：官网与 `brochure/` 渲染一致（蓝灰机身 + 深色面罩）。米黄配色定义见根目录产品手册 MD；真机实拍素材到位后切换（`实拍/` 目录）。
- **Logo**：暂用「XR1」字标；正式 Logo 放入 `public/logo.svg` 后改 Nav。
- **CTA**：
  - 邮箱：`business@xr1.robot`（占位）
  - 电话：`400-000-0000`（占位）
  - 微信：Footer 二维码占位，替换为 `public/wechat-qr.png`
- **部署**：`npm run build` → 上传 `dist/` 至静态托管。
